import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/ContextApi";
import { CiSearch } from "react-icons/ci";
import { docters as doctorsData } from "../json/Docter";
interface Doctor {
    id: number;
    name: string;
    specialization: string;
    degree: string;
    experience: string;
    contact: string;
    email: string;
    location: string;
    image: string;
}
const Doctors = () => {
    const { searchQuery, setSearchQuery } = useGlobalContext();
    const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctorsData);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    useEffect(() => {
        if (searchQuery !== "") {
            const filtered = doctorsData.filter((doctor) =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredDoctors(filtered);
        } else {
            setFilteredDoctors(doctorsData);
        }
    }, [searchQuery]);
    return (
        <>
            {/* Centering the search bar */}
            <div className="flex justify-center items-center mt-6">
                <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl focus-within:ring-2 focus-within:ring-cyan-500">
                    <CiSearch className="text-gray-400 text-lg" />
                    <input
                        type="text"
                        placeholder="Search doctor..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="w-full outline-none px-2 bg-transparent text-lg"
                    />
                </div>
            </div>
            {/* Doctor List */}
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Doctors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDoctors.map((doctor: Doctor) => (
                        <div key={doctor.id} className="bg-white p-6 shadow-lg rounded-lg">
                            <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover rounded-md mb-4"  style={{objectFit:"cover"}}/>
                            <h3 className="text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-gray-700">{doctor.specialization}</p>
                            <p className="text-gray-500">{doctor.degree}</p>
                            <p className="text-gray-500">Experience: {doctor.experience} years</p>
                            <p className="text-gray-500">Location: {doctor.location}</p>
                            <p className="text-gray-500">Contact: {doctor.contact}</p>
                            <p className="text-gray-500">Email: {doctor.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Doctors;
