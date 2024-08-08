import About from '../../pages/about';
import PeriodCalculator from '../periodCalculator';
import Hero from './components/hero';
import SignIn from '../pages/signin';
import SignUp from '../pages/signup';
import PeriodResources from '../pages/periodResources';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover flex flex-col text-pink-600"
      style={{ backgroundImage: "url('/src/assets/images/bg-img2.jpg')" }}
    >
      {/* Overlay for the background image */}
      <div className="bg-pink-600 bg-opacity-80 w-full py-10 px-6 sm:px-12 lg:px-24 flex-grow">
        <div className="max-w-5xl mx-auto">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <img
              src="/src/assets/images/logo.png" // Update with your actual logo path
              alt="Logo"
              className="h-16 sm:h-20 md:h-24"
            />
          </div>

          {/* Hero Section */}
          <div className="mb-10">
            <Hero />
          </div>

          {/* About Section */}
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <About />
          </div>

          {/* Period Calculator Section */}
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <PeriodCalculator />
          </div>

          {/* Period Resources Section */}
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <PeriodResources />
          </div>

          {/* Sign In Section */}
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg p-8 mb-10">
            <SignIn />
          </div>

          {/* Sign Up Section */}
          <div className="bg-white bg-opacity-90 text-gray-900 rounded-lg shadow-lg p-8">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
