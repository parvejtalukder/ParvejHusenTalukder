import React from 'react';
import Section from './Section';
// Fix: Corrected import paths to be relative.
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-base-200">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Mail className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          {CONTACT_INFO.emails.map(email => (
            <a key={email} href={`mailto:${email}`} className="link link-hover transition-colors duration-300 hover:text-accent">{email}</a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Phone className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          {CONTACT_INFO.phones.map(phone => (
            <a key={phone} href={`tel:${phone}`} className="link link-hover transition-colors duration-300 hover:text-accent">{phone}</a>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p>{CONTACT_INFO.location}</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;