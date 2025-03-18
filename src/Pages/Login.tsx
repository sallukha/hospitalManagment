import { FaHandHoldingMedical } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

interface IFormInput {
  email: string;
  password: string;
}

const Login = ({ setIsAuthenticated }: { setIsAuthenticated: (isAuthenticated: boolean) => void }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/log_in", data);
      console.log(res.data);
      setIsAuthenticated(true);
      navigate("/");
      toast.success('Login successful!');
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <FaHandHoldingMedical className="text-5xl text-cyan-800 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">MEDICARE</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-700 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-medium mb-2">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
            {errors.password && <span className="text-red-700 text-sm">{errors.password.message}</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-gray-500 text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
