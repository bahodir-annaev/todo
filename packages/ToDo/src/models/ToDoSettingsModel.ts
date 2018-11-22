import { Record } from 'immutable';

export const enum applyColorTo {
  background = 'background',
  text = 'text',
}

export class TaskAppearanceRecord extends Record({
  applyTo: applyColorTo.background,
  color: 'grey',
}) {}

export class TodoAppearanceRecord extends Record({ finishedTask: new TaskAppearanceRecord() }) {}

export class TodoFunctionalityRecord extends Record({ filtering: true, priority: true }) {}

const DEFAULT_APPEARANCE = new TodoAppearanceRecord();
const DEFAULT_FUNCTIONALITY = new TodoFunctionalityRecord();

export class TodoSettingsModel extends Record({
  appearance: DEFAULT_APPEARANCE,
  functionality: DEFAULT_FUNCTIONALITY,
}) {
  static create(settings?: ITodoSettingsModel) {
    if (settings) {
      const appearance =
        settings.appearance && settings.appearance.finishedTask
          ? new TodoAppearanceRecord({
              finishedTask: new TaskAppearanceRecord(settings.appearance.finishedTask),
            })
          : DEFAULT_APPEARANCE;

      const functionality = settings.functionality
        ? new TodoFunctionalityRecord(settings.functionality)
        : DEFAULT_FUNCTIONALITY;

      return new TodoSettingsModel({ appearance, functionality });
    } else {
      return new TodoSettingsModel();
    }
  }
}

interface ITodoAppearance {
  finishedTask: TaskAppearanceRecord;
}

interface ITodoFunctionality {
  filtering: boolean;
  priority: boolean;
}

interface ITodoSettingsModel {
  appearance?: ITodoAppearance;
  functionality?: ITodoFunctionality;
}
