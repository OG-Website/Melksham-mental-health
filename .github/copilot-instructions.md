# Copilot Instructions for Melksham Mental Health

## Project Overview

This is a comprehensive mental health support project with two main components:
1. **Desktop Application** - A Python/PyQt6 desktop app for generating mental health support content (Post Creator)
2. **Website** - A Next.js 16 website for mental health resources and awareness

**Mission**: Spread positivity, reduce stigma, and ensure everyone in Melksham and beyond knows they are not alone, help is available, and recovery is possible.

**Target Audience**: Melksham, Wiltshire, and UK-wide mental health support seekers

## Technology Stack

### Desktop Application
- **Language**: Python 3.7+
- **GUI Framework**: PyQt6 6.4.0+
- **Dependencies**: 
  - requests 2.31.0+
  - python-dotenv 1.0.0+
  - Pillow 10.0.0+
  - flask 2.3.0+
- **Standard libraries only** for core CLI functionality (no external dependencies for `src/main.py`)

### Website
- **Framework**: Next.js 16.1.0
- **React Version**: 19.2.3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Additional**: Stripe integration, React Icons
- **Location**: `/website` directory (root directory for Vercel deployment)

## Project Structure

```
/
├── src/                    # Desktop app source code
│   ├── main.py            # CLI entry point (uses only standard libraries)
│   ├── desktop_app.py     # PyQt6 GUI application
│   ├── generator.py       # Content generation logic
│   ├── formatter.py       # Output formatting
│   ├── setup_wizard.py    # Setup utilities
│   └── user_config.py     # User configuration management
├── data/                  # JSON content files (quotes, stories, etc.)
├── website/               # Next.js website (Vercel root directory)
│   ├── src/app/          # Next.js app directory
│   ├── public/           # Static assets
│   └── package.json      # Website dependencies
├── docs/                  # Documentation
├── build/                 # Build artifacts (DO NOT MODIFY)
└── dist/                  # Distribution files (DO NOT MODIFY)
```

## Key Commands

### Desktop Application
```bash
# Run CLI version (no dependencies required)
python src/main.py

# Run desktop app (requires PyQt6)
python src/desktop_app.py

# Or use convenience scripts
./run_desktop_app.sh    # Linux/Mac
run_desktop_app.bat     # Windows

# Build desktop app
./build_app.sh          # Linux/Mac
build_app.bat           # Windows
```

