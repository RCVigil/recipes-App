import React from 'react';
import ReceitasProvider from '../Context/ReceitasProvider';

export default function Login() {
  const { email, setEmail, password, setPassword } = ReceitasProvider();

  // validEmail = (email) => {
  //   const userEmail = /\S+@\S+\.\S+/;
  //   return userEmail.test(email);
  // };
  // validateInputs = () => {
  //   const { email, password } = this.state;
  //   const min = 6;
  //   const checkValidation = this.validEmail(email);
  //   if (password.length >= min && checkValidation) {
  //     this.setState({
  //       invalid: false,
  //     });
  //   } else {
  //     this.setState({
  //       invalid: true,
  //     });
  //   }
  // };

  return (
    <div>
      <label
        htmlFor="email"
      >
        <input type="email" name="email" data-testid="email-input" />

        <input type="password" name="password" data-testid="password-input" />
      </label>

      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled="true"
      >
        Enter
      </button>
    </div>
  );
}
