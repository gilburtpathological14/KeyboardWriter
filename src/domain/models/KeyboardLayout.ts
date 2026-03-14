import { Finger, Hand, KeyRow } from '../enums';

/**
 * Represents a single key on the keyboard
 */
export interface KeyDefinition {
  id: string;
  key: string;
  shiftKey?: string;
  altKey?: string;
  code: string;
  finger: Finger;
  hand: Hand;
  row: KeyRow;
  width?: number; // Multiplier for key width (default: 1)
}

/**
 * Represents a complete keyboard layout
 */
export interface KeyboardLayout {
  id: string;
  name: string;
  locale: string;
  rows: KeyDefinition[][];
}

/**
 * QWERTZ German keyboard layout definition
 */
export const QWERTZ_LAYOUT: KeyboardLayout = {
  id: 'qwertz-de',
  name: 'QWERTZ (Deutsch)',
  locale: 'de-DE',
  rows: [
    // Number row
    [
      {
        id: 'key-circumflex',
        key: '^',
        shiftKey: '°',
        code: 'Backquote',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-1',
        key: '1',
        shiftKey: '!',
        code: 'Digit1',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-2',
        key: '2',
        shiftKey: '"',
        code: 'Digit2',
        finger: Finger.RING_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-3',
        key: '3',
        shiftKey: '§',
        code: 'Digit3',
        finger: Finger.MIDDLE_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-4',
        key: '4',
        shiftKey: '$',
        code: 'Digit4',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-5',
        key: '5',
        shiftKey: '%',
        code: 'Digit5',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-6',
        key: '6',
        shiftKey: '&',
        code: 'Digit6',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-7',
        key: '7',
        shiftKey: '/',
        code: 'Digit7',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-8',
        key: '8',
        shiftKey: '(',
        code: 'Digit8',
        finger: Finger.MIDDLE_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-9',
        key: '9',
        shiftKey: ')',
        code: 'Digit9',
        finger: Finger.RING_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-0',
        key: '0',
        shiftKey: '=',
        code: 'Digit0',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-ss',
        key: 'ß',
        shiftKey: '?',
        code: 'Minus',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-acute',
        key: '´',
        shiftKey: '`',
        code: 'Equal',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
      },
      {
        id: 'key-backspace',
        key: 'Backspace',
        code: 'Backspace',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.NUMBER,
        width: 2,
      },
    ],
    // Top row
    [
      {
        id: 'key-tab',
        key: 'Tab',
        code: 'Tab',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
        width: 1.5,
      },
      {
        id: 'key-q',
        key: 'q',
        shiftKey: 'Q',
        code: 'KeyQ',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-w',
        key: 'w',
        shiftKey: 'W',
        code: 'KeyW',
        finger: Finger.RING_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-e',
        key: 'e',
        shiftKey: 'E',
        code: 'KeyE',
        finger: Finger.MIDDLE_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-r',
        key: 'r',
        shiftKey: 'R',
        code: 'KeyR',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-t',
        key: 't',
        shiftKey: 'T',
        code: 'KeyT',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-z',
        key: 'z',
        shiftKey: 'Z',
        code: 'KeyY',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-u',
        key: 'u',
        shiftKey: 'U',
        code: 'KeyU',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-i',
        key: 'i',
        shiftKey: 'I',
        code: 'KeyI',
        finger: Finger.MIDDLE_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-o',
        key: 'o',
        shiftKey: 'O',
        code: 'KeyO',
        finger: Finger.RING_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-p',
        key: 'p',
        shiftKey: 'P',
        code: 'KeyP',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-uuml',
        key: 'ü',
        shiftKey: 'Ü',
        code: 'BracketLeft',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-plus',
        key: '+',
        shiftKey: '*',
        code: 'BracketRight',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
      },
      {
        id: 'key-enter',
        key: 'Enter',
        code: 'Enter',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.TOP,
        width: 1.5,
      },
    ],
    // Home row
    [
      {
        id: 'key-caps',
        key: 'CapsLock',
        code: 'CapsLock',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
        width: 1.75,
      },
      {
        id: 'key-a',
        key: 'a',
        shiftKey: 'A',
        code: 'KeyA',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-s',
        key: 's',
        shiftKey: 'S',
        code: 'KeyS',
        finger: Finger.RING_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-d',
        key: 'd',
        shiftKey: 'D',
        code: 'KeyD',
        finger: Finger.MIDDLE_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-f',
        key: 'f',
        shiftKey: 'F',
        code: 'KeyF',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-g',
        key: 'g',
        shiftKey: 'G',
        code: 'KeyG',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-h',
        key: 'h',
        shiftKey: 'H',
        code: 'KeyH',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-j',
        key: 'j',
        shiftKey: 'J',
        code: 'KeyJ',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-k',
        key: 'k',
        shiftKey: 'K',
        code: 'KeyK',
        finger: Finger.MIDDLE_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-l',
        key: 'l',
        shiftKey: 'L',
        code: 'KeyL',
        finger: Finger.RING_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-ouml',
        key: 'ö',
        shiftKey: 'Ö',
        code: 'Semicolon',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-auml',
        key: 'ä',
        shiftKey: 'Ä',
        code: 'Quote',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
      {
        id: 'key-hash',
        key: '#',
        shiftKey: "'",
        code: 'Backslash',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.HOME,
      },
    ],
    // Bottom row
    [
      {
        id: 'key-shift-left',
        key: 'Shift',
        code: 'ShiftLeft',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
        width: 1.25,
      },
      {
        id: 'key-less',
        key: '<',
        shiftKey: '>',
        code: 'IntlBackslash',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-y',
        key: 'y',
        shiftKey: 'Y',
        code: 'KeyZ',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-x',
        key: 'x',
        shiftKey: 'X',
        code: 'KeyX',
        finger: Finger.RING_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-c',
        key: 'c',
        shiftKey: 'C',
        code: 'KeyC',
        finger: Finger.MIDDLE_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-v',
        key: 'v',
        shiftKey: 'V',
        code: 'KeyV',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-b',
        key: 'b',
        shiftKey: 'B',
        code: 'KeyB',
        finger: Finger.INDEX_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-n',
        key: 'n',
        shiftKey: 'N',
        code: 'KeyN',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-m',
        key: 'm',
        shiftKey: 'M',
        code: 'KeyM',
        finger: Finger.INDEX_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-comma',
        key: ',',
        shiftKey: ';',
        code: 'Comma',
        finger: Finger.MIDDLE_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-period',
        key: '.',
        shiftKey: ':',
        code: 'Period',
        finger: Finger.RING_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-minus',
        key: '-',
        shiftKey: '_',
        code: 'Slash',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
      },
      {
        id: 'key-shift-right',
        key: 'Shift',
        code: 'ShiftRight',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.BOTTOM,
        width: 2.75,
      },
    ],
    // Space row
    [
      {
        id: 'key-ctrl-left',
        key: 'Ctrl',
        code: 'ControlLeft',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-meta-left',
        key: 'Cmd',
        code: 'MetaLeft',
        finger: Finger.PINKY_LEFT,
        hand: Hand.LEFT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-alt-left',
        key: 'Alt',
        code: 'AltLeft',
        finger: Finger.THUMB,
        hand: Hand.LEFT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-space',
        key: ' ',
        code: 'Space',
        finger: Finger.THUMB,
        hand: Hand.RIGHT,
        row: KeyRow.SPACE,
        width: 6.25,
      },
      {
        id: 'key-alt-right',
        key: 'AltGr',
        code: 'AltRight',
        finger: Finger.THUMB,
        hand: Hand.RIGHT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-meta-right',
        key: 'Cmd',
        code: 'MetaRight',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-context',
        key: 'Menu',
        code: 'ContextMenu',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
      {
        id: 'key-ctrl-right',
        key: 'Ctrl',
        code: 'ControlRight',
        finger: Finger.PINKY_RIGHT,
        hand: Hand.RIGHT,
        row: KeyRow.SPACE,
        width: 1.25,
      },
    ],
  ],
};

/**
 * Get all printable keys from layout
 */
export function getPrintableKeys(layout: KeyboardLayout): KeyDefinition[] {
  return layout.rows.flat().filter(key => key.key.length === 1 && key.key !== ' ');
}

/**
 * Find key definition by character
 */
export function findKeyByChar(layout: KeyboardLayout, char: string): KeyDefinition | undefined {
  const lowerChar = char.toLowerCase();
  for (const row of layout.rows) {
    for (const key of row) {
      if (key.key === lowerChar || key.key === char || key.shiftKey === char) {
        return key;
      }
    }
  }
  return undefined;
}

/**
 * Check if character requires shift key
 */
export function requiresShift(layout: KeyboardLayout, char: string): boolean {
  for (const row of layout.rows) {
    for (const key of row) {
      if (key.shiftKey === char) {
        return true;
      }
      if (key.key.length === 1 && char === key.key.toUpperCase() && char !== key.key) {
        return true;
      }
    }
  }
  return false;
}
