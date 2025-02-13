import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { Brain, Cpu, Network, Workflow, MessageSquareCode, ArrowRight } from 'lucide-react';
import BusinessProcessSuite from './pages/BusinessProcessSuite';
import AnalyticsPlatform from './pages/AnalyticsPlatform';
import IntegrationHub from './pages/IntegrationHub';
import PerformanceEngine from './pages/PerformanceEngine';
import Contact from './pages/Contact';
import Discover from './pages/Discover';
import Footer from './components/Footer';
import EasterEgg from './components/EasterEgg';

const products = [
  {
    title: "Business Process Suite",
    description: "Stroomlijn uw bedrijfsprocessen met oplossingen ontworpen voor maximale efficiëntie en groei",
    icon: Workflow,
    color: "bg-blue-600",
    path: "/business-process-suite"
  },
  {
    title: "Analytics Platform",
    description: "Neem weloverwogen beslissingen met onze uitgebreide tools voor gegevensverwerking en analyse",
    icon: Brain,
    color: "bg-purple-600",
    path: "/analytics-platform"
  },
  {
    title: "Integration Hub",
    description: "Verbind uw bedrijfstools naadloos en creëer een uniforme workflow",
    icon: Network,
    color: "bg-indigo-600",
    path: "/integration-hub"
  },
  {
    title: "Performance Engine",
    description: "Optimaliseer uw bedrijfsprocessen met onze hoogwaardige oplossingen",
    icon: Cpu,
    color: "bg-violet-600",
    path: "/performance-engine"
  }
];

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Versterk uw bedrijf met FinitSolutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Wij bieden innovatieve oplossingen die de manier waarop bedrijven werken, groeien en slagen transformeren
            </p>
            <Link
              to="/discover"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Ontdek FinitSolutions
            </Link>
          </div>
        </header>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Oplossingen voor Succes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div 
                key={product.title} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer group"
                onClick={() => navigate(product.path)}
              >
                <div className={`${product.color} p-6`}>
                  <product.icon className="w-12 h-12 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                    Meer Informatie
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="lg:flex items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl font-bold mb-6">
                  Op Maat Gemaakt voor U
                </h2>
                <p className="text-blue-100 text-lg mb-8 max-w-xl">
                  Elk bedrijf is uniek. Ons expertteam werkt nauw met u samen om oplossingen op maat te ontwikkelen die perfect aansluiten bij uw doelen en uitdagingen.
                </p>
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <MessageSquareCode className="mr-2 w-5 h-5" />
                  Start Uw Reis
                </Link>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Moderne kantoor samenwerking"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business-process-suite" element={<BusinessProcessSuite />} />
          <Route path="/analytics-platform" element={<AnalyticsPlatform />} />
          <Route path="/integration-hub" element={<IntegrationHub />} />
          <Route path="/performance-engine" element={<PerformanceEngine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </div>
      <Footer />
      <EasterEgg />
    </div>
  );
}

export default App;