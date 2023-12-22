import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useState } from 'react';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';
import PasswordInstructions from '../components/PasswordInstructions';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MotionMain from '../components/MotionMain';
import { useSignUp } from '../hooks/useSignUp';
import { validateDisplayName, validateEmailAddress } from '../utils/textUtils';
import { useReducer } from 'react';
import { validatePassword } from '../utils/passwordUtils';

function reducer(state, action) {
  switch (action.type) {
    case 'changed_display_name': {
      return {
        ...state,
        displayName: action.nextDisplayName,
      };
    }
    case 'changed_email': {
      return {
        ...state,
        email: action.nextEmail,
      };
    }
    case 'changed_password': {
      return {
        ...state,
        password: action.nextPassword,
      };
    }
    case 'validate_form': {
      const displayNameValidation = validateDisplayName(state.displayName);
      const emailValidation = validateEmailAddress(state.email);
      const passwordValidation = validatePassword(state.password);
      const isFormValid =
        displayNameValidation.isValid &&
        emailValidation.isValid &&
        passwordValidation.isValid;
      return {
        ...state,
        displayNameValidation,
        emailValidation,
        passwordValidation,
        isFormValid,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}
const initialState = {
  displayName: '',
  email: '',
  password: '',
  isFormValid: false,
  displayNameValidation: { isValid: true, errorMessages: [] },
  emailValidation: { isValid: true, errorMessages: [] },
  passwordValidation: { isValid: true, errorMessages: [] },
};

function SignUpPage() {
  const { signUp } = useSignUp();
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch({ type: 'validate_form' });
    const nextState = reducer(state, { type: 'validate_form' });

    if (nextState.isFormValid) {
      signUp({
        displayName: nextState.displayName,
        email: nextState.email,
        password: nextState.password,
      });
    }
  }

  return (
    <MotionMain>
      <Logo />
      <Heading as="h1">Create a new account</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="nickname"
          defaultValue={state.displayName}
          errorMessage={state.displayNameValidation.errorMessages.join('\n')}
          id="display-name"
          label="Display Name"
          maxCount={30}
          name="displayName"
          onValueChange={(displayNameValue) =>
            dispatch({
              type: 'changed_display_name',
              nextDisplayName: displayNameValue,
            })
          }
          withCounter
        />
        <Input
          autoComplete="username"
          defaultValue={state.email}
          errorMessage={state.emailValidation.errorMessages.join('\n')}
          id="email"
          label="Email address"
          name="email"
          type="email"
          onValueChange={(emailValue) =>
            dispatch({ type: 'changed_email', nextEmail: emailValue })
          }
        />
        <Input
          autoComplete="new-password"
          defaultValue={state.password}
          errorMessage={state.passwordValidation.errorMessages.join('\n')}
          footerElement={
            <>
              <PasswordStrengthIndicator value={state.password} />
              <PasswordInstructions />
            </>
          }
          id="password"
          label="Password"
          maxCount={50}
          name="password"
          onValueChange={(passwordValue) =>
            dispatch({ type: 'changed_password', nextPassword: passwordValue })
          }
          type="text"
          withCounter
        />
        <Button secondary>Sign up</Button>
        <Typography as="subtitle">
          By clicking “Sign up”, you agree to our
          <Link src="/terms-of-service">terms of service</Link>
          and acknowledge that you have read and understand our
          <Link src="/privacy-policy">privacy policy</Link>
          and <Link src="/code-of-conduct">code of conduct</Link>
        </Typography>
      </Form>
      <Typography as="label">
        Already have an account?
        <Link src="/sign-in">Sign In</Link>
      </Typography>
    </MotionMain>
  );
}

export default SignUpPage;
