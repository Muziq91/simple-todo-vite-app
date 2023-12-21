import Typography from './Typography';

function PasswordInstructions() {
  return (
    <div className="prose">
      <Typography as="subtitle">
        Passwords must be at least 8 characters long and should contain one
        lowercase, uppercase letter, digits and symbols.
      </Typography>
    </div>
  );
}

export default PasswordInstructions;
