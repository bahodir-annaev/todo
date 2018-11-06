import { Task } from '../src/models/Task';

const defaultTask = {
  complete: false,
  description: '',
  priority: 1,
};

describe('Task model tests', () => {
  test('create function without parameters', () => {
    expect(Task.create({})).toMatchObject(defaultTask);
  });

  test('create task with description', () => {
    expect(Task.create({ description: 'New Task' })).toMatchObject({
      ...defaultTask,
      description: 'New Task',
    });
  });
});
