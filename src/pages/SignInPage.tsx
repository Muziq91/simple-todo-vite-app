import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useState } from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MotionMain from '../components/MotionMain';

function SignInPage() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(emailValue, passwordValue);
  }
  return (
    <MotionMain>
      <Logo />
      <Heading as="h1">Sign into your account</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="username"
          defaultValue={emailValue}
          id="email"
          label="Email address"
          name="email"
          onValueChange={setEmailValue}
        />
        <Input
          autoComplete="current-password"
          defaultValue={passwordValue}
          id="password"
          label="Password"
          name="password"
          onValueChange={setPasswordValue}
          topRightElement={<Link src="/forgot-password">Forgot password?</Link>}
          type="password"
        />
        <Button secondary>
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
