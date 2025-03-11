export default function ClientWorkSection() {
  return (
    <section className="bg-white py-16">
      <div className="flex flex-col md:flex-row items-center justify-between px-8 xl:px-10 3xl:mx-auto 3xl:max-w-screen-xl">
        <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed">
          <p>
            Growing customer expectations. Market-shaping AI. Self-optimizing
            systems.
          </p>
          <p className="mt-4">
            The post-digital age shows no signs of slowing down, and the need
            for rapid business transformation has never been greater.
          </p>
          <p className="mt-4">
            We meet clients wherever they are on their paths to change—in every
            industry across the globe—and partner with them to create lasting
            value.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-gray-600 text-lg leading-relaxed text-center md:text-right">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            How we work with our <br />
            <span className="text-[#007fff]">Clients.</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg  space-x-2 hover:bg-blue-700 transition">
            <span>Contact us</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
