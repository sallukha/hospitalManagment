import { Link } from "react-router-dom";
import { labs } from "../json/Labs"; // Importing the JSON file
interface Lab {
  id: number;
  test_name: string;
  price: number;
  description: string;
  image: string;
}
const Labs = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Lab Tests</h1>
      {/* Lab Test Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {labs.map((lab: Lab) => (
          <div key={lab.id} className="bg-white p-4 shadow-lg rounded-lg text-center">
            <img src={lab.image} alt={lab.test_name} width={200} height={200} className="rounded-md" />
            <h3 className="text-lg font-semibold">{lab.test_name}</h3>
            <p className="text-gray-600">{lab.description}</p>
            <p className="text-gray-800 font-bold mt-2">₹{lab.price}</p>
            <button className="bg-indigo-700 p-2 rounded-2xl mt-3 text-white  font-bold"><Link to="/labTestForm">Book your test</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
