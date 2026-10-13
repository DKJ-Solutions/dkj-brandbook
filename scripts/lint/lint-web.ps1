<#
.SYNOPSIS
    This repo's pull-request gate: ESLint plus the production build (which type-checks first).

.DESCRIPTION
    Named by Get-LintScript in scripts\repo-config.ps1; the shared open-pr skill runs it before a PR
    and blocks on a non-zero exit code. CI runs the same script, so there is one definition of the gate.

      1. `npx eslint .`  -- errors block; warnings are reported.
      2. `npm run build` -- `tsc -b && vite build`, so a type error and a broken bundle both block.

    Pure ASCII (repo convention for .ps1).
#>
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Push-Location $root
try {
    if (-not (Test-Path -LiteralPath (Join-Path $root 'node_modules'))) {
        Write-Host '[ERROR] node_modules is missing -- run `npm ci` first.'
        exit 1
    }

    Write-Host '== 1/2 eslint =='
    & npx eslint .
    if ($LASTEXITCODE -ne 0) { Write-Host '[ERROR] eslint failed.'; exit 1 }

    Write-Host '== 2/2 build (tsc -b && vite build) =='
    & npm run build
    if ($LASTEXITCODE -ne 0) { Write-Host '[ERROR] build failed.'; exit 1 }

    Write-Host '[OK] gate green.'
    exit 0
}
finally {
    Pop-Location
}
