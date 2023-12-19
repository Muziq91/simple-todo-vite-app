import Heading from '../components/Heading';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Link from '../components/Link';

function SignInPage() {
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target);

    const email = data.get('email');
    const password = data.get('password');
    console.log(email, password);
  }
  return (
    <main className="min-h-screen min-w-screen flex flex-col justify-center items-center gap-6">
      <Logo />
      <Heading as="h2">Sign into your account</Heading>
      <form
        onSubmit={handleFormSubmit}
        className="bg-primary flex flex-col justify-center items-center h-fit w-96 rounded-lg p-4"
      >
        <Input
          id="email"
          name="email"
          label="Email address"
          autoComplete="username"
          errorMessage=""
          disabled={false}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          errorMessage=""
          disabled={false}
          topRightElement={<Link src="/forgot-password">Forgot password?</Link>}
        />
        <button className="btn btn-secondary" type="submit">
          Sign in
        </button>
      </form>
      <Heading as="h4">
        Don’t have an account?
        <Link src="/sign-up">Sign Up</Link>
      </Heading>
    </main>
  );
}

export default SignInPage;
