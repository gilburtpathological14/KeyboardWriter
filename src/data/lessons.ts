import { LessonType } from '../domain/enums';
import { Lesson, LessonCategory, ProgrammingLesson, ShortcutLesson } from '../domain/models';
import {
  COMPLEX_TEXTS,
  EXPERT_TEXTS,
  MEDIUM_TEXTS,
  MICRO_EXERCISES,
  PracticeText,
  SIMPLE_TEXTS,
} from './practiceTexts';

/**
 * Helper function to convert PracticeText to Lesson exercises
 */
function practiceTextsToExercises(
  texts: PracticeText[],
  language: 'de' | 'en' = 'de'
): Array<{ id: string; text: string; description: string }> {
  return texts.map(t => ({
    id: t.id,
    text: language === 'de' ? t.textDe : t.textEn,
    description: t.description || `Level ${t.level} - ${t.category}`,
  }));
}

/**
 * ============================================================================
 * MICRO LESSONS - Level 0 (Pre-Beginner / Absolute Anfänger)
 * Single keys, two-letter combinations - the most basic building blocks
 * ============================================================================
 */
export const MICRO_LESSONS: Lesson[] = [
  {
    id: 'micro-single-keys',
    title: 'Einzelne Tasten',
    description: 'Die allerersten Schritte - einzelne Tasten der Grundreihe',
    type: LessonType.BASICS,
    category: 'micro',
    level: 0,
    targetWPM: 5,
    targetAccuracy: 98,
    requiredKeys: ['f', 'j', 'd', 'k', 's', 'l', 'a'],
    exercises: practiceTextsToExercises(MICRO_EXERCISES.slice(0, 7)),
  },
  {
    id: 'micro-two-letter-same',
    title: 'Zwei-Buchstaben (gleiche Hand)',
    description: 'Kombinationen mit der gleichen Hand',
    type: LessonType.BASICS,
    category: 'micro',
    level: 0,
    targetWPM: 8,
    targetAccuracy: 95,
    requiredKeys: ['a', 's', 'd', 'f', 'j', 'k', 'l'],
    exercises: practiceTextsToExercises(MICRO_EXERCISES.slice(7, 11)),
  },
  {
    id: 'micro-two-letter-alt',
    title: 'Zwei-Buchstaben (Handwechsel)',
    description: 'Kombinationen mit Handwechsel - schneller tippen',
    type: LessonType.BASICS,
    category: 'micro',
    level: 0,
    targetWPM: 10,
    targetAccuracy: 95,
    requiredKeys: ['f', 'j', 'd', 'k', 's', 'l', 'a'],
    exercises: practiceTextsToExercises(MICRO_EXERCISES.slice(11, 15)),
  },
  {
    id: 'micro-short-words',
    title: 'Kürzeste Wörter',
    description: 'Zwei- und Drei-Buchstaben-Wörter',
    type: LessonType.BASICS,
    category: 'micro',
    level: 0,
    targetWPM: 10,
    targetAccuracy: 92,
    exercises: practiceTextsToExercises(MICRO_EXERCISES.slice(15, 23)),
  },
  {
    id: 'micro-vowels-ei',
    title: 'Vokale E und I',
    description: 'Die wichtigsten Vokale hinzufügen',
    type: LessonType.BASICS,
    category: 'micro',
    level: 0,
    targetWPM: 10,
    targetAccuracy: 92,
    requiredKeys: ['e', 'i'],
    exercises: practiceTextsToExercises(MICRO_EXERCISES.slice(23, 30)),
  },
];

/**
 * ============================================================================
 * PRACTICE TEXT LESSONS - Bilingual exercises from practiceTexts.ts
 * ============================================================================
 */
export const PRACTICE_TEXT_LESSONS: Lesson[] = [
  // Simple texts - German
  {
    id: 'practice-simple-de',
    title: 'Einfache Sätze (Deutsch)',
    description: 'Kurze, einfache Sätze für Anfänger',
    type: LessonType.WORDS,
    category: 'practice',
    level: 1,
    targetWPM: 20,
    targetAccuracy: 90,
    exercises: practiceTextsToExercises(SIMPLE_TEXTS, 'de'),
  },
  // Simple texts - English
  {
    id: 'practice-simple-en',
    title: 'Simple Sentences (English)',
    description: 'Short, simple sentences for beginners',
    type: LessonType.WORDS,
    category: 'practice',
    level: 1,
    targetWPM: 20,
    targetAccuracy: 90,
    exercises: practiceTextsToExercises(SIMPLE_TEXTS, 'en'),
  },
  // Medium texts - German
  {
    id: 'practice-medium-de',
    title: 'Mittlere Sätze (Deutsch)',
    description: 'Sprichwörter, Alltagssituationen, Arbeit',
    type: LessonType.WORDS,
    category: 'practice',
    level: 3,
    targetWPM: 30,
    targetAccuracy: 88,
    exercises: practiceTextsToExercises(MEDIUM_TEXTS, 'de'),
  },
  // Medium texts - English
  {
    id: 'practice-medium-en',
    title: 'Medium Sentences (English)',
    description: 'Proverbs, everyday situations, work',
    type: LessonType.WORDS,
    category: 'practice',
    level: 3,
    targetWPM: 30,
    targetAccuracy: 88,
    exercises: practiceTextsToExercises(MEDIUM_TEXTS, 'en'),
  },
  // Complex texts - German
  {
    id: 'practice-complex-de',
    title: 'Komplexe Texte (Deutsch)',
    description: 'Zitate, Business, Technologie, Wissenschaft',
    type: LessonType.WORDS,
    category: 'practice',
    level: 5,
    targetWPM: 40,
    targetAccuracy: 85,
    exercises: practiceTextsToExercises(COMPLEX_TEXTS, 'de'),
  },
  // Complex texts - English
  {
    id: 'practice-complex-en',
    title: 'Complex Texts (English)',
    description: 'Quotes, business, technology, science',
    type: LessonType.WORDS,
    category: 'practice',
    level: 5,
    targetWPM: 40,
    targetAccuracy: 85,
    exercises: practiceTextsToExercises(COMPLEX_TEXTS, 'en'),
  },
  // Expert texts - German
  {
    id: 'practice-expert-de',
    title: 'Experten-Texte (Deutsch)',
    description: 'Technische Dokumentation, Rechtliches, Wissenschaft',
    type: LessonType.WORDS,
    category: 'practice',
    level: 6,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: practiceTextsToExercises(EXPERT_TEXTS, 'de'),
  },
  // Expert texts - English
  {
    id: 'practice-expert-en',
    title: 'Expert Texts (English)',
    description: 'Technical documentation, legal, scientific',
    type: LessonType.WORDS,
    category: 'practice',
    level: 6,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: practiceTextsToExercises(EXPERT_TEXTS, 'en'),
  },
];

/**
 * ============================================================================
 * BEGINNER LESSONS - Level 1 (Absolute Anfänger)
 * Nur Grundreihe, sehr einfache Wiederholungen
 * ============================================================================
 */
