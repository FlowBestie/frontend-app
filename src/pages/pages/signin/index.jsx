import { apiLogin } from "../../../services/auth";

const SignIn = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await apiLogin({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    if (response.status === 200) {
      toast.success('User Registered');
    } else {
      toast.error('Failed to Registered');
    }
  }
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-semibold mb-6">Sign In</h2>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full font-semibold"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SignIn;
