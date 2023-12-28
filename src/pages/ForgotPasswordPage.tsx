import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useReducer } from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MotionMain from '../components/MotionMain';
import CustomCaptcha from '../components/CustomCaptcha';
import {
  ForgotPasswordFormAction,
  ForgotPasswordFormState,
} from '../types/forgotPasswordPageTypes';
import { validateCaptcha, validateEmailAddress } from '../utils/textUtils';
import { useResetPassword } from '../hooks/useResetPassword';

function reducer(
  state: ForgotPasswordFormState,
  action: ForgotPasswordFormAction,
): ForgotPasswordFormState {
  switch (action.type) {
    case 'changed_email': {
      return {
        ...state,
        email: action.nextEmail || '',
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
      const captchaValidation = validateCaptcha(state.captchaToken);

      const isFormValid = emailValidation.isValid && captchaValidation.isValid;

      return {
        ...state,
        emailValidation,
        captchaValidation,
        isFormValid,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const initialState: ForgotPasswordFormState = {
  email: '',
  captchaToken: '',
  isFormValid: false,
  emailValidation: { isValid: false, errorMessages: [] },
  captchaValidation: { isValid: false, errorMessages: [] },
};

function ForgotPasswordPage() {
  const { resetPassword, isLoading } = useResetPassword();
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validateFormAction: ForgotPasswordFormAction = {
      type: 'validate_form',
    };

    dispatch(validateFormAction);
    const nextState = reducer(state, validateFormAction);

    if (!nextState.isFormValid) {
      return;
    }

    resetPassword({
      email: nextState.email,
      captchaToken: nextState.captchaToken,
    });
  }
  return (
    <MotionMain key={'forgotPasswordForm'}>
      <Logo />
      <Heading as="h1">Recover password</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="username"
          defaultValue={state.email}
          disabled={isLoading}
          errorMessages={state.emailValidation.errorMessages}
          id="email"
          label="Email address"
          name="email"
          type="email"
          onValueChange={(emailValue) =>
            dispatch({ type: 'changed_email', nextEmail: emailValue })
          }
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
          <Typography as="label">Reset Password</Typography>
        </Button>
      </Form>
      <Typography as="label">
        Already have an account?
        <Link src="/sign-in">Sign In</Link>
      </Typography>
    </MotionMain>
  );
}

export default ForgotPasswordPage;
