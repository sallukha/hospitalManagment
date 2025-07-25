import { useState } from "react";

 

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
    
  const handleClose =()=>{
    setIsOpen(false);
    window.location.reload(); // Reload the page to reset the form
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700">Phone</label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows={4} placeholder="Write your message..."></textarea>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
            <p className="text-gray-700">Your message has been sent successfully. We will get back to you soon.</p>
            <button onClick={handleClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
