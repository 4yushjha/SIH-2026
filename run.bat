@echo off
title Sanskriti Darshan - SIH 2026 Launcher
echo ====================================================================
echo   Sanskriti Darshan (संस्कृति दर्शन) - India's Culture & Heritage
echo   Smart India Hackathon (SIH 2026) Platform
echo ====================================================================
echo.

cd /d "%~dp0backend"

echo [1/3] Building backend with Apache Maven...
call "apache-maven-3.9.6\bin\mvn.cmd" compile -DskipTests

if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Maven compilation failed.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/3] Starting Spring Boot REST Backend on port 8080...
echo [INFO] Defaulting to dev profile (H2 in PostgreSQL mode).
echo [INFO] To run with local PostgreSQL, run: mvn spring-boot:run -Dspring-boot.run.profiles=postgres
echo.

start "Sanskriti Backend Service" cmd /k "apache-maven-3.9.6\bin\mvn.cmd spring-boot:run"

echo.
echo [3/3] Opening Sanskriti Darshan in your web browser...
timeout /t 6 /nobreak >nul
start http://localhost:8080/index.html

echo.
echo ====================================================================
echo   Sanskriti Darshan is now running!
echo   - Web Application: http://localhost:8080/index.html
echo   - REST API States: http://localhost:8080/api/states
echo   - REST API Stories: http://localhost:8080/api/stories
echo   - Dev Database Console: http://localhost:8080/h2-console
echo ====================================================================
pause
