import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing/hero-kpk-landscape.png')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
            Welcome to Smart KPK
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building a<span className="text-emerald-400"> Smarter </span>
            Future for
            <br />
            Khyber Pakhtunkhwa
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
            Smart KPK is a digital initiative focused on improving public
            services through technology. Access health, education,
            transportation, tourism, and government services from one platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition">
              Explore Services
            </button>

            <button className="px-8 py-3 border border-white hover:bg-white hover:text-black rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
