import React from 'react';
import { ArrowLeft, Cpu, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  "Prestatie monitoring",
  "Resource optimalisatie",
  "Automatische schaalbaarheid",
  "Load balancing",
  "Prestatie analyses",
  "Proactieve waarschuwingen"
];

export default function PerformanceEngine() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-violet-100 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar home
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <Cpu className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold">Performance Engine</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maximaliseer uw prestaties
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Onze Performance Engine zorgt voor optimale prestaties van uw systemen en applicaties. Met geavanceerde monitoring en automatische optimalisatie bereikt u maximale efficiëntie.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              alt="Performance Monitoring"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Verbeter uw prestaties
          </h3>
          <p className="text-gray-600 mb-8">
            Laat ons u tonen hoe onze Performance Engine uw systemen naar een hoger niveau kan tillen.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors">
              Demo Aanvragen
            </Link>
            <Link to="/contact" className="border border-violet-600 text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
              Meer Informatie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}