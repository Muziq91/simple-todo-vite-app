import MotionMain from '../components/MotionMain';
import ThemeToggle from '../components/ThemeToggle';

function DashboardPage() {
  return (
    <MotionMain>
      <div className="container">
        <ThemeToggle />
        <button className="btn btn-primary">Primary</button>

        <article className="prose bg-primary font-arima  md:prose-lg lg:prose-xl">
          {'DashboardPage Aa Bb Cc'}
        </article>
        <article className="prose bg-secondary font-cherry md:prose-lg lg:prose-xl">
          {'DashboardPage Aa Bb Cc'}
        </article>
      </div>
    </MotionMain>
  );
}

export default DashboardPage;
