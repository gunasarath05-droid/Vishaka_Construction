import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import CTASection from '../components/common/CTASection';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactForm />
        <MapSection />
      </main>
    </div>
  );
};

export default Contact;
