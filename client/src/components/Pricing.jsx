import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "$10",
      features: [
        "Regular seat",
        "Free soft drink",
        "Standard view",
      ],
    },
    {
      name: "Premium",
      price: "$20",
      features: [
        "Recliner seat",
        "Free popcorn & drink",
        "Best view",
        "Priority entry",
      ],
    },
    {
      name: "VIP",
      price: "$40",
      features: [
        "Luxury seat",
        "Free snacks & drinks",
        "Front row view",
        "VIP lounge access",
        "Personal assistant",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-secondary py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Ticket Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold text-accent mb-6">{plan.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-accent transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
