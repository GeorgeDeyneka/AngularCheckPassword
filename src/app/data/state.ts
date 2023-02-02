import { TemplateText } from '../models/template-text.interface';

export const TITLES_TEXT: TemplateText = {
  invalid: 'Your password is incorrect...',
  simple: 'This is a simple password',
  middle: 'This is an average password',
  strong: 'This is a strong password',
};

export const INFO_TEXT: TemplateText = {
  invalid:
    'Password must be at least 8 characters long and must contain only english letters, numbers or symbols  !@#$%^&*',
  simple: '(password has only letters numbers or symbols)',
  middle:
    '(password contains a combination of: letters-numbers, letters-symbols or symbols-numbers)',
  strong: '(password contains letters, numbers and symbols)',
};

export const REG_EXP_ARR: RegExp[] = [/[a-zA-z]/, /\d/, /[!@#$%^&*]/];
