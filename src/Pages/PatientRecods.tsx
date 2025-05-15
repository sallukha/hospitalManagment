import React, { useEffect, useState } from "react";
import axios from "axios";

type Patient = {
    _id: string;
    name: string;
    age: number;
    gender: string;
    Contact?: string;
    reportType: string;
    paymentStatus: string;
    fromDate: string;
    toDate: string;
};

const PatientRecords: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const res = await axios.get("https://node-backend3.vercel.app/patient");
                setPatients(res.data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-lg overflow-x-auto">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Patient Records</h2>

  {patients.length === 0 ? (
    <p className="text-center text-gray-500 text-sm md:text-base">No patients found.</p>
  ) : (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border text-sm md:text-base">Name</th>
            <th className="px-4 py-2 border text-sm md:text-base">Age</th>
            <th className="px-4 py-2 border text-sm md:text-base">Gender</th>
            <th className="px-4 py-2 border text-sm md:text-base">Contact</th>
            <th className="px-4 py-2 border text-sm md:text-base">Report</th>
            <th className="px-4 py-2 border text-sm md:text-base">Payment</th>
            <th className="px-4 py-2 border text-sm md:text-base">From</th>
            <th className="px-4 py-2 border text-sm md:text-base">To</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.name}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.age}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.gender}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.Contact}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.reportType}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.paymentStatus}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.fromDate}</td>
              <td className="px-4 py-2 border text-xs md:text-sm">{patient.toDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

    );
};

export default PatientRecords;
