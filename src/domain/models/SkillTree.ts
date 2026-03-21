/**
 * Skill Tree Model - Defines skills and progression tree
 */

export enum SkillCategory {
  TYPING_BASICS = 'typing_basics',
  SPEED = 'speed',
  ACCURACY = 'accuracy',
  CODE_SYNTAX = 'code_syntax',
  ALGORITHMS = 'algorithms',
  DEVELOPER_TOOLS = 'developer_tools',
  SPECIAL = 'special',
}

export enum SkillTier {
  NOVICE = 1,
  APPRENTICE = 2,
  JOURNEYMAN = 3,
  EXPERT = 4,
  MASTER = 5,
}

export interface SkillNode {
  id: string;
  name: string;
  nameDe: string;
  description: string;
  descriptionDe: string;
  category: SkillCategory;
  tier: SkillTier;
  icon: string;
  maxLevel: number;
  currentLevel: number;
  isUnlocked: boolean;
  prerequisites: string[];
  position: { x: number; y: number };
  costPerLevel: number;
  effects: SkillEffect[];
}

export interface SkillEffect {
  type: SkillEffectType;
  value: number;
  description: string;
  descriptionDe: string;
}

export enum SkillEffectType {
  WPM_BONUS = 'wpm_bonus',
  ACCURACY_BONUS = 'accuracy_bonus',
  XP_MULTIPLIER = 'xp_multiplier',
  COIN_MULTIPLIER = 'coin_multiplier',
  UNLOCK_FEATURE = 'unlock_feature',
  REDUCE_ERRORS = 'reduce_errors',
  STREAK_BONUS = 'streak_bonus',
  TIME_BONUS = 'time_bonus',
}

export interface SkillTreeData {
  categories: SkillTreeCategory[];
  connections: SkillConnection[];
}

export interface SkillTreeCategory {
  id: SkillCategory;
  name: string;
  nameDe: string;
  description: string;
  descriptionDe: string;
  color: string;
  icon: string;
  skills: SkillNode[];
}

export interface SkillConnection {
  from: string;
  to: string;
  type: 'required' | 'optional';
}

export interface PlayerSkillProgress {
  totalSkillPoints: number;
  availableSkillPoints: number;
  spentSkillPoints: number;
  unlockedSkills: string[];
  skillLevels: Record<string, number>;
  activeEffects: SkillEffect[];
}

