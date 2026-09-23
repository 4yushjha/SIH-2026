#!/usr/bin/env bash
echo "===================================================================="
echo "  Sanskriti Darshan (संस्कृति दर्शन) - India's Culture & Heritage"
echo "  Smart India Hackathon (SIH 2026) Platform"
echo "===================================================================="

cd "$(dirname "$0")/backend" || exit 1

echo "[1/2] Compiling and starting Spring Boot backend..."
./apache-maven-3.9.6/bin/mvn spring-boot:run &

echo "[2/2] Opening application in browser..."
sleep 6
if which xdg-open > /dev/null; then
    xdg-open http://localhost:8080/index.html
elif which open > /dev/null; then
    open http://localhost:8080/index.html
fi
