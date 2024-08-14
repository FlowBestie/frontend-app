import React from "react";
import { apiLogin } from "../../../services/auth";
import { toast } from "react-toastify";

const SignIn = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await apiLogin({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (response.status === 200) {
      toast.success("User Registered");
    } else {
      toast.error("Failed to Register");
    }
  };

  return (
    <section className="text-center py-16 signin bg-gray-50"
    style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}
>
      <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
      <form className="flex flex-col items-center max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition duration-300"
        >
          Sign In
        </button>
      </form>
    </section>
  );
};

export default SignIn;
