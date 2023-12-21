import MotionMain from '../components/MotionMain';

type PolicyPageProps = {
  as: 'TermsOfService' | 'PrivacyPolicy' | 'CodeOfConduct';
};

function PolicyPage({ as }: PolicyPageProps) {
  return (
    <MotionMain>
      <article className="prose">
        {as === 'TermsOfService' && <div>TermsOfService</div>}
        {as === 'PrivacyPolicy' && <div>PrivacyPolicy</div>}
        {as === 'CodeOfConduct' && <div>CodeOfConduct</div>}
      </article>
    </MotionMain>
  );
}

export default PolicyPage;
