import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="TCS Logo" className="h-8 w-auto mr-4" />
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">What We Do</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Who We Are</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Insights</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Investors</a>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">What We Do</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Who We Are</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Insights</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Careers</a>
            <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Investors</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900 text-white">
        <img src="/placeholder.svg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Building on Belief</h1>
            <p className="text-xl md:text-2xl mb-8">Transforming businesses through technology</p>
            <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/placeholder.svg" alt={`Featured ${item}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Featured Title {item}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About TCS</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Company Overview</a></li>
                <li><a href="#" className="hover:text-gray-300">Leadership</a></li>
                <li><a href="#" className="hover:text-gray-300">Corporate Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-gray-300">Cloud Services</a></li>
                <li><a href="#" className="hover:text-gray-300">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Banking & Finance</a></li>
                <li><a href="#" className="hover:text-gray-300">Healthcare</a></li>
                <li><a href="#" className="hover:text-gray-300">Retail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Investor Relations</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Tata Consultancy Services Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
