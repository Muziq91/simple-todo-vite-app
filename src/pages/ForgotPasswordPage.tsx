import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';
import Form from '../components/Form';
import { useState } from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import MotionMain from '../components/MotionMain';

function ForgotPasswordPage() {
  const [emailValue, setEmailValue] = useState('');

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(emailValue);
  }
  return (
    <MotionMain>
      <Logo />
      <Heading as="h1">Recover password</Heading>
      <Form onFormSubmit={handleFormSubmit}>
        <Input
          autoComplete="username"
          defaultValue={emailValue}
          id="email"
          label="Email address"
          name="email"
          onValueChange={setEmailValue}
        />

        <Button secondary>
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
