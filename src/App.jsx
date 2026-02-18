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
import CaseStudies from './components/sections/CaseStudies';
import ComparisonTable from './components/sections/ComparisonTable';
import WhyChoose from './components/sections/WhyChoose';

function App() {
  return (
    <MainLayout>

      <section id="home"><Hero /></section>
      <section id="trust-stats"><TrustStats /></section>
      <section id="why-choose"><WhyChoose /></section>
      <section id="services"><Services /></section>
      <section id="screenshots"><Screenshots /></section>
      <section id="companies"><Companies /></section>
      <section id="awards"><Awards /></section>
      <section id="about"><About /></section>
      <section id="founder"><Founder /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="consultation"><LeadForm /></section>
      <section id="faq"><FAQ /></section>
      <section id="case-studies"><CaseStudies /></section>
      <section id="comparison"><ComparisonTable /></section>
    </MainLayout>
  );
}

export default App;
