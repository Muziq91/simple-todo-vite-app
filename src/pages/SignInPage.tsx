import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useReducer } from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MotionMain from '../components/MotionMain';
import { SignInFormAction, SignInFormState } from '../types/signInPageTypes';
import {
  validateCaptcha,
  validateEmailAddress,
  validateTextNotToBeEmpty,
} from '../utils/textUtils';
import { useSignIn } from '../hooks/useSignIn';
import CustomCaptcha from '../components/CustomCaptcha';

function reducer(
  state: SignInFormState,
  action: SignInFormAction,
): SignInFormState {
  switch (action.type) {
    case 'changed_email': {
      return {
        ...state,
        email: action.nextEmail || '',
      };
    }
    case 'changed_password': {
      return {
        ...state,
        password: action.nextPassword || '',
      };
    }
    case 'change_captcha_token': {
      return {
        ...state,
        captchaToken: action.nextCaptchaToken || '',
      };
    }
    case 'reset_captcha': {
      return {
        ...state,
        captchaToken: '',
      };
    }
    case 'validate_form': {
      const emailValidation = validateEmailAddress(state.email);
      const passwordValidation = validateTextNotToBeEmpty(state.password);
      const captchaValidation = validateCaptcha(state.captchaToken);

      const isFormValid =
        emailValidation.isValid &&
        passwordValidation.isValid &&
        captchaValidation.isValid;

      return {
        ...state,
        emailValidation,
        passwordValidation,
        captchaValidation,
        isFormValid,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const initialState: SignInFormState = {
  email: '',
  password: '',
  captchaToken: '',
  isFormValid: false,
  emailValidation: { isValid: false, errorMessages: [] },
  passwordValidation: { isValid: false, errorMessages: [] },
  captchaValidation: { isValid: false, errorMessages: [] },
};

function SignInPage() {
  const { signIn, isLoading } = useSignIn();
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validateFormAction: SignInFormAction = { type: 'validate_form' };

    dispatch(validateFormAction);
    const nextState = reducer(state, validateFormAction);

    if (!nextState.isFormValid) {
      return;
    }

    signIn({
      email: nextState.email,
      password: nextState.password,
      captchaToken: nextState.captchaToken,
    });

    dispatch({ type: 'reset_captcha' });
  }
  return (
    <MotionMain>
      <Logo />
      <Heading as="h1">Sign into your account</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="username"
          defaultValue={state.email}
          disabled={isLoading}
          errorMessages={state.emailValidation.errorMessages}
          id="email"
          label="Email address"
          name="email"
          onValueChange={(emailValue) =>
            dispatch({ type: 'changed_email', nextEmail: emailValue })
          }
          type="email"
        />
        <Input
          autoComplete="current-password"
          defaultValue={state.password}
          disabled={isLoading}
          errorMessages={state.passwordValidation.errorMessages}
          id="password"
          label="Password"
          name="password"
          onValueChange={(passwordValue) =>
            dispatch({ type: 'changed_password', nextPassword: passwordValue })
          }
          topRightElement={<Link src="/forgot-password">Forgot password?</Link>}
          type="password"
        />
        <CustomCaptcha
          onChange={(token) =>
            dispatch({
              type: 'change_captcha_token',
              nextCaptchaToken: token,
            })
          }
          errorMessages={state.captchaValidation.errorMessages}
          shouldReset={!state.captchaToken}
        />
        <Button secondary isLoading={isLoading}>
          <Typography as="label">Sign in</Typography>
        </Button>
      </Form>
      <Typography as="label">
        Don’t have an account?
        <Link src="/sign-up">Sign Up</Link>
      </Typography>
    </MotionMain>
  );
}

export default SignInPage;
