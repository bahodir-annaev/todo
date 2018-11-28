import * as React from 'react';
import { TodoSettingsModel } from '../models/TodoSettingsModel';

export const SettingsContext = React.createContext(TodoSettingsModel.create());
