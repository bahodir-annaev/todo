export interface IToDoSettingsModel {
  appearance: IToDoAppearance;
  functionality: IToDoFunctionality;
}

const enum applyColorTo {
  background = 'background',
  text = 'text',
}

export interface IToDoAppearance {
  finishedTask: { applyTo: applyColorTo; color: string };
}

export interface IToDoFunctionality {
  filtering: boolean;
  priority: boolean;
}
