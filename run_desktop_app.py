#!/usr/bin/env python3
"""
Melksham Mental Health - Desktop Application Launcher
Run this script to launch the desktop GUI application

Usage:
    python3 run_desktop_app.py
"""

import sys
import os
from pathlib import Path

# Get the root directory
root_dir = Path(__file__).parent.resolve()
src_path = root_dir / "src"

# Add src directory to path
sys.path.insert(0, str(src_path))

# Change to root directory (important for asset paths!)
os.chdir(root_dir)

print(f"Root directory: {root_dir}")
print(f"Working directory: {os.getcwd()}")
print(f"Assets path: {root_dir / 'assets'}")

try:
    from desktop_app import main
    if __name__ == "__main__":
        main()
except ImportError as e:
    print("\n" + "="*60)
    print("ERROR: Missing required dependencies")
    print("="*60)
    print("\nPlease install dependencies by running:")
    print("  pip install -r requirements.txt")
    print("\nOr for specific packages:")
    print("  pip install PyQt6>=6.4.0")
    print("\nError details:")
    print(f"  {e}")
    print("\n" + "="*60 + "\n")
    sys.exit(1)
except Exception as e:
    print(f"\nError launching application: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1)
