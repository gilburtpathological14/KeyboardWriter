import { LessonType } from '../enums';

/**
 * Represents a single exercise within a lesson
 */
export interface Exercise {
  id: string;
  text: string;
  description?: string;
}

/**
 * Represents a complete lesson
 */
export interface Lesson {
  id: string;
  title: string;
  description: string;
  type: LessonType;
  category: string;
  level: number;
  exercises: Exercise[];
  targetWPM?: number;
  targetAccuracy?: number;
  requiredKeys?: string[];
  language?: string;
}

/**
 * Supported programming languages for code exercises
 */
export type ProgrammingLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'angular'
  | 'react'
  | 'html'
  | 'css'
  | 'sql'
  | 'bash'
  | 'git'
  | 'go'
  | 'rust'
  | 'c'
  | 'cpp'
  | 'csharp'
  | 'php'
  | 'ruby'
  | 'swift'
  | 'kotlin';

/**
 * Supported IDEs for shortcut lessons
 */
export type IDEType =
  | 'vscode'
  | 'intellij'
  | 'webstorm'
  | 'terminal'
  | 'vim'
  | 'neovim'
  | 'emacs'
  | 'xcode'
  | 'android-studio'
  | 'sublime'
  | 'atom';

/**
 * Represents a programming-specific lesson
 */
export interface ProgrammingLesson extends Lesson {
  type: LessonType.PROGRAMMING;
  programmingLanguage: ProgrammingLanguage;
  syntaxHighlight: boolean;
}

/**
 * Represents a shortcut lesson
 */
export interface ShortcutLesson extends Lesson {
  type: LessonType.SHORTCUTS;
  ide: IDEType;
  shortcuts: ShortcutDefinition[];
}

/**
 * Represents a keyboard shortcut
 */
export interface ShortcutDefinition {
  id: string;
  keys: string[];
  action: string;
  description: string;
  category: string;
}

/**
 * Lesson category for grouping
 */
export interface LessonCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  lessonIds: string[];
}
