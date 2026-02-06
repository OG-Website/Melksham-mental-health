# 🚀 MELKSHAM MENTAL HEALTH - DISTRIBUTION GUIDE

## Building a Standalone Desktop Application

Your app is now ready to be packaged as a standalone installer that others can use without Python.

---

## 📦 Step 1: Build the Executable

### Linux/Mac:
```bash
chmod +x build_app.sh
./build_app.sh
```

### Windows:
```cmd
python -m PyInstaller --name "Melksham Mental Health" ^
    --windowed ^
    --onefile ^
    --icon=assets/logo.png ^
    --add-data="data;data" ^
    --add-data="assets;assets" ^
    src/desktop_app.py
```

**Output:**
- `dist/Melksham Mental Health.exe` (Windows)
- `dist/Melksham Mental Health.app` (Mac)  
- `dist/Melksham Mental Health` (Linux)

These are **standalone executables** - no Python required!

---

## 🪟 Step 2: Create Windows Installer (Optional but Recommended)

### Requirements:
- NSIS (Nullsoft Scriptable Install System)
- Download: https://nsis.sourceforge.io/

### Build:
```
1. Install NSIS
2. Right-click installer.nsi
3. Select "Compile NSIS Script"
4. Creates: Melksham_Mental_Health_Installer.exe
```

### What It Does:
- Installs app to `Program Files`
- Creates Start Menu shortcuts
- Creates Desktop shortcut
- Adds Uninstall option
- Professional installer experience

---

## 📤 Step 3: Distribution

### For Windows Users:
1. Share `Melksham_Mental_Health_Installer.exe`
2. They run it
3. Click "Install"
4. App appears in Start Menu & Desktop
5. Ready to use!

### For Mac Users:
1. Share `dist/Melksham Mental Health.app`
2. They drag to Applications folder
3. Run from Applications
4. Done!

### For Linux Users:
1. Share `dist/Melksham Mental Health`
2. Make executable: `chmod +x Melksham\ Mental\ Health`
3. Run: `./Melksham\ Mental\ Health`
4. Done!

---

## 📋 Package Contents

Your distribution folder should contain:
```
Melksham_Mental_Health_Installer.exe    (Windows installer)
Melksham Mental Health.app              (Mac app bundle)
Melksham Mental Health                  (Linux executable)
README.md                               (Instructions)
QUICK_START.md                          (Quick guide)
```

---

## 🔧 Troubleshooting Installation Issues

### "Windows cannot verify this app"
- Click "More info" → "Run anyway"
- Or: Get code-signing certificate (advanced)

### "App doesn't start"
- Make sure logo.png is in assets/
- Check that data/ folder exists
- Run from command line to see error

### "Missing files"
- Ensure build includes data/ and assets/
- Check PyInstaller command includes `--add-data`

---

## 💚 Distribution Checklist

- [ ] Built executable with PyInstaller
- [ ] Tested on target system (Windows/Mac/Linux)
- [ ] Logo displays correctly
- [ ] Content generates properly
- [ ] Save/Export functions work
- [ ] Favorites system saves data
- [ ] Created installer (Windows)
- [ ] Tested installation process
- [ ] Created README with instructions
- [ ] Packaged for distribution

---

## 📝 Distribution README Template

Create a `README_INSTALL.txt` to include with your installer:

```
MELKSHAM MENTAL HEALTH - INSTALLATION GUIDE

SYSTEM REQUIREMENTS:
- Windows 7 or later (for .exe)
- Mac OS X 10.13 or later (for .app)
- Linux (any distribution)
- No additional software needed!

INSTALLATION:

WINDOWS:
1. Download: Melksham_Mental_Health_Installer.exe
2. Double-click to run
3. Follow installation wizard
4. Find in Start Menu or Desktop

MAC:
1. Download: Melksham Mental Health.app
2. Open disk image
3. Drag app to Applications folder
4. Launch from Applications

LINUX:
1. Download: Melksham Mental Health
2. Make executable: chmod +x "Melksham Mental Health"
3. Run: ./"Melksham Mental Health"

FEATURES:
• Generate mental health posts
• Filter by type, topic, audience
• Batch generation
• Save and export
• Favorites system
• Local resources
• Crisis support

FOR HELP:
Check included documentation or visit:
https://www.melkshammentalhealth.org

SUPPORT:
Mental health resources and crisis support info available in-app.

© 2024 Melksham Mental Health Initiative
```

---

## 🎯 File Sizes

- Windows .exe: ~80-120MB
- Mac .app: ~100-150MB
- Linux executable: ~80-120MB

(Includes Python runtime + all dependencies)

---

## 🔐 Security Notes

Users may see security warnings because app is unsigned. This is normal for self-distributed software. To avoid:
- Get code-signing certificate from certificate authority
- Sign executables before distribution
- Cost: ~$150-300/year

For now, users can safely ignore warnings.

---

## 📚 Next Steps

1. Run `./build_app.sh` to create executable
2. Test on your system first
3. Create installer with NSIS (optional)
4. Create README with instructions
5. Zip everything for distribution
6. Share with users!

---

**Your professional desktop application is ready for distribution!** 🚀
