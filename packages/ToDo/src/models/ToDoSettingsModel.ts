import { Record, RecordOf } from 'immutable';

export const enum applyColorTo {
  background = 'background',
  text = 'text',
}

const TaskAppearanceRecord = Record({ applyTo: applyColorTo.background, color: 'grey' });
const ToDoAppearanceRecord = Record({ finishedTask: TaskAppearanceRecord() });
const ToDoFunctionalityRecord = Record({ filtering: true, priority: true });

export class ToDoSettingsModel extends Record({
  appearance: ToDoAppearanceRecord(),
  functionality: ToDoFunctionalityRecord(),
}) {
  appearance!: RecordOf<IToDoAppearance>;
  functionality!: RecordOf<IToDoFunctionality>;
  constructor(params?: Partial<ToDoSettingsModel>) {
    params ? super(params) : super();
  }

  static create(settings) {
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
