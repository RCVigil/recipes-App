import React from "react";
import { render, screen } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event'; 
import App from "../App";
import renderWithRouter from "./utils/renderWIthRouter";


describe('Testando Login', () => {
  test('Renderizando a tela Login', () => {
    renderWithRouter(<App />)
  
    const login = screen.getByTestId(/divLogin/i)
  
    expect(login).toBeInTheDocument();
  });

  test('Testando input e-mail e password', () => {
    renderWithRouter(<App />)
  
    const email = screen.getByTestId(/email-input/i)
    
    expect(email).toBeInTheDocument();
    
    const password = screen.getByPlaceholderText(/password/i)
    
    expect(password).toBeInTheDocument();
  });
  
  test('testando o click no botão', () => {
    renderWithRouter(<App />)

    const email = screen.getByTestId(/email-input/i)

    const password = screen.getByPlaceholderText(/password/i)

    const botao = screen.getByRole('button', {
      name: /enter/i
    })

    userEvent.type(email, "teste@test.com")
    userEvent.type(password, "1234567")

    userEvent.click(botao)

  
    expect(botao).toBeEnabled();
  });
});
