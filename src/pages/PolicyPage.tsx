import React from 'react';

type PolicyPageProps = {
  as: 'TermsOfService' | 'PrivacyPolicy' | 'CodeOfConduct';
};

function PolicyPage({ as }: PolicyPageProps) {
  return <div>PolicyPage</div>;
}

export default PolicyPage;
