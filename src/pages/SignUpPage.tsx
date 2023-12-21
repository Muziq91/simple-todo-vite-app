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

function SignUpPage() {
  const { signUp } = useSignUp();
  const [displayNameValue, setDisplayNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signUp({
      displayName: displayNameValue,
      email: emailValue,
      password: passwordValue,
    });
  }

  return (
    <MotionMain>
      <Logo />
      <Heading as="h1">Create a new account</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="nickname"
          defaultValue={displayNameValue}
          id="display-name"
          label="Display Name"
          name="displayName"
          onValueChange={setDisplayNameValue}
        />
        <Input
          autoComplete="username"
          defaultValue={emailValue}
          id="email"
          label="Email address"
          name="email"
          onValueChange={setEmailValue}
        />
        <Input
          autoComplete="new-password"
          defaultValue={passwordValue}
          footerElement={
            <>
              <PasswordStrengthIndicator value={passwordValue} />
              <PasswordInstructions />
            </>
          }
          id="password"
          label="Password"
          name="password"
          onValueChange={setPasswordValue}
          type="password"
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
