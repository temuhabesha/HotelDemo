import React from 'react'
import './WhyChooseUsSection.css'
import FeatureCard from "../Home/FeatureCard/FeatureCard"; // Import the reusable FeatureCard component


function WhyChooseUsSection() {

    const featuresData = [
      {
        icon: "🛏️", // You can replace these with SVG icons later
        title: "Comfortable Rooms",
        description:
          "Modern, clean, and peaceful spaces designed for your ultimate relaxation.",
      },
      {
        icon: "🌐",
        title: "Complimentary Wi-Fi",
        description:
          "Stay connected with high-speed internet access available throughout the hotel.",
      },
      {
        icon: "🛎️",
        title: "24/7 Dedicated Service",
        description:
          "Our friendly and professional team is always available to assist you.",
      },
      {
        icon: "🍽️", // Example of adding a local flavor icon
        title: "Authentic Ethiopian Cuisine",
        description:
          "Savor delicious local dishes prepared with fresh, traditional ingredients.",
      },
      {
        icon: "🚘",
        title: "Airport/City Pickup",
        description:
          "Convenient and reliable transport services to and from our hotel.",
      },
      {
        icon: "🏞️", // Another local flavor icon
        title: "Lake Tana Views",
        description:
          "Wake up to breathtaking panoramic views of the majestic Lake Tana.",
      },
    ];


  return (
    <section id="about" className="why-choose-us-section">
      <div className="why-choose-us-container">
        {/* Section Title */}
        <h2 className="section-title">Why Choose LodgeLink Bahir Dar?</h2>

        {/* Introductory Paragraph */}
        <p className="intro-paragraph">
          At LodgeLink, we blend modern comfort with genuine Ethiopian
          hospitality. Located conveniently near Bahir Dar's vibrant
          attractions, we are committed to making your stay unforgettable,
          whether for business or leisure.
        </p>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index} // In a real app, use a unique ID from your data
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUsSection
