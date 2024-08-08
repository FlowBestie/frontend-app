const SignUp = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <form className="max-w-md mx-auto">
      <input
          type="text"
          placeholder="firstname"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="lastname"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
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
