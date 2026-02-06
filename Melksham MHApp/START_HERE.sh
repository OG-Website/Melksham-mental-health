#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

clear

echo -e "${GREEN}"
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   MELKSHAM MENTAL HEALTH - POST CREATOR                    ║"
echo "║   One-Click Setup and Launch                               ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if first run
if [ ! -f "data/quotes.json" ]; then
    echo -e "${YELLOW}🔧 First time setup detected... ${NC}"
    echo ""
    
    # Check Python
    echo "Checking Python installation..."
    if ! command -v python3 &> /dev/null; then
        echo -e "${RED}❌ ERROR: Python 3 is not installed!${NC}"
        echo "Please install Python 3.7+ from python. org"
        exit 1
    fi
    echo -e "${GREEN}✓ Python found${NC}"
    echo ""
    
    # Create virtual environment
    echo "Creating virtual environment..."
    if [ ! -d "venv" ]; then
        python3 -m venv venv
    fi
    echo -e "${GREEN}✓ Virtual environment ready${NC}"
    echo ""
    
    # Activate and install
    echo "Installing dependencies..."
    source venv/bin/activate
    pip install --upgrade pip --quiet
    pip install -r requirements.txt --quiet
    echo -e "${GREEN}✓ Dependencies installed${NC}"
    echo ""
    
    # Create directories
    mkdir -p data scripts docs
    
    # Run first-time setup
    echo -e "${BLUE}📡 Fetching content from free APIs...${NC}"
    echo "This will download 500+ pieces of mental health content..."
    echo "Please wait, this may take 2-3 minutes..."
    echo ""
    python scripts/first_run_setup. py
    
    echo ""
    echo -e "${GREEN}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║   ✅ SETUP COMPLETE!                                       ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
else
    echo -e "${GREEN}✓ Application already set up${NC}"
    source venv/bin/activate
    echo ""
fi

# Main menu
while true; do
    echo -e "${BLUE}"
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║   LAUNCH OPTIONS                                           ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    echo ""
    echo "1. Start CLI Application (Command Line)"
    echo "2. Start GUI Application (Graphical Interface)"
    echo "3. Start Web Interface (Browser-based)"
    echo "4. Update Content from APIs"
    echo "5. Configure Social Media"
    echo "6. View Statistics"
    echo "7. Exit"
    echo ""
    read -p "Enter your choice (1-7): " choice
    
    case $choice in
        1)
            echo ""
            echo "Starting CLI application..."
            python src/main.py
            ;;
        2)
            echo ""
            echo "Starting GUI application..."
            python src/gui_app.py
            ;;
        3)
            echo ""
            echo "Starting web interface..."
            echo "Opening browser to http://localhost:5000"
            sleep 2
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open http://localhost:5000
            else
                xdg-open http://localhost:5000
            fi
            python web_app.py
            ;;
        4)
            echo ""
            echo "Updating content from APIs..."
            python scripts/preload_content.py
            echo -e "${GREEN}✓ Content updated!${NC}"
            read -p "Press Enter to continue..."
            ;;
        5)
            echo ""
            echo "Opening social media configuration guide..."
            if [[ "$OSTYPE" == "darwin"* ]]; then
                open docs/SOCIAL_MEDIA_GUIDE.md
            else
                xdg-open docs/SOCIAL_MEDIA_GUIDE.md
            fi
            echo ""
            echo "Copy .env. example to .env and add your API keys"
            echo "See the guide for detailed instructions"
            read -p "Press Enter to continue..."
            ;;
        6)
            echo ""
            echo "═══════════════════════════════════════════════════"
            echo "  CONTENT STATISTICS"
            echo "═══════════════════════════════════════════════════"
            python3 -c "import json; from pathlib import Path; [print(f'{f.stem.capitalize()}: {len(json.load(open(f)))} items') for f in Path('data').glob('*.json')]"
            echo "═══════════════════════════════════════════════════"
            read -p "Press Enter to continue..."
            ;;
        7)
            echo ""
            echo "Thank you for using Melksham Mental Health Post Creator!"
            echo "Remember: You are not alone. Help is always available. 💚"
            echo ""
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid choice. Please try again.${NC}"
            echo ""
            ;;
    esac
done