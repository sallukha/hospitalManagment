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

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const res = await axios.get("https://node-backend3-bt7q.vercel.app/patient");
                setPatients(res.data);
            } catch (error) {
                console.error("Error fetching patients:", error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="max-w-5xl mx-auto mt-10 p-4 bg-white rounded shadow">
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PatientRecords;
