import React from "react";
import { staff } from "../json/StaffRecods";

interface StaffReport {
    id: number;
    name: string;
    role: string;
    performanceScore: number;
    tasksCompleted: number;
    monthlyTarget: number;
    attendance: string;
}
const StaffPerformanceReports: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Staff Performance Reports</h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {staff.staffPerformance?.length > 0 ? (
                    staff.staffPerformance.map((staff: StaffReport) => (
                        <div key={staff.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h2 className="text-xl font-semibold text-gray-900">{staff.name}</h2>
                            <p className="text-gray-700"><strong>Role:</strong> {staff.role}</p>
                            <p className="text-gray-700"><strong>Performance Score:</strong> {staff.performanceScore}%</p>
                            <p className="text-gray-700"><strong>Tasks Completed:</strong> {staff.tasksCompleted}/{staff.monthlyTarget}</p>
                            <p className="text-gray-700"><strong>Attendance:</strong> {staff.attendance}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-700">No staff performance data available.</p>
                )}
            </div>
        </div>
    );
};

export default StaffPerformanceReports;
