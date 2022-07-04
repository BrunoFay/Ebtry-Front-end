import React from 'react'
import { render } from "@testing-library/react";
import Login from "../pages/Login";
import userEvent from '@testing-library/user-event';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  }
})
jest.mock('react', () => {
  return {
    useEffect: jest.fn(),
  }
})
describe.skip(' check if Login page render correctly', () => {
  it('should render Login page', () => {
    const { getByRole, getByPlaceholderText } = render(<Login />);
    const title = getByRole('heading', { name: 'Ebtry' });
    const loginButton = getByRole('button', { name: 'Entrar' });
    const loginInputEmail = getByPlaceholderText('Email');
    const loginInputPassword = getByPlaceholderText('Password');
    expect(loginInputEmail).toBeInTheDocument();
    expect(loginInputPassword).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  }
  )

  it('checks if the button is disabled if only the email is filled', () => {
    const { getByRole, getByPlaceholderText } = render(<Login />);
    const loginButton = getByRole('button', { name: 'Entrar' });
    const loginInputEmail = getByPlaceholderText('Email');
    loginInputEmail.value = 'dasdasd'
    expect(loginInputEmail.value).toBe('dasdasd');
    expect(loginButton).toHaveAttribute('disabled');
    expect(loginButton.disabled).toBe(true);
  })
  it('check if the button is enabled if the fields are filled', () => {
    const { getByRole, getByPlaceholderText } = render(<Login />);
    const loginButton = getByRole('button', { name: 'Entrar' });
    const loginInputEmail = getByPlaceholderText('Email');
    const loginInputPassword = getByPlaceholderText('Password');
    loginInputEmail.value = 'test@test.com'
    loginInputPassword.value = 'test'
    expect(loginInputEmail.value).toBe('test@test.com');
    expect(loginInputPassword.value).toBe('test');
    expect(loginButton).toHaveAttribute('disabled');
  })

})