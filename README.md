<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/388a3252-5e1c-4aae-97d9-979837ec9224

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contact form

The contact form sends a `POST` request to `/api/contact`, which is served by `server.js`.

If you deploy only the static `dist/` files, the form will fail with `404`.

Use one of these options:

1. Deploy the app together with the Node server.
2. Point `VITE_CONTACT_API_URL` to an external backend endpoint that handles `/api/contact`.

## Static hosting

If you are deploying to shared hosting or any static-only environment, use:

`npm run build:static`

This will:

1. Rebuild `dist/`
2. Copy `.htaccess` into `dist/`
3. Remove files that should not be uploaded for static hosting, such as `server.js`, `.env.example`, and old archive artifacts

Upload only the contents of `dist/` to your server.
