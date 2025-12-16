@echo off
REM Melksham Mental Health - Desktop Application Launcher (Windows)
REM This batch file launches the desktop GUI application on Windows

setlocal enabledelayedexpansion

echo.
echo ========================================
echo Melksham Mental Health - Desktop App
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if !errorlevel! neq 0 (
    echo ERROR: Python 3 is not installed or not in PATH
    echo.
    echo Please install Python 3 from: https://www.python.org/
    echo Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

REM Get the script directory
set "SCRIPT_DIR=%~dp0"

REM Check if requirements are installed
echo Checking dependencies...
pip show PyQt6 >nul 2>&1
if !errorlevel! neq 0 (
    echo.
    echo Installing required packages...
    echo This may take a minute...
    echo.
    pip install -r "%SCRIPT_DIR%requirements.txt"
    if !errorlevel! neq 0 (
        echo.
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Launch the application
echo.
echo Launching Melksham Mental Health Desktop App...
echo.

cd /d "%SCRIPT_DIR%src"
python desktop_app.py

if !errorlevel! neq 0 (
    echo.
    echo ERROR: Application failed to start
    echo.
    pause
)

endlocal
