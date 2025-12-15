@echo off
title Melksham Mental Health - Post Creator
color 0A

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║   MELKSHAM MENTAL HEALTH - POST CREATOR                    ║
echo ║   One-Click Setup and Launch                               ║
echo ╚════════════════════════════════════════════════════════════╝
echo. 

REM Check if this is first run
if not exist "data\quotes.json" (
    echo 🔧 First time setup detected... 
    echo. 
    
    REM Check Python
    echo Checking Python installation...
    python --version >nul 2>&1
    if errorlevel 1 (
        echo ❌ ERROR: Python is not installed! 
        echo Please install Python 3.7+ from python.org
        pause
        exit /b 1
    )
    echo ✓ Python found
    echo.
    
    REM Create virtual environment
    echo Creating virtual environment... 
    if not exist "venv" (
        python -m venv venv
    )
    echo ✓ Virtual environment ready
    echo.
    
    REM Activate and install
    echo Installing dependencies...
    call venv\Scripts\activate.bat
    python -m pip install --upgrade pip --quiet
    pip install -r requirements.txt --quiet
    echo ✓ Dependencies installed
    echo.
    
    REM Create data directory
    if not exist "data" mkdir data
    if not exist "scripts" mkdir scripts
    
    REM Run first-time setup
    echo 📡 Fetching content from free APIs...
    echo This will download 500+ pieces of mental health content... 
    echo Please wait, this may take 2-3 minutes...
    echo.
    python scripts\first_run_setup.py
    
    echo. 
    echo ╔════════════════════════════════════════════════════════════╗
    echo ║   ✅ SETUP COMPLETE!                                        ║
    echo ╚════════════════════════════════════════════════════════════╝
    echo.
) else (
    echo ✓ Application already set up
    call venv\Scripts\activate.bat
    echo.
)

: menu
echo ╔════════════════════════════════════════════════════════════╗
echo ║   LAUNCH OPTIONS                                           ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
echo 1. Start CLI Application (Command Line)
echo 2. Start GUI Application (Graphical Interface) 
echo 3. Start Web Interface (Browser-based)
echo 4. Update Content from APIs
echo 5. Configure Social Media
echo 6. View Statistics
echo 7. Exit
echo.
set /p choice="Enter your choice (1-7): "

if "%choice%"=="1" goto cli
if "%choice%"=="2" goto gui
if "%choice%"=="3" goto web
if "%choice%"=="4" goto update
if "%choice%"=="5" goto social
if "%choice%"=="6" goto stats
if "%choice%"=="7" goto end

echo Invalid choice. Please try again.
echo.
goto menu

:cli
echo. 
echo Starting CLI application...
python src\main.py
goto menu

:gui
echo. 
echo Starting GUI application...
python src\gui_app.py
goto menu

:web
echo. 
echo Starting web interface...
echo Opening browser to http://localhost:5000
timeout /t 2 /nobreak >nul
start http://localhost:5000
python web_app.py
goto menu

:update
echo.
echo Updating content from APIs...
python scripts\preload_content.py
echo ✓ Content updated! 
pause
goto menu

:social
echo.
echo Opening social media configuration guide...
start docs\SOCIAL_MEDIA_GUIDE.md
echo. 
echo Copy . env.example to .env and add your API keys
echo See the guide for detailed instructions
pause
goto menu

:stats
echo.
echo ═══════════════════════════════════════════════════
echo   CONTENT STATISTICS
echo ═══════════════════════════════════════════════════
python -c "import json; from pathlib import Path; [print(f'{f. stem. capitalize()}:  {len(json.load(open(f)))} items') for f in Path('data').glob('*.json')]"
echo ═══════════════════════════════════════════════════
pause
goto menu

:end
echo.
echo Thank you for using Melksham Mental Health Post Creator!
echo Remember: You are not alone. Help is always available.  💚
echo.
pause
exit