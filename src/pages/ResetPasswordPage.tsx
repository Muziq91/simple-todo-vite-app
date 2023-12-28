import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Form from '../components/Form';
import PasswordStrengthIndicator from '../components/PasswordStrengthIndicator';
import PasswordInstructions from '../components/PasswordInstructions';
import Button from '../components/Button';
import MotionMain from '../components/MotionMain';
import { validateCaptcha } from '../utils/textUtils';
import { useReducer } from 'react';
import { validatePassword } from '../utils/passwordUtils';
import {
  ResetPasswordFormAction,
  ResetPasswordFormState,
} from '../types/resetPasswordPageTypes';
import CustomCaptcha from '../components/CustomCaptcha';
import { useUpdatePassword } from '../hooks/useUpdatePassword';

function reducer(
  state: ResetPasswordFormState,
  action: ResetPasswordFormAction,
): ResetPasswordFormState {
  switch (action.type) {
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
      const passwordValidation = validatePassword(state.password);
      const captchaValidation = validateCaptcha(state.captchaToken);

      const isFormValid =
        passwordValidation.isValid && captchaValidation.isValid;

      return {
        ...state,
        passwordValidation,
        captchaValidation,
        isFormValid,
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

const initialState: ResetPasswordFormState = {
  password: '',
  captchaToken: '',
  isFormValid: false,
  passwordValidation: { isValid: false, errorMessages: [] },
  captchaValidation: { isValid: false, errorMessages: [] },
};

function ResetPasswordPage() {
  const { updatePassword, isLoading } = useUpdatePassword();
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validateFormAction: ResetPasswordFormAction = {
      type: 'validate_form',
    };

    dispatch(validateFormAction);
    const nextState = reducer(state, validateFormAction);

    if (!nextState.isFormValid) {
      return;
    }

    updatePassword({
      password: nextState.password,
      captchaToken: nextState.captchaToken,
    });

    dispatch({ type: 'reset_captcha' });
  }

  return (
    <MotionMain key={'signUpForm'}>
      <Logo />
      <Heading as="h1">Update password</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="new-password"
          defaultValue={state.password}
          disabled={isLoading}
          errorMessages={state.passwordValidation.errorMessages}
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
          type="password"
          withCounter
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
          Update Password
        </Button>
      </Form>
    </MotionMain>
  );
}

export default ResetPasswordPage;
