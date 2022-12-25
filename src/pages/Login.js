import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Sass/index.sass';
import './Pages.styles/login.sass';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const clickSubmit = () => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('/foods');
  };

  const userEmail = /\S+@\S+\.\S+/;
  const min = 7;

  return (
    <div
      className="divFullLogin"
      data-testid="divLogin"
    >
      <div
        className="divLoginEP"
      >
        <label
          htmlFor="email"
        >
          <div className="divEmail">
            <input
              className="emailInput"
              type="email"
              id="email"
              name="email"
              required
              data-testid="email-input"
              placeholder="email@email.com"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </div>

          <div className="divPassw">
            <input
              className="passwInput"
              type="password"
              id="password"
              name="password"
              data-testid="password-input"
              placeholder="Password"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </div>
        </label>
      </div>

      <div className="divLoginB">
        <button
          className="buttonLogin"
          type="submit"
          data-testid="login-submit-btn"
          disabled={ !(password.length >= min && userEmail.test(email)) }
          onClick={ clickSubmit }
        >
          Enter
        </button>
      </div>
    </div>
  );
}
