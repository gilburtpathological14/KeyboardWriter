/**
 * Services - Central Export
 */

// Adaptive Learning
export { AdaptiveLearningService } from './AdaptiveLearningService';
export type {
  DailyGoal,
  KeyPerformance,
  LearningPathRecommendation,
  PatternPerformance,
  PracticeRecommendation,
  WeaknessAnalysis
} from './AdaptiveLearningService';

export { ConfettiService } from './ConfettiService';

// Exercise Modes
export { ExerciseModeService } from './ExerciseModeService';
export type {
  DictationState,
  ErrorCorrectionResult,
  ErrorCorrectionState,
  ExerciseModeSession,
  TimePressureState,
  WarmupExercise
} from './ExerciseModeService';

// Gamification
export {
  calculateStarRating,
  GamificationService,
  gamificationService,
  LEVEL_THRESHOLDS,
  XP_REWARDS
} from './GamificationService';
export type {
  ChallengeDifficulty,
  ChallengeType,
  DailyChallenge,
  GamificationData,
  LessonResult,
  StarRating,
  XPGainEvent
} from './GamificationService';

export { LessonService } from './LessonService';
export type { ExerciseResult, LessonCompletionResult } from './LessonService';
export { PythonService } from './PythonService';
export { QuizService } from './QuizService';
export type { QuizQuestion, QuizResult, QuizSession, QuizStats, QuizType } from './QuizService';
export { QuotesService } from './QuotesService';
export type { Quote } from './QuotesService';
export { SocialService } from './SocialService';
export { SoundService } from './SoundService';
export { SpacedRepetitionService, srsService } from './SpacedRepetitionService';
export type {
  DailyReviewStats,
  MasteryLevel,
  QualityRating,
  ReviewResult,
  SRSItemData
} from './SpacedRepetitionService';
export { ThemeService } from './ThemeService';
export type { ThemeColors, ThemeMode, ThemeSettings } from './ThemeService';
export { TypingEngineService } from './TypingEngineService';

// Progress Tracking
export { ProgressTrackingService, progressTrackingService } from './ProgressTrackingService';
export type {
  DailySession, LearningPathNode,
  Milestone,
  PerformanceComparison,
  ProgressData, WeeklySummary
} from './ProgressTrackingService';

