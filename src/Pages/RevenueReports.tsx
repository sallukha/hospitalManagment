import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
 
type PatientForm = {
  name: string;
  age: number;
  gender: string;
  contactNumber?: string;
  reportType: string;
  paymentStatus: string;
  fromDate: string;
  toDate: string;
};

const RevenueReports: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PatientForm>();
 
  const submitReport: SubmitHandler<PatientForm> = async (data) => {
    try {
      const res = await axios.post("https://node-backend3-bt7q.vercel.app/patient", data);  // ✅ FIXED URL
      console.log("Report submitted successfully:", res.data);
      alert("Report submitted successfully");
      reset(); // Clear form
      
    } catch (error) {
      console.log("API error:", error);
      alert("Failed to submit report");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Patient Records</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit(submitReport)}>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="name">Patient Name</label>
          <input {...register("name", { required: "Name is required" })} type="text" id="name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="age">Age</label>
          <input {...register("age", { required: "Age is required" })} type="number" id="age"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="gender">Gender</label>
          <select {...register("gender", { required: "Gender is required" })} id="gender"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="contactNumber">Contact Number</label>
          <input {...register("contactNumber")} type="text" id="contactNumber"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="reportType">Report Type</label>
          <select {...register("reportType", { required: "Report type is required" })} id="reportType"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select report</option>
            <option value="Lab Test">Lab Test</option>
            <option value="OPD">OPD</option>
            <option value="IPD">IPD</option>
            <option value="Surgery">Surgery</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="paymentStatus">Payment Status</label>
          <select {...register("paymentStatus", { required: "Payment status is required" })} id="paymentStatus"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select status</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="fromDate">From Date</label>
          <input {...register("fromDate", { required: "From date is required" })} type="date" id="fromDate"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1" htmlFor="toDate">To Date</label>
          <input {...register("toDate", { required: "To date is required" })} type="date" id="toDate"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <button type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all">
            Generate Report
          </button>
        </div>

      </form>
    </div>
  );
};

export default RevenueReports;
