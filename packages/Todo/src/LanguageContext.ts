import * as React from 'react';

const defaultLanguage = require('../localization.en.json');

export const LanguageContext = React.createContext(defaultLanguage);
