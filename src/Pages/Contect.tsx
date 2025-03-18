 

const Contact = () => {
  return (
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
