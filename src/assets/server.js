import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT || 3000);

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
    auth: {
      user,
      pass,
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function registerContactRoute(app) {
  app.post('/api/contact', async (req, res) => {
    const { nombre, email, telefono, mensaje } = req.body ?? {};

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({
        message: 'Nombre, email y mensaje son obligatorios.',
      });
    }

    const transporter = createTransporter();

    if (!transporter) {
      return res.status(500).json({
        message: 'El servidor no tiene configurado el envio SMTP.',
      });
    }

    const to = process.env.CONTACT_TO || 'comercial@rmfmotors.com';
    const from = process.env.CONTACT_FROM || process.env.SMTP_USER;

    try {
      await transporter.sendMail({
        from,
        to,
        replyTo: email,
        subject: `Nuevo mensaje de contacto - ${nombre}`,
        text: [
          `Nombre: ${nombre}`,
          `Email: ${email}`,
          `Telefono: ${telefono || 'No indicado'}`,
          '',
          'Mensaje:',
          mensaje,
        ].join('\n'),
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefono:</strong> ${escapeHtml(telefono || 'No indicado')}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${escapeHtml(mensaje).replaceAll('\n', '<br />')}</p>
        `,
      });

      return res.json({
        message: 'Tu mensaje fue enviado correctamente.',
      });
    } catch (error) {
      console.error('Error sending contact email:', error);
      return res.status(500).json({
        message: 'No se pudo enviar el correo. Revisa la configuracion SMTP.',
      });
    }
  });
}

export async function createApp() {
  const app = express();
  app.use(express.json());

  registerContactRoute(app);

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('/{*path}', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    return app;
  }

  const vite = await createViteServer({
    configLoader: 'runner',
    server: {
      middlewareMode: true,
    },
    appType: 'spa',
  });

  app.use(vite.middlewares);
  app.use(async (req, res, next) => {
    // Skip SPA fallback for API routes
    if (req.url.startsWith('/api/')) {
      return next();
    }
    try {
      const url = req.originalUrl;
      const template = await vite.transformIndexHtml(
        url,
        `<!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>RMF Motors</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>`
      );
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (error) {
      next(error);
    }
  });

  return app;
}

export async function startServer() {
  const app = await createApp();
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startServer();
}