export const BEGINNER_LESSONS: Lesson[] = [
  // ========== HOME ROW INTRODUCTION ==========
  {
    id: 'beginner-01',
    title: 'Erste Schritte: F und J',
    description: 'Lerne die wichtigsten Tasten: F und J haben Erhebungen zur Orientierung',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 10,
    targetAccuracy: 95,
    requiredKeys: ['f', 'j'],
    exercises: [
      { id: 'beg-01-01', text: 'fff fff fff fff fff fff', description: 'Nur F - langsam' },
      { id: 'beg-01-02', text: 'jjj jjj jjj jjj jjj jjj', description: 'Nur J - langsam' },
      { id: 'beg-01-03', text: 'fff jjj fff jjj fff jjj', description: 'F und J abwechselnd' },
      { id: 'beg-01-04', text: 'fj fj fj fj fj fj fj fj', description: 'Wechsel F-J' },
      { id: 'beg-01-05', text: 'jf jf jf jf jf jf jf jf', description: 'Wechsel J-F' },
      { id: 'beg-01-06', text: 'ff jj ff jj ff jj ff jj', description: 'Doppel-Anschläge' },
      { id: 'beg-01-07', text: 'fjfj fjfj fjfj fjfj fjfj', description: 'Schneller Wechsel' },
      { id: 'beg-01-08', text: 'jfjf jfjf jfjf jfjf jfjf', description: 'Schneller Wechsel 2' },
      { id: 'beg-01-09', text: 'ffj ffj ffj jjf jjf jjf', description: 'Ungleiche Muster' },
      { id: 'beg-01-10', text: 'fjj fjj fjj jff jff jff', description: 'Ungleiche Muster 2' },
      { id: 'beg-01-11', text: 'fff jjj fjfj jfjf fff jjj', description: 'Gemischte Übung' },
      { id: 'beg-01-12', text: 'ffjj ffjj jjff jjff ffjj', description: 'Doppelpaare' },
      { id: 'beg-01-13', text: 'fjfjfj fjfjfj fjfjfj fjfjfj', description: 'Ausdauer' },
      { id: 'beg-01-14', text: 'jfjfjf jfjfjf jfjfjf jfjfjf', description: 'Ausdauer 2' },
      { id: 'beg-01-15', text: 'fff jjj fj jf fjfj jfjf ffjj', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'beginner-02',
    title: 'Linke Hand: A S D F',
    description: 'Die linke Hand auf der Grundposition',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 12,
    targetAccuracy: 92,
    requiredKeys: ['a', 's', 'd', 'f'],
    exercises: [
      { id: 'beg-02-01', text: 'aaa aaa aaa aaa aaa aaa', description: 'Nur A - kleiner Finger' },
      { id: 'beg-02-02', text: 'sss sss sss sss sss sss', description: 'Nur S - Ringfinger' },
      { id: 'beg-02-03', text: 'ddd ddd ddd ddd ddd ddd', description: 'Nur D - Mittelfinger' },
      { id: 'beg-02-04', text: 'fff fff fff fff fff fff', description: 'Nur F - Zeigefinger' },
      { id: 'beg-02-05', text: 'as as as as as as as as', description: 'A und S' },
      { id: 'beg-02-06', text: 'sd sd sd sd sd sd sd sd', description: 'S und D' },
      { id: 'beg-02-07', text: 'df df df df df df df df', description: 'D und F' },
      { id: 'beg-02-08', text: 'asdf asdf asdf asdf asdf', description: 'Alle vier Finger' },
      { id: 'beg-02-09', text: 'fdsa fdsa fdsa fdsa fdsa', description: 'Rückwärts' },
      { id: 'beg-02-10', text: 'asd asd asd dsa dsa dsa', description: 'Drei Finger' },
      { id: 'beg-02-11', text: 'sad sad sad das das das', description: 'Erste Wörter' },
      { id: 'beg-02-12', text: 'fad fad fad dad dad dad', description: 'Weitere Wörter' },
      { id: 'beg-02-13', text: 'asdf fdsa asdf fdsa asdf', description: 'Hin und Her' },
      { id: 'beg-02-14', text: 'aass ddff aass ddff aass', description: 'Doppelbuchstaben' },
      { id: 'beg-02-15', text: 'sad das fad dad asdf fdsa', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'beginner-03',
    title: 'Rechte Hand: J K L Ö',
    description: 'Die rechte Hand auf der Grundposition',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 12,
    targetAccuracy: 92,
    requiredKeys: ['j', 'k', 'l', 'ö'],
    exercises: [
      { id: 'beg-03-01', text: 'jjj jjj jjj jjj jjj jjj', description: 'Nur J - Zeigefinger' },
      { id: 'beg-03-02', text: 'kkk kkk kkk kkk kkk kkk', description: 'Nur K - Mittelfinger' },
      { id: 'beg-03-03', text: 'lll lll lll lll lll lll', description: 'Nur L - Ringfinger' },
      { id: 'beg-03-04', text: 'ööö ööö ööö ööö ööö ööö', description: 'Nur Ö - kleiner Finger' },
      { id: 'beg-03-05', text: 'jk jk jk jk jk jk jk jk', description: 'J und K' },
      { id: 'beg-03-06', text: 'kl kl kl kl kl kl kl kl', description: 'K und L' },
      { id: 'beg-03-07', text: 'lö lö lö lö lö lö lö lö', description: 'L und Ö' },
      { id: 'beg-03-08', text: 'jklö jklö jklö jklö jklö', description: 'Alle vier Finger' },
      { id: 'beg-03-09', text: 'ölkj ölkj ölkj ölkj ölkj', description: 'Rückwärts' },
      { id: 'beg-03-10', text: 'jkl jkl jkl lkj lkj lkj', description: 'Drei Finger' },
      { id: 'beg-03-11', text: 'öl öl öl lök lök lök', description: 'Kombinationen' },
      { id: 'beg-03-12', text: 'jjkk llöö jjkk llöö jjkk', description: 'Doppelbuchstaben' },
      { id: 'beg-03-13', text: 'jklö ölkj jklö ölkj jklö', description: 'Hin und Her' },
      { id: 'beg-03-14', text: 'jöl jöl kjl kjl löj löj', description: 'Sprung-Übung' },
      { id: 'beg-03-15', text: 'öl jkl lkj ölkj jklö löj', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'beginner-04',
    title: 'Grundreihe komplett',
    description: 'Beide Hände zusammen auf der Grundreihe',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 15,
    targetAccuracy: 90,
    requiredKeys: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'ö'],
    exercises: [
      { id: 'beg-04-01', text: 'asdf jklö asdf jklö asdf jklö', description: 'Grundposition' },
      { id: 'beg-04-02', text: 'jklö asdf jklö asdf jklö asdf', description: 'Rechts zuerst' },
      { id: 'beg-04-03', text: 'fjdk slöa fjdk slöa fjdk slöa', description: 'Handwechsel' },
      { id: 'beg-04-04', text: 'asdfjklö asdfjklö asdfjklö', description: 'Durchlauf' },
      { id: 'beg-04-05', text: 'ölkjfdsa ölkjfdsa ölkjfdsa', description: 'Rückwärts' },
      { id: 'beg-04-06', text: 'af af aj aj ak ak al al', description: 'Handwechsel kurz' },
      { id: 'beg-04-07', text: 'sj sk sl dk dl fl fö', description: 'Verschiedene Kombinationen' },
      { id: 'beg-04-08', text: 'fa fa ja ja ka ka la la', description: 'Umgekehrte Paare' },
      { id: 'beg-04-09', text: 'fj dk sl aö fj dk sl aö', description: 'Spiegelpaare' },
      { id: 'beg-04-10', text: 'asdf ölkj asdf ölkj asdf', description: 'Gegensätze' },
      { id: 'beg-04-11', text: 'fjfjfj dkdkdk slslsl aöaö', description: 'Wiederholungen' },
      { id: 'beg-04-12', text: 'asjl döfk asjl döfk asjl', description: 'Kreuz-Übung' },
      { id: 'beg-04-13', text: 'asdfasdf jklöjklö asdfasdf', description: 'Lange Sequenzen' },
      { id: 'beg-04-14', text: 'fj fj dk dk sl sl aö aö', description: 'Paar-Wiederholung' },
      { id: 'beg-04-15', text: 'asdf jklö fdsa ölkj asdf jklö', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'beginner-05',
    title: 'Erste einfache Wörter',
    description: 'Wörter nur mit Grundreihe-Buchstaben',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 15,
    targetAccuracy: 90,
    requiredKeys: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'ö'],
    exercises: [
      { id: 'beg-05-01', text: 'das das das das das das', description: 'Wort: das' },
      { id: 'beg-05-02', text: 'lass lass lass lass lass', description: 'Wort: lass' },
      { id: 'beg-05-03', text: 'fall fall fall fall fall', description: 'Wort: fall' },
      { id: 'beg-05-04', text: 'all all all all all all', description: 'Wort: all' },
      { id: 'beg-05-05', text: 'lass das fall all lass das', description: 'Wörter gemischt 1' },
      { id: 'beg-05-06', text: 'salsa salsa falls falls', description: 'Längere Wörter' },
      { id: 'beg-05-07', text: 'falls falls falls falls', description: 'Wort: falls' },
      { id: 'beg-05-08', text: 'lad lad lad lad lad lad', description: 'Wort: lad' },
      { id: 'beg-05-09', text: 'saß saß saß saß saß saß', description: 'Wort: saß' },
      { id: 'beg-05-10', text: 'das all fall lass salsa', description: 'Wörter gemischt 2' },
      { id: 'beg-05-11', text: 'falls das lass all lad', description: 'Wörter gemischt 3' },
      { id: 'beg-05-12', text: 'lass das fall all falls', description: 'Wiederholung' },
      { id: 'beg-05-13', text: 'das das das lass lass lass', description: 'Doppelwörter' },
      { id: 'beg-05-14', text: 'fall fall fall all all all', description: 'Doppelwörter 2' },
      { id: 'beg-05-15', text: 'das lass fall all falls salsa lad', description: 'Alle Wörter' },
    ],
  },
  {
    id: 'beginner-06',
    title: 'G und H hinzufügen',
    description: 'Die Zeigefinger bewegen sich zur Mitte',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 15,
    targetAccuracy: 88,
    requiredKeys: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö'],
    exercises: [
      { id: 'beg-06-01', text: 'ggg ggg ggg ggg ggg ggg', description: 'Nur G' },
      { id: 'beg-06-02', text: 'hhh hhh hhh hhh hhh hhh', description: 'Nur H' },
      { id: 'beg-06-03', text: 'fg fg fg fg fg fg fg fg', description: 'F zu G' },
      { id: 'beg-06-04', text: 'hj hj hj hj hj hj hj hj', description: 'H zu J' },
      { id: 'beg-06-05', text: 'gh gh gh gh gh gh gh gh', description: 'G und H' },
      { id: 'beg-06-06', text: 'fgh fgh fgh ghf ghf ghf', description: 'Zusammen' },
      { id: 'beg-06-07', text: 'glas glas glas glas glas', description: 'Wort: glas' },
      { id: 'beg-06-08', text: 'halb halb halb halb halb', description: 'Wort: halb' },
      { id: 'beg-06-09', text: 'glas halb glas halb glas', description: 'Wörter mit G/H' },
      { id: 'beg-06-10', text: 'asdfg hjklö asdfg hjklö', description: 'Erweiterte Grundreihe' },
      { id: 'beg-06-11', text: 'das glas das glas das glas', description: 'Sätze' },
      { id: 'beg-06-12', text: 'halb glas halb glas halb glas', description: 'Kombinationen' },
      { id: 'beg-06-13', text: 'hag hag hag gah gah gah', description: 'G/H Muster' },
      { id: 'beg-06-14', text: 'ghfj ghfj dkhg dkhg slgh', description: 'Komplexe Muster' },
      { id: 'beg-06-15', text: 'das glas halb falls glas halb', description: 'Abschluss-Mix' },
    ],
  },
  // ========== SPACEBAR INTRODUCTION ==========
  {
    id: 'beginner-07',
    title: 'Die Leertaste',
    description: 'Lerne die Leertaste mit dem Daumen zu bedienen',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 15,
    targetAccuracy: 90,
    requiredKeys: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', ' '],
    exercises: [
      { id: 'beg-07-01', text: 'a a a a a a a a a a', description: 'A mit Leerzeichen' },
      { id: 'beg-07-02', text: 's s s s s s s s s s', description: 'S mit Leerzeichen' },
      { id: 'beg-07-03', text: 'j j j j j j j j j j', description: 'J mit Leerzeichen' },
      { id: 'beg-07-04', text: 'k k k k k k k k k k', description: 'K mit Leerzeichen' },
      { id: 'beg-07-05', text: 'a s d f a s d f a s', description: 'Linke Hand getrennt' },
      { id: 'beg-07-06', text: 'j k l ö j k l ö j k', description: 'Rechte Hand getrennt' },
      { id: 'beg-07-07', text: 'das das das das das das', description: 'Wörter getrennt' },
      { id: 'beg-07-08', text: 'all das fall glas halb lad', description: 'Verschiedene Wörter' },
      { id: 'beg-07-09', text: 'das glas das glas das glas', description: 'Zwei Wörter' },
      { id: 'beg-07-10', text: 'lass das glas halb fall', description: 'Satzteile' },
      { id: 'beg-07-11', text: 'fall das all lass glas', description: 'Mehr Wörter' },
      { id: 'beg-07-12', text: 'das lass fall all glas halb', description: 'Sechs Wörter' },
      { id: 'beg-07-13', text: 'glas glas das das lass lass', description: 'Wort-Paare' },
      { id: 'beg-07-14', text: 'halb fall all das glas lass', description: 'Alle gemischt' },
      { id: 'beg-07-15', text: 'das glas lass fall all halb salsa', description: 'Abschluss' },
    ],
  },
  // ========== SHORT SENTENCES ==========
  {
    id: 'beginner-08',
    title: 'Ganz kurze Sätze',
    description: 'Erste vollständige Sätze mit Grundreihe',
    type: LessonType.BASICS,
    category: 'beginner',
    level: 1,
    targetWPM: 18,
    targetAccuracy: 88,
    requiredKeys: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', ' '],
    exercises: [
      { id: 'beg-08-01', text: 'das glas', description: 'Zwei Wörter 1' },
      { id: 'beg-08-02', text: 'lass das', description: 'Zwei Wörter 2' },
      { id: 'beg-08-03', text: 'halb glas', description: 'Zwei Wörter 3' },
      { id: 'beg-08-04', text: 'das glas da', description: 'Drei Wörter 1' },
      { id: 'beg-08-05', text: 'lass das glas', description: 'Drei Wörter 2' },
      { id: 'beg-08-06', text: 'das halb glas', description: 'Drei Wörter 3' },
      { id: 'beg-08-07', text: 'all das glas da', description: 'Vier Wörter 1' },
      { id: 'beg-08-08', text: 'lass das glas halb', description: 'Vier Wörter 2' },
      { id: 'beg-08-09', text: 'falls das glas da', description: 'Vier Wörter 3' },
      { id: 'beg-08-10', text: 'das glas lass das glas', description: 'Fünf Wörter 1' },
      { id: 'beg-08-11', text: 'halb glas lass das all', description: 'Fünf Wörter 2' },
      { id: 'beg-08-12', text: 'falls das glas da lass', description: 'Fünf Wörter 3' },
      { id: 'beg-08-13', text: 'das glas all das lass glas', description: 'Sechs Wörter' },
      { id: 'beg-08-14', text: 'lass das glas da falls all', description: 'Sechs Wörter 2' },
      {
        id: 'beg-08-15',
        text: 'das glas halb falls all lass da salsa',
        description: 'Langer Satz',
      },
    ],
  },
];

/**
 * ============================================================================
 * BASIC LESSONS - Level 2-3 (Grundlagen erweitern)
 * Obere und untere Reihe hinzufügen
 * ============================================================================
 */
export const BASIC_LESSONS: Lesson[] = [
  // ========== TOP ROW INTRODUCTION ==========
  {
    id: 'basics-01',
    title: 'Obere Reihe: E und I',
    description: 'Die wichtigsten Vokale auf der oberen Reihe',
    type: LessonType.BASICS,
    category: 'basics',
    level: 2,
    targetWPM: 18,
    targetAccuracy: 88,
    requiredKeys: ['e', 'i'],
    exercises: [
      { id: 'bas-01-01', text: 'eee eee eee eee eee eee', description: 'Nur E - langsam' },
      { id: 'bas-01-02', text: 'iii iii iii iii iii iii', description: 'Nur I - langsam' },
      { id: 'bas-01-03', text: 'eee iii eee iii eee iii', description: 'E und I abwechselnd' },
      { id: 'bas-01-04', text: 'ei ei ei ie ie ie ei ie', description: 'Wechsel kurz' },
      { id: 'bas-01-05', text: 'die die die sie sie sie', description: 'Erste Wörter' },
      { id: 'bas-01-06', text: 'sei sei sei lei lei lei', description: 'Weitere Wörter' },
      { id: 'bas-01-07', text: 'die sie die sie die sie', description: 'Wortpaare' },
      { id: 'bas-01-08', text: 'fei dei gei hei fei dei', description: 'EI-Kombinationen' },
      { id: 'bas-01-09', text: 'eiei eiei ieie ieie eiei', description: 'Schnelle Wechsel' },
      { id: 'bas-01-10', text: 'die sei die sei die sei', description: 'Wortpaare 2' },
      { id: 'bas-01-11', text: 'sie die lei sei sie die', description: 'Gemischte Wörter' },
      { id: 'bas-01-12', text: 'deiei seiei deiei seiei', description: 'Komplexe Muster' },
      { id: 'bas-01-13', text: 'die sie sei lei die sie', description: 'Alle Wörter gemischt' },
      { id: 'bas-01-14', text: 'ei ie ei ie ei ie ei ie', description: 'Rhythmus-Übung' },
      { id: 'bas-01-15', text: 'die sei sie lei fei gei', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'basics-02',
    title: 'Obere Reihe: R und U',
    description: 'Zeigefinger auf der oberen Reihe',
    type: LessonType.BASICS,
    category: 'basics',
    level: 2,
    targetWPM: 18,
    targetAccuracy: 88,
    requiredKeys: ['r', 'u'],
    exercises: [
      { id: 'bas-02-01', text: 'rrr rrr rrr rrr rrr rrr', description: 'Nur R - langsam' },
      { id: 'bas-02-02', text: 'uuu uuu uuu uuu uuu uuu', description: 'Nur U - langsam' },
      { id: 'bas-02-03', text: 'rrr uuu rrr uuu rrr uuu', description: 'R und U abwechselnd' },
      { id: 'bas-02-04', text: 'ru ru ur ur ru ur ru ur', description: 'Wechsel kurz' },
      { id: 'bas-02-05', text: 'ruf ruf ruf fur fur fur', description: 'Erste Wörter' },
      { id: 'bas-02-06', text: 'ruhe ruhe rufe rufe ruhe', description: 'Längere Wörter' },
      { id: 'bas-02-07', text: 'der die das der die das', description: 'Artikel mit R' },
      { id: 'bas-02-08', text: 'und und und nur nur nur', description: 'Wörter mit U' },
      { id: 'bas-02-09', text: 'ruru ruru urur urur ruru', description: 'Schnelle Wechsel' },
      { id: 'bas-02-10', text: 'der und die der und die', description: 'Häufige Kombis' },
      { id: 'bas-02-11', text: 'ruf nur fur ruf nur fur', description: 'Wort-Mix' },
      { id: 'bas-02-12', text: 'ruhe rufe und nur ruhe', description: 'Gemischte Wörter' },
      { id: 'bas-02-13', text: 'der die das und nur ruf', description: 'Alle Wörter' },
      { id: 'bas-02-14', text: 'rururu ururur rururu urur', description: 'Ausdauer' },
      { id: 'bas-02-15', text: 'ruf ruhe nur und der die', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'basics-03',
    title: 'Obere Reihe komplett',
    description: 'Alle Buchstaben der oberen Reihe: QWERTZUIOP',
    type: LessonType.BASICS,
    category: 'basics',
    level: 2,
    targetWPM: 20,
    targetAccuracy: 85,
    requiredKeys: ['q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p'],
    exercises: [
      { id: 'bas-03-01', text: 'qqq www qqq www qqq www', description: 'Q und W' },
      { id: 'bas-03-02', text: 'ttt zzz ttt zzz ttt zzz', description: 'T und Z' },
      { id: 'bas-03-03', text: 'ooo ppp ooo ppp ooo ppp', description: 'O und P' },
      { id: 'bas-03-04', text: 'qwer tzui opü qwer tzui', description: 'Obere Reihe Sequenz' },
      { id: 'bas-03-05', text: 'wir wir wir wie wie wie', description: 'W-Wörter' },
      { id: 'bas-03-06', text: 'rufen rufen sie sie sie', description: 'Mehr Wörter' },
      { id: 'bas-03-07', text: 'wir rufen sie heute wieder', description: 'Kurze Sätze' },
      { id: 'bas-03-08', text: 'er ist dort wo er war', description: 'Einfache Sätze' },
      { id: 'bas-03-09', text: 'peter peter otto otto', description: 'Namen üben' },
      { id: 'bas-03-10', text: 'peter trifft otto peter', description: 'Namen im Satz' },
      { id: 'bas-03-11', text: 'tier tier wort wort wort', description: 'Wörter üben' },
      { id: 'bas-03-12', text: 'reis reis weit weit zeit', description: 'Mehr Wörter' },
      { id: 'bas-03-13', text: 'qwertzuiop qwertzuiop', description: 'Ganze Reihe' },
      { id: 'bas-03-14', text: 'wir rufen sie heute dort', description: 'Satz-Übung' },
      { id: 'bas-03-15', text: 'peter otto tier wort zeit', description: 'Abschluss-Mix' },
    ],
  },
  // ========== BOTTOM ROW INTRODUCTION ==========
  {
    id: 'basics-04',
    title: 'Untere Reihe: N und M',
    description: 'Die wichtigsten Buchstaben der unteren Reihe',
    type: LessonType.BASICS,
    category: 'basics',
    level: 2,
    targetWPM: 18,
    targetAccuracy: 88,
    requiredKeys: ['n', 'm'],
    exercises: [
      { id: 'bas-04-01', text: 'nnn nnn nnn nnn nnn nnn', description: 'Nur N - langsam' },
      { id: 'bas-04-02', text: 'mmm mmm mmm mmm mmm mmm', description: 'Nur M - langsam' },
      { id: 'bas-04-03', text: 'nnn mmm nnn mmm nnn mmm', description: 'N und M abwechselnd' },
      { id: 'bas-04-04', text: 'nm nm mn mn nm mn nm mn', description: 'Wechsel kurz' },
      { id: 'bas-04-05', text: 'name name name name name', description: 'Wort: Name' },
      { id: 'bas-04-06', text: 'mann mann mann mann mann', description: 'Wort: Mann' },
      { id: 'bas-04-07', text: 'name mann name mann name', description: 'Wörter wechseln' },
      { id: 'bas-04-08', text: 'nun nun man man nun man', description: 'Kurze Wörter' },
      { id: 'bas-04-09', text: 'mein mein nein nein mein', description: 'Wichtige Wörter' },
      { id: 'bas-04-10', text: 'nmnm nmnm mnmn mnmn nmnm', description: 'Schnelle Wechsel' },
      { id: 'bas-04-11', text: 'name nun man mein name', description: 'Wort-Mix' },
      { id: 'bas-04-12', text: 'mann nein mein nun mann', description: 'Wort-Mix 2' },
      { id: 'bas-04-13', text: 'mein name mann nun nein', description: 'Alle Wörter' },
      { id: 'bas-04-14', text: 'nmnmnm mnmnmn nmnmnm mnmn', description: 'Ausdauer' },
      { id: 'bas-04-15', text: 'name mann nun mein nein', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'basics-05',
    title: 'Untere Reihe komplett',
    description: 'Alle Buchstaben der unteren Reihe: YXCVBNM',
    type: LessonType.BASICS,
    category: 'basics',
    level: 2,
    targetWPM: 20,
    targetAccuracy: 85,
    requiredKeys: ['y', 'x', 'c', 'v', 'b', 'n', 'm'],
    exercises: [
      { id: 'bas-05-01', text: 'yyy xxx yyy xxx yyy xxx', description: 'Y und X' },
      { id: 'bas-05-02', text: 'ccc vvv ccc vvv ccc vvv', description: 'C und V' },
      { id: 'bas-05-03', text: 'bbb nnn bbb nnn bbb nnn', description: 'B und N' },
      { id: 'bas-05-04', text: 'yxcv bnm yxcv bnm yxcv', description: 'Untere Reihe Sequenz' },
      { id: 'bas-05-05', text: 'von von vor vor von vor', description: 'V-Wörter' },
      { id: 'bas-05-06', text: 'nach nach neben neben nach', description: 'N-Wörter' },
      { id: 'bas-05-07', text: 'von vor nach neben zwischen', description: 'Präpositionen' },
      { id: 'bas-05-08', text: 'buch buch macht macht sinn', description: 'Mehr Wörter' },
      { id: 'bas-05-09', text: 'buch macht sinn buch macht', description: 'Wörter kombinieren' },
      { id: 'bas-05-10', text: 'max max moritz moritz max', description: 'Namen' },
      { id: 'bas-05-11', text: 'max und moritz machen quatsch', description: 'Namen im Satz' },
      { id: 'bas-05-12', text: 'box mix vox nix box mix', description: 'X-Wörter' },
      { id: 'bas-05-13', text: 'cyber cyber cyber cyber', description: 'Y-Wörter' },
      { id: 'bas-05-14', text: 'yxcvbnm yxcvbnm yxcvbnm', description: 'Ganze Reihe' },
      { id: 'bas-05-15', text: 'von vor nach max box cyber', description: 'Abschluss-Mix' },
    ],
  },
  // ========== ALLE BUCHSTABEN KOMBINIEREN ==========
  {
    id: 'basics-06',
    title: 'Alle Buchstaben zusammen',
    description: 'Übungen mit allen drei Reihen',
    type: LessonType.BASICS,
    category: 'basics',
    level: 3,
    targetWPM: 22,
    targetAccuracy: 85,
    exercises: [
      { id: 'bas-06-01', text: 'der die das der die das', description: 'Artikel üben' },
      { id: 'bas-06-02', text: 'ein eine einer einem einen', description: 'Unbestimmte Artikel' },
      { id: 'bas-06-03', text: 'der die das ein eine einer einem', description: 'Alle Artikel' },
      { id: 'bas-06-04', text: 'und oder aber und oder', description: 'Konjunktionen 1' },
      { id: 'bas-06-05', text: 'denn weil wenn denn weil', description: 'Konjunktionen 2' },
      { id: 'bas-06-06', text: 'und oder aber denn weil wenn', description: 'Alle Konjunktionen' },
      { id: 'bas-06-07', text: 'ist sind war waren ist sind', description: 'Sein-Formen 1' },
      { id: 'bas-06-08', text: 'wird werden wird werden wird', description: 'Sein-Formen 2' },
      { id: 'bas-06-09', text: 'ist sind war waren wird werden', description: 'Alle Sein-Formen' },
      { id: 'bas-06-10', text: 'ich du er sie es ich du', description: 'Pronomen 1' },
      { id: 'bas-06-11', text: 'wir ihr sie wir ihr sie', description: 'Pronomen 2' },
      { id: 'bas-06-12', text: 'ich du er sie es wir ihr sie', description: 'Alle Pronomen' },
      { id: 'bas-06-13', text: 'haben sein werden können müssen', description: 'Modalverben' },
      { id: 'bas-06-14', text: 'gehen kommen sehen hören sprechen', description: 'Verben' },
      { id: 'bas-06-15', text: 'der ist und ich habe gehen', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'basics-07',
    title: 'Häufige Wörter Stufe 1',
    description: 'Die 50 häufigsten deutschen Wörter',
    type: LessonType.BASICS,
    category: 'basics',
    level: 3,
    targetWPM: 25,
    targetAccuracy: 88,
    exercises: [
      { id: 'bas-07-01', text: 'der die das der die das', description: 'Top 3 Wörter' },
      { id: 'bas-07-02', text: 'und in zu und in zu', description: 'Wörter 4-6' },
      { id: 'bas-07-03', text: 'den mit den mit den mit', description: 'Wörter 7-8' },
      { id: 'bas-07-04', text: 'der die das und in zu den mit', description: 'Top 8 Wörter' },
      { id: 'bas-07-05', text: 'von auf ist von auf ist', description: 'Wörter 9-11' },
      { id: 'bas-07-06', text: 'sich nicht auch sich nicht', description: 'Wörter 12-14' },
      { id: 'bas-07-07', text: 'von auf ist sich nicht auch', description: 'Wörter 9-14' },
      { id: 'bas-07-08', text: 'er es an er es an er', description: 'Wörter 15-17' },
      { id: 'bas-07-09', text: 'sie so wie eine sie so', description: 'Wörter 18-21' },
      { id: 'bas-07-10', text: 'er es an sie so wie eine', description: 'Wörter 15-21' },
      { id: 'bas-07-11', text: 'nur diese noch nach dem dann', description: 'Wörter 22-27' },
      { id: 'bas-07-12', text: 'wir aber bei ihr mir gegen', description: 'Wörter 28-33' },
      { id: 'bas-07-13', text: 'schon durch immer also sehr', description: 'Wörter 34-38' },
      { id: 'bas-07-14', text: 'der die das und in zu von auf', description: 'Wiederholung 1' },
      { id: 'bas-07-15', text: 'ist sich er sie so wie wir', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'basics-08',
    title: 'Großbuchstaben lernen',
    description: 'Die Shift-Taste für Großschreibung',
    type: LessonType.BASICS,
    category: 'basics',
    level: 3,
    targetWPM: 20,
    targetAccuracy: 90,
    exercises: [
      { id: 'bas-08-01', text: 'Aa Aa Aa Bb Bb Bb Cc Cc', description: 'A B C groß' },
      { id: 'bas-08-02', text: 'Dd Ee Ff Gg Hh Ii Jj Kk', description: 'D bis K groß' },
      { id: 'bas-08-03', text: 'Ll Mm Nn Oo Pp Qq Rr Ss', description: 'L bis S groß' },
      { id: 'bas-08-04', text: 'Tt Uu Vv Ww Xx Yy Zz', description: 'T bis Z groß' },
      { id: 'bas-08-05', text: 'Anna Anna Peter Peter Hans', description: 'Namen 1' },
      { id: 'bas-08-06', text: 'Lisa Lisa Maria Maria Max', description: 'Namen 2' },
      { id: 'bas-08-07', text: 'Anna Peter Hans Lisa Maria', description: 'Alle Namen' },
      { id: 'bas-08-08', text: 'Berlin Berlin Hamburg Hamburg', description: 'Städte 1' },
      { id: 'bas-08-09', text: 'München München Köln Köln', description: 'Städte 2' },
      { id: 'bas-08-10', text: 'Berlin Hamburg München Köln', description: 'Alle Städte' },
      { id: 'bas-08-11', text: 'Der Die Das Ein Eine Einer', description: 'Artikel groß' },
      { id: 'bas-08-12', text: 'Anna geht nach Berlin heute', description: 'Sätze mit Namen' },
      { id: 'bas-08-13', text: 'Peter und Lisa sind in Hamburg', description: 'Längerer Satz' },
      { id: 'bas-08-14', text: 'Max fährt nach München morgen', description: 'Noch ein Satz' },
      { id: 'bas-08-15', text: 'Anna Peter Berlin Hamburg Max', description: 'Abschluss-Mix' },
    ],
  },
];

/**
 * ============================================================================
 * INTERMEDIATE LESSONS - Level 3-4 (Fortgeschrittene Grundlagen)
 * Zahlen und erste Sonderzeichen
 * ============================================================================
 */
export const INTERMEDIATE_LESSONS: Lesson[] = [
  // ========== ZAHLEN ==========
  {
    id: 'inter-01',
    title: 'Zahlen 1-5',
    description: 'Die Zahlen der linken Hand',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 3,
    targetWPM: 18,
    targetAccuracy: 90,
    requiredKeys: ['1', '2', '3', '4', '5'],
    exercises: [
      { id: 'int-01-01', text: '111 111 111 111 111 111', description: 'Nur 1' },
      { id: 'int-01-02', text: '222 222 222 222 222 222', description: 'Nur 2' },
      { id: 'int-01-03', text: '333 333 333 333 333 333', description: 'Nur 3' },
      { id: 'int-01-04', text: '444 444 444 444 444 444', description: 'Nur 4' },
      { id: 'int-01-05', text: '555 555 555 555 555 555', description: 'Nur 5' },
      { id: 'int-01-06', text: '111 222 333 444 555 111 222', description: 'Alle einzeln' },
      { id: 'int-01-07', text: '12 12 12 23 23 23 34 34 34', description: 'Zweier-Kombinationen' },
      { id: 'int-01-08', text: '12345 12345 12345 12345', description: 'Reihenfolge' },
      { id: 'int-01-09', text: '54321 54321 54321 54321', description: 'Rückwärts' },
      { id: 'int-01-10', text: '13 24 35 42 51 13 24 35', description: 'Sprung-Kombinationen' },
      { id: 'int-01-11', text: '15 25 35 45 15 25 35 45', description: 'Mit 5 kombiniert' },
      { id: 'int-01-12', text: '12 Äpfel 34 Birnen 55 Euro', description: 'Mit Wörtern' },
      { id: 'int-01-13', text: '123 234 345 123 234 345', description: 'Dreier-Gruppen' },
      { id: 'int-01-14', text: '11 22 33 44 55 11 22 33', description: 'Doppelzahlen' },
      { id: 'int-01-15', text: '12345 54321 13524 24135', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'inter-02',
    title: 'Zahlen 6-0',
    description: 'Die Zahlen der rechten Hand',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 3,
    targetWPM: 18,
    targetAccuracy: 90,
    requiredKeys: ['6', '7', '8', '9', '0'],
    exercises: [
      { id: 'int-02-01', text: '666 666 666 666 666 666', description: 'Nur 6' },
      { id: 'int-02-02', text: '777 777 777 777 777 777', description: 'Nur 7' },
      { id: 'int-02-03', text: '888 888 888 888 888 888', description: 'Nur 8' },
      { id: 'int-02-04', text: '999 999 999 999 999 999', description: 'Nur 9' },
      { id: 'int-02-05', text: '000 000 000 000 000 000', description: 'Nur 0' },
      { id: 'int-02-06', text: '666 777 888 999 000 666 777', description: 'Alle einzeln' },
      { id: 'int-02-07', text: '67 67 67 78 78 78 89 89 89', description: 'Zweier-Kombinationen' },
      { id: 'int-02-08', text: '67890 67890 67890 67890', description: 'Reihenfolge' },
      { id: 'int-02-09', text: '09876 09876 09876 09876', description: 'Rückwärts' },
      { id: 'int-02-10', text: '68 79 80 97 60 68 79 80', description: 'Sprung-Kombinationen' },
      { id: 'int-02-11', text: '60 70 80 90 60 70 80 90', description: 'Mit 0 kombiniert' },
      { id: 'int-02-12', text: '68 Prozent 90 Grad 100 Euro', description: 'Mit Wörtern' },
      { id: 'int-02-13', text: '678 789 890 678 789 890', description: 'Dreier-Gruppen' },
      { id: 'int-02-14', text: '66 77 88 99 00 66 77 88', description: 'Doppelzahlen' },
      { id: 'int-02-15', text: '67890 09876 68079 79680', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'inter-03',
    title: 'Alle Zahlen zusammen',
    description: 'Übungen mit allen Zahlen 0-9',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 3,
    targetWPM: 20,
    targetAccuracy: 88,
    requiredKeys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    exercises: [
      { id: 'int-03-01', text: '1234567890 1234567890', description: 'Alle aufsteigend' },
      { id: 'int-03-02', text: '0987654321 0987654321', description: 'Alle absteigend' },
      { id: 'int-03-03', text: '15 26 37 48 59 60 71 82 93', description: 'Kreuz-Kombinationen' },
      { id: 'int-03-04', text: '2024 2025 2026 2027 2028', description: 'Jahreszahlen aktuell' },
      { id: 'int-03-05', text: '1990 1985 2000 1975 2010', description: 'Jahreszahlen historisch' },
      { id: 'int-03-06', text: '100 200 300 500 750 1000', description: 'Runde Zahlen' },
      { id: 'int-03-07', text: '1500 2500 5000 7500 10000', description: 'Größere Zahlen' },
      { id: 'int-03-08', text: '3.14 2.71 1.41 9.81 6.67', description: 'Dezimalzahlen' },
      { id: 'int-03-09', text: '0.5 0.25 0.75 1.5 2.5', description: 'Kleine Dezimalzahlen' },
      { id: 'int-03-10', text: '12:30 15:45 08:00 23:59', description: 'Uhrzeiten' },
      { id: 'int-03-11', text: '00:00 06:00 12:00 18:00', description: 'Volle Stunden' },
      { id: 'int-03-12', text: '123-456-7890 987-654-3210', description: 'Telefonnummern' },
      { id: 'int-03-13', text: '10 20 30 40 50 60 70 80 90', description: 'Zehner-Reihe' },
      { id: 'int-03-14', text: '11 22 33 44 55 66 77 88 99', description: 'Schnapszahlen' },
      { id: 'int-03-15', text: '2024 12:30 3.14 100 Euro', description: 'Abschluss-Mix' },
    ],
  },
  // ========== PUNKT UND KOMMA ==========
  {
    id: 'inter-04',
    title: 'Punkt und Komma',
    description: 'Die wichtigsten Satzzeichen',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 3,
    targetWPM: 20,
    targetAccuracy: 88,
    requiredKeys: ['.', ','],
    exercises: [
      { id: 'int-04-01', text: '... ... ... ... ... ...', description: 'Nur Punkte' },
      { id: 'int-04-02', text: ',,, ,,, ,,, ,,, ,,, ,,,', description: 'Nur Kommas' },
      { id: 'int-04-03', text: '., ., ., ,. ,. ,. ., .,', description: 'Wechsel' },
      { id: 'int-04-04', text: 'Ja. Nein. Ja. Nein. Ja.', description: 'Kurze Sätze' },
      { id: 'int-04-05', text: 'A, B, C, D, E, F, G, H.', description: 'Buchstaben-Liste' },
      { id: 'int-04-06', text: 'Hallo, wie geht es dir.', description: 'Einfacher Satz' },
      { id: 'int-04-07', text: 'Rot, Blau, Grün, Gelb.', description: 'Farben-Aufzählung' },
      { id: 'int-04-08', text: 'Eins, zwei, drei, vier.', description: 'Zahlen-Aufzählung' },
      { id: 'int-04-09', text: 'Er kam, sah und siegte.', description: 'Klassiker' },
      { id: 'int-04-10', text: 'Äpfel, Birnen, Kirschen.', description: 'Obst-Liste' },
      { id: 'int-04-11', text: 'Gut. Sehr gut. Ausgezeichnet.', description: 'Bewertungen' },
      { id: 'int-04-12', text: 'Max, Anna, Peter, Lisa.', description: 'Namen-Liste' },
      {
        id: 'int-04-13',
        text: 'Heute ist Montag. Morgen ist Dienstag.',
        description: 'Zwei Sätze',
      },
      { id: 'int-04-14', text: 'A, B und C. D, E und F.', description: 'Mit und' },
      { id: 'int-04-15', text: 'Ja, genau. Nein, danke.', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'inter-05',
    title: 'Fragezeichen und Ausrufezeichen',
    description: 'Fragen stellen und ausrufen',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 4,
    targetWPM: 20,
    targetAccuracy: 88,
    requiredKeys: ['?', '!'],
    exercises: [
      { id: 'int-05-01', text: '??? ??? ??? ??? ??? ???', description: 'Nur Fragezeichen' },
      { id: 'int-05-02', text: '!!! !!! !!! !!! !!! !!!', description: 'Nur Ausrufezeichen' },
      { id: 'int-05-03', text: '?! ?! ?! !? !? !? ?! ?!', description: 'Wechsel' },
      { id: 'int-05-04', text: 'Ja? Nein! Ja? Nein! Ja?', description: 'Kurz wechselnd' },
      { id: 'int-05-05', text: 'Was? Wann? Wo? Warum? Wie?', description: 'W-Fragen' },
      { id: 'int-05-06', text: 'Wer? Was? Wem? Wen? Wessen?', description: 'Mehr W-Fragen' },
      { id: 'int-05-07', text: 'Toll! Super! Klasse! Prima!', description: 'Ausrufe positiv' },
      { id: 'int-05-08', text: 'Hilfe! Achtung! Stop! Halt!', description: 'Warnungen' },
      { id: 'int-05-09', text: 'Wie geht es dir? Gut! Danke!', description: 'Dialog 1' },
      { id: 'int-05-10', text: 'Kommst du? Ja! Wann? Jetzt!', description: 'Dialog 2' },
      { id: 'int-05-11', text: 'Warum nicht? Weil! Aber warum?', description: 'Dialog 3' },
      { id: 'int-05-12', text: 'Wirklich? Ja! Sicher? Absolut!', description: 'Bestätigung' },
      { id: 'int-05-13', text: 'Los! Weiter! Schneller! Fertig?', description: 'Anfeuerung' },
      { id: 'int-05-14', text: 'Wie bitte? Was sagst du? Hallo?', description: 'Nachfragen' },
      { id: 'int-05-15', text: 'Fantastisch! Wunderbar! Perfekt?', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'inter-06',
    title: 'Bindestrich und Apostroph',
    description: 'Zusammengesetzte Wörter und Auslassungen',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 4,
    targetWPM: 20,
    targetAccuracy: 88,
    requiredKeys: ['-', "'"],
    exercises: [
      { id: 'int-06-01', text: '--- --- --- --- --- ---', description: 'Nur Bindestriche' },
      { id: 'int-06-02', text: "''' ''' ''' ''' ''' '''", description: 'Nur Apostrophe' },
      { id: 'int-06-03', text: "-' -' -' '- '- '- -' -'", description: 'Wechsel' },
      { id: 'int-06-04', text: 'E-Mail E-Mail E-Mail', description: 'E-Mail üben' },
      { id: 'int-06-05', text: 'On-line Off-line Up-date', description: 'Tech-Begriffe' },
      { id: 'int-06-06', text: 'Nord-Süd Ost-West Alt-Neu', description: 'Gegensätze' },
      { id: 'int-06-07', text: 'Schwarz-Weiß Groß-Klein', description: 'Mehr Gegensätze' },
      { id: 'int-06-08', text: "geht's gibt's ist's war's", description: 'Auslassungen' },
      { id: 'int-06-09', text: "Wie geht's? Was gibt's?", description: 'Fragen mit Apostroph' },
      { id: 'int-06-10', text: 'Step-by-Step Day-by-Day', description: 'Englische Ausdrücke' },
      { id: 'int-06-11', text: 'Schritt-für-Schritt', description: 'Deutsche Ausdrücke' },
      { id: 'int-06-12', text: 'Tag-und-Nacht Hin-und-Her', description: 'Lange Verbindungen' },
      { id: 'int-06-13', text: "Das ist's. So geht's.", description: 'Im Satz 1' },
      { id: 'int-06-14', text: "Wie geht's dir? Gut!", description: 'Im Satz 2' },
      { id: 'int-06-15', text: "E-Mail geht's Nord-Süd", description: 'Abschluss-Mix' },
    ],
  },
  // ========== MEHR SONDERZEICHEN ==========
  {
    id: 'inter-07',
    title: 'Klammern',
    description: 'Runde und eckige Klammern',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 4,
    targetWPM: 18,
    targetAccuracy: 85,
    requiredKeys: ['(', ')', '[', ']'],
    exercises: [
      { id: 'int-07-01', text: '((( ))) ((( ))) ((( )))', description: 'Nur runde Klammern' },
      { id: 'int-07-02', text: '[[[ ]]] [[[ ]]] [[[ ]]]', description: 'Nur eckige Klammern' },
      { id: 'int-07-03', text: '() () () [] [] [] () []', description: 'Wechsel' },
      { id: 'int-07-04', text: '(a) (b) (c) (d) (e) (f)', description: 'Buchstaben in Klammern' },
      { id: 'int-07-05', text: '[1] [2] [3] [4] [5] [6]', description: 'Zahlen in Klammern' },
      { id: 'int-07-06', text: '(das) (ist) (ein) (Test)', description: 'Wörter in Klammern' },
      { id: 'int-07-07', text: '[das] [ist] [ein] [Test]', description: 'Wörter eckig' },
      { id: 'int-07-08', text: 'Text (hier) mehr Text', description: 'Im Satz rund' },
      { id: 'int-07-09', text: 'Text [hier] mehr Text', description: 'Im Satz eckig' },
      { id: 'int-07-10', text: 'Siehe (Anhang) für Details', description: 'Verweis rund' },
      { id: 'int-07-11', text: 'Siehe [Anhang] für Details', description: 'Verweis eckig' },
      { id: 'int-07-12', text: '(wichtig) [optional] (nötig)', description: 'Gemischt' },
      { id: 'int-07-13', text: '(a) erstes (b) zweites', description: 'Aufzählung rund' },
      { id: 'int-07-14', text: '[a] erstes [b] zweites', description: 'Aufzählung eckig' },
      { id: 'int-07-15', text: '(1) [a] (2) [b] (3) [c]', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'inter-08',
    title: 'Anführungszeichen',
    description: 'Zitate und direkte Rede',
    type: LessonType.BASICS,
    category: 'intermediate',
    level: 4,
    targetWPM: 18,
    targetAccuracy: 85,
    requiredKeys: ['"'],
    exercises: [
      { id: 'int-08-01', text: '""" """ """ """ """ """', description: 'Nur Anführungszeichen' },
      { id: 'int-08-02', text: '"a" "b" "c" "d" "e" "f"', description: 'Buchstaben zitiert' },
      { id: 'int-08-03', text: '"1" "2" "3" "4" "5" "6"', description: 'Zahlen zitiert' },
      { id: 'int-08-04', text: '"Hallo" "Welt" "Test"', description: 'Wörter zitiert' },
      { id: 'int-08-05', text: '"Ja" "Nein" "Vielleicht"', description: 'Antworten zitiert' },
      { id: 'int-08-06', text: 'Er sagte "Hallo" zu mir.', description: 'Im Satz einfach' },
      { id: 'int-08-07', text: 'Sie fragte: "Wie geht es?"', description: 'Mit Doppelpunkt' },
      { id: 'int-08-08', text: '"Das ist gut", sagte er.', description: 'Rede am Anfang' },
      { id: 'int-08-09', text: 'Er meinte: "Das stimmt."', description: 'Rede am Ende' },
      { id: 'int-08-10', text: '"Ja", sagte er, "genau."', description: 'Unterbrochene Rede' },
      { id: 'int-08-11', text: 'Das Wort "Beispiel" hier.', description: 'Zitat im Satz' },
      { id: 'int-08-12', text: 'Der Begriff "Test" bedeutet...', description: 'Definition' },
      { id: 'int-08-13', text: '"Hallo!" rief sie. "Hier!"', description: 'Zwei Ausrufe' },
      { id: 'int-08-14', text: '"Was?" "Wo?" "Wann?" "Wie?"', description: 'Fragen zitiert' },
      { id: 'int-08-15', text: '"Ja", "Nein", "Vielleicht"', description: 'Abschluss-Mix' },
    ],
  },
];

/**
 * ============================================================================
 * WORD LESSONS - Level 3-5 (Wortschatz aufbauen)
 * Wortübungen für Geschwindigkeit
 * ============================================================================
 */
export const WORD_LESSONS: Lesson[] = [
  // ========== COMMON WORDS ==========
  {
    id: 'words-01',
    title: 'Die 100 häufigsten Wörter',
    description: 'Die am meisten verwendeten deutschen Wörter',
    type: LessonType.WORDS,
    category: 'words',
    level: 3,
    targetWPM: 30,
    targetAccuracy: 92,
    exercises: [
      { id: 'wrd-01-01', text: 'der die das der die das der', description: 'Artikel bestimmt' },
      { id: 'wrd-01-02', text: 'ein eine einer einem einen', description: 'Artikel unbestimmt' },
      { id: 'wrd-01-03', text: 'der die das ein eine einer einem', description: 'Alle Artikel' },
      { id: 'wrd-01-04', text: 'und oder aber denn weil wenn', description: 'Konjunktionen' },
      { id: 'wrd-01-05', text: 'ist sind war waren wird werden', description: 'Sein-Formen' },
      { id: 'wrd-01-06', text: 'ich du er sie es wir ihr', description: 'Pronomen Subjekt' },
      { id: 'wrd-01-07', text: 'mich dich ihn sie uns euch', description: 'Pronomen Objekt' },
      { id: 'wrd-01-08', text: 'haben sein werden können müssen', description: 'Hilfsverben' },
      { id: 'wrd-01-09', text: 'wollen sollen dürfen mögen', description: 'Modalverben' },
      { id: 'wrd-01-10', text: 'in an auf aus bei mit nach zu', description: 'Präpositionen 1' },
      { id: 'wrd-01-11', text: 'von für über unter durch', description: 'Präpositionen 2' },
      { id: 'wrd-01-12', text: 'nicht auch noch schon immer', description: 'Adverbien Zeit' },
      { id: 'wrd-01-13', text: 'hier dort oben unten vorne hinten', description: 'Adverbien Ort' },
      { id: 'wrd-01-14', text: 'sehr viel ganz nur mehr weniger', description: 'Adverbien Grad' },
      { id: 'wrd-01-15', text: 'der die das und ist haben werden', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'words-02',
    title: 'Verben im Alltag',
    description: 'Häufig verwendete Verben',
    type: LessonType.WORDS,
    category: 'words',
    level: 3,
    targetWPM: 30,
    targetAccuracy: 90,
    exercises: [
      { id: 'wrd-02-01', text: 'gehen kommen laufen rennen', description: 'Fortbewegung' },
      { id: 'wrd-02-02', text: 'sehen hören fühlen riechen', description: 'Sinne' },
      { id: 'wrd-02-03', text: 'sprechen reden sagen erzählen', description: 'Kommunikation' },
      { id: 'wrd-02-04', text: 'machen tun arbeiten schaffen', description: 'Aktivitäten' },
      { id: 'wrd-02-05', text: 'spielen lernen üben trainieren', description: 'Lernen & Spiel' },
      { id: 'wrd-02-06', text: 'essen trinken kochen backen', description: 'Ernährung' },
      { id: 'wrd-02-07', text: 'schlafen wachen ruhen träumen', description: 'Ruhe' },
      { id: 'wrd-02-08', text: 'denken glauben meinen wissen', description: 'Kognition' },
      { id: 'wrd-02-09', text: 'suchen finden nehmen geben', description: 'Handlungen' },
      { id: 'wrd-02-10', text: 'kaufen verkaufen tauschen', description: 'Handel' },
      { id: 'wrd-02-11', text: 'lesen schreiben rechnen zählen', description: 'Bildung' },
      { id: 'wrd-02-12', text: 'fahren fliegen schwimmen reiten', description: 'Transport' },
      { id: 'wrd-02-13', text: 'öffnen schließen beginnen enden', description: 'Zustand' },
      { id: 'wrd-02-14', text: 'lieben hassen mögen brauchen', description: 'Gefühle' },
      { id: 'wrd-02-15', text: 'gehen sehen machen denken finden', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'words-03',
    title: 'Adjektive',
    description: 'Beschreibende Wörter',
    type: LessonType.WORDS,
    category: 'words',
    level: 3,
    targetWPM: 32,
    targetAccuracy: 90,
    exercises: [
      { id: 'wrd-03-01', text: 'groß klein lang kurz hoch tief', description: 'Größe' },
      { id: 'wrd-03-02', text: 'breit schmal dick dünn eng weit', description: 'Breite' },
      { id: 'wrd-03-03', text: 'gut schlecht schön hässlich toll', description: 'Bewertung' },
      { id: 'wrd-03-04', text: 'richtig falsch wahr echt korrekt', description: 'Wahrheit' },
      { id: 'wrd-03-05', text: 'alt neu jung frisch modern antik', description: 'Alter' },
      { id: 'wrd-03-06', text: 'schnell langsam früh spät eilig', description: 'Tempo' },
      { id: 'wrd-03-07', text: 'warm kalt heiß kühl mild lau', description: 'Temperatur' },
      { id: 'wrd-03-08', text: 'hell dunkel licht trüb klar', description: 'Helligkeit' },
      { id: 'wrd-03-09', text: 'laut leise still ruhig lärmend', description: 'Lautstärke' },
      { id: 'wrd-03-10', text: 'hart weich fest locker starr', description: 'Konsistenz' },
      { id: 'wrd-03-11', text: 'schwer leicht schwierig einfach', description: 'Schwierigkeit' },
      { id: 'wrd-03-12', text: 'teuer billig günstig kostspielig', description: 'Preis' },
      { id: 'wrd-03-13', text: 'nah fern weit entfernt nahe', description: 'Entfernung' },
      { id: 'wrd-03-14', text: 'voll leer halb ganz komplett', description: 'Füllstand' },
      { id: 'wrd-03-15', text: 'groß gut schnell warm hell schwer', description: 'Abschluss-Mix' },
    ],
  },
  // ========== SIMPLE SENTENCES ==========
  {
    id: 'words-04',
    title: 'Kurze Sätze',
    description: 'Einfache deutsche Sätze',
    type: LessonType.WORDS,
    category: 'words',
    level: 4,
    targetWPM: 35,
    targetAccuracy: 90,
    exercises: [
      { id: 'wrd-04-01', text: 'Das Wetter ist heute sehr schön.', description: 'Wetter' },
      { id: 'wrd-04-02', text: 'Ich gehe morgen in die Stadt.', description: 'Zukunft' },
      { id: 'wrd-04-03', text: 'Hast du das Buch schon gelesen?', description: 'Frage' },
      { id: 'wrd-04-04', text: 'Er arbeitet jeden Tag sehr hart.', description: 'Arbeit' },
      { id: 'wrd-04-05', text: 'Wir treffen uns heute Abend.', description: 'Verabredung' },
      { id: 'wrd-04-06', text: 'Das Essen schmeckt sehr gut.', description: 'Essen' },
      { id: 'wrd-04-07', text: 'Sie liest gerne am Abend.', description: 'Hobby' },
      { id: 'wrd-04-08', text: 'Der Zug kommt um drei Uhr.', description: 'Zeit' },
      { id: 'wrd-04-09', text: 'Ich habe einen neuen Computer.', description: 'Besitz' },
      { id: 'wrd-04-10', text: 'Mein Bruder wohnt in Berlin.', description: 'Familie' },
      { id: 'wrd-04-11', text: 'Der Film war wirklich toll.', description: 'Meinung' },
      { id: 'wrd-04-12', text: 'Kannst du mir bitte helfen?', description: 'Bitte' },
      { id: 'wrd-04-13', text: 'Das Fenster ist offen.', description: 'Zustand' },
      { id: 'wrd-04-14', text: 'Ich trinke gerne Kaffee.', description: 'Vorliebe' },
      { id: 'wrd-04-15', text: 'Das Wetter ist schön und warm.', description: 'Abschluss-Mix' },
    ],
  },
  {
    id: 'words-05',
    title: 'Mittellange Sätze',
    description: 'Sätze mit mehr Details',
    type: LessonType.WORDS,
    category: 'words',
    level: 4,
    targetWPM: 38,
    targetAccuracy: 88,
    exercises: [
      { id: 'wrd-05-01', text: 'Der Mann geht jeden Morgen zur Arbeit.', description: 'Routine' },
      { id: 'wrd-05-02', text: 'Die Kinder spielen im Garten Fußball.', description: 'Freizeit' },
      {
        id: 'wrd-05-03',
        text: 'Ich habe gestern einen Film gesehen.',
        description: 'Vergangenheit',
      },
      { id: 'wrd-05-04', text: 'Sie kauft im Supermarkt frisches Obst.', description: 'Einkaufen' },
      { id: 'wrd-05-05', text: 'Das Auto steht vor dem großen Haus.', description: 'Beschreibung' },
      { id: 'wrd-05-06', text: 'Wir fahren am Wochenende ans Meer.', description: 'Planung' },
      { id: 'wrd-05-07', text: 'Die Katze schläft auf dem Sofa.', description: 'Haustier' },
      { id: 'wrd-05-08', text: 'Er liest jeden Abend die Zeitung.', description: 'Gewohnheit' },
      { id: 'wrd-05-09', text: 'Das Restaurant hat gute Bewertungen.', description: 'Information' },
      { id: 'wrd-05-10', text: 'Meine Schwester studiert in München.', description: 'Familie' },
      { id: 'wrd-05-11', text: 'Der Bus fährt alle zehn Minuten.', description: 'Transport' },
      { id: 'wrd-05-12', text: 'Wir haben einen schönen Garten.', description: 'Zuhause' },
      { id: 'wrd-05-13', text: 'Das Konzert beginnt um acht Uhr.', description: 'Event' },
      { id: 'wrd-05-14', text: 'Sie arbeitet in einem großen Büro.', description: 'Beruf' },
      {
        id: 'wrd-05-15',
        text: 'Der Mann geht zur Arbeit und kauft Obst.',
        description: 'Abschluss',
      },
    ],
  },
  // ========== LONGER TEXTS ==========
  {
    id: 'words-06',
    title: 'Lange Sätze',
    description: 'Komplexere deutsche Sätze',
    type: LessonType.WORDS,
    category: 'words',
    level: 5,
    targetWPM: 40,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'wrd-06-01',
        text: 'Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.',
        description: 'Pangram',
      },
      {
        id: 'wrd-06-02',
        text: 'Zwölf große Boxkämpfer jagen Viktor quer über den Sylter Deich.',
        description: 'Pangram 2',
      },
      {
        id: 'wrd-06-03',
        text: 'Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.',
        description: 'Pangram 3',
      },
      {
        id: 'wrd-06-04',
        text: 'Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.',
        description: 'Pangram 4',
      },
      {
        id: 'wrd-06-05',
        text: 'Jeder wackere Bayer vertilgt bequem zwo Pfund Kalbshaxen.',
        description: 'Pangram 5',
      },
      {
        id: 'wrd-06-06',
        text: 'Sylvia wagt quick den Jux bei Pforzheim.',
        description: 'Pangram 6',
      },
      {
        id: 'wrd-06-07',
        text: 'Prüfe jetzt brav zehn Wachkünstler im Quäldorf.',
        description: 'Pangram 7',
      },
      {
        id: 'wrd-06-08',
        text: 'Fix, Schwyz! quäkt Jürgen blöd vom Paß.',
        description: 'Pangram 8',
      },
      {
        id: 'wrd-06-09',
        text: 'Typisch für Bayern sind Weißwurst, Brezeln und gutes Bier.',
        description: 'Regional',
      },
      {
        id: 'wrd-06-10',
        text: 'Der schnelle braune Fuchs springt über den faulen Hund.',
        description: 'Klassiker',
      },
      {
        id: 'wrd-06-11',
        text: 'Heute ist das Wetter besonders schön und angenehm warm.',
        description: 'Wetter lang',
      },
      {
        id: 'wrd-06-12',
        text: 'Die Kinder spielen fröhlich im großen Park am Stadtrand.',
        description: 'Kinder lang',
      },
      {
        id: 'wrd-06-13',
        text: 'Nach dem Abendessen gehen wir gemeinsam spazieren.',
        description: 'Abend lang',
      },
      {
        id: 'wrd-06-14',
        text: 'Im Sommer fahren wir gerne an die Ostsee zum Baden.',
        description: 'Urlaub lang',
      },
      {
        id: 'wrd-06-15',
        text: 'Franz jagt quer durch Bayern mit Viktor am Sylter Deich.',
        description: 'Abschluss',
      },
    ],
  },
  {
    id: 'words-07',
    title: 'Absätze üben',
    description: 'Zusammenhängende Textpassagen',
    type: LessonType.WORDS,
    category: 'words',
    level: 5,
    targetWPM: 42,
    targetAccuracy: 86,
    exercises: [
      {
        id: 'wrd-07-01',
        text: 'Der frühe Vogel fängt den Wurm. Aber die zweite Maus bekommt den Käse. So ist das Leben manchmal.',
        description: 'Sprichwörter',
      },
      {
        id: 'wrd-07-02',
        text: 'Es war einmal ein kleines Mädchen mit dem Namen Rotkäppchen. Es lebte mit seiner Mutter in einem kleinen Haus.',
        description: 'Märchen',
      },
      {
        id: 'wrd-07-03',
        text: 'Die Sonne scheint warm auf die grüne Wiese. Die Vögel singen fröhlich in den Bäumen. Es ist ein schöner Tag.',
        description: 'Beschreibung',
      },
      {
        id: 'wrd-07-04',
        text: 'Wer A sagt, muss auch B sagen. Übung macht den Meister. Ende gut, alles gut.',
        description: 'Mehr Sprichwörter',
      },
      {
        id: 'wrd-07-05',
        text: 'Der kleine Prinz kam von einem fernen Stern. Er lernte viel über die Menschen und ihre seltsamen Gewohnheiten.',
        description: 'Literatur',
      },
      {
        id: 'wrd-07-06',
        text: 'Am Morgen stehe ich früh auf. Ich frühstücke und gehe zur Arbeit. Am Abend komme ich müde nach Hause.',
        description: 'Tagesablauf',
      },
      {
        id: 'wrd-07-07',
        text: 'Das Wetter war schön. Wir machten einen Ausflug in die Berge. Die Aussicht war atemberaubend.',
        description: 'Ausflug',
      },
      {
        id: 'wrd-07-08',
        text: 'In der Schule lernen wir viele Dinge. Deutsch, Mathe und Englisch sind wichtige Fächer.',
        description: 'Schule',
      },
      {
        id: 'wrd-07-09',
        text: 'Meine Familie ist nicht sehr groß. Wir sind vier Personen: Vater, Mutter, mein Bruder und ich.',
        description: 'Familie',
      },
      {
        id: 'wrd-07-10',
        text: 'Im Urlaub waren wir am Meer. Das Wasser war klar und warm. Wir haben viel gebadet.',
        description: 'Urlaub',
      },
      {
        id: 'wrd-07-11',
        text: 'Sport ist wichtig für die Gesundheit. Ich jogge dreimal pro Woche. Es macht mir Spaß.',
        description: 'Sport',
      },
      {
        id: 'wrd-07-12',
        text: 'Kochen ist mein Hobby. Ich probiere gerne neue Rezepte aus. Meine Familie freut sich immer.',
        description: 'Kochen',
      },
      {
        id: 'wrd-07-13',
        text: 'Musik entspannt mich sehr. Ich höre gerne klassische Musik. Manchmal spiele ich auch Klavier.',
        description: 'Musik',
      },
      {
        id: 'wrd-07-14',
        text: 'Lesen erweitert den Horizont. Ein gutes Buch ist wie eine Reise in eine andere Welt.',
        description: 'Lesen',
      },
      {
        id: 'wrd-07-15',
        text: 'Die Sonne scheint, die Vögel singen. Ein schöner Tag beginnt. Das Leben ist wunderbar.',
        description: 'Abschluss',
      },
    ],
  },
  // ========== THEMEN ==========
  {
    id: 'words-08',
    title: 'Thema: Computer',
    description: 'Fachvokabular aus der Computerwelt',
    type: LessonType.WORDS,
    category: 'words',
    level: 4,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'wrd-08-01',
        text: 'Computer Monitor Tastatur Maus Bildschirm',
        description: 'Hardware 1',
      },
      {
        id: 'wrd-08-02',
        text: 'Prozessor Grafikkarte Arbeitsspeicher RAM',
        description: 'Hardware 2',
      },
      {
        id: 'wrd-08-03',
        text: 'Software Programm Anwendung System Betrieb',
        description: 'Software',
      },
      { id: 'wrd-08-04', text: 'Datei Ordner Speicher Festplatte Cloud', description: 'Speicher' },
      { id: 'wrd-08-05', text: 'Internet Browser Website Email Download', description: 'Internet' },
      {
        id: 'wrd-08-06',
        text: 'Netzwerk Router Server Firewall Passwort',
        description: 'Netzwerk',
      },
      {
        id: 'wrd-08-07',
        text: 'Betriebssystem Windows Linux MacOS Update',
        description: 'Systeme',
      },
      {
        id: 'wrd-08-08',
        text: 'Virus Malware Antivirus Sicherheit Backup',
        description: 'Sicherheit',
      },
      {
        id: 'wrd-08-09',
        text: 'Der Computer startet langsam heute Morgen.',
        description: 'Satz 1',
      },
      { id: 'wrd-08-10', text: 'Bitte speichere die Datei im Ordner.', description: 'Satz 2' },
      { id: 'wrd-08-11', text: 'Das Programm läuft nicht richtig.', description: 'Satz 3' },
      { id: 'wrd-08-12', text: 'Der Browser öffnet die Website schnell.', description: 'Satz 4' },
      { id: 'wrd-08-13', text: 'Mach ein Backup deiner wichtigen Daten.', description: 'Satz 5' },
      { id: 'wrd-08-14', text: 'Das Update muss installiert werden.', description: 'Satz 6' },
      {
        id: 'wrd-08-15',
        text: 'Computer Monitor Datei Download Backup',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'words-09',
    title: 'Thema: Büro',
    description: 'Wörter aus dem Büroalltag',
    type: LessonType.WORDS,
    category: 'words',
    level: 4,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'wrd-09-01',
        text: 'Meeting Termin Besprechung Konferenz Team',
        description: 'Termine',
      },
      {
        id: 'wrd-09-02',
        text: 'Dokument Bericht Präsentation Protokoll',
        description: 'Dokumente',
      },
      {
        id: 'wrd-09-03',
        text: 'Chef Kollege Mitarbeiter Abteilung Firma',
        description: 'Personen',
      },
      { id: 'wrd-09-04', text: 'Drucker Scanner Kopierer Fax Telefon', description: 'Geräte' },
      { id: 'wrd-09-05', text: 'Schreibtisch Stuhl Bürostuhl Regal Lampe', description: 'Möbel' },
      {
        id: 'wrd-09-06',
        text: 'Vertrag Rechnung Angebot Bestellung Lieferung',
        description: 'Handel',
      },
      { id: 'wrd-09-07', text: 'Projekt Aufgabe Deadline Ziel Erfolg', description: 'Projekte' },
      { id: 'wrd-09-08', text: 'Email Kalender Notiz Agenda Planung', description: 'Organisation' },
      { id: 'wrd-09-09', text: 'Das Meeting beginnt um neun Uhr.', description: 'Satz 1' },
      { id: 'wrd-09-10', text: 'Bitte sende mir das Dokument per Email.', description: 'Satz 2' },
      { id: 'wrd-09-11', text: 'Die Deadline für das Projekt ist Freitag.', description: 'Satz 3' },
      { id: 'wrd-09-12', text: 'Der Chef möchte den Bericht sehen.', description: 'Satz 4' },
      { id: 'wrd-09-13', text: 'Wir brauchen mehr Papier für den Drucker.', description: 'Satz 5' },
      {
        id: 'wrd-09-14',
        text: 'Die Konferenz findet im großen Saal statt.',
        description: 'Satz 6',
      },
      {
        id: 'wrd-09-15',
        text: 'Meeting Dokument Projekt Email Deadline',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'words-10',
    title: 'Thema: Reisen',
    description: 'Vokabular rund ums Reisen',
    type: LessonType.WORDS,
    category: 'words',
    level: 4,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'wrd-10-01',
        text: 'Flugzeug Zug Bus Auto Schiff Fahrrad',
        description: 'Verkehrsmittel',
      },
      { id: 'wrd-10-02', text: 'Bahnhof Flughafen Hotel Restaurant Museum', description: 'Orte' },
      { id: 'wrd-10-03', text: 'Koffer Rucksack Tasche Gepäck Ticket', description: 'Gepäck' },
      { id: 'wrd-10-04', text: 'Reisepass Visum Buchung Reservierung', description: 'Dokumente' },
      { id: 'wrd-10-05', text: 'Strand Meer Berg Wald See Fluss', description: 'Natur' },
      {
        id: 'wrd-10-06',
        text: 'Sehenswürdigkeit Denkmal Kirche Schloss',
        description: 'Tourismus',
      },
      {
        id: 'wrd-10-07',
        text: 'Zimmer Einzelzimmer Doppelzimmer Suite',
        description: 'Unterkunft',
      },
      {
        id: 'wrd-10-08',
        text: 'Frühstück Halbpension Vollpension Buffet',
        description: 'Verpflegung',
      },
      { id: 'wrd-10-09', text: 'Wir fliegen morgen nach Berlin.', description: 'Satz 1' },
      { id: 'wrd-10-10', text: 'Das Hotel liegt direkt am Strand.', description: 'Satz 2' },
      { id: 'wrd-10-11', text: 'Ich habe meinen Reisepass vergessen.', description: 'Satz 3' },
      { id: 'wrd-10-12', text: 'Der Zug fährt in zehn Minuten ab.', description: 'Satz 4' },
      { id: 'wrd-10-13', text: 'Können Sie mir ein Taxi rufen?', description: 'Satz 5' },
      { id: 'wrd-10-14', text: 'Die Sehenswürdigkeiten sind wunderschön.', description: 'Satz 6' },
      {
        id: 'wrd-10-15',
        text: 'Flugzeug Hotel Strand Reisepass Zug',
        description: 'Abschluss-Mix',
      },
    ],
  },
];

/**
 * ============================================================================
 * ADVANCED LESSONS - Level 5-6 (Fortgeschritten)
 * Komplexe Texte und alle Sonderzeichen
 * ============================================================================
 */
export const ADVANCED_LESSONS: Lesson[] = [
  // ========== ALLE SONDERZEICHEN ==========
  {
    id: 'adv-01',
    title: 'Alle Sonderzeichen Übersicht',
    description: 'Systematisches Training aller wichtigen Sonderzeichen',
    type: LessonType.BASICS,
    category: 'advanced',
    level: 5,
    targetWPM: 25,
    targetAccuracy: 85,
    exercises: [
      { id: 'adv-01-01', text: '! ! ! ? ? ? . . . , , ,', description: 'Satzzeichen einzeln' },
      { id: 'adv-01-02', text: '; ; ; : : : - - - _ _ _', description: 'Mehr Satzzeichen' },
      { id: 'adv-01-03', text: '! ? . , ; : - _ + = * /', description: 'Grundzeichen Mix' },
      { id: 'adv-01-04', text: '( ) ( ) [ ] [ ] { } { }', description: 'Klammern einzeln' },
      { id: 'adv-01-05', text: '( ) [ ] { } < > " \' `', description: 'Klammern und Quotes' },
      { id: 'adv-01-06', text: '@ @ @ # # # $ $ $ % % %', description: 'Spezialzeichen einzeln' },
      { id: 'adv-01-07', text: '@ # $ % ^ & | ~ §', description: 'Spezialzeichen Mix' },
      { id: 'adv-01-08', text: 'email@domain.de user@mail.com', description: 'E-Mail-Adressen' },
      { id: 'adv-01-09', text: '#hashtag #coding #keyboard', description: 'Hashtags' },
      { id: 'adv-01-10', text: '$100 €50 £25 ¥1000 CHF80', description: 'Währungen' },
      { id: 'adv-01-11', text: '50% 100% 25% 75% 33.3%', description: 'Prozente' },
      { id: 'adv-01-12', text: 'user_name my_file config_v2', description: 'Unterstriche' },
      { id: 'adv-01-13', text: 'file-name my-project api-v2', description: 'Bindestriche' },
      { id: 'adv-01-14', text: 'path/to/file src/main.ts', description: 'Pfade' },
      {
        id: 'adv-01-15',
        text: 'email@test.de #tag $50 25% path/file',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'adv-02',
    title: 'Mathematische Zeichen',
    description: 'Für technische und wissenschaftliche Texte',
    type: LessonType.BASICS,
    category: 'advanced',
    level: 5,
    targetWPM: 22,
    targetAccuracy: 88,
    exercises: [
      { id: 'adv-02-01', text: '+ + + - - - * * * / / /', description: 'Operatoren einzeln' },
      { id: 'adv-02-02', text: '= = = != != != < < < > > >', description: 'Vergleiche einzeln' },
      { id: 'adv-02-03', text: '+ - * / = != < > <= >= ++', description: 'Grundoperatoren Mix' },
      { id: 'adv-02-04', text: '1 + 1 = 2; 2 + 2 = 4; 3 + 3 = 6', description: 'Addition' },
      { id: 'adv-02-05', text: '10 - 3 = 7; 15 - 8 = 7; 20 - 5 = 15', description: 'Subtraktion' },
      {
        id: 'adv-02-06',
        text: '5 * 6 = 30; 7 * 8 = 56; 9 * 9 = 81',
        description: 'Multiplikation',
      },
      { id: 'adv-02-07', text: '20 / 4 = 5; 36 / 6 = 6; 100 / 10 = 10', description: 'Division' },
      { id: 'adv-02-08', text: 'x = (a + b) / c; y = a * b - c', description: 'Formeln' },
      { id: 'adv-02-09', text: 'f(x) = x^2 + 2x + 1; g(x) = 3x - 5', description: 'Funktionen' },
      { id: 'adv-02-10', text: 'a < b; c >= d; x != y; z == 0', description: 'Vergleiche' },
      { id: 'adv-02-11', text: 'a <= b; c > d; x == y; z != 0', description: 'Mehr Vergleiche' },
      { id: 'adv-02-12', text: 'i++; j--; count += 1; total -= 5', description: 'Inkrement' },
      {
        id: 'adv-02-13',
        text: 'sum += value; product *= factor',
        description: 'Zusammengesetzte Ops',
      },
      { id: 'adv-02-14', text: 'result = (a + b) * (c - d) / e', description: 'Komplexe Formel' },
      { id: 'adv-02-15', text: '2 + 2 = 4; x < y; i++; f(x) = x^2', description: 'Abschluss-Mix' },
    ],
  },
  // ========== DEUTSCHE LITERATUR ==========
  {
    id: 'adv-03',
    title: 'Deutsche Klassiker 1',
    description: 'Zitate aus der deutschen Literatur',
    type: LessonType.WORDS,
    category: 'advanced',
    level: 5,
    targetWPM: 40,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'adv-03-01',
        text: 'Da steh ich nun, ich armer Tor, und bin so klug als wie zuvor.',
        description: 'Goethe - Faust',
      },
      {
        id: 'adv-03-02',
        text: 'Zwei Seelen wohnen, ach! in meiner Brust.',
        description: 'Goethe - Faust 2',
      },
      {
        id: 'adv-03-03',
        text: 'Sein oder Nichtsein, das ist hier die Frage.',
        description: 'Shakespeare - Hamlet',
      },
      {
        id: 'adv-03-04',
        text: 'Die Gedanken sind frei, wer kann sie erraten?',
        description: 'Volkslied',
      },
      {
        id: 'adv-03-05',
        text: 'Über allen Gipfeln ist Ruh, in allen Wipfeln spürest du kaum einen Hauch.',
        description: 'Goethe - Wanderers Nachtlied',
      },
      {
        id: 'adv-03-06',
        text: 'Wer reitet so spät durch Nacht und Wind? Es ist der Vater mit seinem Kind.',
        description: 'Goethe - Erlkönig',
      },
      {
        id: 'adv-03-07',
        text: 'Das Schöne ist nichts als des Schrecklichen Anfang.',
        description: 'Rilke',
      },
      {
        id: 'adv-03-08',
        text: 'Alle Menschen werden Brüder, wo dein sanfter Flügel weilt.',
        description: 'Schiller - Freude',
      },
      {
        id: 'adv-03-09',
        text: 'Die beste Bildung findet ein gescheiter Mensch auf Reisen.',
        description: 'Goethe',
      },
      {
        id: 'adv-03-10',
        text: 'Edel sei der Mensch, hilfreich und gut!',
        description: 'Goethe - Das Göttliche',
      },
      {
        id: 'adv-03-11',
        text: 'Gefährlich ist es, den Leu zu wecken.',
        description: 'Schiller - Lied von der Glocke',
      },
      {
        id: 'adv-03-12',
        text: 'Ich weiß nicht, was soll es bedeuten, dass ich so traurig bin.',
        description: 'Heine - Loreley',
      },
      {
        id: 'adv-03-13',
        text: 'Am Ende hängen wir doch ab von Kreaturen, die wir machten.',
        description: 'Goethe - Faust',
      },
      {
        id: 'adv-03-14',
        text: 'Dunkel war es, der Mond schien helle.',
        description: 'Paradoxes Gedicht',
      },
      {
        id: 'adv-03-15',
        text: 'Da steh ich nun. Zwei Seelen wohnen. Sein oder Nichtsein.',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'adv-04',
    title: 'Geschäftsbriefe',
    description: 'Formelle Korrespondenz',
    type: LessonType.WORDS,
    category: 'advanced',
    level: 5,
    targetWPM: 38,
    targetAccuracy: 90,
    exercises: [
      { id: 'adv-04-01', text: 'Sehr geehrte Damen und Herren,', description: 'Anrede formal' },
      {
        id: 'adv-04-02',
        text: 'Sehr geehrter Herr Müller, sehr geehrte Frau Schmidt,',
        description: 'Anrede persönlich',
      },
      {
        id: 'adv-04-03',
        text: 'mit diesem Schreiben möchte ich mich vorstellen.',
        description: 'Einleitung',
      },
      {
        id: 'adv-04-04',
        text: 'Bezugnehmend auf Ihr Schreiben vom 15. März teilen wir Ihnen mit...',
        description: 'Bezugnahme',
      },
      {
        id: 'adv-04-05',
        text: 'Für Rückfragen stehe ich Ihnen gerne zur Verfügung.',
        description: 'Angebot',
      },
      {
        id: 'adv-04-06',
        text: 'Wir freuen uns auf eine baldige Rückmeldung Ihrerseits.',
        description: 'Abschluss',
      },
      { id: 'adv-04-07', text: 'Mit freundlichen Grüßen', description: 'Grußformel Standard' },
      { id: 'adv-04-08', text: 'Hochachtungsvoll verbleibe ich', description: 'Grußformel formal' },
      { id: 'adv-04-09', text: 'Max Mustermann, Geschäftsführer', description: 'Unterschrift' },
      { id: 'adv-04-10', text: 'Anlage: Vertrag, Rechnung, Lieferschein', description: 'Anlagen' },
      {
        id: 'adv-04-11',
        text: 'PS: Bitte beachten Sie unsere neuen Öffnungszeiten.',
        description: 'Postskriptum',
      },
      {
        id: 'adv-04-12',
        text: 'Betreff: Ihre Anfrage vom 10. April 2024',
        description: 'Betreffzeile',
      },
      {
        id: 'adv-04-13',
        text: 'Im Anhang finden Sie die gewünschten Unterlagen.',
        description: 'Anhang-Hinweis',
      },
      {
        id: 'adv-04-14',
        text: 'Wir bedanken uns für Ihr entgegengebrachtes Vertrauen.',
        description: 'Danksagung',
      },
      {
        id: 'adv-04-15',
        text: 'Sehr geehrte Damen und Herren, mit freundlichen Grüßen.',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'adv-05',
    title: 'Wissenschaftliche Texte',
    description: 'Akademisches Schreiben',
    type: LessonType.WORDS,
    category: 'advanced',
    level: 6,
    targetWPM: 35,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'adv-05-01',
        text: 'Die vorliegende Untersuchung befasst sich mit der Analyse von...',
        description: 'Einleitung',
      },
      {
        id: 'adv-05-02',
        text: 'Ziel dieser Arbeit ist es, die Zusammenhänge zwischen...',
        description: 'Zielsetzung',
      },
      {
        id: 'adv-05-03',
        text: 'Gemäß der Hypothese wurde erwartet, dass die Ergebnisse zeigen...',
        description: 'Hypothese',
      },
      {
        id: 'adv-05-04',
        text: 'Die Daten wurden mittels quantitativer Methoden analysiert.',
        description: 'Methodik',
      },
      {
        id: 'adv-05-05',
        text: 'Die Stichprobe umfasste 500 Teilnehmer im Alter von 18 bis 65 Jahren.',
        description: 'Stichprobe',
      },
      {
        id: 'adv-05-06',
        text: 'Die Ergebnisse zeigen einen signifikanten Zusammenhang (p < 0.05).',
        description: 'Ergebnisse',
      },
      {
        id: 'adv-05-07',
        text: 'Die Korrelation betrug r = 0.78 und war hochsignifikant.',
        description: 'Statistik',
      },
      {
        id: 'adv-05-08',
        text: 'Diese Befunde stehen im Einklang mit früheren Studien.',
        description: 'Diskussion',
      },
      {
        id: 'adv-05-09',
        text: 'Limitationen dieser Studie umfassen die geringe Stichprobengröße.',
        description: 'Limitationen',
      },
      {
        id: 'adv-05-10',
        text: 'Zusammenfassend lässt sich feststellen, dass die Ergebnisse...',
        description: 'Fazit',
      },
      {
        id: 'adv-05-11',
        text: 'Künftige Forschung sollte diese Aspekte weiter untersuchen.',
        description: 'Ausblick',
      },
      {
        id: 'adv-05-12',
        text: 'Vgl. Müller (2023), S. 42-45; siehe auch Schmidt (2022).',
        description: 'Quellenangabe',
      },
      {
        id: 'adv-05-13',
        text: 'Abbildung 3 zeigt die Verteilung der Messwerte.',
        description: 'Abbildungen',
      },
      {
        id: 'adv-05-14',
        text: 'Tabelle 2 fasst die deskriptiven Statistiken zusammen.',
        description: 'Tabellen',
      },
      {
        id: 'adv-05-15',
        text: 'Die Hypothese konnte bestätigt werden (p < 0.001).',
        description: 'Abschluss-Mix',
      },
    ],
  },
  // ========== SCHNELLIGKEITSTRAINING ==========
  {
    id: 'adv-06',
    title: 'Speed Drill 1',
    description: 'Hochfrequenz-Wörter für maximale Geschwindigkeit',
    type: LessonType.WORDS,
    category: 'advanced',
    level: 5,
    targetWPM: 50,
    targetAccuracy: 92,
    exercises: [
      {
        id: 'adv-06-01',
        text: 'der die das der die das der die das',
        description: 'Top 3 schnell',
      },
      { id: 'adv-06-02', text: 'und in zu und in zu und in zu', description: 'Wörter 4-6 schnell' },
      {
        id: 'adv-06-03',
        text: 'der die das und in zu den mit von auf',
        description: '10 häufigste',
      },
      {
        id: 'adv-06-04',
        text: 'ist nicht sich auch ist nicht sich auch',
        description: 'Wörter 7-10 schnell',
      },
      {
        id: 'adv-06-05',
        text: 'ist nicht sich auch es an sie so eine',
        description: '11-19 häufigste',
      },
      { id: 'adv-06-06', text: 'das ist und die der nicht zu so es', description: 'Mix schnell' },
      {
        id: 'adv-06-07',
        text: 'ich du er ich du er ich du er sie es',
        description: 'Pronomen schnell',
      },
      { id: 'adv-06-08', text: 'ich du er sie es wir ihr sie Sie', description: 'Alle Pronomen' },
      {
        id: 'adv-06-09',
        text: 'haben sein haben sein haben sein werden',
        description: 'Verben schnell',
      },
      {
        id: 'adv-06-10',
        text: 'haben sein werden können müssen wollen',
        description: 'Modalverben',
      },
      {
        id: 'adv-06-11',
        text: 'der ist und ich habe wir sind sie hat',
        description: 'Kombis schnell',
      },
      {
        id: 'adv-06-12',
        text: 'in an auf aus bei mit nach zu von für',
        description: 'Präpositionen',
      },
      {
        id: 'adv-06-13',
        text: 'nicht auch noch schon immer nur sehr viel',
        description: 'Adverbien',
      },
      {
        id: 'adv-06-14',
        text: 'aber denn weil wenn oder aber denn weil',
        description: 'Konjunktionen',
      },
      {
        id: 'adv-06-15',
        text: 'der die das und ist haben werden ich du',
        description: 'Abschluss-Mix',
      },
    ],
  },
  {
    id: 'adv-07',
    title: 'Speed Drill 2',
    description: 'Längere Wörter im Schnelldurchlauf',
    type: LessonType.WORDS,
    category: 'advanced',
    level: 6,
    targetWPM: 45,
    targetAccuracy: 90,
    exercises: [
      { id: 'adv-07-01', text: 'allerdings allerdings allerdings', description: 'Füllwörter 1' },
      { id: 'adv-07-02', text: 'beispielsweise beispielsweise', description: 'Füllwörter 2' },
      {
        id: 'adv-07-03',
        text: 'allerdings beispielsweise beziehungsweise',
        description: 'Füllwörter Mix',
      },
      { id: 'adv-07-04', text: 'grundsätzlich grundsätzlich', description: 'Adverb 1' },
      { id: 'adv-07-05', text: 'wahrscheinlich selbstverständlich', description: 'Adverb 2' },
      {
        id: 'adv-07-06',
        text: 'grundsätzlich wahrscheinlich selbstverständlich',
        description: 'Adverbien Mix',
      },
      { id: 'adv-07-07', text: 'Verantwortung Verantwortung', description: 'Substantiv 1' },
      { id: 'adv-07-08', text: 'Möglichkeit Notwendigkeit', description: 'Substantiv 2' },
      {
        id: 'adv-07-09',
        text: 'Verantwortung Möglichkeit Notwendigkeit',
        description: 'Substantive Mix',
      },
      { id: 'adv-07-10', text: 'Zusammenarbeit Zusammenarbeit', description: 'Business 1' },
      { id: 'adv-07-11', text: 'Entwicklung Verbesserung', description: 'Business 2' },
      {
        id: 'adv-07-12',
        text: 'Zusammenarbeit Entwicklung Verbesserung',
        description: 'Business Mix',
      },
      { id: 'adv-07-13', text: 'Kundenzufriedenheit Qualitätssicherung', description: 'Komposita' },
      {
        id: 'adv-07-14',
        text: 'Geschäftsführung Projektmanagement Personalentwicklung',
        description: 'Management',
      },
      {
        id: 'adv-07-15',
        text: 'allerdings Verantwortung Zusammenarbeit',
        description: 'Abschluss-Mix',
      },
    ],
  },
];

/**
 * ============================================================================
 * EXPERT LESSONS - Level 6+ (Experte)
 * Sehr komplexe Texte und Spezialthemen
 * ============================================================================
 */
export const EXPERT_LESSONS: Lesson[] = [
  // ========== PHILOSOPHIE UND LITERATUR ==========
  {
    id: 'exp-01',
    title: 'Philosophische Texte',
    description: 'Anspruchsvolle philosophische Passagen',
    type: LessonType.WORDS,
    category: 'expert',
    level: 6,
    targetWPM: 40,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'exp-01-01',
        text: 'Ich denke, also bin ich. Diese fundamentale Erkenntnis bildet die Grundlage der cartesianischen Philosophie.',
        description: 'Descartes',
      },
      {
        id: 'exp-01-02',
        text: 'Der kategorische Imperativ fordert: Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
        description: 'Kant',
      },
      {
        id: 'exp-01-03',
        text: 'Der Mensch ist zur Freiheit verurteilt. Er ist frei, sobald er in die Welt geworfen ist, und verantwortlich für alles, was er tut.',
        description: 'Sartre',
      },
      {
        id: 'exp-01-04',
        text: 'Die Sprache ist das Haus des Seins. In ihrer Behausung wohnt der Mensch.',
        description: 'Heidegger',
      },
    ],
  },
  {
    id: 'exp-02',
    title: 'Rechtliche Texte',
    description: 'Juristische Formulierungen',
    type: LessonType.WORDS,
    category: 'expert',
    level: 6,
    targetWPM: 35,
    targetAccuracy: 92,
    exercises: [
      {
        id: 'exp-02-01',
        text: 'Gemäß § 1 Absatz 1 des Bürgerlichen Gesetzbuchs beginnt die Rechtsfähigkeit des Menschen mit der Vollendung der Geburt.',
        description: 'BGB',
      },
      {
        id: 'exp-02-02',
        text: 'Der Beklagte wird verurteilt, an die Klägerin einen Betrag in Höhe von 5.000 Euro nebst Zinsen zu zahlen.',
        description: 'Urteil',
      },
      {
        id: 'exp-02-03',
        text: 'Die Parteien schließen hiermit folgenden Vertrag unter Ausschluss der ordentlichen Gerichtsbarkeit.',
        description: 'Vertrag',
      },
      {
        id: 'exp-02-04',
        text: 'Vorbehaltlich abweichender Vereinbarungen gelten die Allgemeinen Geschäftsbedingungen.',
        description: 'AGB',
      },
    ],
  },
  {
    id: 'exp-03',
    title: 'Medizinische Texte',
    description: 'Fachvokabular aus der Medizin',
    type: LessonType.WORDS,
    category: 'expert',
    level: 6,
    targetWPM: 32,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'exp-03-01',
        text: 'Die Diagnose lautet: akute Appendizitis mit beginnender Peritonitis. Eine sofortige Appendektomie ist indiziert.',
        description: 'Diagnose',
      },
      {
        id: 'exp-03-02',
        text: 'Der Patient zeigt Symptome einer Hypoglykämie: Schwitzen, Zittern, Tachykardie und Verwirrtheit.',
        description: 'Symptome',
      },
      {
        id: 'exp-03-03',
        text: 'Therapie: Acetylsalicylsäure 100mg täglich, Metoprolol 47,5mg zweimal täglich.',
        description: 'Medikation',
      },
      {
        id: 'exp-03-04',
        text: 'Auskultation: Herztöne rein, rhythmisch. Lunge: vesikuläres Atemgeräusch beidseits.',
        description: 'Untersuchung',
      },
    ],
  },
  // ========== TECHNIK ==========
  {
    id: 'exp-04',
    title: 'Technische Dokumentation',
    description: 'Anspruchsvolle technische Texte',
    type: LessonType.WORDS,
    category: 'expert',
    level: 6,
    targetWPM: 35,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'exp-04-01',
        text: 'Das System verwendet eine Microservices-Architektur mit Kubernetes-Orchestrierung und horizontaler Skalierung.',
        description: 'Architektur',
      },
      {
        id: 'exp-04-02',
        text: 'Der Algorithmus hat eine Zeitkomplexität von O(n log n) und eine Raumkomplexität von O(n).',
        description: 'Algorithmen',
      },
      {
        id: 'exp-04-03',
        text: 'Die REST-API unterstützt CRUD-Operationen mit OAuth 2.0 Authentifizierung und Rate-Limiting.',
        description: 'APIs',
      },
      {
        id: 'exp-04-04',
        text: 'Der CI/CD-Pipeline-Prozess umfasst: Build, Test, Security-Scan, Staging-Deployment und Production-Release.',
        description: 'DevOps',
      },
    ],
  },
  // ========== EXTREME CHALLENGES ==========
  {
    id: 'exp-05',
    title: 'Symbol-Marathon',
    description: 'Alle Sonderzeichen in komplexen Kombinationen',
    type: LessonType.BASICS,
    category: 'expert',
    level: 6,
    targetWPM: 25,
    targetAccuracy: 85,
    exercises: [
      {
        id: 'exp-05-01',
        text: 'user@example.com -> email_validated = true;',
        description: 'Code-Mix',
      },
      {
        id: 'exp-05-02',
        text: '{"key": "value", "count": 42, "valid": true}',
        description: 'JSON',
      },
      {
        id: 'exp-05-03',
        text: '<div class="container" id="main">Content</div>',
        description: 'HTML',
      },
      {
        id: 'exp-05-04',
        text: 'SELECT * FROM users WHERE age >= 18 AND status = "active";',
        description: 'SQL',
      },
      {
        id: 'exp-05-05',
        text: 'npm install --save-dev @types/node typescript ts-node',
        description: 'CLI',
      },
    ],
  },
  {
    id: 'exp-06',
    title: 'Geschwindigkeits-Challenge',
    description: 'Für absolute Profis - 60+ WPM Ziel',
    type: LessonType.WORDS,
    category: 'expert',
    level: 6,
    targetWPM: 60,
    targetAccuracy: 92,
    exercises: [
      {
        id: 'exp-06-01',
        text: 'der die das und in zu den mit von auf ist nicht sich auch es an sie so eine als für auf',
        description: 'Häufigste Wörter',
      },
      {
        id: 'exp-06-02',
        text: 'Die schnelle braune Fuchs springt über den faulen Hund. Der frühe Vogel fängt den Wurm.',
        description: 'Klassiker',
      },
      {
        id: 'exp-06-03',
        text: 'wir sie können werden hier machen haben diese hat sein war bei werden sollen durch schon',
        description: 'Mehr Häufige',
      },
      {
        id: 'exp-06-04',
        text: 'Übung macht den Meister. Wer A sagt, muss auch B sagen. Ende gut, alles gut.',
        description: 'Sprichwörter',
      },
    ],
  },
];

/**
 * ============================================================================
 * PROGRAMMING LESSONS - Level 4-6 (Code-Übungen)
 * Von einfach bis komplex sortiert
 * ============================================================================
 */
export const PROGRAMMING_LESSONS: ProgrammingLesson[] = [
  // ========== JAVASCRIPT BEGINNER ==========
  {
    id: 'prog-js-01',
    title: 'JavaScript Anfänger',
    description: 'Erste Schritte mit JavaScript',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'javascript',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 95,
    exercises: [
      { id: 'pjs-01-01', text: 'let x = 5;', description: 'Variable deklarieren' },
      { id: 'pjs-01-02', text: 'const name = "Max";', description: 'Konstante' },
      { id: 'pjs-01-03', text: 'let sum = a + b;', description: 'Addition' },
      { id: 'pjs-01-04', text: 'console.log("Hello");', description: 'Ausgabe' },
      { id: 'pjs-01-05', text: 'let arr = [1, 2, 3];', description: 'Array' },
      { id: 'pjs-01-06', text: 'if (x > 0) { }', description: 'If-Statement' },
    ],
  },
  {
    id: 'prog-js-02',
    title: 'JavaScript Funktionen',
    description: 'Funktionen in JavaScript',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'javascript',
    syntaxHighlight: true,
    targetWPM: 24,
    targetAccuracy: 92,
    exercises: [
      { id: 'pjs-02-01', text: 'function add(a, b) { return a + b; }', description: 'Funktion' },
      { id: 'pjs-02-02', text: 'const multiply = (a, b) => a * b;', description: 'Arrow Function' },
      {
        id: 'pjs-02-03',
        text: 'function greet(name = "User") { }',
        description: 'Default Parameter',
      },
      { id: 'pjs-02-04', text: 'const result = calculate(5, 3);', description: 'Funktionsaufruf' },
      { id: 'pjs-02-05', text: 'const square = x => x * x;', description: 'Kurze Arrow' },
    ],
  },
  {
    id: 'prog-js-03',
    title: 'JavaScript Intermediate',
    description: 'Fortgeschrittene JavaScript-Konzepte',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'javascript',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 90,
    exercises: [
      { id: 'pjs-03-01', text: 'const doubled = arr.map(x => x * 2);', description: 'Array.map' },
      {
        id: 'pjs-03-02',
        text: 'const filtered = arr.filter(x => x > 5);',
        description: 'Array.filter',
      },
      {
        id: 'pjs-03-03',
        text: 'const sum = arr.reduce((a, b) => a + b, 0);',
        description: 'Array.reduce',
      },
      { id: 'pjs-03-04', text: 'const { name, age } = user;', description: 'Destructuring' },
      {
        id: 'pjs-03-05',
        text: 'const merged = { ...obj1, ...obj2 };',
        description: 'Spread Operator',
      },
      { id: 'pjs-03-06', text: 'const items = [...arr1, ...arr2];', description: 'Array Spread' },
    ],
  },
  {
    id: 'prog-js-04',
    title: 'JavaScript Advanced',
    description: 'Async/Await und Promises',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'javascript',
    syntaxHighlight: true,
    targetWPM: 24,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'pjs-04-01',
        text: 'async function fetchData() { await api.get(); }',
        description: 'Async/Await',
      },
      {
        id: 'pjs-04-02',
        text: 'const data = await fetch(url).then(r => r.json());',
        description: 'Fetch',
      },
      {
        id: 'pjs-04-03',
        text: 'Promise.all([p1, p2, p3]).then(results => { });',
        description: 'Promise.all',
      },
      {
        id: 'pjs-04-04',
        text: 'try { await save(); } catch (e) { handle(e); }',
        description: 'Try/Catch',
      },
      {
        id: 'pjs-04-05',
        text: 'const delay = ms => new Promise(r => setTimeout(r, ms));',
        description: 'Custom Promise',
      },
    ],
  },
  // ========== TYPESCRIPT ==========
  {
    id: 'prog-ts-01',
    title: 'TypeScript Basics',
    description: 'TypeScript-Typisierung lernen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'typescript',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 92,
    exercises: [
      { id: 'pts-01-01', text: 'const count: number = 42;', description: 'Typisierte Variable' },
      { id: 'pts-01-02', text: 'let name: string = "Max";', description: 'String-Typ' },
      { id: 'pts-01-03', text: 'let active: boolean = true;', description: 'Boolean-Typ' },
      { id: 'pts-01-04', text: 'const items: string[] = [];', description: 'Array-Typ' },
      {
        id: 'pts-01-05',
        text: 'function greet(name: string): void { }',
        description: 'Void Return',
      },
    ],
  },
  {
    id: 'prog-ts-02',
    title: 'TypeScript Interfaces',
    description: 'Interfaces und Types',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'typescript',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'pts-02-01',
        text: 'interface User { name: string; age: number; }',
        description: 'Interface',
      },
      { id: 'pts-02-02', text: 'type Status = "active" | "inactive";', description: 'Union Type' },
      {
        id: 'pts-02-03',
        text: 'interface Config { readonly id: string; }',
        description: 'Readonly',
      },
      {
        id: 'pts-02-04',
        text: 'interface Opt { name?: string; }',
        description: 'Optional Property',
      },
      {
        id: 'pts-02-05',
        text: 'type Callback = (data: string) => void;',
        description: 'Function Type',
      },
    ],
  },
  {
    id: 'prog-ts-03',
    title: 'TypeScript Advanced',
    description: 'Generics und fortgeschrittene Typen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 6,
    programmingLanguage: 'typescript',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'pts-03-01',
        text: 'function identity<T>(arg: T): T { return arg; }',
        description: 'Generic Function',
      },
      {
        id: 'pts-03-02',
        text: 'type Result<T> = { data: T; error?: string };',
        description: 'Generic Type',
      },
      {
        id: 'pts-03-03',
        text: 'type Partial<T> = { [P in keyof T]?: T[P] };',
        description: 'Mapped Type',
      },
      {
        id: 'pts-03-04',
        text: 'type Pick<T, K extends keyof T> = { [P in K]: T[P] };',
        description: 'Pick Utility',
      },
      {
        id: 'pts-03-05',
        text: 'class Service<T> implements IService<T> { }',
        description: 'Generic Class',
      },
    ],
  },
  // ========== PYTHON ==========
  {
    id: 'prog-py-01',
    title: 'Python Anfänger',
    description: 'Python-Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'python',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 94,
    exercises: [
      { id: 'ppy-01-01', text: 'name = "Python"', description: 'Variable' },
      { id: 'ppy-01-02', text: 'numbers = [1, 2, 3, 4, 5]', description: 'Liste' },
      { id: 'ppy-01-03', text: 'print(f"Hello {name}")', description: 'F-String' },
      { id: 'ppy-01-04', text: 'for i in range(10): print(i)', description: 'For-Loop' },
      { id: 'ppy-01-05', text: 'if x > 0: print("positive")', description: 'If-Statement' },
    ],
  },
  {
    id: 'prog-py-02',
    title: 'Python Funktionen',
    description: 'Funktionen in Python',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'python',
    syntaxHighlight: true,
    targetWPM: 24,
    targetAccuracy: 92,
    exercises: [
      { id: 'ppy-02-01', text: 'def greet(name): return f"Hello {name}"', description: 'Funktion' },
      { id: 'ppy-02-02', text: 'def add(a, b=0): return a + b', description: 'Default Parameter' },
      { id: 'ppy-02-03', text: 'square = lambda x: x ** 2', description: 'Lambda' },
      { id: 'ppy-02-04', text: 'def func(*args, **kwargs): pass', description: '*args **kwargs' },
      { id: 'ppy-02-05', text: '@decorator\ndef func(): pass', description: 'Decorator' },
    ],
  },
  {
    id: 'prog-py-03',
    title: 'Python Intermediate',
    description: 'Fortgeschrittenes Python',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'python',
    syntaxHighlight: true,
    targetWPM: 24,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'ppy-03-01',
        text: 'squared = [x**2 for x in range(10)]',
        description: 'List Comprehension',
      },
      { id: 'ppy-03-02', text: 'data = {"name": "John", "age": 30}', description: 'Dictionary' },
      {
        id: 'ppy-03-03',
        text: 'filtered = {k: v for k, v in d.items() if v > 0}',
        description: 'Dict Comprehension',
      },
      {
        id: 'ppy-03-04',
        text: 'with open("file.txt") as f: data = f.read()',
        description: 'Context Manager',
      },
      { id: 'ppy-03-05', text: 'result = map(lambda x: x * 2, numbers)', description: 'Map' },
    ],
  },
  {
    id: 'prog-py-04',
    title: 'Python OOP',
    description: 'Objektorientiertes Python',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'python',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'ppy-04-01',
        text: 'class User: def __init__(self, name): self.name = name',
        description: 'Klasse',
      },
      {
        id: 'ppy-04-02',
        text: 'class Admin(User): def __init__(self): super().__init__()',
        description: 'Vererbung',
      },
      {
        id: 'ppy-04-03',
        text: '@property\ndef name(self): return self._name',
        description: 'Property',
      },
      {
        id: 'ppy-04-04',
        text: '@classmethod\ndef create(cls): return cls()',
        description: 'Classmethod',
      },
      { id: 'ppy-04-05', text: '@staticmethod\ndef helper(): pass', description: 'Staticmethod' },
    ],
  },
  {
    id: 'prog-py-05',
    title: 'Python Async',
    description: 'Asynchrones Python',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 6,
    programmingLanguage: 'python',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'ppy-05-01',
        text: 'async def fetch(): return await api.get()',
        description: 'Async Function',
      },
      { id: 'ppy-05-02', text: 'await asyncio.gather(task1, task2)', description: 'Gather' },
      {
        id: 'ppy-05-03',
        text: 'async with aiohttp.ClientSession() as session:',
        description: 'Async Context',
      },
      {
        id: 'ppy-05-04',
        text: 'result = await asyncio.wait_for(coro, timeout=5)',
        description: 'Timeout',
      },
      { id: 'ppy-05-05', text: 'asyncio.run(main())', description: 'Run' },
    ],
  },
  // ========== JAVA ==========
  {
    id: 'prog-java-01',
    title: 'Java Anfänger',
    description: 'Java-Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'java',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 92,
    exercises: [
      { id: 'pjv-01-01', text: 'public class Main { }', description: 'Klasse' },
      { id: 'pjv-01-02', text: 'public static void main(String[] args) { }', description: 'Main' },
      { id: 'pjv-01-03', text: 'int number = 42;', description: 'Primitive' },
      { id: 'pjv-01-04', text: 'String name = "Java";', description: 'String' },
      { id: 'pjv-01-05', text: 'System.out.println("Hello World");', description: 'Print' },
    ],
  },
  {
    id: 'prog-java-02',
    title: 'Java OOP',
    description: 'Objektorientierung in Java',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'java',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      { id: 'pjv-02-01', text: 'public class User extends Person { }', description: 'Vererbung' },
      {
        id: 'pjv-02-02',
        text: 'public interface Service { void execute(); }',
        description: 'Interface',
      },
      {
        id: 'pjv-02-03',
        text: 'public abstract class Base { abstract void run(); }',
        description: 'Abstract',
      },
      { id: 'pjv-02-04', text: '@Override public String toString() { }', description: 'Override' },
      {
        id: 'pjv-02-05',
        text: 'implements Comparable<User>, Serializable',
        description: 'Multiple Interface',
      },
    ],
  },
  {
    id: 'prog-java-03',
    title: 'Java Collections & Streams',
    description: 'Moderne Java Features',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'java',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 88,
    exercises: [
      {
        id: 'pjv-03-01',
        text: 'List<String> items = new ArrayList<>();',
        description: 'ArrayList',
      },
      {
        id: 'pjv-03-02',
        text: 'Map<String, Integer> map = new HashMap<>();',
        description: 'HashMap',
      },
      {
        id: 'pjv-03-03',
        text: 'items.stream().filter(x -> x.length() > 3).collect(Collectors.toList());',
        description: 'Stream',
      },
      {
        id: 'pjv-03-04',
        text: 'Optional<User> user = repository.findById(id);',
        description: 'Optional',
      },
      {
        id: 'pjv-03-05',
        text: 'var result = items.stream().map(String::toUpperCase).toList();',
        description: 'Method Reference',
      },
    ],
  },
  // ========== HTML/CSS ==========
  {
    id: 'prog-html-01',
    title: 'HTML Basics',
    description: 'HTML-Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'html',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 90,
    exercises: [
      { id: 'phtml-01-01', text: '<!DOCTYPE html>', description: 'Doctype' },
      { id: 'phtml-01-02', text: '<html lang="de"></html>', description: 'HTML Tag' },
      { id: 'phtml-01-03', text: '<head><title>Titel</title></head>', description: 'Head' },
      { id: 'phtml-01-04', text: '<div class="container"></div>', description: 'Div mit Klasse' },
      { id: 'phtml-01-05', text: '<a href="https://example.com">Link</a>', description: 'Anchor' },
      { id: 'phtml-01-06', text: '<img src="bild.jpg" alt="Beschreibung">', description: 'Image' },
    ],
  },
  {
    id: 'prog-css-01',
    title: 'CSS Basics',
    description: 'CSS-Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'css',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 90,
    exercises: [
      { id: 'pcss-01-01', text: '.container { width: 100%; }', description: 'Klassen-Selektor' },
      { id: 'pcss-01-02', text: '#main { margin: 0 auto; }', description: 'ID-Selektor' },
      { id: 'pcss-01-03', text: 'display: flex; justify-content: center;', description: 'Flexbox' },
      { id: 'pcss-01-04', text: 'padding: 10px 20px; border-radius: 8px;', description: 'Spacing' },
      { id: 'pcss-01-05', text: 'background-color: #007bff; color: white;', description: 'Farben' },
    ],
  },
  // ========== REACT/ANGULAR ==========
  {
    id: 'prog-react-01',
    title: 'React Basics',
    description: 'React Component Syntax',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'react',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'preact-01-01',
        text: 'function App() { return <div>Hello</div>; }',
        description: 'Functional Component',
      },
      {
        id: 'preact-01-02',
        text: 'const [count, setCount] = useState(0);',
        description: 'useState',
      },
      {
        id: 'preact-01-03',
        text: 'useEffect(() => { fetchData(); }, []);',
        description: 'useEffect',
      },
      {
        id: 'preact-01-04',
        text: '<button onClick={() => setCount(c => c + 1)}>+</button>',
        description: 'Event Handler',
      },
      {
        id: 'preact-01-05',
        text: '{items.map(item => <li key={item.id}>{item.name}</li>)}',
        description: 'List Rendering',
      },
    ],
  },
  {
    id: 'prog-angular-01',
    title: 'Angular Basics',
    description: 'Angular Component Syntax',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'angular',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'pang-01-01',
        text: '@Component({ selector: "app-root" })',
        description: 'Component Decorator',
      },
      { id: 'pang-01-02', text: '<div *ngIf="isVisible">Content</div>', description: 'ngIf' },
      {
        id: 'pang-01-03',
        text: '<li *ngFor="let item of items">{{ item }}</li>',
        description: 'ngFor',
      },
      { id: 'pang-01-04', text: '[(ngModel)]="username"', description: 'Two-way Binding' },
      { id: 'pang-01-05', text: '@Injectable({ providedIn: "root" })', description: 'Service' },
    ],
  },
  // ========== SQL ==========
  {
    id: 'prog-sql-01',
    title: 'SQL Basics',
    description: 'SQL-Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'sql',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 92,
    exercises: [
      { id: 'psql-01-01', text: 'SELECT * FROM users;', description: 'Select All' },
      {
        id: 'psql-01-02',
        text: 'SELECT name, email FROM users WHERE active = 1;',
        description: 'Where',
      },
      {
        id: 'psql-01-03',
        text: 'INSERT INTO users (name, email) VALUES ("Max", "max@test.de");',
        description: 'Insert',
      },
      {
        id: 'psql-01-04',
        text: 'UPDATE users SET name = "Anna" WHERE id = 1;',
        description: 'Update',
      },
      { id: 'psql-01-05', text: 'DELETE FROM users WHERE id = 5;', description: 'Delete' },
    ],
  },
  {
    id: 'prog-sql-02',
    title: 'SQL Advanced',
    description: 'Fortgeschrittene SQL-Abfragen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'sql',
    syntaxHighlight: true,
    targetWPM: 22,
    targetAccuracy: 90,
    exercises: [
      {
        id: 'psql-02-01',
        text: 'SELECT * FROM users u JOIN orders o ON u.id = o.user_id;',
        description: 'Join',
      },
      {
        id: 'psql-02-02',
        text: 'SELECT COUNT(*), status FROM orders GROUP BY status;',
        description: 'Group By',
      },
      {
        id: 'psql-02-03',
        text: 'SELECT * FROM users ORDER BY created_at DESC LIMIT 10;',
        description: 'Order Limit',
      },
      {
        id: 'psql-02-04',
        text: 'SELECT * FROM users WHERE name LIKE "%Max%";',
        description: 'Like',
      },
      {
        id: 'psql-02-05',
        text: 'SELECT COALESCE(nickname, name) as display_name FROM users;',
        description: 'Coalesce',
      },
    ],
  },
  // ========== BASH/SHELL ==========
  {
    id: 'prog-bash-01',
    title: 'Bash/Shell Basics',
    description: 'Shell-Scripting Grundlagen',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 5,
    programmingLanguage: 'bash',
    syntaxHighlight: true,
    targetWPM: 25,
    targetAccuracy: 90,
    exercises: [
      { id: 'pbash-01-01', text: '#!/bin/bash', description: 'Shebang' },
      { id: 'pbash-01-02', text: 'echo "Hello World"', description: 'Echo' },
      { id: 'pbash-01-03', text: 'name="Max"; echo $name', description: 'Variable' },
      {
        id: 'pbash-01-04',
        text: 'if [ -f "$file" ]; then echo "exists"; fi',
        description: 'If-Statement',
      },
      { id: 'pbash-01-05', text: 'for i in {1..10}; do echo $i; done', description: 'For-Loop' },
      { id: 'pbash-01-06', text: 'cat file.txt | grep "pattern" | wc -l', description: 'Pipes' },
    ],
  },
  // ========== GIT COMMANDS ==========
  {
    id: 'prog-git-01',
    title: 'Git Commands',
    description: 'Die wichtigsten Git-Befehle',
    type: LessonType.PROGRAMMING,
    category: 'programming',
    level: 4,
    programmingLanguage: 'git',
    syntaxHighlight: true,
    targetWPM: 28,
    targetAccuracy: 92,
    exercises: [
      { id: 'pgit-01-01', text: 'git init', description: 'Initialize' },
      {
        id: 'pgit-01-02',
        text: 'git add . && git commit -m "Initial commit"',
        description: 'Add & Commit',
      },
      { id: 'pgit-01-03', text: 'git push origin main', description: 'Push' },
      { id: 'pgit-01-04', text: 'git pull origin main', description: 'Pull' },
      { id: 'pgit-01-05', text: 'git checkout -b feature/new-feature', description: 'Branch' },
      { id: 'pgit-01-06', text: 'git merge feature/new-feature', description: 'Merge' },
    ],
  },
];

/**
 * ============================================================================
 * SHORTCUT LESSONS - Level 4-5 (IDE Shortcuts)
 * ============================================================================
 */
export const SHORTCUT_LESSONS: ShortcutLesson[] = [
  {
    id: 'shortcuts-vscode-01',
    title: 'VS Code Essentials',
    description: 'Die wichtigsten VS Code Shortcuts',
    type: LessonType.SHORTCUTS,
    category: 'shortcuts',
    level: 4,
    ide: 'vscode',
    targetWPM: 15,
    targetAccuracy: 95,
    shortcuts: [
      {
        id: 'sc-01',
        keys: ['Cmd', 'P'],
        action: 'Quick Open',
        description: 'Datei schnell öffnen',
        category: 'Navigation',
      },
      {
        id: 'sc-02',
        keys: ['Cmd', 'Shift', 'P'],
        action: 'Command Palette',
        description: 'Befehls-Palette',
        category: 'Navigation',
      },
      {
        id: 'sc-03',
        keys: ['Cmd', 'D'],
        action: 'Select Word',
        description: 'Wort auswählen',
        category: 'Editing',
      },
      {
        id: 'sc-04',
        keys: ['Cmd', 'Shift', 'K'],
        action: 'Delete Line',
        description: 'Zeile löschen',
        category: 'Editing',
      },
      {
        id: 'sc-05',
        keys: ['Alt', 'Up/Down'],
        action: 'Move Line',
        description: 'Zeile verschieben',
        category: 'Editing',
      },
    ],
    exercises: [
      {
        id: 'shortcuts-vscode-01-01',
        text: 'Cmd+P Cmd+Shift+P Cmd+D',
        description: 'Navigation Shortcuts',
      },
      {
        id: 'shortcuts-vscode-01-02',
        text: 'Cmd+Shift+K Alt+Up Alt+Down',
        description: 'Editing Shortcuts',
      },
      { id: 'shortcuts-vscode-01-03', text: 'Cmd+B Cmd+J Cmd+`', description: 'Panel Shortcuts' },
    ],
  },
  {
    id: 'shortcuts-vscode-02',
    title: 'VS Code Advanced',
    description: 'Fortgeschrittene VS Code Shortcuts',
    type: LessonType.SHORTCUTS,
    category: 'shortcuts',
    level: 5,
    ide: 'vscode',
    targetWPM: 15,
    targetAccuracy: 92,
    shortcuts: [
      {
        id: 'sc-06',
        keys: ['Cmd', 'Shift', 'L'],
        action: 'Select All Occurrences',
        description: 'Alle Vorkommen auswählen',
        category: 'Multi-Cursor',
      },
      {
        id: 'sc-07',
        keys: ['Cmd', 'Alt', 'Up/Down'],
        action: 'Add Cursor',
        description: 'Cursor hinzufügen',
        category: 'Multi-Cursor',
      },
      {
        id: 'sc-08',
        keys: ['F12'],
        action: 'Go to Definition',
        description: 'Zur Definition springen',
        category: 'Navigation',
      },
      {
        id: 'sc-09',
        keys: ['Cmd', 'Shift', 'F'],
        action: 'Search in Files',
        description: 'In Dateien suchen',
        category: 'Search',
      },
    ],
    exercises: [
      {
        id: 'shortcuts-vscode-02-01',
        text: 'Cmd+Shift+L Cmd+Alt+Up F12',
        description: 'Multi-Cursor Shortcuts',
      },
      {
        id: 'shortcuts-vscode-02-02',
        text: 'Cmd+Shift+F Cmd+H Cmd+G',
        description: 'Search Shortcuts',
      },
    ],
  },
  {
    id: 'shortcuts-intellij-01',
    title: 'IntelliJ Essentials',
    description: 'Die wichtigsten IntelliJ Shortcuts',
    type: LessonType.SHORTCUTS,
    category: 'shortcuts',
    level: 4,
    ide: 'intellij',
    targetWPM: 15,
    targetAccuracy: 95,
    shortcuts: [
      {
        id: 'sc-ij-01',
        keys: ['Cmd', 'Shift', 'A'],
        action: 'Find Action',
        description: 'Aktion finden',
        category: 'Navigation',
      },
      {
        id: 'sc-ij-02',
        keys: ['Cmd', 'E'],
        action: 'Recent Files',
        description: 'Letzte Dateien',
        category: 'Navigation',
      },
      {
        id: 'sc-ij-03',
        keys: ['Cmd', 'B'],
        action: 'Go to Declaration',
        description: 'Zur Deklaration',
        category: 'Navigation',
      },
      {
        id: 'sc-ij-04',
        keys: ['Alt', 'Enter'],
        action: 'Quick Fix',
        description: 'Schnellkorrektur',
        category: 'Editing',
      },
    ],
    exercises: [
      {
        id: 'shortcuts-intellij-01-01',
        text: 'Cmd+Shift+A Cmd+E Cmd+B',
        description: 'Navigation Shortcuts',
      },
      {
        id: 'shortcuts-intellij-01-02',
        text: 'Alt+Enter Cmd+N Ctrl+Space',
        description: 'Editing Shortcuts',
      },
    ],
  },
  {
    id: 'shortcuts-vim-01',
    title: 'Vim Basics',
    description: 'Grundlegende Vim-Befehle',
    type: LessonType.SHORTCUTS,
    category: 'shortcuts',
    level: 5,
    ide: 'vim',
    targetWPM: 20,
    targetAccuracy: 90,
    shortcuts: [
      {
        id: 'sc-vim-01',
        keys: ['i'],
        action: 'Insert Mode',
        description: 'Einfügemodus',
        category: 'Modi',
      },
      {
        id: 'sc-vim-02',
        keys: ['Esc'],
        action: 'Normal Mode',
        description: 'Normalmodus',
        category: 'Modi',
      },
      {
        id: 'sc-vim-03',
        keys: ['h', 'j', 'k', 'l'],
        action: 'Navigation',
        description: 'Cursor bewegen',
        category: 'Navigation',
      },
      {
        id: 'sc-vim-04',
        keys: ['d', 'd'],
        action: 'Delete Line',
        description: 'Zeile löschen',
        category: 'Editing',
      },
      {
        id: 'sc-vim-05',
        keys: ['y', 'y'],
        action: 'Yank Line',
        description: 'Zeile kopieren',
        category: 'Editing',
      },
    ],
    exercises: [
      { id: 'shortcuts-vim-01-01', text: 'i Esc :w :q :wq dd yy p', description: 'Vim Basics' },
      { id: 'shortcuts-vim-01-02', text: 'hjkl w b e 0 $ gg G', description: 'Vim Navigation' },
      { id: 'shortcuts-vim-01-03', text: 'ciw diw yiw viw', description: 'Vim Text Objects' },
    ],
  },
];

/**
 * ============================================================================
 * COMBINED EXPORTS
 * ============================================================================
 */

/**
 * All lessons combined (including new micro and practice lessons)
 */
export const ALL_LESSONS: Lesson[] = [
  ...MICRO_LESSONS,
  ...BEGINNER_LESSONS,
  ...BASIC_LESSONS,
  ...INTERMEDIATE_LESSONS,
  ...WORD_LESSONS,
  ...ADVANCED_LESSONS,
  ...EXPERT_LESSONS,
  ...PRACTICE_TEXT_LESSONS,
  ...PROGRAMMING_LESSONS,
  ...SHORTCUT_LESSONS,
];

/**
 * Lesson categories
 */
export const LESSON_CATEGORIES: LessonCategory[] = [
  {
    id: 'micro',
    name: 'Mikro-Lektionen',
    description: 'Einzelne Tasten und kürzeste Übungen - Level 0',
    icon: '',
    lessonIds: MICRO_LESSONS.map(l => l.id),
  },
  {
    id: 'beginner',
    name: 'Anfänger',
    description: 'Absolute Grundlagen - nur Grundreihe',
    icon: '',
    lessonIds: BEGINNER_LESSONS.map(l => l.id),
  },
  {
    id: 'basics',
    name: 'Grundlagen',
    description: 'Alle Buchstaben und erste Sätze',
    icon: '',
    lessonIds: BASIC_LESSONS.map(l => l.id),
  },
  {
    id: 'intermediate',
    name: 'Fortgeschritten',
    description: 'Zahlen und Sonderzeichen',
    icon: '',
    lessonIds: INTERMEDIATE_LESSONS.map(l => l.id),
  },
  {
    id: 'words',
    name: 'Wörter & Sätze',
    description: 'Wortschatz und Textübungen',
    icon: '',
    lessonIds: WORD_LESSONS.map(l => l.id),
  },
  {
    id: 'advanced',
    name: 'Fortgeschritten+',
    description: 'Komplexe Texte und alle Zeichen',
    icon: '',
    lessonIds: ADVANCED_LESSONS.map(l => l.id),
  },
  {
    id: 'expert',
    name: 'Experte',
    description: 'Maximale Herausforderung',
    icon: '',
    lessonIds: EXPERT_LESSONS.map(l => l.id),
  },
  {
    id: 'programming',
    name: 'Programmierung',
    description: 'Code-Snippets in verschiedenen Sprachen',
    icon: '',
    lessonIds: PROGRAMMING_LESSONS.map(l => l.id),
  },
  {
    id: 'shortcuts',
    name: 'IDE Shortcuts',
    description: 'Tastenkürzel für VS Code, IntelliJ, Vim',
    icon: '',
    lessonIds: SHORTCUT_LESSONS.map(l => l.id),
  },
  {
    id: 'practice',
    name: 'Übungstexte (DE/EN)',
    description: 'Zweisprachige Texte von einfach bis Experte',
    icon: '',
    lessonIds: PRACTICE_TEXT_LESSONS.map(l => l.id),
  },
];

/**
 * ============================================================================
 * HELPER FUNCTIONS
 * ============================================================================
 */

/**
 * Get lesson by ID
 */
export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find(lesson => lesson.id === id);
}

/**
 * Get lessons by category
 */
export function getLessonsByCategory(categoryId: string): Lesson[] {
  return ALL_LESSONS.filter(lesson => lesson.category === categoryId);
}

/**
 * Get lessons by type
 */
export function getLessonsByType(type: LessonType): Lesson[] {
  return ALL_LESSONS.filter(lesson => lesson.type === type);
}

/**
 * Get lessons by level
 */
export function getLessonsByLevel(level: number): Lesson[] {
  return ALL_LESSONS.filter(lesson => lesson.level === level);
}

/**
 * Get lessons by level range
 */
export function getLessonsByLevelRange(minLevel: number, maxLevel: number): Lesson[] {
  return ALL_LESSONS.filter(lesson => lesson.level >= minLevel && lesson.level <= maxLevel);
}

/**
 * Get lessons by difficulty (based on level)
 */
export function getLessonsByDifficulty(
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
): Lesson[] {
  switch (difficulty) {
    case 'beginner':
      return getLessonsByLevelRange(1, 2);
    case 'intermediate':
      return getLessonsByLevelRange(3, 4);
    case 'advanced':
      return getLessonsByLevelRange(5, 5);
    case 'expert':
      return getLessonsByLevelRange(6, 10);
    default:
      return ALL_LESSONS;
  }
}

/**
 * Get next lesson for user progress
 */
export function getNextLesson(completedLessonIds: string[]): Lesson | undefined {
  return ALL_LESSONS.find(lesson => !completedLessonIds.includes(lesson.id));
}

/**
 * Get programming lessons by language
 */
export function getProgrammingLessonsByLanguage(
  language: ProgrammingLesson['programmingLanguage']
): ProgrammingLesson[] {
  return PROGRAMMING_LESSONS.filter(lesson => lesson.programmingLanguage === language);
}

/**
 * Get shortcut lessons by IDE
 */
export function getShortcutLessonsByIDE(ide: ShortcutLesson['ide']): ShortcutLesson[] {
  return SHORTCUT_LESSONS.filter(lesson => lesson.ide === ide);
}

/**
 * Get random exercises from a lesson
 */
export function getRandomExercises(lesson: Lesson, count: number): typeof lesson.exercises {
  const shuffled = [...lesson.exercises].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get total exercise count
 */
export function getTotalExerciseCount(): number {
  return ALL_LESSONS.reduce((sum, lesson) => sum + lesson.exercises.length, 0);
}

/**
 * Get statistics about lessons
 */
export function getLessonStats(): {
  totalLessons: number;
  totalExercises: number;
  byLevel: Record<number, number>;
  byCategory: Record<string, number>;
} {
  const stats = {
    totalLessons: ALL_LESSONS.length,
    totalExercises: getTotalExerciseCount(),
    byLevel: {} as Record<number, number>,
    byCategory: {} as Record<string, number>,
  };

  ALL_LESSONS.forEach(lesson => {
    stats.byLevel[lesson.level] = (stats.byLevel[lesson.level] || 0) + 1;
    stats.byCategory[lesson.category] = (stats.byCategory[lesson.category] || 0) + 1;
  });

  return stats;
}

/**
 * Mapping of lesson IDs to their PracticeText source for language-dependent exercises
 */
const LESSON_PRACTICE_TEXT_MAP: Record<string, { texts: PracticeText[] }> = {
  'micro-single-keys': { texts: MICRO_EXERCISES.slice(0, 7) },
  'micro-two-letter-same': { texts: MICRO_EXERCISES.slice(7, 11) },
  'micro-two-letter-alt': { texts: MICRO_EXERCISES.slice(11, 15) },
  'micro-short-words': { texts: MICRO_EXERCISES.slice(15, 23) },
  'micro-vowels-ei': { texts: MICRO_EXERCISES.slice(23, 30) },
  'practice-simple-de': { texts: SIMPLE_TEXTS },
  'practice-simple-en': { texts: SIMPLE_TEXTS },
  'practice-medium-de': { texts: MEDIUM_TEXTS },
  'practice-medium-en': { texts: MEDIUM_TEXTS },
  'practice-complex-de': { texts: COMPLEX_TEXTS },
  'practice-complex-en': { texts: COMPLEX_TEXTS },
  'practice-expert-de': { texts: EXPERT_TEXTS },
  'practice-expert-en': { texts: EXPERT_TEXTS },
};

/**
 * Get a lesson with exercises in the specified language
 * @param id - Lesson ID
 * @param language - Target language for exercises ('de' or 'en')
 * @returns Lesson with localized exercises, or undefined if not found
 */
export function getLessonWithLanguage(id: string, language: 'de' | 'en'): Lesson | undefined {
  const lesson = getLessonById(id);
  if (!lesson) {
    return undefined;
  }

  // Check if this lesson has practice texts that need language transformation
  const practiceTextSource = LESSON_PRACTICE_TEXT_MAP[id];
  if (practiceTextSource) {
    // Transform exercises using the specified language
    const localizedExercises = practiceTextsToExercises(practiceTextSource.texts, language);
    return {
      ...lesson,
      exercises: localizedExercises,
    };
  }

  // Return original lesson if no transformation needed
  return lesson;
}
