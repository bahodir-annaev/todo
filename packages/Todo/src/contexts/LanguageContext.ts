import * as React from 'react';

// tslint:disable-next-line:no-require-imports no-var-requires
const defaultLanguage = require('../../localization.en.json');

export const LanguageContext = React.createContext(defaultLanguage);
