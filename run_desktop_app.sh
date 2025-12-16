#!/bin/bash
# Melksham Mental Health - Desktop Application Launcher (macOS/Linux)
# This script launches the desktop GUI application

set -e

echo ""
echo "========================================"
echo "Melksham Mental Health - Desktop App"
echo "========================================"
echo ""

# Get the directory this script is in
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python 3 is not installed"
    echo ""
    echo "Please install Python 3:"
    echo "  macOS: brew install python3"
    echo "  Ubuntu/Debian: sudo apt-get install python3"
    echo ""
    exit 1
fi

# Check Python version
PYTHON_VERSION=$(python3 -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
echo "Python version: $PYTHON_VERSION"

# Check if requirements are installed
echo "Checking dependencies..."
if ! python3 -c "import PyQt6" 2>/dev/null; then
    echo ""
    echo "Installing required packages..."
    echo "This may take a minute..."
    echo ""
    pip3 install -r "$SCRIPT_DIR/requirements.txt"
fi

# Launch the application
echo ""
echo "Launching Melksham Mental Health Desktop App..."
echo ""

cd "$SCRIPT_DIR/src"
python3 desktop_app.py

exit_code=$?
if [ $exit_code -ne 0 ]; then
    echo ""
    echo "ERROR: Application failed to start (exit code: $exit_code)"
    echo ""
    exit $exit_code
fi
