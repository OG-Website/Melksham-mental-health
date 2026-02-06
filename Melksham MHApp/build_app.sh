#!/bin/bash
# Build standalone desktop application with PyInstaller
# This creates a .exe (Windows) or app (Mac) that others can install

echo "🔨 BUILDING MELKSHAM MENTAL HEALTH DESKTOP APPLICATION"
echo "=========================================="

# Get the directory where this script is
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo ""
echo "📁 Working directory: $SCRIPT_DIR"
echo ""

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "❌ ERROR: Python 3 is not installed"
    exit 1
fi

echo "✅ Python 3 found: $(python3 --version)"

# Check if PyInstaller is installed
echo ""
echo "Checking PyInstaller..."
if ! python3 -c "import PyInstaller" 2>/dev/null; then
    echo "⚠️  PyInstaller not found. Installing..."
    pip install PyInstaller --quiet
    if [ $? -eq 0 ]; then
        echo "✅ PyInstaller installed"
    else
        echo "❌ Failed to install PyInstaller"
        exit 1
    fi
else
    echo "✅ PyInstaller found"
fi

# Verify essential files exist
echo ""
echo "Checking required files..."
if [ ! -f "src/desktop_app.py" ]; then
    echo "❌ ERROR: src/desktop_app.py not found"
    exit 1
fi
echo "✅ src/desktop_app.py found"

if [ ! -d "data" ]; then
    echo "❌ ERROR: data/ folder not found"
    exit 1
fi
echo "✅ data/ folder found"

if [ ! -d "assets" ]; then
    echo "❌ ERROR: assets/ folder not found"
    exit 1
fi
echo "✅ assets/ folder found"

# Clean previous builds
echo ""
echo "Cleaning previous builds..."
rm -rf build dist *.spec 2>/dev/null

# Create directories
mkdir -p dist
mkdir -p build

echo "✅ Build directories created"

# Build with PyInstaller
echo ""
echo "🔨 Building executable (this may take 1-2 minutes)..."
echo ""

python3 -m PyInstaller \
    --name "Melksham Mental Health" \
    --windowed \
    --onefile \
    --icon="$SCRIPT_DIR/assets/logo.png" \
    --add-data="$SCRIPT_DIR/data:data" \
    --add-data="$SCRIPT_DIR/assets:assets" \
    --hidden-import=PyQt6 \
    --hidden-import=PyQt6.QtCore \
    --hidden-import=PyQt6.QtGui \
    --hidden-import=PyQt6.QtWidgets \
    --hidden-import=PyQt6.QtPrintSupport \
    --distpath="$SCRIPT_DIR/dist" \
    --workpath="$SCRIPT_DIR/build" \
    --specpath="$SCRIPT_DIR/build" \
    "$SCRIPT_DIR/src/desktop_app.py"

BUILD_STATUS=$?

echo ""
echo "=========================================="

if [ $BUILD_STATUS -eq 0 ]; then
    echo "✅ BUILD SUCCESSFUL!"
    echo ""
    echo "Executable created at:"
    
    if [ -f "dist/Melksham Mental Health" ]; then
        echo "  ✅ dist/Melksham Mental Health (Linux/Mac)"
        ls -lh "dist/Melksham Mental Health"
    fi
    
    if [ -f "dist/Melksham Mental Health.exe" ]; then
        echo "  ✅ dist/Melksham Mental Health.exe (Windows)"
        ls -lh "dist/Melksham Mental Health.exe"
    fi
    
    echo ""
    echo "📦 This is a STANDALONE app that others can use."
    echo "   No Python installation required!"
    echo ""
    echo "🚀 Ready to distribute!"
else
    echo "❌ BUILD FAILED!"
    echo ""
    echo "Check errors above for details."
    exit 1
fi
