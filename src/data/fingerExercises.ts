/**
 * Finger Isolation Exercises
 * Spezielle Übungen für jeden einzelnen Finger
 * Designed für gezieltes Training schwacher Finger
 */

export interface FingerExercise {
  id: string;
  finger: 'pinky-left' | 'ring-left' | 'middle-left' | 'index-left' | 'index-right' | 'middle-right' | 'ring-right' | 'pinky-right';
  hand: 'left' | 'right';
  keys: string[];
  exercises: Array<{
    id: string;
    textDe: string;
    textEn: string;
    description: string;
    level: number;
  }>;
}

/**
 * ============================================================================
 * LINKE HAND - KLEINER FINGER (Q, A, Z, 1, Shift, Tab, Caps)
 * ============================================================================
 */
export const LEFT_PINKY_EXERCISES: FingerExercise = {
  id: 'finger-left-pinky',
  finger: 'pinky-left',
  hand: 'left',
  keys: ['q', 'a', 'z', '1', 'Shift', 'Tab'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'lp-01', textDe: 'aaa aaa aaa aaa aaa', textEn: 'aaa aaa aaa aaa aaa', description: 'Nur A', level: 0 },
    { id: 'lp-02', textDe: 'qqq qqq qqq qqq qqq', textEn: 'qqq qqq qqq qqq qqq', description: 'Nur Q', level: 0 },
    { id: 'lp-03', textDe: 'zzz zzz zzz zzz zzz', textEn: 'zzz zzz zzz zzz zzz', description: 'Nur Z', level: 0 },
    // Level 1 - Kombinationen
    { id: 'lp-04', textDe: 'aq aq za za qa qa az az', textEn: 'aq aq za za qa qa az az', description: 'A-Q-Z Wechsel', level: 1 },
    { id: 'lp-05', textDe: 'qaz qaz qaz qaz qaz', textEn: 'qaz qaz qaz qaz qaz', description: 'Alle drei', level: 1 },
    { id: 'lp-06', textDe: 'zaq zaq zaq zaq zaq', textEn: 'zaq zaq zaq zaq zaq', description: 'Rückwärts', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'lp-07', textDe: 'als als als als als', textEn: 'all all all all all', description: 'Wörter mit A', level: 2 },
    { id: 'lp-08', textDe: 'Qual Qual Qual Qual', textEn: 'Quiz Quiz Quiz Quiz', description: 'Wörter mit Q', level: 2 },
    { id: 'lp-09', textDe: 'Zahl Zahl Zahl Zahl', textEn: 'Zap Zap Zap Zap', description: 'Wörter mit Z', level: 2 },
    // Level 3 - Sätze
    { id: 'lp-10', textDe: 'Als Anna ankam, zählte sie alles zusammen.', textEn: 'All amazing animals always act accordingly.', description: 'A-Satz', level: 3 },
    { id: 'lp-11', textDe: 'Zehn zahme Zebras ziehen zügig zum Zoo.', textEn: 'Zany zebras zigzag zealously through zones.', description: 'Z-Satz', level: 3 },
    { id: 'lp-12', textDe: 'Die Qualität der Quelle ist quasi einzigartig.', textEn: 'Quick quizzes require quite quiet concentration.', description: 'Q-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * LINKE HAND - RINGFINGER (W, S, X, 2)
 * ============================================================================
 */
export const LEFT_RING_EXERCISES: FingerExercise = {
  id: 'finger-left-ring',
  finger: 'ring-left',
  hand: 'left',
  keys: ['w', 's', 'x', '2'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'lr-01', textDe: 'sss sss sss sss sss', textEn: 'sss sss sss sss sss', description: 'Nur S', level: 0 },
    { id: 'lr-02', textDe: 'www www www www www', textEn: 'www www www www www', description: 'Nur W', level: 0 },
    { id: 'lr-03', textDe: 'xxx xxx xxx xxx xxx', textEn: 'xxx xxx xxx xxx xxx', description: 'Nur X', level: 0 },
    // Level 1 - Kombinationen
    { id: 'lr-04', textDe: 'sw sw xs xs ws ws sx sx', textEn: 'sw sw xs xs ws ws sx sx', description: 'S-W-X Wechsel', level: 1 },
    { id: 'lr-05', textDe: 'wsx wsx wsx wsx wsx', textEn: 'wsx wsx wsx wsx wsx', description: 'Alle drei', level: 1 },
    { id: 'lr-06', textDe: 'xsw xsw xsw xsw xsw', textEn: 'xsw xsw xsw xsw xsw', description: 'Rückwärts', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'lr-07', textDe: 'was was was was was', textEn: 'was was was was was', description: 'Wörter mit W-S', level: 2 },
    { id: 'lr-08', textDe: 'sie sie sie sie sie', textEn: 'see see see see see', description: 'Wörter mit S', level: 2 },
    { id: 'lr-09', textDe: 'Wasser Wasser Wasser', textEn: 'sweet sweet sweet', description: 'Längere Wörter', level: 2 },
    // Level 3 - Sätze
    { id: 'lr-10', textDe: 'Sie sagte, sie sei sicher.', textEn: 'She said she was sure.', description: 'S-Satz', level: 3 },
    { id: 'lr-11', textDe: 'Wir wollen wissen, was war.', textEn: 'We want what was written.', description: 'W-Satz', level: 3 },
    { id: 'lr-12', textDe: 'Das Saxophon spielt wunderbar.', textEn: 'Six saxophones sound sweet.', description: 'X-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * LINKE HAND - MITTELFINGER (E, D, C, 3)
 * ============================================================================
 */
export const LEFT_MIDDLE_EXERCISES: FingerExercise = {
  id: 'finger-left-middle',
  finger: 'middle-left',
  hand: 'left',
  keys: ['e', 'd', 'c', '3'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'lm-01', textDe: 'ddd ddd ddd ddd ddd', textEn: 'ddd ddd ddd ddd ddd', description: 'Nur D', level: 0 },
    { id: 'lm-02', textDe: 'eee eee eee eee eee', textEn: 'eee eee eee eee eee', description: 'Nur E', level: 0 },
    { id: 'lm-03', textDe: 'ccc ccc ccc ccc ccc', textEn: 'ccc ccc ccc ccc ccc', description: 'Nur C', level: 0 },
    // Level 1 - Kombinationen
    { id: 'lm-04', textDe: 'ed ed cd cd de de dc dc', textEn: 'ed ed cd cd de de dc dc', description: 'E-D-C Wechsel', level: 1 },
    { id: 'lm-05', textDe: 'edc edc edc edc edc', textEn: 'edc edc edc edc edc', description: 'Alle drei', level: 1 },
    { id: 'lm-06', textDe: 'cde cde cde cde cde', textEn: 'cde cde cde cde cde', description: 'Rückwärts', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'lm-07', textDe: 'der der der der der', textEn: 'the the the the the', description: 'Wörter mit D-E', level: 2 },
    { id: 'lm-08', textDe: 'Erde Erde Erde Erde', textEn: 'deed deed deed deed', description: 'E-D Wörter', level: 2 },
    { id: 'lm-09', textDe: 'Code Code Code Code', textEn: 'code code code code', description: 'C Wörter', level: 2 },
    // Level 3 - Sätze
    { id: 'lm-10', textDe: 'Der Deckel deckt den Eimer ab.', textEn: 'Deep dedication delivers decent deeds.', description: 'D-E Satz', level: 3 },
    { id: 'lm-11', textDe: 'Die Ente entdeckte den Edelstein.', textEn: 'Each elegant elephant entered early.', description: 'E-Satz', level: 3 },
    { id: 'lm-12', textDe: 'Der Code ist cool und clever.', textEn: 'Clean code creates calm coders.', description: 'C-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * LINKE HAND - ZEIGEFINGER (R, F, V, T, G, B, 4, 5)
 * ============================================================================
 */
export const LEFT_INDEX_EXERCISES: FingerExercise = {
  id: 'finger-left-index',
  finger: 'index-left',
  hand: 'left',
  keys: ['r', 'f', 'v', 't', 'g', 'b', '4', '5'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'li-01', textDe: 'fff fff fff fff fff', textEn: 'fff fff fff fff fff', description: 'Nur F', level: 0 },
    { id: 'li-02', textDe: 'rrr rrr rrr rrr rrr', textEn: 'rrr rrr rrr rrr rrr', description: 'Nur R', level: 0 },
    { id: 'li-03', textDe: 'vvv vvv vvv vvv vvv', textEn: 'vvv vvv vvv vvv vvv', description: 'Nur V', level: 0 },
    { id: 'li-04', textDe: 'ttt ttt ttt ttt ttt', textEn: 'ttt ttt ttt ttt ttt', description: 'Nur T', level: 0 },
    { id: 'li-05', textDe: 'ggg ggg ggg ggg ggg', textEn: 'ggg ggg ggg ggg ggg', description: 'Nur G', level: 0 },
    { id: 'li-06', textDe: 'bbb bbb bbb bbb bbb', textEn: 'bbb bbb bbb bbb bbb', description: 'Nur B', level: 0 },
    // Level 1 - Kombinationen
    { id: 'li-07', textDe: 'fr fr tf tf vf vf gf gf bf bf', textEn: 'fr fr tf tf vf vf gf gf bf bf', description: 'F-Kombinationen', level: 1 },
    { id: 'li-08', textDe: 'rtfvgb rtfvgb rtfvgb', textEn: 'rtfvgb rtfvgb rtfvgb', description: 'Alle zusammen', level: 1 },
    { id: 'li-09', textDe: 'bgvftr bgvftr bgvftr', textEn: 'bgvftr bgvftr bgvftr', description: 'Rückwärts', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'li-10', textDe: 'für für für für für', textEn: 'for for for for for', description: 'F-R Wörter', level: 2 },
    { id: 'li-11', textDe: 'vor vor vor vor vor', textEn: 'very very very very', description: 'V Wörter', level: 2 },
    { id: 'li-12', textDe: 'gut gut gut gut gut', textEn: 'great great great', description: 'G Wörter', level: 2 },
    // Level 3 - Sätze
    { id: 'li-13', textDe: 'Fritz fragt fröhlich nach frischen Früchten.', textEn: 'Fred freely finds fresh fruit for friends.', description: 'F-R Satz', level: 3 },
    { id: 'li-14', textDe: 'Tante Trude trägt türkise Turnschuhe.', textEn: 'Tim takes ten tiny toys to town.', description: 'T-Satz', level: 3 },
    { id: 'li-15', textDe: 'Gute Gedanken geben große Gefühle.', textEn: 'Great games give genuine gladness.', description: 'G-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * RECHTE HAND - ZEIGEFINGER (U, J, M, Z/Y, H, N, 6, 7)
 * ============================================================================
 */
export const RIGHT_INDEX_EXERCISES: FingerExercise = {
  id: 'finger-right-index',
  finger: 'index-right',
  hand: 'right',
  keys: ['u', 'j', 'm', 'z', 'h', 'n', '6', '7'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'ri-01', textDe: 'jjj jjj jjj jjj jjj', textEn: 'jjj jjj jjj jjj jjj', description: 'Nur J', level: 0 },
    { id: 'ri-02', textDe: 'uuu uuu uuu uuu uuu', textEn: 'uuu uuu uuu uuu uuu', description: 'Nur U', level: 0 },
    { id: 'ri-03', textDe: 'mmm mmm mmm mmm mmm', textEn: 'mmm mmm mmm mmm mmm', description: 'Nur M', level: 0 },
    { id: 'ri-04', textDe: 'hhh hhh hhh hhh hhh', textEn: 'hhh hhh hhh hhh hhh', description: 'Nur H', level: 0 },
    { id: 'ri-05', textDe: 'nnn nnn nnn nnn nnn', textEn: 'nnn nnn nnn nnn nnn', description: 'Nur N', level: 0 },
    // Level 1 - Kombinationen
    { id: 'ri-06', textDe: 'ju ju hj hj mj mj nj nj', textEn: 'ju ju hj hj mj mj nj nj', description: 'J-Kombinationen', level: 1 },
    { id: 'ri-07', textDe: 'ujmhn ujmhn ujmhn', textEn: 'ujmhn ujmhn ujmhn', description: 'Alle zusammen', level: 1 },
    { id: 'ri-08', textDe: 'nhmju nhmju nhmju', textEn: 'nhmju nhmju nhmju', description: 'Rückwärts', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'ri-09', textDe: 'und und und und und', textEn: 'but but but but but', description: 'U-N Wörter', level: 2 },
    { id: 'ri-10', textDe: 'nur nur nur nur nur', textEn: 'new new new new new', description: 'N Wörter', level: 2 },
    { id: 'ri-11', textDe: 'mein mein mein mein', textEn: 'home home home home', description: 'M-H Wörter', level: 2 },
    // Level 3 - Sätze
    { id: 'ri-12', textDe: 'Junge Jäger jagen jetzt jubelnd.', textEn: 'Just jump joyfully, Jenny and John!', description: 'J-Satz', level: 3 },
    { id: 'ri-13', textDe: 'Heute hält Hans hundert Hüte hoch.', textEn: 'Happy humans have huge hearts here.', description: 'H-Satz', level: 3 },
    { id: 'ri-14', textDe: 'Mama macht morgens meistens Müsli.', textEn: 'Many men make much more money monthly.', description: 'M-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * RECHTE HAND - MITTELFINGER (I, K, Komma, 8)
 * ============================================================================
 */
export const RIGHT_MIDDLE_EXERCISES: FingerExercise = {
  id: 'finger-right-middle',
  finger: 'middle-right',
  hand: 'right',
  keys: ['i', 'k', ',', '8'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'rm-01', textDe: 'kkk kkk kkk kkk kkk', textEn: 'kkk kkk kkk kkk kkk', description: 'Nur K', level: 0 },
    { id: 'rm-02', textDe: 'iii iii iii iii iii', textEn: 'iii iii iii iii iii', description: 'Nur I', level: 0 },
    { id: 'rm-03', textDe: ',,, ,,, ,,, ,,, ,,,', textEn: ',,, ,,, ,,, ,,, ,,,', description: 'Nur Komma', level: 0 },
    // Level 1 - Kombinationen
    { id: 'rm-04', textDe: 'ik ik ki ki ,k ,k k, k,', textEn: 'ik ik ki ki ,k ,k k, k,', description: 'I-K Wechsel', level: 1 },
    { id: 'rm-05', textDe: 'ik, ik, ik, ik, ik,', textEn: 'ik, ik, ik, ik, ik,', description: 'Alle drei', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'rm-06', textDe: 'kein kein kein kein', textEn: 'kick kick kick kick', description: 'K Wörter', level: 2 },
    { id: 'rm-07', textDe: 'ist ist ist ist ist', textEn: 'ink ink ink ink ink', description: 'I Wörter', level: 2 },
    { id: 'rm-08', textDe: 'Kirche, Kinder, Kuchen', textEn: 'kite, kitten, kitchen', description: 'K-Wörter', level: 2 },
    // Level 3 - Sätze
    { id: 'rm-09', textDe: 'Kleine Kinder kaufen keinen Kaffee.', textEn: 'Keen kids keep kind kittens.', description: 'K-Satz', level: 3 },
    { id: 'rm-10', textDe: 'Ich bin, ich war, ich werde sein.', textEn: 'I think, I imagine, I improve.', description: 'I-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * RECHTE HAND - RINGFINGER (O, L, Punkt, 9)
 * ============================================================================
 */
export const RIGHT_RING_EXERCISES: FingerExercise = {
  id: 'finger-right-ring',
  finger: 'ring-right',
  hand: 'right',
  keys: ['o', 'l', '.', '9'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'rr-01', textDe: 'lll lll lll lll lll', textEn: 'lll lll lll lll lll', description: 'Nur L', level: 0 },
    { id: 'rr-02', textDe: 'ooo ooo ooo ooo ooo', textEn: 'ooo ooo ooo ooo ooo', description: 'Nur O', level: 0 },
    { id: 'rr-03', textDe: '... ... ... ... ...', textEn: '... ... ... ... ...', description: 'Nur Punkt', level: 0 },
    // Level 1 - Kombinationen
    { id: 'rr-04', textDe: 'ol ol lo lo .l .l l. l.', textEn: 'ol ol lo lo .l .l l. l.', description: 'O-L Wechsel', level: 1 },
    { id: 'rr-05', textDe: 'ol. ol. ol. ol. ol.', textEn: 'ol. ol. ol. ol. ol.', description: 'Alle drei', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'rr-06', textDe: 'lol lol lol lol lol', textEn: 'lol lol lol lol lol', description: 'L-O Wörter', level: 2 },
    { id: 'rr-07', textDe: 'toll toll toll toll', textEn: 'cool cool cool cool', description: 'O-L Wörter', level: 2 },
    { id: 'rr-08', textDe: 'Lola. Ola. Hallo.', textEn: 'Hello. Solo. Polo.', description: 'Wörter mit Punkt', level: 2 },
    // Level 3 - Sätze
    { id: 'rr-09', textDe: 'Lola liebt lange Lieder. Toll!', textEn: 'Look, lovely lions lounge lazily.', description: 'L-Satz', level: 3 },
    { id: 'rr-10', textDe: 'Otto offenbart oft originelle Optionen.', textEn: 'Old otters often own odd objects.', description: 'O-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * RECHTE HAND - KLEINER FINGER (P, Ö/Ü, -, 0, Enter, Backspace)
 * ============================================================================
 */
export const RIGHT_PINKY_EXERCISES: FingerExercise = {
  id: 'finger-right-pinky',
  finger: 'pinky-right',
  hand: 'right',
  keys: ['p', 'ö', 'ü', '-', '0'],
  exercises: [
    // Level 0 - Einzelne Tasten
    { id: 'rp-01', textDe: 'ppp ppp ppp ppp ppp', textEn: 'ppp ppp ppp ppp ppp', description: 'Nur P', level: 0 },
    { id: 'rp-02', textDe: 'ööö ööö ööö ööö ööö', textEn: 'ppp ppp ppp ppp ppp', description: 'Nur Ö', level: 0 },
    { id: 'rp-03', textDe: '--- --- --- --- ---', textEn: '--- --- --- --- ---', description: 'Nur Bindestrich', level: 0 },
    // Level 1 - Kombinationen
    { id: 'rp-04', textDe: 'pö pö öp öp -p -p p- p-', textEn: 'pp pp p- p- -p -p pp pp', description: 'P-Ö Wechsel', level: 1 },
    { id: 'rp-05', textDe: 'pö- pö- pö- pö- pö-', textEn: 'p-p p-p p-p p-p p-p', description: 'Alle zusammen', level: 1 },
    // Level 2 - Einfache Wörter
    { id: 'rp-06', textDe: 'Öl Öl Öl Öl Öl', textEn: 'pop pop pop pop pop', description: 'Ö/P Wörter', level: 2 },
    { id: 'rp-07', textDe: 'Pöbel-Plötzlich-Pünktlich', textEn: 'pop-up step-by-step', description: 'Bindestriche', level: 2 },
    // Level 3 - Sätze
    { id: 'rp-08', textDe: 'Peter pflückt prächtige Pfirsiche.', textEn: 'Peter picks perfect purple plums.', description: 'P-Satz', level: 3 },
    { id: 'rp-09', textDe: 'Öffentliche Öfen öffnen öfter.', textEn: 'Pop-ups appear up-to-date.', description: 'Ö-Satz', level: 3 },
  ],
};

/**
 * ============================================================================
 * ALL FINGER EXERCISES COMBINED
 * ============================================================================
 */
export const ALL_FINGER_EXERCISES: FingerExercise[] = [
  LEFT_PINKY_EXERCISES,
  LEFT_RING_EXERCISES,
  LEFT_MIDDLE_EXERCISES,
  LEFT_INDEX_EXERCISES,
  RIGHT_INDEX_EXERCISES,
  RIGHT_MIDDLE_EXERCISES,
  RIGHT_RING_EXERCISES,
  RIGHT_PINKY_EXERCISES,
];

/**
 * Get exercises for a specific finger
 */
export function getExercisesForFinger(finger: FingerExercise['finger']): FingerExercise | undefined {
  return ALL_FINGER_EXERCISES.find(ex => ex.finger === finger);
}

/**
 * Get exercises for a specific hand
 */
export function getExercisesForHand(hand: 'left' | 'right'): FingerExercise[] {
  return ALL_FINGER_EXERCISES.filter(ex => ex.hand === hand);
}

/**
 * Get exercises by level
 */
export function getFingerExercisesByLevel(level: number): Array<{
  finger: string;
  exercises: FingerExercise['exercises'];
}> {
  return ALL_FINGER_EXERCISES.map(fingerEx => ({
    finger: fingerEx.finger,
    exercises: fingerEx.exercises.filter(ex => ex.level === level),
  })).filter(item => item.exercises.length > 0);
}

/**
 * ============================================================================
 * SPEED BURST EXERCISES - Short, fast repetitions
 * ============================================================================
 */
export interface SpeedBurstExercise {
  id: string;
  name: string;
  duration: number; // seconds
  texts: Array<{ de: string; en: string }>;
  targetWPM: number;
}

export const SPEED_BURST_EXERCISES: SpeedBurstExercise[] = [
  {
    id: 'burst-30s-easy',
    name: '30 Sekunden Burst - Leicht',
    duration: 30,
    targetWPM: 40,
    texts: [
      { de: 'der die das und in zu den mit von auf', en: 'the and to of in is it you that he' },
      { de: 'ich du er sie es wir ihr sie Sie', en: 'I you he she it we they them us me' },
      { de: 'ist sind war waren wird werden sein', en: 'is are was were will be been being' },
    ],
  },
  {
    id: 'burst-30s-medium',
    name: '30 Sekunden Burst - Mittel',
    duration: 30,
    targetWPM: 50,
    texts: [
      { de: 'haben sein werden können müssen wollen sollen dürfen', en: 'have has had been being was were will would' },
      { de: 'gehen kommen sehen hören sprechen lesen schreiben', en: 'going coming seeing hearing speaking reading writing' },
    ],
  },
  {
    id: 'burst-60s-challenge',
    name: '60 Sekunden Challenge',
    duration: 60,
    targetWPM: 60,
    texts: [
      { de: 'Der schnelle braune Fuchs springt über den faulen Hund.', en: 'The quick brown fox jumps over the lazy dog.' },
      { de: 'Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.', en: 'Pack my box with five dozen liquor jugs.' },
    ],
  },
  {
    id: 'burst-120s-endurance',
    name: '2 Minuten Ausdauer',
    duration: 120,
    targetWPM: 55,
    texts: [
      { 
        de: 'Übung macht den Meister. Wer A sagt, muss auch B sagen. Ende gut, alles gut. Der frühe Vogel fängt den Wurm.',
        en: 'Practice makes perfect. Actions speak louder than words. All is well that ends well. The early bird catches the worm.'
      },
    ],
  },
];

/**
 * ============================================================================
 * ACCURACY FOCUS EXERCISES - Slow and precise
 * ============================================================================
 */
export interface AccuracyExercise {
  id: string;
  name: string;
  description: string;
  targetAccuracy: number;
  maxWPM: number; // Speed limit to enforce precision
  texts: Array<{ de: string; en: string }>;
}

export const ACCURACY_EXERCISES: AccuracyExercise[] = [
  {
    id: 'accuracy-long-words',
    name: 'Lange Wörter - Präzision',
    description: 'Tippe langsam und fehlerfrei',
    targetAccuracy: 99,
    maxWPM: 25,
    texts: [
      { de: 'Verantwortungsbewusstsein', en: 'Responsibility' },
      { de: 'Geschwindigkeitsbegrenzung', en: 'Telecommunications' },
      { de: 'Unabhängigkeitserklärung', en: 'Incomprehensibility' },
      { de: 'Verfassungsgerichtshof', en: 'Constitutionalism' },
      { de: 'Lebensmittelüberwachung', en: 'Internationalization' },
    ],
  },
  {
    id: 'accuracy-special-chars',
    name: 'Sonderzeichen - Präzision',
    description: 'Alle Sonderzeichen fehlerfrei',
    targetAccuracy: 98,
    maxWPM: 20,
    texts: [
      { de: 'user@example.com', en: 'user@example.com' },
      { de: '{"key": "value"}', en: '{"key": "value"}' },
      { de: 'https://www.example.de/path?query=1', en: 'https://www.example.com/path?query=1' },
      { de: 'function(a, b) { return a + b; }', en: 'function(a, b) { return a + b; }' },
    ],
  },
  {
    id: 'accuracy-numbers',
    name: 'Zahlen - Präzision',
    description: 'Zahlen und Ziffern fehlerfrei',
    targetAccuracy: 99,
    maxWPM: 22,
    texts: [
      { de: '123.456,78 Euro', en: '123,456.78 dollars' },
      { de: '15:30 Uhr am 24.12.2024', en: '3:30 PM on 12/24/2024' },
      { de: 'Tel: +49 (0)30 12345-6789', en: 'Tel: +1 (555) 123-4567' },
      { de: 'ISBN: 978-3-16-148410-0', en: 'ISBN: 978-3-16-148410-0' },
    ],
  },
];

/**
 * ============================================================================
 * WARMUP EXERCISES - Gentle start
 * ============================================================================
 */
export const WARMUP_EXERCISES = [
  {
    id: 'warmup-home-row',
    name: 'Aufwärmen: Grundreihe',
    texts: [
      { de: 'asdf jklö asdf jklö asdf jklö', en: 'asdf jkl; asdf jkl; asdf jkl;' },
      { de: 'fjdk slöa fjdk slöa fjdk slöa', en: 'fjdk sla; fjdk sla; fjdk sla;' },
    ],
  },
  {
    id: 'warmup-all-rows',
    name: 'Aufwärmen: Alle Reihen',
    texts: [
      { de: 'qwer asdf yxcv qwer asdf yxcv', en: 'qwer asdf zxcv qwer asdf zxcv' },
      { de: 'tzui jklö bnm tzui jklö bnm', en: 'tyui jkl; bnm tyui jkl; bnm' },
    ],
  },
  {
    id: 'warmup-common-words',
    name: 'Aufwärmen: Häufige Wörter',
    texts: [
      { de: 'der die das ein eine einer einem', en: 'the a an is are was were' },
      { de: 'und oder aber denn weil wenn', en: 'and or but for because when' },
    ],
  },
];