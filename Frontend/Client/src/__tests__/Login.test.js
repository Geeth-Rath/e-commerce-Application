import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Component/Login/Login';

describe('Login Component', () => {
  it('renders login form', () => {
    render(<Login />);


    expect(screen.getByText('OrelBuy')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('example@gmail.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('******')).toBeInTheDocument();
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('submits login form', async () => {
    render(<Login />);


    fireEvent.change(screen.getByPlaceholderText('example@gmail.com'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('******'), {
      target: { value: 'password123' },
    });


    fireEvent.click(screen.getByText('Log in'));


    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith('/sidebar');
    });
  });
});
