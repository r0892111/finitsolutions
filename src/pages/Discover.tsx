import React from 'react';
import { ArrowLeft, Lightbulb, Target, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: Lightbulb,
    title: "Innovatieve Oplossingen",
    description: "Wij blijven voorop lopen met de nieuwste technologische ontwikkelingen"
  },
  {
    icon: Target,
    title: "Doelgerichte Aanpak",
    description: "Onze oplossingen zijn specifiek afgestemd op uw bedrijfsdoelen"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Ons team bestaat uit ervaren professionals in verschillende disciplines"
  },
  {
    icon: Shield,
    title: "Betrouwbare Partner",
    description: "Wij staan garant voor kwaliteit en veiligheid in alles wat we doen"
  }
];

const team = [
  {
    name: "Alex",
    role: "Co-founder & Solutions Architect",
    image: "/images/alex.jpeg",
    description: "Alex brengt zijn expertise in systeemarchitectuur en bedrijfsprocessen samen om optimale oplossingen te creëren voor onze klanten."
  },
  {
    name: "Karel",
    role: "Co-founder & Technical Lead",
    image: "/images/karel.jpeg",
    description: "Met een passie voor technologie en innovatie, leidt Karel de technische ontwikkeling van onze oplossingen."
  }
];

export default function Discover() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar home
          </Link>
          <h1 className="text-4xl font-bold">Ontdek FinitSolutions</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Waarom FinitSolutions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Bij FinitSolutions geloven we in het leveren van innovatieve oplossingen die bedrijven helpen groeien en excelleren in hun vakgebied. Onze expertise en toewijding maken ons de ideale partner voor uw digitale transformatie.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Neem Contact Op
            </Link>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team Collaboration"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white rounded-xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Ons Team
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Wij zijn Karel en Alex, twee vrienden die hun droom hebben gevolgd om innovatieve technologische oplossingen te bieden aan bedrijven die willen groeien en excelleren.
          </p>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Klaar om te beginnen?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Laat ons u helpen uw bedrijf naar het volgende niveau te tillen met onze innovatieve oplossingen.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Plan een Gesprek
            </Link>
            <Link
              to="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Meer Informatie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}