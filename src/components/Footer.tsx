import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setEmail('');
    // Show success message or handle errors
  };

  const handleGetInTouch = () => {
    navigate('/contact'); // Navigate to contact page
  };

  return (
    <footer className="bg-[#002B5B] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/assets/logo.png" 
            alt="Skyline Estimator LLC" 
            className="h-16 mb-6"
          />
          <p className="text-center md:text-left mb-8 max-w-md">
            Skyline Estimator provides better solution, accurate takeoffs and estimating. We offer unmatched professional takeoff and estimating services, cost verification, expert witness services, and more.
          </p>
          <button
            onClick={handleGetInTouch}
            className="bg-[#FF4A17] hover:bg-[#ff5c30] text-white px-8 py-3 rounded transition-colors inline-flex items-center group mb-8"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FF4A17] transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[#FF4A17] transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
            <a href="#" className="hover:text-[#FF4A17] transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#FF4A17] transition-colors">
              <span className="sr-only">YouTube</span>
              <Youtube size={24} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Newsletter</h2>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 rounded bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF4A17]"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FF4A17] hover:bg-[#ff5c30] text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-6 h-6 mt-1 text-[#FF4A17]" />
                <div>
                  <p className="font-medium">Phone Number</p>
                  <a href="tel:914-202-3145" className="hover:text-[#FF4A17] transition-colors">914-202-3145</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 mt-1 text-[#FF4A17]" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <a href="mailto:christopher@skylineestimator.com" className="hover:text-[#FF4A17] transition-colors">christopher@skylineestimator.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 mt-1 text-[#FF4A17]" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p>60 Broad St #3502<br />New York, NY 10004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;