### Website
```bash
# Navigate to website directory first
cd website

# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Content Guidelines & Safety Requirements

**CRITICAL**: This project deals with mental health content. Follow these strict guidelines:

### Content Safety Rules
1. **Evidence-based only**: All mental health content must be accurate and sourced from trusted UK organizations (NHS, Mind UK, Mental Health Foundation, etc.)
2. **Positive and hopeful**: Content should inspire hope and recovery, never be triggering
3. **Include disclaimers**: Posts about serious topics MUST include crisis resources and disclaimers that content doesn't replace professional help
4. **Non-triggering language**: Avoid graphic descriptions or potentially triggering content
5. **Inclusive and accessible**: Content must be welcoming to all demographics
6. **UK-focused**: Prioritize UK resources, especially Wiltshire/Melksham where appropriate
7. **Proper attribution**: Always attribute quotes and sources correctly

### Crisis Information
Always include when relevant:
- Emergency: 999
- NHS 111 (24/7 urgent mental health support)
- Samaritans: 116 123 (24/7)
- Shout: Text SHOUT to 85258 (24/7)
- Local Wiltshire Crisis Line: 0800 953 0110 (24/7)

### Content Sources to Use
- NHS Mental Health Services
- Mind UK / Wiltshire Mind
- Mental Health Foundation
- Rethink Mental Illness
- CALM (Campaign Against Living Miserably)
- Samaritans
- YoungMinds
- AWP NHS Trust

## File-Specific Guidelines

### Data Files (`data/*.json`)
- Maintain JSON structure and formatting
- Each entry must have proper metadata (topics, audience, source)
- Test JSON validity after edits
- Keep consistent field names across files

### Python Code (`src/*.py`)
- Follow PEP 8 style guidelines
- Use type hints where appropriate
- Keep CLI version (main.py) free of external dependencies
- Maintain existing error handling patterns
- Add docstrings to new functions

### Website Code (`website/`)
- Follow Next.js 16 app directory conventions
- Use TypeScript for type safety
- Follow existing Tailwind CSS patterns
- Ensure mobile responsiveness
- Maintain accessibility standards (WCAG AA minimum)

## Git Workflow

### Branching
- Work on feature branches, not main
- Use descriptive branch names: `feature/add-anxiety-resources`, `fix/desktop-app-crash`

### Commit Messages
- Use clear, descriptive commit messages
- Start with action verb: "Add", "Fix", "Update", "Remove"
- Reference issue numbers when applicable: "Fix #123: Desktop app crash on startup"

### Pull Requests
- PRs should focus on a single feature or fix
- Include description of changes and testing performed
- Update documentation if functionality changes

## Boundaries & Restrictions

### DO NOT Modify
- `/build/*` - Build artifacts (generated files)
- `/dist/*` - Distribution files (generated files)
- `/src/__pycache__/*` - Python cache files
- `/website/node_modules/*` - Node dependencies
- `/website/.next/*` - Next.js build cache
- `.git/*` - Git internals

### DO NOT Commit
- API keys or secrets
- Personal information
- Large binary files (use .gitignore)
- Environment files with credentials (.env with real values)
- Build artifacts or dependencies

### Sensitive Areas
- Never modify core mental health content without verification against trusted sources
- Be extremely careful with crisis contact information - accuracy is critical
- Don't change deployment configurations without testing

## Testing & Validation

### Before Committing
1. **Python changes**: Run `python src/main.py` to verify CLI works
2. **Desktop app changes**: Test with `python src/desktop_app.py`
3. **Website changes**: Run `npm run build` in `/website` directory
4. **JSON changes**: Validate JSON syntax and structure
5. **Content changes**: Verify against content guidelines and sources

### Manual Testing
- Test new features in both CLI and desktop app versions
- Verify website changes on both desktop and mobile viewports
- Check all links and crisis resources are accurate and working
- Ensure content follows safety guidelines

## Common Tasks

### Adding New Mental Health Content
1. Edit appropriate JSON file in `/data/`
2. Follow existing structure exactly
3. Include all required fields: text, author/source, topics, audience
4. Verify against trusted UK sources
5. Test content generation to ensure it displays correctly

### Updating Website
1. Navigate to `/website` directory
2. Make changes in `/website/src/app/` (Next.js App Router)
3. Run `npm run dev` to test locally
4. Run `npm run build` to verify production build
5. Commit changes

### Fixing Desktop App
1. Edit files in `/src/` directory
2. Test with `python src/desktop_app.py`
3. Verify both GUI and CLI functionality
4. Update documentation if needed

## Deployment

### Website (Vercel)
- **Root directory**: `website` (NOT repository root)
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Environment**: Node.js 18+
- Deployment happens automatically via Vercel integration

### Desktop App
- Distribution builds are created via build scripts
- Windows: `build_app.bat`
- Linux/Mac: `build_app.sh`
- See `DESKTOP_APP_BUILD.md` for detailed instructions

## Support & Resources

### Project Documentation
- `README.md` - Main project overview
- `DEPLOY_TO_VERCEL.md` - Website deployment guide
- `DESKTOP_APP_BUILD.md` - Desktop app build instructions
- `docs/USAGE.md` - Detailed usage guide
- `docs/WEBSITE_SCOPE.md` - Website feature scope

### Getting Help
- Contact: Melksham-mental-health@outlook.com
- Review existing documentation in `/docs`
- Check issue tracker for known issues

## Examples

### Good Commit Messages
- ✅ "Add anxiety resources for teenagers"
- ✅ "Fix desktop app crash when data file missing"
- ✅ "Update crisis contact information"
- ✅ "Improve mobile navigation on website"

### Bad Commit Messages
- ❌ "Update stuff"
- ❌ "Fix bug"
- ❌ "WIP"

### Good Content Addition
```json
{
  "text": "Recovery is not linear. Some days will be harder than others, and that's okay.",
  "author": "Mental Health Foundation",
  "topics": ["recovery", "self-compassion", "general"],
  "audience": ["general"],
  "source": "Mental Health Foundation UK"
}
```

### Bad Content Addition (Missing Required Fields)
```json
{
  "text": "Just think positive!"
}
```
Note: This is bad because it's too simplistic, not evidence-based, and missing required fields (author, topics, audience, source).

## Summary

When working on this repository:
1. **Prioritize safety** - Mental health content requires accuracy and sensitivity
2. **Test thoroughly** - Verify changes work in all relevant contexts
3. **Follow conventions** - Match existing code and content patterns
4. **Document changes** - Update docs when adding features
5. **Respect boundaries** - Don't modify generated files or sensitive configs
6. **Stay UK-focused** - Prioritize UK resources and Wiltshire/Melksham where relevant

**Remember**: This project helps real people with real struggles. Quality and accuracy matter deeply.
