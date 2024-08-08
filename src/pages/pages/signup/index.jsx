import { toast } from "react-toastify";
import { apiRegister } from "../../../services/auth";
import "../style.css";

const SignUp = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await apiRegister({
      firstname: formData.get('firstname'),
      lastname: formData.get('lastname'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });

    if (response.status === 201) {
      toast.success('User Registered');
    } else {
      toast.error('Failed to Registered');
    }
  }
  return (
    <section className="text-center py-16 signup">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          name="firstname"
          type="text"
          placeholder="firstname"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="lastname"
          type="text"
          placeholder="lastname"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="username"
          type="text"
          placeholder="username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="confirm Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full font-semibold"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignUp;
