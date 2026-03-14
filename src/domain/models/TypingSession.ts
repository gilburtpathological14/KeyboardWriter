import { Finger } from '../enums';

/**
 * Represents a single keystroke during a typing session
 */
export interface Keystroke {
  key: string;
  code: string;
  timestamp: number;
  isCorrect: boolean;
  expectedKey: string;
  timeSinceLastKey: number;
  finger?: Finger;
}

/**
 * Represents a typing error
 */
export interface TypingError {
  position: number;
  expectedChar: string;
  actualChar: string;
  timestamp: number;
}

/**
 * Represents a complete typing session
 */
export interface TypingSession {
  id: string;
  lessonId: string;
  exerciseId: string;
  startTime: number;
  endTime?: number;
  targetText: string;
  currentPosition: number;
  keystrokes: Keystroke[];
  errors: TypingError[];
  isComplete: boolean;
  isPaused: boolean;
}

/**
 * Real-time statistics during a session
 */
export interface SessionStats {
  wpm: number;
  rawWpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
  totalChars: number;
  elapsedTime: number;
  errorsCount: number;
}

/**
 * Calculate WPM (Words Per Minute)
 * Standard: 5 characters = 1 word
 */
export function calculateWPM(correctChars: number, elapsedTimeMs: number): number {
  if (elapsedTimeMs === 0) {
    return 0;
  }
  const minutes = elapsedTimeMs / 60000;
  const words = correctChars / 5;
  return Math.round(words / minutes);
}

/**
 * Calculate raw WPM (including errors)
 */
export function calculateRawWPM(totalChars: number, elapsedTimeMs: number): number {
  if (elapsedTimeMs === 0) {
    return 0;
  }
  const minutes = elapsedTimeMs / 60000;
  const words = totalChars / 5;
  return Math.round(words / minutes);
}

/**
 * Calculate accuracy percentage
 */
export function calculateAccuracy(correctChars: number, totalChars: number): number {
  if (totalChars === 0) {
    return 100;
  }
  return Math.round((correctChars / totalChars) * 1000) / 10;
}

/**
 * Create a new typing session
 */
export function createTypingSession(
  lessonId: string,
  exerciseId: string,
  targetText: string
): TypingSession {
  return {
    id: `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    lessonId,
    exerciseId,
    startTime: Date.now(),
    targetText,
    currentPosition: 0,
    keystrokes: [],
    errors: [],
    isComplete: false,
    isPaused: false,
  };
}

/**
 * Get session statistics
 */
export function getSessionStats(session: TypingSession): SessionStats {
  const correctChars = session.keystrokes.filter(k => k.isCorrect).length;
  const incorrectChars = session.keystrokes.filter(k => !k.isCorrect).length;
  const totalChars = session.keystrokes.length;
  const elapsedTime = session.endTime
    ? session.endTime - session.startTime
    : Date.now() - session.startTime;

  return {
    wpm: calculateWPM(correctChars, elapsedTime),
    rawWpm: calculateRawWPM(totalChars, elapsedTime),
    accuracy: calculateAccuracy(correctChars, totalChars),
    correctChars,
    incorrectChars,
    totalChars,
    elapsedTime,
    errorsCount: session.errors.length,
  };
}
