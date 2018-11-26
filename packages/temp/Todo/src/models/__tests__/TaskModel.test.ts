import { TaskModel } from '../TaskModel';

const defaultTask = {
  description: '',
  finished: false,
  priority: 1,
};

describe('Task model tests', () => {
  test('static method create with empty object', () => {
    expect(TaskModel.create({}).toJS()).toMatchObject(defaultTask);
  });

  test('static method create with description', () => {
    expect(TaskModel.create({ description: 'New Task' }).toJS()).toMatchObject({
      ...defaultTask,
      description: 'New Task',
    });
  });
});
