
import { useGlobalContext } from "../Context/ContextApi"
const PatientRecods = () => {
    const { inputRecords } = useGlobalContext();
    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-semibold text-center mb-6">Patient Records</h2>
            {inputRecords.length === 0 ? (
                <p className="text-center text-gray-700">No records found.</p>
            ) : (
                <ul>
                    {inputRecords.map((record: any, index: number) => (
                        <li key={index} className="border-b py-2">
                            <p><strong>Name:</strong> {record.name}</p>
                            <p><strong>Age:</strong> {record.age}</p>
                            <p><strong>Gender:</strong> {record.gender}</p>
                            <p><strong>Contact:</strong> {record.contact}</p>
                            <p><strong>Tests:</strong> {record.selectedTests.join(", ")}</p>
                            <p><strong>Total Price:</strong> ₹{record.totalPrice}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PatientRecods
