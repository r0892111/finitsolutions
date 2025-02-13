import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init('kFM2ZiVk7-qp77QO6');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_sbspwu9',
        'template_pp4qqid',
        formRef.current,
        'kFM2ZiVk7-qp77QO6'
      );
      setSent(true);
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar home
          </Link>
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Neem contact met ons op
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Wij staan klaar om al uw vragen te beantwoorden en u te helpen bij het vinden van de juiste oplossing voor uw bedrijf.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-mail</h3>
                  <p className="text-gray-600">info@finitsolutions.be</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefoon</h3>
                  <p className="text-gray-600">+32 (0)495702314</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Stuur ons een bericht
            </h3>
            {sent ? (
              <div className="text-green-600 p-4 bg-green-50 rounded-lg">
                Uw bericht is succesvol verzonden. We nemen zo spoedig mogelijk contact met u op.
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Bericht
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                {error && (
                  <div className="text-red-600 p-4 bg-red-50 rounded-lg">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? 'Bericht wordt verzonden...' : 'Verstuur Bericht'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}