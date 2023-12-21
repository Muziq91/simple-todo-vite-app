import { useNavigate } from 'react-router-dom';
import MotionMain from '../components/MotionMain';

function PageNotFoundPage() {
  const navigate = useNavigate();

  function handleGoBackClick() {
    navigate('/');
  }

  return (
    <MotionMain>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Page Not Found!</h1>
            <p className="py-6">
              {'The page you were looking for does not exist :('}
            </p>
            <button className="btn btn-primary" onClick={handleGoBackClick}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </MotionMain>
  );
}

export default PageNotFoundPage;
