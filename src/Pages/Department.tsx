import { department } from "../json/Department";

const Department = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {department.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600">{item.name}</h2>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <hr className="my-3" />
            <p className="text-sm">
              <span className="font-medium">Head Doctor:</span> {item.head_doctor}
            </p>
            <p className="text-sm">
              <span className="font-medium">Contact:</span> {item.contact}
            </p>
            <p className="text-sm">
              <span className="font-medium">Email:</span>{" "}
              <a href={`mailto:${item.email}`} className="text-blue-500 underline">
                {item.email}
              </a>
            </p>
            <p className="text-sm">
              <span className="font-medium">Location:</span> {item.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
