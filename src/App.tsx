import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import { Slide } from "react-toastify/unstyled";
import { ToastContainer } from "react-toastify";
const Navbar = lazy(() => import("./componenets/Navbar"));
const Footer = lazy(() => import("./componenets/Footer"));
const About = lazy(() => import("./Pages/About"));
const Docters = lazy(() => import("./Pages/Docters"));
const Department = lazy(() => import("./Pages/Department"));
const Home = lazy(() => import("./Pages/Home"));
const Contect = lazy(() => import("./Pages/Contect"));
const Blog = lazy(() => import("./Pages/Blog"));
const Petition = lazy(() => import("./Pages/Petition"));
const Labs = lazy(() => import("./Pages/Labs"));
const LabsTestForm = lazy(() => import("./Pages/Labstestform"));
const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SingUp"));
const PatientRecods = lazy(() => import("./Pages/PatientRecods"));
const RevenueReports = lazy(() => import("./Pages/RevenueReports"));
const StaffPerformanceReports = lazy(() => import("./Pages/StaffPerfomens"));
const App = () => {
  const [isAuthanticated, setIsAuthenticated] = useState<boolean | any>(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {isAuthanticated && <Navbar />}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={isAuthanticated ? <ProtectedRoutes /> : <Navigate to="/login" />}
          />
        </Routes>
        {isAuthanticated && <Footer />}
      </Suspense>
      <ToastContainer className="  flex text-sm justify-center items-center "
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </BrowserRouter>
  );
};
// Separate component for Protected Routes
const ProtectedRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/docters" element={<Docters />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/petition" element={<Petition />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/labTestForm" element={<LabsTestForm />} />
        <Route path="/PatientRecods" element={<PatientRecods />} />
        <Route path="/revenueReports" element={<RevenueReports />} />
        <Route path="/Staff" element={<StaffPerformanceReports />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
