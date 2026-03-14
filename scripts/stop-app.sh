#!/bin/bash

# KeyboardWriter Stop Script
# Beendet den Dev-Server

PROJECT_DIR="$(dirname "$0")/.."
cd "$PROJECT_DIR"

PID_FILE="$PROJECT_DIR/.server.pid"

# Beende den Server über die PID-Datei
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "Beende Server (PID: $PID)..."
        kill "$PID" 2>/dev/null
        # Warte kurz und prüfe ob beendet
        sleep 1
        if ps -p "$PID" > /dev/null 2>&1; then
            kill -9 "$PID" 2>/dev/null
        fi
        echo "Server beendet."
    else
        echo "Server läuft nicht mehr."
    fi
    rm -f "$PID_FILE"
else
    echo "Keine Server-PID gefunden."
fi

# Beende auch alle npm/node Prozesse die auf den typischen Ports laufen
for port in 5173 3000 3001 3002 3003 3004 3005; do
    PID=$(lsof -ti:$port 2>/dev/null)
    if [ -n "$PID" ]; then
        echo "Beende Prozess auf Port $port (PID: $PID)..."
        kill "$PID" 2>/dev/null
    fi
done

echo "KeyboardWriter gestoppt."