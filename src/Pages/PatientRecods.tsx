import React from "react";
import { patientsData } from "../json/Recods"; // Ensure correct file path and name

// Define Patient type
interface PatientType {
    name: string;
    age: number;
    gender: string;
    condition: string;
    doctor: string;
}

const PatientRecords: React.FC = () => {
    console.log("Patients Data:", patientsData); // Debugging

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Patient Records</h1>
            
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                
                {/* Ensure patientsData.patients exists before mapping */}
                {patientsData && patientsData.patients ? (
                    patientsData.patients.map((patient: PatientType, index: number) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{patient.name}</h2>
                            <p className="text-gray-700"><strong>Age:</strong> {patient.age}</p>
                            <p className="text-gray-700"><strong>Gender:</strong> {patient.gender}</p>
                            <p className="text-gray-700"><strong>Condition:</strong> {patient.condition}</p>
                            <p className="text-gray-700"><strong>Doctor:</strong> {patient.doctor}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-700">No patient records available.</p>
                )}

            </div>
        </div>
    );
};

export default PatientRecords;
