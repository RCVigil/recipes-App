import React from "react";
import { render, screen } from '@testing-library/react'; 
import App from "../App"
import userEvent from '@testing-library/user-event'; 


describe('Testando Login', () => {
  test('Renderizando a tela Login', () => {
    render(<App />)
  
    const login = screen.getByTestId(/divLogin/i)
  
    expect(login).toBeInTheDocument();
  });

  test('Testando input e-mail e password', () => {
    render(<App />)
  
    const email = screen.getByTestId(/email-input/i)
    
    expect(email).toBeInTheDocument();
    
    const password = screen.getByPlaceholderText(/password/i)
    
    expect(password).toBeInTheDocument();
  });
  
  test('testando o click no botão', () => {
    render(<App />)

    const email = screen.getByTestId(/email-input/i)

    const password = screen.getByPlaceholderText(/password/i)

    const botao = screen.getByRole('button', {
      name: /enter/i
    })

    userEvent.type(email, "teste@test.com")
    userEvent.type(password, "1234567")

  
    expect(botao).toBeEnabled();
  });
});
