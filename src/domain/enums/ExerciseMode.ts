/**
 * Exercise modes for different practice types
 */
export enum ExerciseMode {
  // Standard modes
  LESSON = 'lesson',
  FREE_TYPING = 'free-typing',
  SPEED_TEST = 'speed-test',
  WEAKNESS_TRAINING = 'weakness-training',
  CODE_MODE = 'code-mode',
  SHORTCUT_MODE = 'shortcut-mode',

  // Advanced training modes
  DICTATION = 'dictation', // Text shown briefly, then hidden - type from memory
  BLIND_TYPING = 'blind-typing', // Virtual keyboard hidden
  TIME_PRESSURE = 'time-pressure', // Timed exercises with countdown
  ERROR_CORRECTION = 'error-correction', // Correct pre-typed text with mistakes
  WARMUP = 'warmup', // Quick warmup exercises before main practice
  ENDURANCE = 'endurance', // Long typing sessions for stamina
}

/**
 * Exercise mode configuration
 */
export interface ExerciseModeConfig {
  mode: ExerciseMode;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  estimatedMinutes: number;
  requiresKeyboardVisible?: boolean;
  hasTimeLimit?: boolean;
  timeLimitSeconds?: number;
}

/**
 * Default configurations for all exercise modes
 */
export const EXERCISE_MODE_CONFIGS: Record<ExerciseMode, ExerciseModeConfig> = {
  [ExerciseMode.LESSON]: {
    mode: ExerciseMode.LESSON,
    name: 'Lektion',
    nameEn: 'Lesson',
    description: 'Strukturierte Lektionen zum Erlernen neuer Tasten',
    descriptionEn: 'Structured lessons for learning new keys',
    icon: 'book',
    difficulty: 'beginner',
    estimatedMinutes: 5,
    requiresKeyboardVisible: true,
  },
  [ExerciseMode.FREE_TYPING]: {
    mode: ExerciseMode.FREE_TYPING,
    name: 'Freies Tippen',
    nameEn: 'Free Typing',
    description: 'Tippe beliebige Texte ohne Vorgaben',
    descriptionEn: 'Type any text without restrictions',
    icon: 'edit',
    difficulty: 'beginner',
    estimatedMinutes: 10,
  },
  [ExerciseMode.SPEED_TEST]: {
    mode: ExerciseMode.SPEED_TEST,
    name: 'Geschwindigkeitstest',
    nameEn: 'Speed Test',
    description: 'Teste deine Tippgeschwindigkeit',
    descriptionEn: 'Test your typing speed',
    icon: 'zap',
    difficulty: 'intermediate',
    estimatedMinutes: 2,
    hasTimeLimit: true,
    timeLimitSeconds: 60,
  },
  [ExerciseMode.WEAKNESS_TRAINING]: {
    mode: ExerciseMode.WEAKNESS_TRAINING,
    name: 'Schwachstellen-Training',
    nameEn: 'Weakness Training',
    description: 'Trainiere gezielt deine Problemtasten',
    descriptionEn: 'Practice your problem keys',
    icon: 'target',
    difficulty: 'intermediate',
    estimatedMinutes: 5,
  },
  [ExerciseMode.CODE_MODE]: {
    mode: ExerciseMode.CODE_MODE,
    name: 'Code-Modus',
    nameEn: 'Code Mode',
    description: 'Tippe echten Programmcode',
    descriptionEn: 'Type real programming code',
    icon: 'code',
    difficulty: 'advanced',
    estimatedMinutes: 10,
  },
  [ExerciseMode.SHORTCUT_MODE]: {
    mode: ExerciseMode.SHORTCUT_MODE,
    name: 'Tastenkombinationen',
    nameEn: 'Shortcuts',
    description: 'Lerne wichtige Tastenkombinationen',
    descriptionEn: 'Learn important keyboard shortcuts',
    icon: 'command',
    difficulty: 'intermediate',
    estimatedMinutes: 5,
  },
  [ExerciseMode.DICTATION]: {
    mode: ExerciseMode.DICTATION,
    name: 'Diktat-Modus',
    nameEn: 'Dictation Mode',
    description: 'Text wird kurz gezeigt, dann versteckt - tippe aus dem Gedaechtnis',
    descriptionEn: 'Text is shown briefly, then hidden - type from memory',
    icon: 'eye-off',
    difficulty: 'advanced',
    estimatedMinutes: 5,
  },
  [ExerciseMode.BLIND_TYPING]: {
    mode: ExerciseMode.BLIND_TYPING,
    name: 'Blindschreiben',
    nameEn: 'Blind Typing',
    description: 'Tippe ohne auf die virtuelle Tastatur zu schauen',
    descriptionEn: 'Type without looking at the virtual keyboard',
    icon: 'eye-off',
    difficulty: 'advanced',
    estimatedMinutes: 5,
    requiresKeyboardVisible: false,
  },
  [ExerciseMode.TIME_PRESSURE]: {
    mode: ExerciseMode.TIME_PRESSURE,
    name: 'Zeitdruck',
    nameEn: 'Time Pressure',
    description: 'Tippe so schnell wie moeglich gegen die Zeit',
    descriptionEn: 'Type as fast as possible against the clock',
    icon: 'clock',
    difficulty: 'advanced',
    estimatedMinutes: 3,
    hasTimeLimit: true,
    timeLimitSeconds: 30,
  },
  [ExerciseMode.ERROR_CORRECTION]: {
    mode: ExerciseMode.ERROR_CORRECTION,
    name: 'Fehlerkorrektur',
    nameEn: 'Error Correction',
    description: 'Finde und korrigiere Tippfehler in einem Text',
    descriptionEn: 'Find and correct typos in a text',
    icon: 'alert-circle',
    difficulty: 'intermediate',
    estimatedMinutes: 5,
  },
  [ExerciseMode.WARMUP]: {
    mode: ExerciseMode.WARMUP,
    name: 'Aufwaermen',
    nameEn: 'Warmup',
    description: 'Kurze Aufwaermübungen vor dem Haupttraining',
    descriptionEn: 'Quick warmup exercises before main practice',
    icon: 'sun',
    difficulty: 'beginner',
    estimatedMinutes: 2,
  },
  [ExerciseMode.ENDURANCE]: {
    mode: ExerciseMode.ENDURANCE,
    name: 'Ausdauer',
    nameEn: 'Endurance',
    description: 'Lange Tipp-Sessions fuer mehr Ausdauer',
    descriptionEn: 'Long typing sessions for stamina',
    icon: 'battery-charging',
    difficulty: 'expert',
    estimatedMinutes: 15,
  },
};
