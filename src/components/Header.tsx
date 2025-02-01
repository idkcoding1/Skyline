import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  const [isMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [tradesOpen, setTradesOpen] = useState(false);

  const services = [
    { title: "Cost Estimation", path: "/services/cost-estimation" },
    { title: "Residential Estimating", path: "/services/residential-estimating" },
    { title: "Commercial Estimating", path: "/services/commercial-estimating" },
    { title: "Industrial Estimating", path: "/services/industrial-estimating" },
    { title: "Construction Estimating", path: "/services/construction-estimating" },
    { title: "Construction Estimating Consultants", path: "/services/construction-consultants" }
  ];

  const trades = [
    { title: "Concrete Estimating", path: "/trades/concrete-estimating" },
    { title: "Lumber Takeoff", path: "/trades/lumber-takeoff" },
    { title: "Sitework Estimating", path: "/trades/sitework-estimating" },
    { title: "Electrical Estimating", path: "/trades/electrical-estimating" },
    { title: "Masonry Estimating", path: "/trades/masonry-estimating" },
    { title: "Metal Estimating", path: "/trades/metal-estimating" }
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#002B5B] text-white py-2 px-4">
        {/* ... (keep existing top bar code) ... */}
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.png" alt="Skyline Estimator LLC" className="h-12" />
            </Link>

            {/* Mobile Menu Button - Keep existing code */}

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about-us" className="text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                  <div className="py-1">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#FF4A17] hover:text-white"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trades Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 flex items-center">
                  Trades
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 hidden group-hover:block">
                  <div className="py-1">
                    {trades.map((trade, index) => (
                      <Link
                        key={index}
                        to={trade.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#FF4A17] hover:text-white"
                      >
                        {trade.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              
              <Link to="/get-a-quote" className="bg-[#FF4A17] text-white px-6 py-2 rounded hover:bg-[#ff5c30] transition-colors">
                Get A Quote
              </Link>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  Home
                </Link>
                <Link to="/about-us" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  About Us
                </Link>
                
                {/* Mobile Services Menu */}
                <div>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Services
                    <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.path}
                          className="block px-3 py-2 text-gray-700 hover:bg-[#FF4A17] hover:text-white"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Trades Menu */}
                <div>
                  <button 
                    onClick={() => setTradesOpen(!tradesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900"
                  >
                    Trades
                    <svg className={`w-4 h-4 transition-transform ${tradesOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {tradesOpen && (
                    <div className="pl-4">
                      {trades.map((trade, index) => (
                        <Link
                          key={index}
                          to={trade.path}
                          className="block px-3 py-2 text-gray-700 hover:bg-[#FF4A17] hover:text-white"
                        >
                          {trade.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                  Contact
                </Link>
                
                <Link to="/get-a-quote" className="block px-3 py-2 text-white bg-[#FF4A17] rounded hover:bg-[#ff5c30] transition-colors text-center mt-4">
                  Get A Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;