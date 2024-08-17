import { toast } from "react-toastify";
import { apiRegister } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

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
      // agreeToEmails: formData.get('agreeToEmails') === 'on', // Convert checkbox value to boolean
    });

    if (response.status === 201) {
      toast.success('User Registered');
      navigate('/sign-in');
    } else {
      toast.error('Failed to Register');
    }
  };

  return (
    <section className="text-center py-32 signup"
      style={{ backgroundImage: "url('/src/assets/images/blueleaves.webp')" }}
    >
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          name="firstname"
          type="text"
          placeholder="FirstName"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="lastname"
          type="text"
          placeholder="LastName"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        {/* <div className="mb-4 text-left">
          <input
            name="agreeToEmails"
            type="checkbox"
            id="agreeToEmails"
            className="mr-2"
          />
          <label htmlFor="agreeToEmails" className="text-bold text-blue-950">
            I agree to the terms and conditions of signing up because I trust this Period Tracker App to keep all my information confidential!
          </label>
        </div> */}
        <button
          type="submit"
          className="bg-pink-400 w-full hover:bg-pink-600 text-white py-3 px-6 rounded-full font-semibold"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignUp;
