export interface IToDoSettingsModel {
  appearance: IToDoAppearance;
  functionality: IToDoFunctionality;
}

export interface IToDoAppearance {
  finishedTask: { applyTo: 'background' | 'text'; color: string };
}

export interface IToDoFunctionality {
  filtering: boolean;
  priority: boolean;
}
