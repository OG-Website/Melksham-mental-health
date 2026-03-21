$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $projectRoot

& 'C:\Program Files\nodejs\node.exe' 'node_modules\next\dist\bin\next' start -p 3000
