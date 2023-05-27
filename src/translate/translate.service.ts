import {lang} from './translate';

export const t = (key: string) => {
  if (lang && key && typeof window !== 'undefined') {
    const locale = localStorage?.getItem('lang')?.toUpperCase() || 'ES';
    if (lang[locale] && lang[locale][key]) return lang[locale][key];
    else return key;
  } else {
    return key;
  }
};
