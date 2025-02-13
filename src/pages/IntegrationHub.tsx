import React from 'react';
import { ArrowLeft, Network, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  "Naadloze systeem integratie",
  "API management",
  "Workflow automatisering",
  "Realtime data synchronisatie",
  "Veilige gegevensoverdracht",
  "Uitgebreide connector bibliotheek"
];

export default function IntegrationHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-indigo-100 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar home
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <Network className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold">Integration Hub</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Verbind uw systemen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Onze Integration Hub maakt het mogelijk om al uw bedrijfssystemen naadloos met elkaar te verbinden. Creëer een gestroomlijnd ecosysteem waarin data en processen soepel samenvloeien.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="System Integration"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Start met integreren
          </h3>
          <p className="text-gray-600 mb-8">
            Ontdek hoe onze Integration Hub uw systemen kan verbinden voor maximale efficiëntie.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Demo Aanvragen
            </Link>
            <Link to="/contact" className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Meer Informatie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}