$dirs = @('images', 'articles', 'documents')
$root = 'c:/Users/SURFACE/Desktop/antigravity_fold/portfolio/portfolio2'
$public = "$root/public"

if (!(Test-Path $public)) {
    New-Item -ItemType Directory -Path $public -Force
}

foreach ($dir in $dirs) {
    $src = "$root/$dir"
    $dest = "$public/$dir"
    if (!(Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest -Force
    }
    if (Test-Path $src) {
        Get-ChildItem -Path $src -File | ForEach-Object {
            [System.IO.File]::Copy($_.FullName, "$dest/$($_.Name)", $true)
            Write-Host "Copied $($_.Name) to $dest"
        }
    }
}

# Copy specific files
@('favicon.ico', 'cv-azzedine-lakhdar.pdf') | ForEach-Object {
    $src = "$root/$_"
    if (Test-Path $src) {
        [System.IO.File]::Copy($src, "$public/$_", $true)
        Write-Host "Copied $_ to $public"
    }
}

# Copy generated images
$brainDir = 'C:/Users/SURFACE/.gemini/antigravity/brain/d7f66661-e4cc-4fe5-b54e-91e2b34bffa3'
$mappings = @{
    'automotive_diag_view_1772378057051.png' = 'automotive.jpg';
    'software_arch_view_1772378071229.png' = 'software.jpg';
    'mcu_board_view_1772378197051.png' = 'stm32.jpg';
    'fpga_logic_view_1772378261398.png' = 'fpga.jpg'
}

foreach ($item in $mappings.GetEnumerator()) {
    $src = "$brainDir/$($item.Key)"
    $dest = "$public/images/$($item.Value)"
    if (Test-Path $src) {
        [System.IO.File]::Copy($src, $dest, $true)
        Write-Host "Copied generated $($item.Key) to $dest"
    }
}
