/**
 * Internationalization (i18n) Service
 * Handles language switching between English and German
 */

export type Language = 'en' | 'de';

interface Translations {
  [key: string]: string;
}

// English translations
const en: Translations = {
  // Navigation Groups
  'nav.group.core': 'Training',
  'nav.group.devtools': 'Dev Tools',
  'nav.group.coding': 'Coding',
  'nav.group.progress': 'Progress',
  'nav.group.compete': 'Compete',

  // Navigation Items
  'nav.dashboard': 'Dashboard',
  'nav.practice': 'Practice',
  'nav.lessons': 'Lessons',
  'nav.statistics': 'Statistics',
  'nav.achievements': 'Achievements',
  'nav.shortcuts': 'Shortcuts',
  'nav.terminal': 'Terminal',
  'nav.srs': 'SRS Learning',
  'nav.challenge': 'Daily Challenge',
  'nav.quiz': 'Quiz Modes',
  'nav.code': 'Code Mode',
  'nav.playground': 'Playground',
  'nav.community': 'Community',
  'nav.race': 'Typing Race',
  'nav.git': 'Git Training',
  'nav.vim': 'Vim Training',
  'nav.regex': 'Regex Training',
  'nav.algorithms': 'Algorithms',
  'nav.sql': 'SQL Training',

  // Header
  'header.accuracy': 'Accuracy',
  'header.level': 'Level',
  'header.settings': 'Settings',
  'header.quit': 'Quit',
  'header.shutdown': 'Shutdown server',

  // Home Page
  'home.welcome': 'Welcome to KeyboardWriter',
  'home.wpmAverage': 'WPM Average',
  'home.accuracy': 'Accuracy',
  'home.dayStreak': 'Day Streak',
  'home.lessons': 'Lessons',
  'home.getStarted': 'Get Started!',
  'home.chooseLesson': 'Choose a lesson or start free practice to improve your typing skills.',
  'home.startPractice': 'Start Practice',

  // Practice Page
  'practice.title': 'Practice Mode',
  'practice.text': 'Text',
  'practice.timedTest': 'Timed Test',
  'practice.beginner': 'Beginner',
  'practice.intermediate': 'Intermediate',
  'practice.advanced': 'Advanced',
  'practice.programming': 'Programming',
  'practice.newText': 'New Text',
  'practice.restart': 'Restart',
  'practice.start': 'Start',
  'practice.seconds': 'Seconds',
  'practice.time': 'Time',
  'practice.remaining': 'Remaining',
  'practice.errors': 'Errors',
  'practice.characters': 'Characters',
  'practice.clickToStart': 'Click "New Text" or press a key to start.',
  'practice.timedTestPrompt': 'Timed Test: {duration} seconds',
  'practice.clickStartPrompt': 'Click "Start" or press a key to begin.',
  'practice.timesUp': "Time's Up!",
  'practice.tryAgain': 'Try Again',
  'practice.complete': 'Complete! {wpm} WPM with {accuracy}% accuracy',
  'practice.timedComplete': 'Timed test completed! {wpm} WPM with {accuracy}% accuracy',

  // Statistics Page
  'stats.title': 'Statistics',
  'stats.avgWpm': 'Avg. WPM',
  'stats.peakWpm': 'Peak WPM',
  'stats.accuracy': 'Accuracy',
  'stats.dayStreak': 'Day Streak',
  'stats.progress': 'Progress',
  'stats.sessions': 'Sessions',
  'stats.practiceTime': 'Practice Time',
  'stats.keystrokes': 'Keystrokes',
  'stats.lessons': 'Lessons',
  'stats.longestStreak': 'Longest Streak',
  'stats.wpmHistory': 'WPM History',
  'stats.accuracyHistory': 'Accuracy History',
  'stats.keyboardHeatmap': 'Keyboard Heatmap',
  'stats.heatmapDescription': 'Shows your error rate per key. Red keys need more practice.',
  'stats.weeklyActivity': 'Weekly Activity',
  'stats.less': 'Less',
  'stats.more': 'More',

  // Achievements
  'achievements.title': 'Achievements',
  'achievements.all': 'All',
  'achievements.speed': 'Speed',
  'achievements.accuracy': 'Accuracy',
  'achievements.consistency': 'Consistency',
  'achievements.milestones': 'Milestones',
  'achievements.special': 'Special',
  'achievements.unlocked': 'Unlocked',
  'achievements.progress': 'Progress',
  'achievements.legendary': 'Legendary',
  'achievements.epic': 'Epic',
  'achievements.completed': '{progress}% completed',
  'achievements.xpEarned': '+{xp} XP earned',
  'achievements.nextLevel': 'Next level in {xp} XP',

  // Lessons
  'lessons.title': 'Lessons',
  'lessons.back': 'Back',
  'lessons.quit': 'Quit',
  'lessons.skip': 'Skip',
  'lessons.completed': '{completed} of {total} lessons completed',
  'lessons.exerciseOf': 'Exercise {current} of {total}',
  'lessons.exercises': '{count} exercises',
  'lessons.pressToStart': 'Press a key to start.',
  'lessons.goal': 'Goal: {wpm} WPM · {accuracy}% Accuracy',
  'lessons.passed': 'Lesson passed! {wpm} WPM · {accuracy}% · +{xp} XP',
  'lessons.ended': 'Lesson ended. {wpm} WPM · {accuracy}%',

  // Common
  'common.wpm': 'WPM',
  'common.accuracy': 'Accuracy',
  'common.time': 'Time',
  'common.errors': 'Errors',
  'common.cancel': 'Cancel',
  'common.save': 'Save',
  'common.delete': 'Delete',
  'common.loading': 'Loading...',
  'common.error': 'Error',
  'common.success': 'Success',

  // Days of week
  'days.mon': 'Mon',
  'days.tue': 'Tue',
  'days.wed': 'Wed',
  'days.thu': 'Thu',
  'days.fri': 'Fri',
  'days.sat': 'Sat',
  'days.sun': 'Sun',

  // Dev Tools - Terminal
  'terminal.title': 'Terminal Training',
  'terminal.commands': 'Commands',
  'terminal.training': 'Training',
  'terminal.freeMode': 'Free Mode',
  'terminal.all': 'All',
  'terminal.noCommands': 'No commands found.',
  'terminal.beginner': 'Beginner',
  'terminal.intermediate': 'Intermediate',
  'terminal.advanced': 'Advanced',
  'terminal.example': 'Example',
  'terminal.task': 'Task',
  'terminal.correct': 'Correct',
  'terminal.errors': 'Errors',
  'terminal.time': 'Time',
  'terminal.showHint': 'Show Hint',
  'terminal.showSolution': 'Show Solution',
  'terminal.skip': 'Skip',
  'terminal.endTraining': 'End Training',
  'terminal.hint': 'Hint',
  'terminal.howItWorks': 'How it works:',
  'terminal.howItWorksDesc1': 'You see a task (e.g. "Show all files")',
  'terminal.howItWorksDesc2': 'Type the matching command in terminal',
  'terminal.howItWorksDesc3': 'Press Enter to confirm',
  'terminal.howItWorksDesc4': 'Correct answer: +1 point',
  'terminal.startsWith': 'The command starts with "{cmd}"',
  'terminal.freeDescription':
    'Practice commands without guidelines. The system recognizes valid commands and shows explanations.',
  'terminal.quickRef': 'Quick Reference',
  'terminal.typeHere': 'Type your command here...',
  'terminal.correctAnswer': 'Correct!',
  'terminal.wrongAnswer': 'Wrong. Expected: {expected}',
  'terminal.solutionShown': '(Solution shown)',
  'terminal.solution': 'Solution: {solution}',
  'terminal.trainingComplete': 'Training complete! {score} correct, {accuracy}% accuracy in {time}',
  'terminal.learnCommands': 'Learn {name} commands through interactive practice!',
  'terminal.chooseCategory': 'Choose a category to start:',
  'terminal.recognizedCmd':
    'Command "{cmd}" recognized, but this specific variant is not in the reference.',
  'terminal.unknownCmd': 'Unknown command: {cmd}\nTip: Check the quick reference below!',
  'terminal.possibleOptions': 'Possible options:',
  'terminal.completed': 'completed',

  // Dev Tools - Git
  'git.title': 'Git & GitHub Training',
  'git.subtitle': 'Learn Git commands and workflows by typing',
  'git.commands': 'Commands',
  'git.training': 'Training',
  'git.freeMode': 'Free Mode',
  'git.workflow': 'Workflows',
  'git.basics': 'Basics',
  'git.branching': 'Branching',
  'git.remote': 'Remote',
  'git.advanced': 'Advanced',
  'git.githubCli': 'GitHub CLI',
  'git.command': 'Command',
  'git.wpm': 'WPM',
  'git.accuracy': 'Accuracy',
  'git.errors': 'Errors',
  'git.navigationHint':
    'Type the command. Press <kbd>Enter</kbd> when done, <kbd>Tab</kbd> to skip.',
  'git.noCommands': 'No commands in this category.',
  'git.chooseWorkflow': 'Choose a Workflow',
  'git.steps': '{count} steps',
  'git.step': 'Step {current}/{total}',
  'git.back': 'Back',
  'git.workflowComplete': 'Workflow completed!',
  'git.allComplete': 'All commands completed!',
  'git.done': 'Done',

  // Dev Tools - Vim
  'vim.title': 'Vim Training',
  'vim.subtitle': 'Master Vim commands and become more efficient',
  'vim.commands': 'Commands',
  'vim.training': 'Training',
  'vim.practice': 'Practice',
  'vim.currentMode': 'Current Mode',
  'vim.movement': 'Movement',
  'vim.editing': 'Editing',
  'vim.visualMode': 'Visual Mode',
  'vim.search': 'Search',
  'vim.files': 'Files',
  'vim.advanced': 'Advanced',
  'vim.command': 'Command',
  'vim.wpm': 'WPM',
  'vim.accuracy': 'Accuracy',
  'vim.errors': 'Errors',
  'vim.type': 'Type:',
  'vim.navigationHint':
    'Type the key combination. <kbd>Tab</kbd> to skip, <kbd>Escape</kbd> to reset.',
  'vim.quickRef': 'Quick Reference',
  'vim.noCommands': 'No commands in this category.',
  'vim.allComplete': 'All {count} Vim commands in "{category}" completed!',

  // Dev Tools - Regex
  'regex.title': 'Regex Training',
  'regex.patterns': 'Patterns',
  'regex.training': 'Training',
  'regex.playground': 'Playground',

  // Dev Tools - Algorithms
  'algo.title': 'Algorithm Training',
  'algo.browse': 'Browse',
  'algo.practice': 'Practice',
  'algo.challenges': 'Challenges',

  // Dev Tools - SQL
  'sql.title': 'SQL Training',
  'sql.commands': 'Commands',
  'sql.training': 'Training',
  'sql.playground': 'Playground',

  // Common Dev Tools
  'devtools.difficulty': 'Difficulty',
  'devtools.category': 'Category',
  'devtools.startTraining': 'Start Training',
  'devtools.progress': 'Progress',
  'devtools.score': 'Score',

  // Settings
  'settings.title': 'Settings',
  'settings.display': 'Display',
  'settings.theme': 'Theme',
  'settings.themeDescription': 'Application color scheme',
  'settings.themeDark': 'Dark',
  'settings.themeLight': 'Light',
  'settings.themeAuto': 'Auto',
  'settings.fontSize': 'Font Size',
  'settings.fontSizeDescription': 'Size of practice text',
  'settings.fontSizeSmall': 'Small',
  'settings.fontSizeMedium': 'Medium',
  'settings.fontSizeLarge': 'Large',
  'settings.showFingerColors': 'Show Finger Colors',
  'settings.showFingerColorsDescription': 'Color coding for keys',
  'settings.highlightNextKey': 'Highlight Next Key',
  'settings.highlightNextKeyDescription': 'Shows the next key to press',
  'settings.sound': 'Sound',
  'settings.soundEnabled': 'Sound Enabled',
  'settings.soundEnabledDescription': 'Turn all sounds on/off',
  'settings.volume': 'Volume',
  'settings.keyPressSound': 'Key Press Sound',
  'settings.keyPressSoundDescription': 'Sound on each keystroke',
  'settings.errorSound': 'Error Sound',
  'settings.errorSoundDescription': 'Sound on typing error',
  'settings.successSound': 'Success Sound',
  'settings.successSoundDescription': 'Sound on lesson completion',
  'settings.typing': 'Typing',
  'settings.keyboardLayout': 'Keyboard Layout',
  'settings.keyboardLayoutDescription': 'German or English layout',
  'settings.layoutQwertz': 'QWERTZ (German)',
  'settings.layoutQwerty': 'QWERTY (English)',
  'settings.defaultTestDuration': 'Default Test Duration',
  'settings.defaultTestDurationDescription': 'For timed tests',
  'settings.seconds': 'seconds',
  'settings.showWPM': 'Show WPM',
  'settings.showWPMDescription': 'Words per minute in header',
  'settings.showAccuracy': 'Show Accuracy',
  'settings.showAccuracyDescription': 'Percentage in header',
  'settings.language': 'Language',
  'settings.languageDescription': 'Interface language',
  'settings.languageEn': 'English',
  'settings.languageDe': 'German',
  'settings.reset': 'Reset',
  'settings.resetConfirm': 'Settings reset',
  'settings.close': 'Close',
};

