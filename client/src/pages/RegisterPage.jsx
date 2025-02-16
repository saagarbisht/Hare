import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { BiLoaderCircle } from "react-icons/bi";

const RegisterPage = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        console.log(userData);
        setLoading(false)
      }, 2000);
  };
  useEffect(() => {
    window.scrollTo(0,0);
  },[location]);
  return (
    <form
      className="w-full max-w-md mx-auto bg-white p-8 rounded-lg border shadow-sm space-y-6"
      onSubmit={handleSubmit}
    >
      <div className=" justify-center flex">
        <h2 className="text-xl font-medium">Hare</h2>
      </div>
      <h2 className="text-2xl font-bold text-center">Hey there! 👋🏼</h2>
      <p className="text-center">Enter your details to Sign Up</p>
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border rounded"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          required
        />
      </div>
      <button
        className={`w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition ${
          loading && "cursor-not-allowed bg-black/50 hover:bg-black"
        }`}
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <span className="flex justify-center items-center">
            <BiLoaderCircle className="animate-spin size-6" />
          </span>
        ) : (
          <>Sign Up</>
        )}
      </button>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-blue-500">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterPage;
