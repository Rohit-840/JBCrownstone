import Navbar from "../components/Navbar";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-[#0b0f19] pt-20 dark:bg-white text-white dark:text-black min-h-screen">

      <Navbar />

      {/* HERO */}
      <div
        className="h-[90vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')",
        }}
      >
        <div className="bg-black/70 p-10 rounded-xl">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4">
            Find Your Dream Property
          </h1>
          <p className="text-gray-300 mb-6">
            Premium real estate solutions with modern lifestyle
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Explore Now
          </button>
        </div>
      </div>

      {/* PROPERTIES */}
      {/* SEARCH SECTION */}
<div className="px-10 py-10 bg-[#111827] dark:bg-gray-100 text-center">

  <h2 className="text-3xl font-bold mb-6">
    Find Your Perfect Property
  </h2>

  <div className="flex flex-wrap justify-center gap-4">

    <input
      className="px-4 py-2 rounded-lg text-black"
      placeholder="Location"
    />

    <input
      className="px-4 py-2 rounded-lg text-black"
      placeholder="Property Type"
    />

    <input
      className="px-4 py-2 rounded-lg text-black"
      placeholder="Budget"
    />

    <button className="bg-yellow-400 px-6 py-2 rounded-lg font-semibold">
      Search
    </button>

  </div>
</div>

{/* TRUST SECTION */}
<div className="px-10 py-16 text-center">

  <h2 className="text-3xl font-bold mb-10">
    Trusted by Thousands
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div>
      <h3 className="text-3xl text-yellow-400 font-bold">500+</h3>
      <p>Properties Sold</p>
    </div>

    <div>
      <h3 className="text-3xl text-yellow-400 font-bold">300+</h3>
      <p>Happy Clients</p>
    </div>

    <div>
      <h3 className="text-3xl text-yellow-400 font-bold">30+</h3>
      <p>Years Experience</p>
    </div>

    <div>
      <h3 className="text-3xl text-yellow-400 font-bold">100+</h3>
      <p>Luxury Listings</p>
    </div>

  </div>
</div>

      {/* SERVICES */}
      <div className="px-10 py-16 bg-[#111827] dark:bg-gray-100">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Buy Property</h3>
            <p className="text-gray-400">Best deals available</p>
          </div>

          <div className="hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Sell Property</h3>
            <p className="text-gray-400">Maximum returns</p>
          </div>

          <div className="hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-400">Expert guidance</p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      

<div className="bg-black dark:bg-white text-gray-300 dark:text-gray-700 px-10 py-14">

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

    {/* COMPANY */}
    <div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">
        JB CROWNSTONE
      </h2>
      <p className="text-sm mb-4">
        Delivering luxury real estate solutions with trust, transparency,
        and excellence. Your dream property is just one step away.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 text-lg">
        <FaFacebook className="cursor-pointer hover:text-yellow-400" />
        <FaInstagram className="cursor-pointer hover:text-yellow-400" />
        <FaLinkedin className="cursor-pointer hover:text-yellow-400" />
        <FaTwitter className="cursor-pointer hover:text-yellow-400" />
      </div>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li>Home</li>
        <li>Services</li>
        <li>About Us</li>
        <li>Book Now</li>
      </ul>
    </div>

    {/* PROPERTY TYPES */}
    <div>
      <h3 className="font-semibold mb-4">Property Types</h3>
      <ul className="space-y-2 text-sm">
        <li>Luxury Villas</li>
        <li>Apartments</li>
        <li>Commercial Spaces</li>
        <li>Builder Floors</li>
      </ul>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="font-semibold mb-4">Contact Us</h3>
      <p className="text-sm">📍 Delhi, India</p>
      <p className="text-sm">📞 +91 XXXXX XXXXX</p>
      <p className="text-sm">📧 info@jbcrownstone.com</p>

      {/* NEWSLETTER */}
      <div className="mt-4">
        <input
          placeholder="Enter email"
          className="px-3 py-2 w-full rounded-lg text-black mb-2"
        />
        <button className="bg-yellow-400 w-full py-2 rounded-lg text-black font-semibold">
          Subscribe
        </button>
      </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
    © 2026 JB CROWNSTONE | All Rights Reserved | Privacy Policy
  </div>

</div>

    </div>
  );
}

export default Home;