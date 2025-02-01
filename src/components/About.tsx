import { Clock, DollarSign, ClipboardCheck, Award, Users, Headset} from 'lucide-react';

const AboutUs = () => {
  const services = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Quickest Turnaround Time',
      description: 'Within a quick turnaround of 24 to 48 hours, we offer quantity takeoffs.'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Affordable Prices',
      description: 'Our estimates are priced competitively in the market at an average of $200.'
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: 'Detailed Accurate Estimates',
      description: 'We can ensure accuracy in our estimates by using latest software and our built building cost database based on zip code.'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Certified Estimators',
      description: 'Our Estimator has a certified development assessor having solid licenses and experience'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Skilled Professional Team',
      description: 'Our team includes Development Assessors, Architects, field specialists, and development supervisors.'
    },
    {
      icon: <Headset className="w-12 h-12" />,
      title: '24/7 Customer Support',
      description: 'Our client service is accessible 24/7 to help you.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="relative">
          <div className="text-[160px] font-bold text-gray-100 opacity-50">30</div>
          <img 
            src="/api/placeholder/600/400" 
            alt="Construction Site" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-navy-900">
            Welcome To Skyline Estimating
          </h1>
          <p className="text-gray-600">
            At Skyline Estimating, our expert team of construction estimators offers 
            professional construction estimating services and material takeoffs with 
            the help of construction managers and quantity surveyors that have the 
            expertise in providing successful residential, commercial, and industrial 
            projects.
          </p>
          <div>
            <p className="text-blue-500 mb-2">Years Of Experience With Creative Team</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors">
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      {/* Excellence Section */}
      <div className="text-center mb-16">
        <p className="text-orange-500 mb-2">Excellence In Estimating Services</p>
        <h2 className="text-3xl font-bold text-navy-900">
          TRUNAROUND TIME 24-48 HOURS!
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-orange-500">
              {service.icon}
            </div>
            <div>
              <h3 className="font-semibold text-navy-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;