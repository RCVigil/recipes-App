import React, { useState } from 'react';

export default function Login() {
  // const { email, setEmail, password, setPassword } = useContext(receitasContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userEmail = /\S+@\S+\.\S+/;
  const min = 7;

  return (
    <div data-testid="divLogin">
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          data-testid="email-input"
          placeholder="email@email.com"
          onChange={ ({ target }) => setEmail(target.value) }
        />

        <input
          type="password"
          name="password"
          data-testid="password-input"
          placeholder="Password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </label>

      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !(password.length >= min && userEmail.test(email)) }
      >
        Enter
      </button>
    </div>
  );
}
