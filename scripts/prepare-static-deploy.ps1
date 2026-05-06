$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $projectRoot 'dist'

if (-not (Test-Path $distPath)) {
  throw "No se encontro la carpeta dist. Ejecuta el build antes de preparar el paquete estatico."
}

$htaccessSource = Join-Path $projectRoot '.htaccess'
$htaccessTarget = Join-Path $distPath '.htaccess'

if (Test-Path $htaccessSource) {
  Copy-Item -LiteralPath $htaccessSource -Destination $htaccessTarget -Force
}

$filesToRemove = @(
  (Join-Path $distPath '.env.example'),
  (Join-Path $distPath 'server.js'),
  (Join-Path $distPath 'assets.zip')
)

foreach ($file in $filesToRemove) {
  if (Test-Path $file) {
    Remove-Item -LiteralPath $file -Force
  }
}

Write-Host "Paquete estatico listo en: $distPath"
