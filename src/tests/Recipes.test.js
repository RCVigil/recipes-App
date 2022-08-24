import React from "react";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import renderWithRouter from './utils/renderWIthRouter'
import chickenMock  from './utils/chickenMock'
import meals from "../../cypress/mocks/meals";
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';
// import { arrabiataMock, aquamarineMock } from "./utils/arrabiataMock";

describe('atingir 45% de coverage', () => {
    test('testa se o header possui os intes na tela', async () => {
      const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
      jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(meals)
      });
      history.push('/foods')

    const chicken = await screen.findByText('Corba') ;
    expect(chicken).toBeInTheDocument();
    userEvent.click(chicken);
    await waitFor(() => expect(history.location.pathname).toBe('/foods'));
      
})
})
