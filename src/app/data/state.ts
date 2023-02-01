import { RegExpObj } from '../models/reg-exp-obj.interface';
import { TemplateText } from '../models/template-text.interface';

export const TITLES_TEXT: TemplateText = {
  invalid: 'This is an invalid password',
  simple: 'This is a simple password',
  middle: 'This is an average password',
  strong: 'This is a strong password',
};

export const INFO_TEXT: TemplateText = {
  invalid:
    '(password must be at least 8 characters long and must contain letters, numbers or symbols)',
  simple: '(password has only letters numbers or symbols)',
  middle:
    '(password contains a combination of: letters-numbers, letters-symbols or symbols-numbers)',
  strong: '(password contains letters, numbers and symbols)',
};

export const REG_EXP_OBJ: RegExpObj = {
  letters: /[a-zA-z]/,
  numbers: /\d/,
  symbols: /[!@#$%^&*]/,
};
