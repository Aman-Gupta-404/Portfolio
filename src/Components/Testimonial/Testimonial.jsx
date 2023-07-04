import React from "react";
import "./Testimonial.css";
import quote from "../../assets/quote.png";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import image1 from "../../assets/hero_img.png";
import avatar from "../../assets/avatar.png";

const testimonial1 =
  "A great experience. A good listener and it made our work easy as you were able to grasp everything. One thing I really appreciate is your willingness to try without hesitating and your patience. Extremely friendly and talented.";

const testimonials = [
  {
    name: "Rachana T",
    position: "CEO, Laviour Pvt. Ltd.",
    message:
      "A landing page for a Steel manufacturing company, which was used by the client to generate more leads for his company. This application is a frontend application build on React.js",
    image: avatar,
  },
  {
    name: "Pranshu Chokhani",
    position: "CEO, Pransiv Concret Pvt. Ltd.",
    message:
      "Had a great experience working with Aman. He is a great listner and gives amazing suggestions for the business. Would devinitely love to work with him again.",
    image: avatar,
  },
];

function Testimonial() {
  const renderTestimonialCard = (name, designation, message, image) => {
    return (
      <div className="testimonial__card">
        {/* <div className="testimonial__quotes"> */}
        {/* <BiSolidQuoteAltLeft id="testimonialQuote" /> */}
        {/* </div> */}
        {/* <div className="testimonial__image"> */}
        {/* </div> */}
        <img src={image} alt="" className="testimonial__image--img" />
        <div className="testimonial__message">
          <p className="testimonial__message--text font_18 text_black">
            {message}
          </p>
        </div>
        <div className="testimonial__footer">
          <p className="testimonial__name font_16 primaryOne">{name}</p>
          <p className="testimonial__name font_16 font_offwhite">
            {designation}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="testimonial">
      <p className="testimonial__heading font_20 font_offblack">Testimonials</p>
      <hr className="testimonial__line" />

      <div className="testimonial__section">
        {testimonials.map((item, index) => {
          return renderTestimonialCard(
            item.name,
            item.position,
            item.message,
            item.image
          );
        })}
      </div>
    </div>
  );
}

export default Testimonial;