// German translations
const de: Translations = {
  // Navigation Groups
  'nav.group.core': 'Training',
  'nav.group.devtools': 'Entwickler-Tools',
  'nav.group.coding': 'Programmierung',
  'nav.group.progress': 'Fortschritt',
  'nav.group.compete': 'Wettbewerb',

  // Navigation Items
  'nav.dashboard': 'Dashboard',
  'nav.practice': 'Übung',
  'nav.lessons': 'Lektionen',
  'nav.statistics': 'Statistiken',
  'nav.achievements': 'Erfolge',
  'nav.shortcuts': 'Shortcuts',
  'nav.terminal': 'Terminal',
  'nav.srs': 'SRS Lernen',
  'nav.challenge': 'Tägliche Challenge',
  'nav.quiz': 'Quiz-Modi',
  'nav.code': 'Code-Modus',
  'nav.playground': 'Playground',
  'nav.community': 'Community',
  'nav.race': 'Tipp-Rennen',
  'nav.git': 'Git Training',
  'nav.vim': 'Vim Training',
  'nav.regex': 'Regex Training',
  'nav.algorithms': 'Algorithmen',
  'nav.sql': 'SQL Training',

  // Header
  'header.accuracy': 'Genauigkeit',
  'header.level': 'Level',
  'header.settings': 'Einstellungen',
  'header.quit': 'Beenden',
  'header.shutdown': 'Server beenden',

  // Home Page
  'home.welcome': 'Willkommen bei KeyboardWriter',
  'home.wpmAverage': 'WPM Durchschnitt',
  'home.accuracy': 'Genauigkeit',
  'home.dayStreak': 'Tage Streak',
  'home.lessons': 'Lektionen',
  'home.getStarted': 'Starte jetzt!',
  'home.chooseLesson':
    'Wähle eine Lektion oder starte das freie Üben, um deine Tippfähigkeiten zu verbessern.',
  'home.startPractice': 'Übung starten',

  // Practice Page
  'practice.title': 'Übungsmodus',
  'practice.text': 'Text',
  'practice.timedTest': 'Zeit-Test',
  'practice.beginner': 'Anfänger',
  'practice.intermediate': 'Fortgeschritten',
  'practice.advanced': 'Experte',
  'practice.programming': 'Programmierung',
  'practice.newText': 'Neuer Text',
  'practice.restart': 'Neustart',
  'practice.start': 'Start',
  'practice.seconds': 'Sekunden',
  'practice.time': 'Zeit',
  'practice.remaining': 'Verbleibend',
  'practice.errors': 'Fehler',
  'practice.characters': 'Zeichen',
  'practice.clickToStart': 'Klicke auf "Neuer Text" oder drücke eine Taste, um zu beginnen.',
  'practice.timedTestPrompt': 'Zeit-Test: {duration} Sekunden',
  'practice.clickStartPrompt': 'Klicke auf "Start" oder drücke eine Taste, um zu beginnen.',
  'practice.timesUp': 'Zeit abgelaufen!',
  'practice.tryAgain': 'Nochmal versuchen',
  'practice.complete': 'Geschafft! {wpm} WPM mit {accuracy}% Genauigkeit',
  'practice.timedComplete': 'Zeit-Test beendet! {wpm} WPM mit {accuracy}% Genauigkeit',

  // Statistics Page
  'stats.title': 'Statistiken',
  'stats.avgWpm': 'Durchschn. WPM',
  'stats.peakWpm': 'Höchste WPM',
  'stats.accuracy': 'Genauigkeit',
  'stats.dayStreak': 'Tage Streak',
  'stats.progress': 'Fortschritt',
  'stats.sessions': 'Sessions',
  'stats.practiceTime': 'Übungszeit',
  'stats.keystrokes': 'Tastenanschläge',
  'stats.lessons': 'Lektionen',
  'stats.longestStreak': 'Längster Streak',
  'stats.wpmHistory': 'WPM Verlauf',
  'stats.accuracyHistory': 'Genauigkeit Verlauf',
  'stats.keyboardHeatmap': 'Tastatur-Heatmap',
  'stats.heatmapDescription':
    'Zeigt deine Fehlerquote pro Taste. Rote Tasten benötigen mehr Übung.',
  'stats.weeklyActivity': 'Wochenaktivität',
  'stats.less': 'Weniger',
  'stats.more': 'Mehr',

  // Achievements
  'achievements.title': 'Erfolge',
  'achievements.all': 'Alle',
  'achievements.speed': 'Geschwindigkeit',
  'achievements.accuracy': 'Genauigkeit',
  'achievements.consistency': 'Beständigkeit',
  'achievements.milestones': 'Meilensteine',
  'achievements.special': 'Spezial',
  'achievements.unlocked': 'Freigeschaltet',
  'achievements.progress': 'Fortschritt',
  'achievements.legendary': 'Legendär',
  'achievements.epic': 'Episch',
  'achievements.completed': '{progress}% abgeschlossen',
  'achievements.xpEarned': '+{xp} XP erhalten',
  'achievements.nextLevel': 'Nächstes Level in {xp} XP',

  // Lessons
  'lessons.title': 'Lektionen',
  'lessons.back': 'Zurück',
  'lessons.quit': 'Beenden',
  'lessons.skip': 'Überspringen',
  'lessons.completed': '{completed} von {total} Lektionen abgeschlossen',
  'lessons.exerciseOf': 'Übung {current} von {total}',
  'lessons.exercises': '{count} Übungen',
  'lessons.pressToStart': 'Drücke eine Taste, um zu beginnen.',
  'lessons.goal': 'Ziel: {wpm} WPM · {accuracy}% Genauigkeit',
  'lessons.passed': 'Lektion bestanden! {wpm} WPM · {accuracy}% · +{xp} XP',
  'lessons.ended': 'Lektion beendet. {wpm} WPM · {accuracy}%',

  // Common
  'common.wpm': 'WPM',
  'common.accuracy': 'Genauigkeit',
  'common.time': 'Zeit',
  'common.errors': 'Fehler',
  'common.cancel': 'Abbrechen',
  'common.save': 'Speichern',
  'common.delete': 'Löschen',
  'common.loading': 'Laden...',
  'common.error': 'Fehler',
  'common.success': 'Erfolg',

  // Days of week
  'days.mon': 'Mo',
  'days.tue': 'Di',
  'days.wed': 'Mi',
  'days.thu': 'Do',
  'days.fri': 'Fr',
  'days.sat': 'Sa',
  'days.sun': 'So',

  // Dev Tools - Terminal
  'terminal.title': 'Terminal Training',
  'terminal.commands': 'Befehle',
  'terminal.training': 'Training',
  'terminal.freeMode': 'Freier Modus',
  'terminal.all': 'Alle',
  'terminal.noCommands': 'Keine Befehle gefunden.',
  'terminal.beginner': 'Anfänger',
  'terminal.intermediate': 'Fortgeschritten',
  'terminal.advanced': 'Experte',
  'terminal.example': 'Beispiel',
  'terminal.task': 'Aufgabe',
  'terminal.correct': 'Richtig',
  'terminal.errors': 'Fehler',
  'terminal.time': 'Zeit',
  'terminal.showHint': 'Tipp anzeigen',
  'terminal.showSolution': 'Lösung zeigen',
  'terminal.skip': 'Überspringen',
  'terminal.endTraining': 'Training beenden',
  'terminal.hint': 'Tipp',
  'terminal.howItWorks': "So funktioniert's:",
  'terminal.howItWorksDesc1': 'Du siehst eine Aufgabe (z.B. "Zeige alle Dateien")',
  'terminal.howItWorksDesc2': 'Tippe den passenden Befehl ins Terminal',
  'terminal.howItWorksDesc3': 'Drücke Enter zum Bestätigen',
  'terminal.howItWorksDesc4': 'Bei richtiger Antwort: +1 Punkt',
  'terminal.startsWith': 'Der Befehl beginnt mit "{cmd}"',
  'terminal.freeDescription':
    'Übe Befehle ohne Vorgaben. Das System erkennt gültige Befehle und zeigt Erklärungen an.',
  'terminal.quickRef': 'Schnellreferenz',
  'terminal.typeHere': 'Tippe deinen Befehl hier...',
  'terminal.correctAnswer': 'Richtig!',
  'terminal.wrongAnswer': 'Falsch. Erwartet: {expected}',
  'terminal.solutionShown': '(Lösung angezeigt)',
  'terminal.solution': 'Lösung: {solution}',
  'terminal.trainingComplete':
    'Training beendet! {score} richtig, {accuracy}% Genauigkeit in {time}',
  'terminal.learnCommands': 'Lerne {name}-Befehle durch interaktives Üben!',
  'terminal.chooseCategory': 'Wähle eine Kategorie zum Starten:',
  'terminal.recognizedCmd':
    'Befehl "{cmd}" erkannt, aber diese spezifische Variante ist nicht in der Referenz.',
  'terminal.unknownCmd': 'Unbekannter Befehl: {cmd}\nTipp: Schau in die Schnellreferenz unten!',
  'terminal.possibleOptions': 'Mögliche Optionen:',
  'terminal.completed': 'abgeschlossen',

  // Dev Tools - Git
  'git.title': 'Git & GitHub Training',
  'git.subtitle': 'Lerne Git-Befehle und Workflows durch Tippen',
  'git.commands': 'Befehle',
  'git.training': 'Training',
  'git.freeMode': 'Freier Modus',
  'git.workflow': 'Workflows',
  'git.basics': 'Grundlagen',
  'git.branching': 'Branching',
  'git.remote': 'Remote',
  'git.advanced': 'Fortgeschritten',
  'git.githubCli': 'GitHub CLI',
  'git.command': 'Befehl',
  'git.wpm': 'WPM',
  'git.accuracy': 'Genauigkeit',
  'git.errors': 'Fehler',
  'git.navigationHint':
    'Tippe den Befehl ein. Drücke <kbd>Enter</kbd> wenn fertig, <kbd>Tab</kbd> zum Überspringen.',
  'git.noCommands': 'Keine Befehle in dieser Kategorie.',
  'git.chooseWorkflow': 'Wähle einen Workflow',
  'git.steps': '{count} Schritte',
  'git.step': 'Schritt {current}/{total}',
  'git.back': 'Zurück',
  'git.workflowComplete': 'Workflow abgeschlossen!',
  'git.allComplete': 'Alle Befehle abgeschlossen!',
  'git.done': 'Fertig',

  // Dev Tools - Vim
  'vim.title': 'Vim Training',
  'vim.subtitle': 'Meistere Vim-Befehle und werde effizienter',
  'vim.commands': 'Befehle',
  'vim.training': 'Training',
  'vim.practice': 'Übung',
  'vim.currentMode': 'Aktueller Modus',
  'vim.movement': 'Bewegung',
  'vim.editing': 'Bearbeiten',
  'vim.visualMode': 'Visual Mode',
  'vim.search': 'Suchen',
  'vim.files': 'Dateien',
  'vim.advanced': 'Fortgeschritten',
  'vim.command': 'Befehl',
  'vim.wpm': 'WPM',
  'vim.accuracy': 'Genauigkeit',
  'vim.errors': 'Fehler',
  'vim.type': 'Tippe:',
  'vim.navigationHint':
    'Tippe die Tastenkombination. <kbd>Tab</kbd> zum Überspringen, <kbd>Escape</kbd> zum Zurücksetzen.',
  'vim.quickRef': 'Schnellreferenz',
  'vim.noCommands': 'Keine Befehle in dieser Kategorie.',
  'vim.allComplete': 'Alle {count} Vim-Befehle in "{category}" abgeschlossen!',

  // Dev Tools - Regex
  'regex.title': 'Regex Training',
  'regex.patterns': 'Muster',
  'regex.training': 'Training',
  'regex.playground': 'Spielplatz',

  // Dev Tools - Algorithms
  'algo.title': 'Algorithmen Training',
  'algo.browse': 'Durchsuchen',
  'algo.practice': 'Üben',
  'algo.challenges': 'Herausforderungen',

  // Dev Tools - SQL
  'sql.title': 'SQL Training',
  'sql.commands': 'Befehle',
  'sql.training': 'Training',
  'sql.playground': 'Spielplatz',

  // Common Dev Tools
  'devtools.difficulty': 'Schwierigkeit',
  'devtools.category': 'Kategorie',
  'devtools.startTraining': 'Training starten',
  'devtools.progress': 'Fortschritt',
  'devtools.score': 'Punkte',

  // Settings
  'settings.title': 'Einstellungen',
  'settings.display': 'Anzeige',
  'settings.theme': 'Theme',
  'settings.themeDescription': 'Farbschema der Anwendung',
  'settings.themeDark': 'Dunkel',
  'settings.themeLight': 'Hell',
  'settings.themeAuto': 'Automatisch',
  'settings.fontSize': 'Schriftgröße',
  'settings.fontSizeDescription': 'Größe des Übungstexts',
  'settings.fontSizeSmall': 'Klein',
  'settings.fontSizeMedium': 'Mittel',
  'settings.fontSizeLarge': 'Groß',
  'settings.showFingerColors': 'Finger-Farben anzeigen',
  'settings.showFingerColorsDescription': 'Farbcodierung der Tasten',
  'settings.highlightNextKey': 'Nächste Taste hervorheben',
  'settings.highlightNextKeyDescription': 'Zeigt die nächste zu drückende Taste',
  'settings.sound': 'Sound',
  'settings.soundEnabled': 'Sound aktiviert',
  'settings.soundEnabledDescription': 'Alle Sounds ein/ausschalten',
  'settings.volume': 'Lautstärke',
  'settings.keyPressSound': 'Tastenanschlag-Sound',
  'settings.keyPressSoundDescription': 'Sound bei jedem Tastendruck',
  'settings.errorSound': 'Fehler-Sound',
  'settings.errorSoundDescription': 'Sound bei Tippfehler',
  'settings.successSound': 'Erfolgs-Sound',
  'settings.successSoundDescription': 'Sound bei Lektion-Abschluss',
  'settings.typing': 'Tippen',
  'settings.keyboardLayout': 'Tastatur-Layout',
  'settings.keyboardLayoutDescription': 'Deutsches oder englisches Layout',
  'settings.layoutQwertz': 'QWERTZ (Deutsch)',
  'settings.layoutQwerty': 'QWERTY (Englisch)',
  'settings.defaultTestDuration': 'Standard Test-Dauer',
  'settings.defaultTestDurationDescription': 'Für zeitbasierte Tests',
  'settings.seconds': 'Sekunden',
  'settings.showWPM': 'WPM anzeigen',
  'settings.showWPMDescription': 'Wörter pro Minute im Header',
  'settings.showAccuracy': 'Genauigkeit anzeigen',
  'settings.showAccuracyDescription': 'Prozent im Header',
  'settings.language': 'Sprache',
  'settings.languageDescription': 'Sprache der Oberfläche',
  'settings.languageEn': 'Englisch',
  'settings.languageDe': 'Deutsch',
  'settings.reset': 'Zurücksetzen',
  'settings.resetConfirm': 'Einstellungen zurückgesetzt',
  'settings.close': 'Schließen',
};

