import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event' 
import Footer from '../components/Footer'
import renderWithRouter from "./utils/renderWIthRouter";
import App from "../App";

describe('Testando component Footer', () => {
  test('Testando Botões', () => {
    const { history } = renderWithRouter(<App />)
history.push('/foods') 
    const botaoComida = screen.getByRole('img', {  name: /imagem de comida/i})
    userEvent.click(botaoComida)

    expect(botaoComida).toBeInTheDocument()

    expect(history.location.pathname).toEqual('/foods')
  });

  test('Testando Botões', () => {
    const { history } = renderWithRouter(<App />)
history.push('/drinks') 
    const botaoBebida = screen.getByRole('img', {  name: /imagem de drinks/i})
    userEvent.click(botaoBebida)

    expect(botaoBebida).toBeInTheDocument()

    expect(history.location.pathname).toEqual('/drinks')
  });
});
