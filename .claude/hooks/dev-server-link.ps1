# SessionStart hook: make sure the showcase dev server runs, then hand the session its localhost link.
#
# Ports 5173-5180 are checked in order by who LISTENS on them, not by what they serve: a port is ours when
# the listening process's command line runs Vite out of THIS checkout's node_modules. So a second clone or
# worktree's showcase is never mistaken for this one, and no HTTP probe can stall on a hung port. Ours is
# reused, so a /clear or a second session never starts a second server. The first free port gets a new
# `npm run dev` in a hidden window, logging to %TEMP%\dkj-brandbook-dev.log; it outlives the session and is
# stopped like any process (its command line names this checkout). A port held by anything else is skipped.
# The link goes to the user (systemMessage) and to the session (additionalContext), so it can be ctrl+clicked
# in the VS Code terminal or opened in VS Code's Simple Browser.
#
# A SessionStart hook must never break the session, so every failure ends in a message, never a throw.

$ErrorActionPreference = 'Stop'
$ports = 5173..5180

function Write-Result([string]$message) {
  $out = @{
    systemMessage      = $message
    hookSpecificOutput = @{ hookEventName = 'SessionStart'; additionalContext = $message }
  }
  [Console]::Out.Write(($out | ConvertTo-Json -Compress))
  exit 0
}

# 'ours', 'free' or 'other', read from one snapshot of the listening sockets.
function Get-PortState([int]$port, $listeners, [string]$viteDir) {
  $owner = $listeners | Where-Object LocalPort -eq $port | Select-Object -First 1 -ExpandProperty OwningProcess
  if (-not $owner) { return 'free' }
  $cmd = (Get-CimInstance Win32_Process -Filter "ProcessId=$owner").CommandLine
  if ($cmd -and $cmd.IndexOf($viteDir, [StringComparison]::OrdinalIgnoreCase) -ge 0) { return 'ours' }
  return 'other'
}

function Get-Listeners { @(Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue) }

try {
  $root = if ($env:CLAUDE_PROJECT_DIR) { $env:CLAUDE_PROJECT_DIR } else { (Resolve-Path "$PSScriptRoot\..\..").Path }
  $root = [IO.Path]::GetFullPath($root).TrimEnd('\', '/')
  $viteDir = "$root\node_modules\"

  $listeners = Get-Listeners
  $free = $null
  foreach ($port in $ports) {
    $state = Get-PortState $port $listeners $viteDir
    if ($state -eq 'ours') { Write-Result "Showcase already running: http://localhost:$port/" }
    if ($state -eq 'free' -and -not $free) { $free = $port }
  }

  if (-not $free) { Write-Result "Showcase not started: ports $($ports[0])-$($ports[-1]) are all taken by other apps." }
  if (-not (Test-Path (Join-Path $root 'node_modules'))) { Write-Result "Showcase not started: run 'npm install' first, then start a new session (or 'npm run dev')." }

  $log = Join-Path $env:TEMP 'dkj-brandbook-dev.log'
  Start-Process -FilePath 'cmd.exe' -WorkingDirectory $root -WindowStyle Hidden `
    -ArgumentList '/c', "npm run dev -- --port $free --strictPort > `"$log`" 2>&1"

  # Wait until our server listens, so the link is never handed out dead.
  $deadline = (Get-Date).AddSeconds(20)
  while ((Get-Date) -lt $deadline) {
    Start-Sleep -Milliseconds 500
    if ((Get-PortState $free (Get-Listeners) $viteDir) -eq 'ours') { Write-Result "Showcase started: http://localhost:$free/" }
  }
  Write-Result "Showcase is starting on http://localhost:$free/ but did not listen within 20 seconds -- see the log in %TEMP%."
} catch {
  $reason = ($_.Exception.Message -replace '[\p{C}]', ' ')
  Write-Result "Showcase link hook failed: $reason"
}
