$ErrorActionPreference = 'Stop'
$mavenUrl = 'https://archive.apache.org/dist/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip'
$outputZip = Join-Path $PSScriptRoot 'apache-maven-bin.zip'
$targetDir = $PSScriptRoot

Write-Host "Downloading Maven from $mavenUrl..."
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
Invoke-WebRequest -Uri $mavenUrl -OutFile $outputZip -UseBasicParsing

Write-Host "Extracting to $targetDir..."
Expand-Archive -Path $outputZip -DestinationPath $targetDir -Force
Remove-Item $outputZip -Force

$mvnCmd = Join-Path $targetDir 'apache-maven-3.9.6\bin\mvn.cmd'
Write-Host "Maven successfully downloaded:"
& $mvnCmd -version
