// src/components/Contact.tsx
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your Formspree endpoint
    const endpoint = 'https://formspree.io/f/your-form-ID'; 

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      setIsError(false);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setIsError(true);
      setIsSubmitted(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-blue-50 to-blue-100" id="contact">
      <div className="max-w-7xl mx-auto flex flex-wrap-reverse">
        <div className="w-full md:w-1/2 p-8 mt-12 md:mt-0">
          <h2 className="text-4xl font-extrabold mb-4 inline-block">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-300">Unity</span>
            <div className="h-1 w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full"></div>
          </h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Name"
                className="w-full p-2 border border-blue-200 rounded"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email"
                className="w-full p-2 border border-blue-200 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Message"
                className="w-full p-2 border border-blue-200 rounded"
                rows={5}
              ></textarea>
            </div>
            <div className="flex justify-center mb-4">
              <button type="submit" className="py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send to Unity <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </div>
          </form>
          {isSubmitted && <p className="text-green-600 mt-4 text-center">Your message has been sent!</p>}
          {isError && <p className="text-red-600 mt-4 text-center">Failed to send your message. Please try again.</p>}
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-10 lg:mt-6">
          <Image src="/contact.jpg" alt="Contact Unity" width={600} height={400} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
