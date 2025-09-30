import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                What's your story? Let us collaborate and together celebrate your story of choice. We're here to help you build it.
            </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-2 sm:p-4 rounded-lg shadow-xl overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdSi5H7PLK7lW2LhI4WhiwctaGFFrOLGBCrg1f6mM6BhPVZiA/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full"
            style={{border: 0, minHeight: '1200px'}}
            allowFullScreen
            title="Contact Us Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
