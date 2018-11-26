import { shallow } from 'enzyme';
import * as React from 'react';

import { TaskModel } from '../../models/TaskModel';
import { applyColorTo, TaskAppearance, TodoAppearance } from '../../models/TodoSettingsModel';
import { TodoItem } from '../TodoItem';

const setup = (propsToChange: object, taskProperties?: object) => {
  const applyTo = applyColorTo.text;
  const task = TaskModel.create({ description: 'Test Task' });
  const props = {
    appearance: new TodoAppearance({
      finishedTask: new TaskAppearance({
        applyTo,
        color: 'grey',
      }),
    }),
    removeTask: jest.fn(),
    task,
    toggleFinished: jest.fn(),
  };

  props.appearance = props.appearance.mergeIn([ 'finishedTask' ], propsToChange);
  props.task = props.task.merge({ ...taskProperties });

  const todoItem = shallow(<TodoItem {...props} />);

  return {
    props,
    todoItem,
  };
};

describe('TodoItem component', () => {
  test('should render', () => {
    const { todoItem } = setup({});
    expect(todoItem).toMatchSnapshot();
  });

  test('toggleFinished method should be called', () => {
    const { props, todoItem } = setup({});
    todoItem.find('input').simulate('change');

    expect(props.toggleFinished).toHaveBeenCalled();
  });

  test('removeTask method should be called', () => {
    const { props, todoItem } = setup({});
    todoItem.find('button').simulate('click');

    expect(props.removeTask).toHaveBeenCalled();
  });

  test('finished task should be checked and should have finished className', () => {
    const { todoItem } = setup({}, { finished: true });
    expect(todoItem.find('input').props().checked).toBe(true);
    expect(todoItem.find('span').hasClass('finished')).toBe(true);
  });
});
