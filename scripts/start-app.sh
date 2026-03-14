#!/bin/bash

# KeyboardWriter Start Script
# Startet den Dev-Server und öffnet den Browser

PROJECT_DIR="$(dirname "$0")/.."
cd "$PROJECT_DIR"

# PID-Datei
PID_FILE="$PROJECT_DIR/.server.pid"

# Prüfe ob Server bereits läuft
if [ -f "$PID_FILE" ]; then
    OLD_PID=$(cat "$PID_FILE")
    if ps -p "$OLD_PID" > /dev/null 2>&1; then
        echo "Server läuft bereits (PID: $OLD_PID)"
        open "http://localhost:5173"
        exit 0
    fi
fi

# Starte den Dev-Server im Hintergrund
npm run dev &
SERVER_PID=$!

# Speichere die PID
echo $SERVER_PID > "$PID_FILE"

# Warte bis Server bereit ist
echo "Warte auf Server..."
for i in {1..30}; do
    if curl -s http://localhost:5173 > /dev/null 2>&1; then
        echo "Server gestartet!"
        open "http://localhost:5173"
        exit 0
    fi
    # Prüfe auch alternative Ports
    for port in 3000 3001 3002 3003 3004 3005; do
        if curl -s "http://localhost:$port" > /dev/null 2>&1; then
            echo "Server gestartet auf Port $port!"
            open "http://localhost:$port"
            exit 0
        fi
    done
    sleep 1
done

echo "Fehler: Server konnte nicht gestartet werden"
exit 1