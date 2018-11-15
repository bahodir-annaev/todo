import { Record, RecordOf } from 'immutable';

export const enum applyColorTo {
  background = 'background',
  text = 'text',
}

export const TaskAppearanceRecord = Record({ applyTo: applyColorTo.background, color: 'grey' });
export const ToDoAppearanceRecord = Record({ finishedTask: TaskAppearanceRecord() });
export const ToDoFunctionalityRecord = Record({ filtering: true, priority: true });

export type IToDoAppearanceRecord = RecordOf<IToDoAppearance>;
export type IToDoFunctionalityRecord = RecordOf<IToDoFunctionality>;

export class ToDoSettingsModel extends Record({
  appearance: ToDoAppearanceRecord(),
  functionality: ToDoFunctionalityRecord(),
}) {
  appearance!: IToDoAppearanceRecord;
  functionality!: IToDoFunctionalityRecord;
  constructor(params?: Partial<ToDoSettingsModel>) {
    params ? super(params) : super();
  }

  static create(settings: IToDoSettingsModel) {
    const appearance = ToDoAppearanceRecord({
      finishedTask: TaskAppearanceRecord({ ...settings.appearance.finishedTask }),
    });
    const functionality = ToDoFunctionalityRecord({ ...settings.functionality });

    return new ToDoSettingsModel({ appearance, functionality });
  }
}

interface IToDoAppearance {
  finishedTask: RecordOf<ITaskAppearance>;
}

interface ITaskAppearance {
  applyTo: applyColorTo;
  color: string;
}

interface IToDoFunctionality {
  filtering: boolean;
  priority: boolean;
}

interface IToDoSettingsModel {
  appearance: IToDoAppearance;
  functionality: IToDoFunctionality;
}
