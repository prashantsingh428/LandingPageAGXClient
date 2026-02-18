import React from 'react';
import MainLayout from './components/layouts/MainLayout';
import Hero from './components/sections/Hero';
import TrustStats from './components/sections/TrustStats';
import Services from './components/sections/Services';
import Screenshots from './components/sections/Screenshots';
import Companies from './components/sections/Companies';
import Awards from './components/sections/Awards';
import About from './components/sections/About';
import Founder from './components/sections/Founder';
import Testimonials from './components/sections/Testimonials';
import LeadForm from './components/sections/LeadForm';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import CaseStudies from './components/sections/CaseStudies';
import ComparisonTable from './components/sections/ComparisonTable';
import WhyChoose from './components/sections/WhyChoose';

function App() {
  return (
    <MainLayout>
      <Hero />
      <TrustStats />
      <WhyChoose />
      <Services />
      <Screenshots />
      <Companies />
      <Awards />
      <About />
      <Founder />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <CaseStudies />
      <ComparisonTable />
    </MainLayout>
  );
}

export default App;