const translations: Record<Language, Translations> = { en, de };

// Storage key for language preference
const STORAGE_KEY = 'keyboardwriter_language';

/**
 * i18n Service class
 */
class I18nService {
  private currentLanguage: Language = 'en';
  private readonly listeners: Set<() => void> = new Set();

  constructor() {
    this.loadLanguage();
  }

  /**
   * Load language from storage
   */
  private loadLanguage(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'de' || saved === 'en') {
      this.currentLanguage = saved;
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.toLowerCase();
      this.currentLanguage = browserLang.startsWith('de') ? 'de' : 'en';
    }
  }

  /**
   * Get current language
   */
  getLanguage(): Language {
    return this.currentLanguage;
  }

  /**
   * Set language
   */
  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    this.notifyListeners();
  }

  /**
   * Toggle between languages
   */
  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage === 'en' ? 'de' : 'en');
  }

  /**
   * Get translation for key
   */
  t(key: string, params?: Record<string, string | number>): string {
    const translation = translations[this.currentLanguage][key] || translations['en'][key] || key;

    if (params) {
      return translation.replace(/\{(\w+)\}/g, (_, paramKey: string) => {
        return String(params[paramKey] ?? `{${paramKey}}`);
      });
    }

    return translation;
  }

  /**
   * Subscribe to language changes
   */
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Notify all listeners of language change
   */
  private notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
}

// Export singleton instance
export const i18n = new I18nService();

// Export convenience function
export function t(key: string, params?: Record<string, string | number>): string {
  return i18n.t(key, params);
}
