import { Link } from "react-router-dom";
import { FaHeartbeat, FaAmbulance, FaCalendarCheck, FaFileMedical, FaChartLine, FaUserMd } from "react-icons/fa";

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full">
                <img
                    className="w-full h-[60vh] md:h-[80vh] object-cover"
                    src="https://thumbs.dreamstime.com/b/healthcare-medicine-covid-doctor-holding-diagnose-virtual-human-lungs-coronavirus-spread-inside-modern-interface-179931168.jpg?w=1400"
                    alt="Medical Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 text-white text-center p-6">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Making Health Care Better Together</h1>
                    <p className="text-lg md:text-xl bg-gray-700 bg-opacity-70 rounded-3xl p-4 max-w-3xl">
                        At Medicare Hospital, we are dedicated to revolutionizing healthcare by providing innovative solutions that empower patients and healthcare professionals alike.
                    </p>
                    <Link to="/about">
                        <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-lg">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>

            {/* Reports Section */}
            <div className="bg-gray-100 py-12 px-4 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Hospital Reports & Analytics</h2>
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Patient Treatment History Reports (Added Link) */}
                    <Link to="/PatientRecods" className="block">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
                            <div className="flex justify-center">
                                <FaFileMedical className="text-blue-500 text-4xl mb-4" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mt-4">Patient Treatment History Reports</h3>
                            <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
                                Access detailed reports of patient treatment history, including medical records, diagnoses, and prescriptions for better healthcare decisions.
                            </p>
                        </div>
                    </Link>

                    {/* Other Reports */}
                    <Link to="/revenueReports" className="block">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
                            <div className="flex justify-center">
                                <FaChartLine className="text-green-500 text-4xl mb-4" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mt-4">Daily/Monthly Revenue Reports</h3>
                            <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
                                Get insights into daily and monthly revenue with financial reports, helping you track hospital earnings and expenses efficiently.
                            </p>
                        </div>
                    </Link>
                    <Link to="/Staff" className="block">
                        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200">
                            <div className="flex justify-center">
                                <FaUserMd className="text-purple-500 text-4xl mb-4" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 text-center mt-4">Staff Performance Reports</h3>
                            <p className="text-gray-600 text-sm md:text-base mt-2 text-center">
                                Evaluate staff performance with detailed reports, ensuring quality service and productivity among doctors, nurses, and medical teams.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>


            {/* Services Section */}
            <div className="bg-cyan-800 py-12 px-4 md:px-12 lg:px-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Our Services</h2>
                <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[{
                        icon: <FaHeartbeat className="text-red-500 text-4xl mb-4" />,
                        title: "Primary Care",
                        description: "Our primary care services offer comprehensive health evaluations, routine check-ups, and personalized treatment plans to maintain your well-being."
                    }, {
                        icon: <FaAmbulance className="text-yellow-500 text-4xl mb-4" />,
                        title: "Emergency Cases",
                        description: "We provide 24/7 emergency services with a dedicated team ready to handle critical situations promptly and efficiently."
                    }, {
                        icon: <FaCalendarCheck className="text-green-500 text-4xl mb-4" />,
                        title: "Online Appointment",
                        description: "Schedule your appointments online at your convenience, ensuring timely consultations without the hassle of waiting.",
                        button: true
                    }].map((service, index) => (
                        <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                            <div className="flex justify-center">{service.icon}</div>
                            <h2 className="text-lg md:text-xl font-semibold text-gray-900 text-center mb-4">{service.title}</h2>
                            <p className="text-gray-700 text-sm md:text-base text-center">{service.description}</p>
                            {service.button && (
                                <div className="flex justify-center mt-4">
                                    <Link to="/petition">
                                        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md">
                                            Book your Appointment
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
