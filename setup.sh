#!/bin/bash

echo "🚀 Setting up Swaraj Naik Portfolio Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.9+ and try again."
    exit 1
fi

echo "✅ Node.js and Python are installed"

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
npm install

# Create backend virtual environment and install dependencies
echo "🐍 Setting up Python backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..

echo "✅ Setup complete!"
echo ""
echo "🎉 To start the development servers:"
echo "   Frontend: npm run dev (http://localhost:3000)"
echo "   Backend:  cd backend && python app.py (http://localhost:5000)"
echo ""
echo "📚 Check the README.md for detailed documentation"
