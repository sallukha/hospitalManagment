import React, { useEffect, useState } from "react";
import axios from "axios";

type Patient = {
  _id: string;
  name: string;
  age: number;
  gender: string;
  contactNumber?: string;
  reportType: string;
  paymentStatus: string;
  fromDate: string;
  toDate: string;
};
const PatientRecords: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [formData, setFormData] = useState<Partial<Patient>>({});

  // Fetch all patients
  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:4000/patient");
      setPatients(res.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  useEffect(() => {
    fetchPatients();
  }, []);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle update API call
  const handleUpdate = async () => {
    if (!editingPatient) return;
    try {
      await axios.put(`http://localhost:4000/patient/${editingPatient._id}`, formData);
      setEditingPatient(null);
      setFormData({});
      await fetchPatients();
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  // When Update button is clicked
  const handleEditClick = (patient: Patient) => {
    setEditingPatient(patient);
    setFormData(patient);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Patient Records</h2>

      {patients.length === 0 ? (
        <p className="text-center text-gray-500">No patients found.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Age</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Contact</th>
              <th className="px-4 py-2 border">Report</th>
              <th className="px-4 py-2 border">Payment</th>
              <th className="px-4 py-2 border">From</th>
              <th className="px-4 py-2 border">To</th>
              <th className="px-4 py-2 border">Update</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="px-4 py-2 border">{patient.name}</td>
                <td className="px-4 py-2 border">{patient.age}</td>
                <td className="px-4 py-2 border">{patient.gender}</td>
                <td className="px-4 py-2 border">{patient.contactNumber}</td>
                <td className="px-4 py-2 border">{patient.reportType}</td>
                <td className="px-4 py-2 border">{patient.paymentStatus}</td>
                <td className="px-4 py-2 border">{patient.fromDate}</td>
                <td className="px-4 py-2 border">{patient.toDate}</td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => handleEditClick(patient)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Form */}
      {editingPatient && (
        <div className="mt-6 bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Edit Patient Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2"
            />
            <input
              name="age"
              type="number"
              value={formData.age || ""}
              onChange={handleChange}
              placeholder="Age"
              className="border p-2"
            />
            <input
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
              placeholder="Gender"
              className="border p-2"
            />
            <input
              name="contactNumber"
              value={formData.contactNumber || ""}
              onChange={handleChange}
              placeholder="Contact Number"
              className="border p-2"
            />
            <input
              name="reportType"
              value={formData.reportType || ""}
              onChange={handleChange}
              placeholder="Report Type"
              className="border p-2"
            />
            <input
              name="paymentStatus"
              value={formData.paymentStatus || ""}
              onChange={handleChange}
              placeholder="Payment Status"
              className="border p-2"
            />
            <input
              name="fromDate"
              value={formData.fromDate || ""}
              onChange={handleChange}
              placeholder="From Date"
              className="border p-2"
              type="date"
            />
            <input
              name="toDate"
              value={formData.toDate || ""}
              onChange={handleChange}
              placeholder="To Date"
              className="border p-2"
              type="date"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleUpdate}
              className="bg-green-600 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditingPatient(null);
                setFormData({});
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRecords;
