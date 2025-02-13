import React from 'react';
import { ArrowLeft, CheckCircle2, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  "Geautomatiseerde workflow optimalisatie",
  "Real-time proces monitoring",
  "Aangepaste rapportages",
  "Naadloze integratie met bestaande systemen",
  "Uitgebreide data-analyse mogelijkheden",
  "Schaalbare oplossingen voor groeiende bedrijven"
];

export default function BusinessProcessSuite() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar home
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <Workflow className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold">Business Process Suite</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Optimaliseer uw bedrijfsprocessen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Onze Business Process Suite is een complete oplossing voor bedrijven die hun processen willen stroomlijnen en efficiëntie willen maximaliseren. Met geavanceerde tools en intuïtieve interfaces helpen we u om uw bedrijfsprocessen naar een hoger niveau te tillen.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
              alt="Business Process Visualization"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Begin vandaag nog met optimaliseren
          </h3>
          <p className="text-gray-600 mb-8">
            Ontdek hoe onze Business Process Suite uw organisatie kan helpen groeien. Neem contact met ons op voor een persoonlijke demonstratie.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Demo Aanvragen
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Meer Informatie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}