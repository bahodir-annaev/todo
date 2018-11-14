import { Record } from 'immutable';

export class IToDoSettingsModel extends Record({
  appearance: { finishedTask: { applyTo: 'background', color: 'grey' } },
  functionality: { filtering: true, priority: true },
}) {
  appearance!: IToDoAppearance;
  functionality!: IToDoFunctionality;
  constructor(params?: Partial<IToDoSettingsModel>) {
    params ? super(params) : super();
  }
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
