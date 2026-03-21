/**
 * Quest Model - Defines quests and story progression
 */

export enum QuestType {
  TYPING_SPEED = 'typing_speed',
  TYPING_ACCURACY = 'typing_accuracy',
  LESSON_COMPLETE = 'lesson_complete',
  CODE_CHALLENGE = 'code_challenge',
  STREAK = 'streak',
  PRACTICE_TIME = 'practice_time',
  SPECIAL_KEYS = 'special_keys',
  BOSS_BATTLE = 'boss_battle',
}

export enum QuestDifficulty {
  BEGINNER = 'beginner',
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert',
  MASTER = 'master',
}

export enum QuestStatus {
  LOCKED = 'locked',
  AVAILABLE = 'available',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

export interface QuestReward {
  xp: number;
  coins: number;
  skillPoints?: number;
  achievement?: string;
  unlocks?: string[];
}

export interface QuestRequirement {
  type: QuestType;
  target: number;
  current: number;
  unit?: string;
}

export interface Quest {
  id: string;
  chapterId: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  type: QuestType;
  difficulty: QuestDifficulty;
  status: QuestStatus;
  requirements: QuestRequirement[];
  rewards: QuestReward;
  prerequisites: string[];
  timeLimit?: number; // in seconds
  story?: {
    intro: string;
    introDe: string;
    completion: string;
    completionDe: string;
  };
  hints?: string[];
  hintsDe?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  titleDe: string;
  description: string;
  descriptionDe: string;
  icon: string;
  color: string;
  quests: Quest[];
  unlockRequirements: {
    completedChapters?: string[];
    minLevel?: number;
    minWpm?: number;
  };
  boss?: BossBattle;
}

export interface BossBattle {
  id: string;
  name: string;
  nameDe: string;
  avatar: string;
  difficulty: QuestDifficulty;
  targetWpm: number;
  targetAccuracy: number;
  timeLimit: number;
  dialogue: {
    intro: string;
    introDe: string;
    taunt: string;
    tauntDe: string;
    defeat: string;
    defeatDe: string;
    victory: string;
    victoryDe: string;
  };
  rewards: QuestReward;
}

export interface StoryProgress {
  currentChapter: string;
  currentQuest: string;
  completedQuests: string[];
  completedChapters: string[];
  totalXpEarned: number;
  totalCoinsEarned: number;
  bossesDefeated: string[];
  startedAt: number;
  lastPlayedAt: number;
}

export interface PlayerStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  coins: number;
  skillPoints: number;
  totalPracticeTime: number;
  highestWpm: number;
  averageAccuracy: number;
  currentStreak: number;
  longestStreak: number;
}
