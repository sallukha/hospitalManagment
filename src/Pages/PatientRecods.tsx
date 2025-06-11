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

  // Fetch patients
  const fetchPatients = async () => {
    try {
      const res = await axios.get("https://node-backend3-f4vr.vercel.app/patient");
      setPatients(res.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (!editingPatient) return;
    try {
      await axios.put(
        `https://node-backend3-f4vr.vercel.app/patient/${editingPatient._id}`,
        formData
      );
      setEditingPatient(null);
      setFormData({});
      await fetchPatients();
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const handleEditClick = (patient: Patient) => {
    setEditingPatient(patient);
    setFormData(patient);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Patient Records</h2>

      {patients.length === 0 ? (
        <p className="text-center text-gray-500">No patients found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Name",
                  "Age",
                  "Gender",
                  "Contact",
                  "Report",
                  "Payment",
                  "From",
                  "To",
                  "Update",
                ].map((header) => (
                  <th key={header} className="px-4 py-2 border whitespace-nowrap">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient._id} className="text-center hover:bg-gray-50">
                  <td className="px-4 py-2 border">{patient.name}</td>
                  <td className="px-4 py-2 border">{patient.age}</td>
                  <td className="px-4 py-2 border">{patient.gender}</td>
                  <td className="px-4 py-2 border">{patient.contactNumber}</td>
                  <td className="px-4 py-2 border">{patient.reportType}</td>
                  <td className="px-4 py-2 border">{patient.paymentStatus}</td>
                  <td className="px-4 py-2 border">{patient.fromDate}</td>
                  <td className="px-4 py-2 border">{patient.toDate}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleEditClick(patient)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-xs"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Edit Modal */}
      {editingPatient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] rounded-lg p-6 shadow-lg relative max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
              Edit Patient Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                placeholder="Name"
                className="border p-2 rounded"
              />
              <input
                name="age"
                type="number"
                value={formData.age || ""}
                onChange={handleChange}
                placeholder="Age"
                className="border p-2 rounded"
              />
              <input
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                placeholder="Gender"
                className="border p-2 rounded"
              />
              <input
                name="contactNumber"
                value={formData.contactNumber || ""}
                onChange={handleChange}
                placeholder="Contact Number"
                className="border p-2 rounded"
              />
              <input
                name="reportType"
                value={formData.reportType || ""}
                onChange={handleChange}
                placeholder="Report Type"
                className="border p-2 rounded"
              />
              <input
                name="paymentStatus"
                value={formData.paymentStatus || ""}
                onChange={handleChange}
                placeholder="Payment Status"
                className="border p-2 rounded"
              />
              <input
                name="fromDate"
                type="date"
                value={formData.fromDate || ""}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                name="toDate"
                type="date"
                value={formData.toDate || ""}
                onChange={handleChange}
                className="border p-2 rounded"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleUpdate}
                className="bg-green-600 text-white px-4 py-2 rounded mr-2 hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditingPatient(null);
                  setFormData({});
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRecords;
