@echo off
REM Build standalone desktop application with PyInstaller (Windows)

setlocal enabledelayedexpansion

echo.
echo ======================================
echo BUILDING MELKSHAM MENTAL HEALTH APP
echo ======================================
echo.

REM Get script directory
for %%A in ("%~dp0.") do set "SCRIPT_DIR=%%~fA"
cd /d "%SCRIPT_DIR%"

echo.
echo Checking Python...
python --version >nul 2>&1
if !errorlevel! neq 0 (
    echo ERROR: Python not found
    pause
    exit /b 1
)
echo OK

echo Checking PyInstaller...
pip show pyinstaller >nul 2>&1
if !errorlevel! neq 0 (
    echo Installing PyInstaller...
    pip install pyinstaller --quiet
)
echo OK

echo Checking files...
if not exist "src\desktop_app.py" (
    echo ERROR: src\desktop_app.py not found
    pause
    exit /b 1
)
if not exist "data" (
    echo ERROR: data folder not found
    pause
    exit /b 1
)
if not exist "assets" (
    echo ERROR: assets folder not found
    pause
    exit /b 1
)
echo OK

echo.
echo Cleaning previous builds...
if exist "build" rmdir /s /q build >nul 2>&1
if exist "dist" rmdir /s /q dist >nul 2>&1
del *.spec >nul 2>&1

mkdir dist
mkdir build

echo.
echo Building executable (this may take 1-2 minutes)...
echo.

python -m PyInstaller ^
    --name "Melksham Mental Health" ^
    --windowed ^
    --onefile ^
    --icon=%SCRIPT_DIR%\assets\logo.png ^
    --add-data="%SCRIPT_DIR%\data;data" ^
    --add-data="%SCRIPT_DIR%\assets;assets" ^
    --hidden-import=PyQt6 ^
    --hidden-import=PyQt6.QtCore ^
    --hidden-import=PyQt6.QtGui ^
    --hidden-import=PyQt6.QtWidgets ^
    --hidden-import=PyQt6.QtPrintSupport ^
    --distpath=%SCRIPT_DIR%\dist ^
    --workpath=%SCRIPT_DIR%\build ^
    --specpath=%SCRIPT_DIR%\build ^
    %SCRIPT_DIR%\src\desktop_app.py

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ======================================
    echo BUILD SUCCESSFUL!
    echo ======================================
    echo.
    echo Executable created at:
    echo   dist\Melksham Mental Health.exe
    echo.
    echo This is a STANDALONE app.
    echo No Python installation required!
    echo.
    echo Ready to distribute!
) else (
    echo.
    echo ======================================
    echo BUILD FAILED
    echo ======================================
    echo Check errors above
)

pause
