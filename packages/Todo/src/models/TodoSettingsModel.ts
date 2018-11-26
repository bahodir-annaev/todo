import { Record } from 'immutable';

export const enum applyColorTo {
  background = 'background',
  text = 'text',
}

export class TaskAppearance extends Record({
  applyTo: applyColorTo.background,
  color: 'grey',
}) {}

export class TodoAppearance extends Record({ finishedTask: new TaskAppearance() }) {}

export class TodoFunctionality extends Record({ filtering: true, priority: true }) {}

const DEFAULT_APPEARANCE = new TodoAppearance();
const DEFAULT_FUNCTIONALITY = new TodoFunctionality();

export class TodoSettingsModel extends Record({
  appearance: DEFAULT_APPEARANCE,
  functionality: DEFAULT_FUNCTIONALITY,
}) {
  static create(settings?: ITodoSettingsModel) {
    if (settings) {
      const appearance =
        settings.appearance && settings.appearance.finishedTask
          ? new TodoAppearance({
              finishedTask: new TaskAppearance(settings.appearance.finishedTask),
            })
          : DEFAULT_APPEARANCE;

      const functionality = settings.functionality
        ? new TodoFunctionality(settings.functionality)
        : DEFAULT_FUNCTIONALITY;

      return new TodoSettingsModel({ appearance, functionality });
    } else {
      return new TodoSettingsModel();
    }
  }
}

interface ITodoAppearance {
  finishedTask?: TaskAppearance;
}

interface ITodoFunctionality {
  filtering?: boolean;
  priority?: boolean;
}

interface ITodoSettingsModel {
  appearance?: ITodoAppearance;
  functionality?: ITodoFunctionality;
}
