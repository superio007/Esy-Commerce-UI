import { useState } from "react";

const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: `"Innostax Tech LLC was able to create a product that was easy to use. Often, engineers create products that are too complex. This one is easy to use and understand."`,
      name: "Denis Lussault",
      title: "CPO, Kadeya",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
    {
      id: 2,
      text: `"The team at Innostax Tech LLC delivered exactly what we needed—an intuitive and user-friendly solution. Highly recommend their expertise!"`,
      name: "John Doe",
      title: "CTO, TechCorp",
      image: "https://via.placeholder.com/50", // Replace with actual image URL
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full bg-white p-6 rounded-lg shadow-lg max-w-md">
      {/* Star Ratings */}
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500 text-lg">
              ★
            </span>
          ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed">
        {testimonials[activeIndex].text}
      </p>

      {/* Profile Section */}
      <div className="mt-4 flex items-center">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="rounded-full w-12 h-12"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-900">
            {testimonials[activeIndex].name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[activeIndex].title}
          </p>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-gray-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
