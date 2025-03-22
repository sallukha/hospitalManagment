import { Link } from "react-router-dom";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
interface IFormInput {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}
interface SignUpProps {
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}
const SignUp: React.FC<SignUpProps> = ({ setIsAuthenticated }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async data => {
        try {
            const res = await axios.post("http://localhost:3000/sing_up", {
                fullName: data.fullName,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword
            });
            console.log(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error("SignUp error:", error);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <FaHandHoldingMedical className="text-5xl text-cyan-800 mx-auto" />
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">MEDICARE</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Full Name</label>
                        <input
                            {...register("fullName", { required: "Full Name is required" })}
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your full name"
                        />
                        {errors.fullName && <span className="text-red-700">{errors.fullName.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-medium mb-2">Confirm Password</label>
                        <input
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            type="password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && <span className="text-red-700">{errors.confirmPassword.message}</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                        Sign Up
                    </button>
                </form>
                <p className="text-gray-500 text-sm text-center mt-4">
                    Already have an account? <Link to="/login" className="text-green-500">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
