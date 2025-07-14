#!/bin/bash

# Markdown New Tab Extension Packaging Script
# Creates a clean ZIP file for Chrome Web Store submission

echo "📦 Packaging Markdown New Tab Extension..."

# Remove existing package if it exists
if [ -f "markdown-new-tab-extension.zip" ]; then
    echo "🗑️  Removing existing package..."
    rm "markdown-new-tab-extension.zip"
fi

# Create the package
echo "🔄 Creating ZIP package..."
zip -r markdown-new-tab-extension.zip . \
    -x "*.git*" \
    -x "*.DS_Store*" \
    -x "*node_modules*" \
    -x "*.md" \
    -x "*package*.json" \
    -x "*yarn.lock" \
    -x "*package-lock.json" \
    -x "*.log" \
    -x "*dist/*" \
    -x "*build/*" \
    -x "*package.sh" \
    -x "*__pycache__*" \
    -x "*.pyc" \
    -x "*coverage*" \
    -x "*.env*"

# Check if package was created successfully
if [ -f "markdown-new-tab-extension.zip" ]; then
    echo "✅ Package created successfully!"
    echo "📁 File: markdown-new-tab-extension.zip"
    echo "📏 Size: $(du -h markdown-new-tab-extension.zip | cut -f1)"
    echo ""
    echo "📋 Package contents:"
    unzip -l markdown-new-tab-extension.zip
    echo ""
    echo "🚀 Ready for Chrome Web Store upload!"
else
    echo "❌ Failed to create package!"
    exit 1
fi
