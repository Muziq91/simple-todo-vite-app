import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useState } from 'react';

function SignInPage() {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(emailValue, passwordValue);
  }
  return (
    <main className="min-w-screen flex min-h-screen flex-col items-center justify-center gap-6">
      <Logo />
      <Heading as="h2">Sign into your account</Heading>
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
        <button className="btn btn-secondary" type="submit">
          Sign in
        </button>
      </Form>
      <Heading as="h4">
        Don’t have an account?
        <Link src="/sign-up">Sign Up</Link>
      </Heading>
    </main>
  );
}

export default SignInPage;
