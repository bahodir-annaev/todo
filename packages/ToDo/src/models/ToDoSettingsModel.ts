import { Record, RecordOf } from 'immutable';

export const enum applyColorTo {
  background = 'background',
  text = 'text',
}

export class TaskAppearanceRecord extends Record({
  applyTo: applyColorTo.background,
  color: 'grey',
}) {}

export class ToDoAppearanceRecord extends Record({ finishedTask: new TaskAppearanceRecord() }) {}

export class ToDoFunctionalityRecord extends Record({ filtering: true, priority: true }) {}

export class ToDoSettingsModel extends Record({
  appearance: new ToDoAppearanceRecord(),
  functionality: new ToDoFunctionalityRecord(),
}) {
  static create(settings: IToDoSettingsModel) {
    if (settings) {
      const appearance =
        settings.appearance && settings.appearance.finishedTask
          ? new ToDoAppearanceRecord({
              finishedTask: new TaskAppearanceRecord(settings.appearance.finishedTask),
            })
          : new ToDoAppearanceRecord();

      const functionality = settings.functionality
        ? new ToDoFunctionalityRecord(settings.functionality)
        : new ToDoFunctionalityRecord();

      return new ToDoSettingsModel({ appearance, functionality });
    } else {
      return new ToDoSettingsModel();
    }
  }
}

interface IToDoAppearance {
  finishedTask: TaskAppearanceRecord;
}

interface IToDoFunctionality {
  filtering: boolean;
  priority: boolean;
}

interface IToDoSettingsModel {
  appearance: IToDoAppearance;
  functionality: IToDoFunctionality;
}
