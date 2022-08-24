import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import renderWithRouter from './utils/renderWIthRouter'
import chickenMock  from './utils/chickenMock'
import App from '../App'
import ReceitasProvider from '../Context/ReceitasProvider';
import { arrabiataMock, aquamarineMock } from "./utils/arrabiataMock";

describe('atingir 45% de coverage', () => {
  test('testa se o header possui os intes na tela', () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    expect(search).toBeInTheDocument();

    const ingredient = screen.getByTestId("ingredient-search-radio")
    const name = screen.getByTestId("name-search-radio")
    const firstLetter = screen.getByTestId("first-letter-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    expect(ingredient).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(firstLetter).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();

    userEvent.type(search, 'chicken')
    userEvent.click(firstLetter)
    
    expect(firstLetter).toHaveProperty('checked', true)
    userEvent.click(name)
    expect(name).toHaveProperty('checked', true)

    userEvent.click(ingredient)
    expect(ingredient).toHaveProperty('checked', true)
    
    userEvent.click(buttonSearch)

  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("ingredient-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'chicken')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken')



  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)
    const buttonSearch = screen.getByTestId("exec-search-btn")
    const name = screen.getByTestId("name-search-radio")
    const search = screen.getByTestId('search-input');
    userEvent.type(search, 'chicken')
    userEvent.click(name)
    userEvent.click(buttonSearch)
    await waitFor(() => expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'))

  });

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/drinks')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("ingredient-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'vodka')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=vodka')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/drinks')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("first-letter-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'v')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("first-letter-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'v')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=v')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/drinks')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("name-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'vodka')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/drinks')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("name-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'vodka')
    // userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(chickenMock)
    });
    
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("name-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'chicken')
    // userEvent.click(ingredient)
    userEvent.click(buttonSearch)

  await waitFor(() => expect(fetch).toBeCalled())
  expect(fetch).toHaveBeenCalledWith('')
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    history.push('/foods')

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("first-letter-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'chicken')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    history.push('/foods')
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(arrabiataMock)
    });

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("name-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'arrabiata')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)
    console.log(history.location.pathname);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/foods')
    })
  
  })

  test('testa API', async () => {
    const { history } = renderWithRouter(<ReceitasProvider><App /></ReceitasProvider>)
    history.push('/drinks')
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(aquamarineMock)
    });

    const searchButton = screen.getByAltText('search');
    userEvent.click(searchButton)

    const search = screen.getByTestId('search-input');
    const ingredient = screen.getByTestId("name-search-radio")
    const buttonSearch = screen.getByTestId("exec-search-btn")

    userEvent.type(search, 'aquamarine')
    userEvent.click(ingredient)
    userEvent.click(buttonSearch)
    console.log(history.location.pathname);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks')
    })
  
  })

})