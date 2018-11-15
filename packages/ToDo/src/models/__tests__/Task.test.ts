import { Task } from '../Task';

const defaultTask = {
  complete: false,
  description: '',
  priority: 1,
};

describe('Task model tests', () => {
  test('static method create with empty object', () => {
    expect(Task.create({}).toJS()).toMatchObject(defaultTask);
  });

  test('static method create with description', () => {
    expect(Task.create({ description: 'New Task' }).toJS()).toMatchObject({
      ...defaultTask,
      description: 'New Task',
    });
  });
});
