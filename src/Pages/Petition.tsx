import { useState } from "react";
const Petition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const handlepopUp = (e: { preventDefault: () => void }) => {
    if (!selectedDoctor || !selectTime) {
      alert("Please select a doctor and time");
      return;
    }
    e.preventDefault();
    setIsOpen(true);
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Hospital Patient Form
      </h2>

      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
        </div>

        {/* Doctor Selection Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Select Doctor
          </label>
          <select
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Choose a doctor</option>
            <option value="Dr. John Doe - Cardiologist">
              Dr. John Doe - Cardiologist
            </option>
            <option value="Dr. Sarah Smith - Neurologist">
              Dr. Sarah Smith - Neurologist
            </option>
            <option value="Dr. Michael Lee - Orthopedic">
              Dr. Michael Lee - Orthopedic
            </option>
            <option value="Dr. Emily Davis - Pediatrician">
              Dr. Emily Davis - Pediatrician
            </option>
          </select>
        </div>
        {/* Appointment Time Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Appointment Time
          </label>
          <select
            onChange={(e) => setSelectTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          >
            <option value="">Choose a time</option>
            <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
            <option value="4:00 PM - 8:00 PM">4:00 PM - 8:00 PM</option>
          </select>
        </div>

        {/* Patient Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Patient Message
          </label>
          <textarea
            placeholder="Write your petition here..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            rows={4}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={handlepopUp}
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded-md font-semibold hover:bg-cyan-700 transition duration-300"
        >
          Submit Petition
        </button>
      </form>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h1 className="text-xl font-bold text-gray-800">
              Your Appointment Has Been Booked!
            </h1>
            <p className="mt-2 text-gray-700">
              <strong>Doctor:</strong> {selectedDoctor}
            </p>
            <p className="mt-1 text-gray-700">
              <strong>Time:</strong> {selectTime}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-md font-semibold hover:bg-cyan-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Petition;
