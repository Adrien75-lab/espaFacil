$ErrorActionPreference = 'Stop'

$defaultRoot = 'C:\Users\adric\Claude\Projects\Website-Project'
$root = if ($args.Count -gt 0) { $args[0] } else { $defaultRoot }

if (-not (Test-Path -LiteralPath (Join-Path $root '.git'))) {
    throw "Dépôt LinguaFacil introuvable : $root"
}

Push-Location $root
try {
    Write-Output '=== LINGUAFACIL SNAPSHOT ==='
    Write-Output "Date: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss K')"
    Write-Output "Root: $root"
    Write-Output ''
    Write-Output '--- Worktree ---'
    git status --short --branch
    Write-Output ''
    Write-Output '--- Branches ---'
    git branch --all --sort=-committerdate
    Write-Output ''
    Write-Output '--- Recent commits ---'
    git log --oneline --decorate --graph --all -15
    Write-Output ''
    Write-Output '--- Data catalogs ---'
    Get-ChildItem backend\database\data | Select-Object Name, Length, LastWriteTime
    Write-Output ''
    Write-Output '--- Pending migrations ---'
    Push-Location backend
    try {
        php artisan migrate:status --pending
    }
    finally {
        Pop-Location
    }
}
finally {
    Pop-Location
}
