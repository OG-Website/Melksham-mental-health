@echo off
echo ================================================
echo Building Melksham Mental Health for Windows
echo ================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    pause
    exit /b 1
)

REM Install required packages
echo Installing required packages...
pip install pyinstaller PyQt6 requests --quiet

REM Clean previous builds
echo Cleaning previous builds...
if exist "dist" rmdir /s /q dist
if exist "build\Melksham_Mental_Health" rmdir /s /q "build\Melksham_Mental_Health"

REM Build the Windows executable with icon
echo Building Windows executable with logo.ico...
pyinstaller --onefile --windowed --icon=assets/logo.ico --name="Melksham_Mental_Health" --add-data="assets;assets" --add-data="data;data" run_desktop_app.py

echo.
if exist "dist\Melksham_Mental_Health.exe" (
    echo ================================================
    echo BUILD SUCCESSFUL!
    echo ================================================
    echo Your Windows installer is at: dist\Melksham_Mental_Health.exe
    echo It includes your logo.ico as the application icon.
) else (
    echo BUILD FAILED - Check errors above
)

echo.
pause
