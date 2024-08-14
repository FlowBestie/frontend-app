import About from '../../pages/about';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: "url('/src/assets/images/flower.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Navbar */}
      <nav className="bg-gray-900 w-full py-4 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-semibold">
            {/* Logo or Title */}
            Period Tracker
          </div>
          <div>
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
              <li><a href="#signup" className="text-gray-300 hover:text-white">Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="bg-black bg-opacity-90 w-full flex-grow flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Period Tracker
          </h1>
          <p className="text-lg sm:text-xl mt-4 text-gray-300">
            Plan ahead. Predict when your next period will arrive. Get insights on your cycle.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-90 text-white rounded-lg p-8 mb-10 max-w-3xl mx-auto shadow-lg">
          <About />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