// Pre-defined skill tree structure
export const SKILL_TREE_STRUCTURE: SkillTreeData = {
  categories: [
    {
      id: SkillCategory.TYPING_BASICS,
      name: 'Typing Fundamentals',
      nameDe: 'Tipp-Grundlagen',
      description: 'Master the basics of touch typing',
      descriptionDe: 'Meistere die Grundlagen des Zehnfingersystems',
      color: '#4CAF50',
      icon: 'keyboard',
      skills: [
        {
          id: 'home_row_master',
          name: 'Home Row Master',
          nameDe: 'Grundreihen-Meister',
          description: 'Perfect home row positioning',
          descriptionDe: 'Perfekte Grundreihen-Positionierung',
          category: SkillCategory.TYPING_BASICS,
          tier: SkillTier.NOVICE,
          icon: 'home',
          maxLevel: 3,
          currentLevel: 0,
          isUnlocked: true,
          prerequisites: [],
          position: { x: 0, y: 0 },
          costPerLevel: 1,
          effects: [
            {
              type: SkillEffectType.ACCURACY_BONUS,
              value: 2,
              description: '+2% accuracy on home row keys',
              descriptionDe: '+2% Genauigkeit auf Grundreihen-Tasten',
            },
          ],
        },
        {
          id: 'finger_independence',
          name: 'Finger Independence',
          nameDe: 'Finger-Unabhaengigkeit',
          description: 'Control each finger individually',
          descriptionDe: 'Kontrolliere jeden Finger einzeln',
          category: SkillCategory.TYPING_BASICS,
          tier: SkillTier.NOVICE,
          icon: 'hand',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['home_row_master'],
          position: { x: 1, y: 0 },
          costPerLevel: 2,
          effects: [
            {
              type: SkillEffectType.REDUCE_ERRORS,
              value: 5,
              description: '-5% finger confusion errors',
              descriptionDe: '-5% Finger-Verwechslungsfehler',
            },
          ],
        },
        {
          id: 'all_rows_proficiency',
          name: 'All Rows Proficiency',
          nameDe: 'Alle Reihen Kompetenz',
          description: 'Navigate all keyboard rows smoothly',
          descriptionDe: 'Navigiere alle Tastatur-Reihen fliessend',
          category: SkillCategory.TYPING_BASICS,
          tier: SkillTier.APPRENTICE,
          icon: 'rows',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['finger_independence'],
          position: { x: 2, y: 0 },
          costPerLevel: 3,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 5,
              description: '+5 WPM when using all rows',
              descriptionDe: '+5 WPM bei Nutzung aller Reihen',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.SPEED,
      name: 'Speed Mastery',
      nameDe: 'Geschwindigkeits-Meisterschaft',
      description: 'Push your typing speed to the limit',
      descriptionDe: 'Bringe deine Tippgeschwindigkeit ans Limit',
      color: '#FF5722',
      icon: 'flash',
      skills: [
        {
          id: 'quick_fingers',
          name: 'Quick Fingers',
          nameDe: 'Schnelle Finger',
          description: 'Basic speed improvement',
          descriptionDe: 'Grundlegende Geschwindigkeitsverbesserung',
          category: SkillCategory.SPEED,
          tier: SkillTier.NOVICE,
          icon: 'speed',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['all_rows_proficiency'],
          position: { x: 0, y: 1 },
          costPerLevel: 2,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 3,
              description: '+3 WPM base speed',
              descriptionDe: '+3 WPM Grundgeschwindigkeit',
            },
          ],
        },
        {
          id: 'burst_typing',
          name: 'Burst Typing',
          nameDe: 'Burst-Tippen',
          description: 'Short bursts of extreme speed',
          descriptionDe: 'Kurze Schuebe extremer Geschwindigkeit',
          category: SkillCategory.SPEED,
          tier: SkillTier.JOURNEYMAN,
          icon: 'burst',
          maxLevel: 3,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['quick_fingers'],
          position: { x: 1, y: 1 },
          costPerLevel: 4,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 10,
              description: '+10 WPM during 10-second bursts',
              descriptionDe: '+10 WPM waehrend 10-Sekunden-Bursts',
            },
          ],
        },
        {
          id: 'speed_demon',
          name: 'Speed Demon',
          nameDe: 'Geschwindigkeits-Daemon',
          description: 'Maintain 100+ WPM consistently',
          descriptionDe: 'Halte konstant 100+ WPM',
          category: SkillCategory.SPEED,
          tier: SkillTier.MASTER,
          icon: 'demon',
          maxLevel: 1,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['burst_typing'],
          position: { x: 2, y: 1 },
          costPerLevel: 10,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 1.5,
              description: '1.5x XP when above 100 WPM',
              descriptionDe: '1.5x XP bei ueber 100 WPM',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.ACCURACY,
      name: 'Precision Expert',
      nameDe: 'Praezisions-Experte',
      description: 'Minimize errors and perfect your accuracy',
      descriptionDe: 'Minimiere Fehler und perfektioniere deine Genauigkeit',
      color: '#2196F3',
      icon: 'target',
      skills: [
        {
          id: 'steady_hands',
          name: 'Steady Hands',
          nameDe: 'Ruhige Haende',
          description: 'Reduce accidental keystrokes',
          descriptionDe: 'Reduziere versehentliche Tastendruecke',
          category: SkillCategory.ACCURACY,
          tier: SkillTier.NOVICE,
          icon: 'steady',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['home_row_master'],
          position: { x: 0, y: 2 },
          costPerLevel: 2,
          effects: [
            {
              type: SkillEffectType.ACCURACY_BONUS,
              value: 2,
              description: '+2% overall accuracy',
              descriptionDe: '+2% Gesamtgenauigkeit',
            },
          ],
        },
        {
          id: 'error_awareness',
          name: 'Error Awareness',
          nameDe: 'Fehler-Bewusstsein',
          description: 'Instantly recognize and correct mistakes',
          descriptionDe: 'Erkenne und korrigiere Fehler sofort',
          category: SkillCategory.ACCURACY,
          tier: SkillTier.JOURNEYMAN,
          icon: 'alert',
          maxLevel: 3,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['steady_hands'],
          position: { x: 1, y: 2 },
          costPerLevel: 4,
          effects: [
            {
              type: SkillEffectType.REDUCE_ERRORS,
              value: 10,
              description: '-10% error rate',
              descriptionDe: '-10% Fehlerrate',
            },
          ],
        },
        {
          id: 'perfectionist',
          name: 'Perfectionist',
          nameDe: 'Perfektionist',
          description: 'Achieve 99%+ accuracy consistently',
          descriptionDe: 'Erreiche konstant 99%+ Genauigkeit',
          category: SkillCategory.ACCURACY,
          tier: SkillTier.MASTER,
          icon: 'perfect',
          maxLevel: 1,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['error_awareness'],
          position: { x: 2, y: 2 },
          costPerLevel: 10,
          effects: [
            {
              type: SkillEffectType.COIN_MULTIPLIER,
              value: 2,
              description: '2x coins when 99%+ accuracy',
              descriptionDe: '2x Muenzen bei 99%+ Genauigkeit',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.CODE_SYNTAX,
      name: 'Code Syntax',
      nameDe: 'Code-Syntax',
      description: 'Master programming language syntax',
      descriptionDe: 'Meistere Programmiersprachen-Syntax',
      color: '#9C27B0',
      icon: 'code',
      skills: [
        {
          id: 'bracket_master',
          name: 'Bracket Master',
          nameDe: 'Klammer-Meister',
          description: 'Type brackets and parentheses fluently',
          descriptionDe: 'Tippe Klammern fliessend',
          category: SkillCategory.CODE_SYNTAX,
          tier: SkillTier.NOVICE,
          icon: 'brackets',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['all_rows_proficiency'],
          position: { x: 0, y: 3 },
          costPerLevel: 3,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 5,
              description: '+5 WPM when typing brackets',
              descriptionDe: '+5 WPM beim Tippen von Klammern',
            },
          ],
        },
        {
          id: 'operator_fluency',
          name: 'Operator Fluency',
          nameDe: 'Operator-Fluss',
          description: 'Type operators without hesitation',
          descriptionDe: 'Tippe Operatoren ohne Zoegern',
          category: SkillCategory.CODE_SYNTAX,
          tier: SkillTier.APPRENTICE,
          icon: 'operators',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['bracket_master'],
          position: { x: 1, y: 3 },
          costPerLevel: 3,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 5,
              description: '+5 WPM when typing operators',
              descriptionDe: '+5 WPM beim Tippen von Operatoren',
            },
          ],
        },
        {
          id: 'polyglot_coder',
          name: 'Polyglot Coder',
          nameDe: 'Polyglotter Programmierer',
          description: 'Master syntax across multiple languages',
          descriptionDe: 'Meistere Syntax in mehreren Sprachen',
          category: SkillCategory.CODE_SYNTAX,
          tier: SkillTier.EXPERT,
          icon: 'polyglot',
          maxLevel: 3,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['operator_fluency'],
          position: { x: 2, y: 3 },
          costPerLevel: 5,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 1.25,
              description: '1.25x XP in Code Mode',
              descriptionDe: '1.25x XP im Code-Modus',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.ALGORITHMS,
      name: 'Algorithm Knowledge',
      nameDe: 'Algorithmen-Wissen',
      description: 'Understand and implement algorithms',
      descriptionDe: 'Verstehe und implementiere Algorithmen',
      color: '#FF9800',
      icon: 'algorithm',
      skills: [
        {
          id: 'basic_algorithms',
          name: 'Basic Algorithms',
          nameDe: 'Grundlegende Algorithmen',
          description: 'Understand sorting and searching',
          descriptionDe: 'Verstehe Sortieren und Suchen',
          category: SkillCategory.ALGORITHMS,
          tier: SkillTier.APPRENTICE,
          icon: 'sort',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['bracket_master'],
          position: { x: 0, y: 4 },
          costPerLevel: 4,
          effects: [
            {
              type: SkillEffectType.UNLOCK_FEATURE,
              value: 1,
              description: 'Unlock Algorithm Challenges',
              descriptionDe: 'Schalte Algorithmus-Challenges frei',
            },
          ],
        },
        {
          id: 'data_structures',
          name: 'Data Structures',
          nameDe: 'Datenstrukturen',
          description: 'Master arrays, lists, trees, and graphs',
          descriptionDe: 'Meistere Arrays, Listen, Baeume und Graphen',
          category: SkillCategory.ALGORITHMS,
          tier: SkillTier.JOURNEYMAN,
          icon: 'tree',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['basic_algorithms'],
          position: { x: 1, y: 4 },
          costPerLevel: 5,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 1.3,
              description: '1.3x XP in Algorithm Training',
              descriptionDe: '1.3x XP im Algorithmus-Training',
            },
          ],
        },
        {
          id: 'algorithm_master',
          name: 'Algorithm Master',
          nameDe: 'Algorithmus-Meister',
          description: 'Solve complex algorithmic problems',
          descriptionDe: 'Loese komplexe algorithmische Probleme',
          category: SkillCategory.ALGORITHMS,
          tier: SkillTier.MASTER,
          icon: 'brain',
          maxLevel: 1,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['data_structures'],
          position: { x: 2, y: 4 },
          costPerLevel: 15,
          effects: [
            {
              type: SkillEffectType.UNLOCK_FEATURE,
              value: 1,
              description: 'Unlock Expert Algorithm Challenges',
              descriptionDe: 'Schalte Experten-Algorithmus-Challenges frei',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.DEVELOPER_TOOLS,
      name: 'Developer Tools',
      nameDe: 'Entwickler-Werkzeuge',
      description: 'Master essential developer tools',
      descriptionDe: 'Meistere essentielle Entwickler-Werkzeuge',
      color: '#607D8B',
      icon: 'tools',
      skills: [
        {
          id: 'git_basics',
          name: 'Git Basics',
          nameDe: 'Git-Grundlagen',
          description: 'Basic Git commands',
          descriptionDe: 'Grundlegende Git-Befehle',
          category: SkillCategory.DEVELOPER_TOOLS,
          tier: SkillTier.NOVICE,
          icon: 'git',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['all_rows_proficiency'],
          position: { x: 0, y: 5 },
          costPerLevel: 2,
          effects: [
            {
              type: SkillEffectType.UNLOCK_FEATURE,
              value: 1,
              description: 'Unlock Git Training',
              descriptionDe: 'Schalte Git-Training frei',
            },
          ],
        },
        {
          id: 'terminal_wizard',
          name: 'Terminal Wizard',
          nameDe: 'Terminal-Zauberer',
          description: 'Master the command line',
          descriptionDe: 'Meistere die Kommandozeile',
          category: SkillCategory.DEVELOPER_TOOLS,
          tier: SkillTier.APPRENTICE,
          icon: 'terminal',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['git_basics'],
          position: { x: 1, y: 5 },
          costPerLevel: 3,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 1.2,
              description: '1.2x XP in Terminal Training',
              descriptionDe: '1.2x XP im Terminal-Training',
            },
          ],
        },
        {
          id: 'vim_master',
          name: 'Vim Master',
          nameDe: 'Vim-Meister',
          description: 'Master Vim keybindings',
          descriptionDe: 'Meistere Vim-Tastenkuerzel',
          category: SkillCategory.DEVELOPER_TOOLS,
          tier: SkillTier.EXPERT,
          icon: 'vim',
          maxLevel: 3,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['terminal_wizard'],
          position: { x: 2, y: 5 },
          costPerLevel: 5,
          effects: [
            {
              type: SkillEffectType.WPM_BONUS,
              value: 10,
              description: '+10 WPM in Vim mode',
              descriptionDe: '+10 WPM im Vim-Modus',
            },
          ],
        },
      ],
    },
    {
      id: SkillCategory.SPECIAL,
      name: 'Special Abilities',
      nameDe: 'Spezialfaehigkeiten',
      description: 'Unique powerful abilities',
      descriptionDe: 'Einzigartige maechtige Faehigkeiten',
      color: '#E91E63',
      icon: 'star',
      skills: [
        {
          id: 'daily_dedication',
          name: 'Daily Dedication',
          nameDe: 'Taegliche Hingabe',
          description: 'Bonus for daily practice',
          descriptionDe: 'Bonus fuer taegliches Ueben',
          category: SkillCategory.SPECIAL,
          tier: SkillTier.NOVICE,
          icon: 'calendar',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: true,
          prerequisites: [],
          position: { x: 0, y: 6 },
          costPerLevel: 2,
          effects: [
            {
              type: SkillEffectType.STREAK_BONUS,
              value: 10,
              description: '+10% XP per streak day (max 7)',
              descriptionDe: '+10% XP pro Streak-Tag (max 7)',
            },
          ],
        },
        {
          id: 'xp_boost',
          name: 'XP Boost',
          nameDe: 'XP-Boost',
          description: 'Permanent XP multiplier',
          descriptionDe: 'Permanenter XP-Multiplikator',
          category: SkillCategory.SPECIAL,
          tier: SkillTier.JOURNEYMAN,
          icon: 'xp',
          maxLevel: 5,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: ['daily_dedication'],
          position: { x: 1, y: 6 },
          costPerLevel: 5,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 1.1,
              description: '1.1x XP permanently',
              descriptionDe: '1.1x XP permanent',
            },
          ],
        },
        {
          id: 'typing_legend',
          name: 'Typing Legend',
          nameDe: 'Tipp-Legende',
          description: 'The ultimate typing mastery',
          descriptionDe: 'Die ultimative Tipp-Meisterschaft',
          category: SkillCategory.SPECIAL,
          tier: SkillTier.MASTER,
          icon: 'crown',
          maxLevel: 1,
          currentLevel: 0,
          isUnlocked: false,
          prerequisites: [
            'speed_demon',
            'perfectionist',
            'polyglot_coder',
            'algorithm_master',
            'vim_master',
            'xp_boost',
          ],
          position: { x: 2, y: 6 },
          costPerLevel: 50,
          effects: [
            {
              type: SkillEffectType.XP_MULTIPLIER,
              value: 2,
              description: '2x XP for everything',
              descriptionDe: '2x XP fuer alles',
            },
            {
              type: SkillEffectType.COIN_MULTIPLIER,
              value: 2,
              description: '2x coins for everything',
              descriptionDe: '2x Muenzen fuer alles',
            },
          ],
        },
      ],
    },
  ],
  connections: [
    // Typing Basics -> Speed/Accuracy/Code
    { from: 'home_row_master', to: 'finger_independence', type: 'required' },
    { from: 'finger_independence', to: 'all_rows_proficiency', type: 'required' },
    { from: 'all_rows_proficiency', to: 'quick_fingers', type: 'required' },
    { from: 'all_rows_proficiency', to: 'bracket_master', type: 'required' },
    { from: 'all_rows_proficiency', to: 'git_basics', type: 'required' },

    // Speed tree
    { from: 'quick_fingers', to: 'burst_typing', type: 'required' },
    { from: 'burst_typing', to: 'speed_demon', type: 'required' },

    // Accuracy tree
    { from: 'home_row_master', to: 'steady_hands', type: 'required' },
    { from: 'steady_hands', to: 'error_awareness', type: 'required' },
    { from: 'error_awareness', to: 'perfectionist', type: 'required' },

    // Code Syntax tree
    { from: 'bracket_master', to: 'operator_fluency', type: 'required' },
    { from: 'operator_fluency', to: 'polyglot_coder', type: 'required' },
    { from: 'bracket_master', to: 'basic_algorithms', type: 'optional' },

    // Algorithm tree
    { from: 'basic_algorithms', to: 'data_structures', type: 'required' },
    { from: 'data_structures', to: 'algorithm_master', type: 'required' },

    // Developer Tools tree
    { from: 'git_basics', to: 'terminal_wizard', type: 'required' },
    { from: 'terminal_wizard', to: 'vim_master', type: 'required' },

    // Special tree
    { from: 'daily_dedication', to: 'xp_boost', type: 'required' },

    // Legendary skill prerequisites
    { from: 'speed_demon', to: 'typing_legend', type: 'required' },
    { from: 'perfectionist', to: 'typing_legend', type: 'required' },
    { from: 'polyglot_coder', to: 'typing_legend', type: 'required' },
    { from: 'algorithm_master', to: 'typing_legend', type: 'required' },
    { from: 'vim_master', to: 'typing_legend', type: 'required' },
    { from: 'xp_boost', to: 'typing_legend', type: 'required' },
  ],
};
