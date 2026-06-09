#!/bin/bash

# Render Deployment Script for PlayBeat

echo "🚀 PlayBeat Digital - Render Backend Deployment"
echo "================================================"

# Backend directory
cd 2

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Run server
echo "🎵 Starting PlayBeat Server..."
exec npm start
