import { shallow } from 'enzyme';
import * as React from 'react';

import { Task } from '../../models/Task';
import { applyColorTo } from '../../models/ToDoSettingsModel';
import { ToDoItem } from '../ToDoItem';

const setup = (propsToChange: object, taskProperties?: object) => {
  const applyTo = applyColorTo.text;
  const props = Object.assign(
    {
      appearance: {
        finishedTask: {
          applyTo,
          color: 'grey',
        },
      },
      removeTask: jest.fn(),
      task: Object.assign({ ...Task.create({ description: 'Test Task' }) }, taskProperties),
      toggleComplete: jest.fn(),
    },
    propsToChange,
  );

  const todoItem = shallow(<ToDoItem {...props} />);

  return {
    props,
    todoItem,
  };
};

describe('ToDoItem component', () => {
  test('should render', () => {
    const { todoItem } = setup({});
    expect(todoItem).toMatchSnapshot();
  });

  test('toggleComplete method should be called', () => {
    const { props, todoItem } = setup({});
    todoItem.find('input').simulate('change');

    expect(props.toggleComplete).toHaveBeenCalled();
  });

  test('removeTask method should be called', () => {
    const { props, todoItem } = setup({});
    todoItem.find('button').simulate('click');

    expect(props.removeTask).toHaveBeenCalled();
  });

  test('completed task should be checked and should have finished className', () => {
    const { todoItem } = setup({}, { complete: true });
    expect(todoItem.find('input').props().checked).toBe(true);
    expect(todoItem.find('span').hasClass('complete')).toBe(true);
  });
});
