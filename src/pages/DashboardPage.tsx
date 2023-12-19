import ThemeToggle from '../components/ThemeToggle';

function DashboardPage() {
  return (
    <div className="container">
      <ThemeToggle />
      <button className="btn btn-primary">Primary</button>

      <article className="prose md:prose-lg lg:prose-xl  bg-primary font-arima">
        {'DashboardPage Aa Bb Cc'}
      </article>
      <article className="prose md:prose-lg lg:prose-xl bg-secondary font-cherry">
        {'DashboardPage Aa Bb Cc'}
      </article>
    </div>
  );
}

export default DashboardPage;
