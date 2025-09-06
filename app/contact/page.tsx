import ContactInfo from '@/components/contactInfo/ContactInfo';
import ImageContact from '@/components/imageContact/ImageContact';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="w-full bg-black pt-20 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <ContactInfo />

        {/* Right Image */}
       <ImageContact />
      </div>
    </section>
  );
}
