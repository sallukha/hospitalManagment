const About = () => {
    return (
      <div className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our Hospital</h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to <span className="font-bold text-indigo-600">MEDICARE Hospital</span>, where we care about your health and wellbeing.
          </p>
          
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mt-4">
              At <span className="font-bold text-indigo-600">MEDICARE</span>, our mission is to provide the highest quality healthcare services to all of our patients. We aim to combine compassionate care with innovative medical technologies to improve the health and wellbeing of our community. 
              We are dedicated to providing personalized care that is affordable and accessible for all.
            </p>
          </div>
  
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Primary Care</h3>
                <p className="text-gray-600 mt-3">Comprehensive primary care for all ages with a focus on preventive health and wellness.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Emergency Care</h3>
                <p className="text-gray-600 mt-3">Available 24/7 to handle any emergency health situations with the expertise of our trained staff.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Surgical Services</h3>
                <p className="text-gray-600 mt-3">State-of-the-art surgical facilities and experienced surgeons for a wide range of medical procedures.</p>
              </div>
            </div>
          </div>
  
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mt-4">
              We pride ourselves on providing exceptional healthcare services in a caring and professional environment. Our hospital is equipped with the latest medical technologies, and our highly skilled medical team is dedicated to providing the best possible care. We believe in treating every patient with respect, dignity, and compassion.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg text-xl">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  