# 🚀 DESKTOP APP - QUICK START GUIDE

## One-Line Launch

### Linux/Mac
```bash
./run_desktop_app.sh
```

### Windows
```batch
run_desktop_app.bat
```

### Any System (Python)
```bash
python3 run_desktop_app.py
```

---

## ⚡ Setup (First Time Only)

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Run the App
```bash
./run_desktop_app.sh    # Mac/Linux
run_desktop_app.bat     # Windows
python3 run_desktop_app.py  # Any system
```

That's it! 🎉

---

## 📦 What's Installed

- **PyQt6** - Beautiful desktop GUI
- **Pillow** - Image support
- **Flask** - Web framework (for future features)
- **requests** - HTTP library
- **python-dotenv** - Environment variables

---

## 🎨 Elite Features Ready

✅ Logo & branding (add to `assets/logo.png`)
✅ Generate posts (random, by type/topic/audience)
✅ Batch generation (create 1-100 posts)
✅ Save & export (TXT, JSON)
✅ Print support
✅ Favorites system
✅ Search content
✅ View statistics
✅ Crisis support
✅ Local resources
✅ Professional UI with tabs
✅ Status bar & progress tracking
✅ Keyboard shortcuts

---

## 🎯 Next Steps

1. **Add Your Logo**
   - Create `assets/` folder
   - Add `assets/logo.png` (PNG or JPG)
   - Restart app to see it

2. **Generate Your First Post**
   - Click "🎲 Generate Random Post"
   - Or filter by type/topic/audience

3. **Save & Export**
   - Use the action buttons at bottom
   - Files saved to `output/` folder
   - TXT or JSON format

4. **Organize with Favorites**
   - Click "❤️ Add to Favorites"
   - Find favorites in Favorites tab

5. **Batch Create Content**
   - Set count in Advanced tab
   - Click "Generate Batch"
   - Creates multiple posts at once

---

## 🐛 Troubleshooting

**App won't start?**
- Check: `pip install PyQt6`
- Verify: `python3 --version` (need 3.8+)

**Logo not showing?**
- Create `assets/logo.png`
- Restart the app

**Print not working?**
- Check: Printer is configured
- Linux: `sudo systemctl status cups`

---

## 📁 Important Folders

| Folder | Purpose |
|--------|---------|
| `src/` | Application code |
| `data/` | Content (JSON files) |
| `assets/` | Your logo & images |
| `output/` | Saved posts |

---

## 🎓 File Reference

| File | Purpose |
|------|---------|
| `run_desktop_app.py` | Universal launcher |
| `run_desktop_app.sh` | Mac/Linux launcher |
| `run_desktop_app.bat` | Windows launcher |
| `src/desktop_app.py` | Main application |
| `DESKTOP_SETUP.md` | Full documentation |
| `requirements.txt` | Dependencies |

---

## 💡 Pro Tips

1. **Keyboard shortcuts**: Ctrl+C (copy), Ctrl+S (save)
2. **Batch mode**: Generate 10-20 posts for your week
3. **Export daily**: Save all posts as TXT + JSON
4. **Check stats**: View content metrics in Resources tab
5. **Use favorites**: Quick access to your best posts

---

## 🆘 Help

- **In-app help**: Settings tab → "❓ Help"
- **About dialog**: Settings tab → "About"
- **Full docs**: Read `DESKTOP_SETUP.md`

---

## 🎉 You're Ready!

Your elite desktop application is ready to create amazing mental health content.

**Launch it now:**
```bash
./run_desktop_app.sh
```

Enjoy! 💚
