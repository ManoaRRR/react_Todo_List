 import React from 'react';
 import { render, fireEvent } from '@testing-library/react';
import TodoForms from '../components/TodoForms';
test('the dom should have this text',()=>{
  
  const {getByText} = render(<TodoForms/>);
  const text = getByText('to do:');
  expect(text).toBeInTheDocument;
})
 
describe('TodoForms component', () => {
  it('handles submit correctly', () => {
    const { getByPlaceholderText, getByText } = render(<TodoForms />);
    const input = getByPlaceholderText('Nouvelle tâche');
    const button = getByText('Ajouter');

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    expect(input.value).toBe('');
    expect(getByText('Test task')).toBeInTheDocument();
  });
});



describe('TodoForms component', () => {
  test('renders input and button', () => {
    const { getByPlaceholderText, getByText } = render(<TodoForms />);

    const input = getByPlaceholderText(/Nouvelle tâche/i);
    const button = getByText(/Ajouter/i);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('submitting a new task adds it to the to do list', () => {
    const { getByPlaceholderText, getByText } = render(<TodoForms />);

    const input = getByPlaceholderText(/Nouvelle tâche/i);
    const button = getByText(/Ajouter/i);

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    const task = getByText(/Test task/i);
    expect(task).toBeInTheDocument();
  });
  
  test('checking a task moves it to the done list', () => {
    const { getByPlaceholderText, getByText } = render(<TodoForms />);
    const input = getByPlaceholderText(/Nouvelle tâche/i);
    const button = getByText(/Ajouter/i);

    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);

    const checkbox = getByLabelText(/Test task/i);
    fireEvent.click(checkbox);

    const task = getByText(/Test task/i);
    expect(task).toBeInTheDocument();
  });
});
