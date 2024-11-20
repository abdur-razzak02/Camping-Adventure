import { useState } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for contacting us! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "", subscribe: false });
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-6 font-play">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-2 p-6 bg-gray-50 shadow-lg rounded-lg"
      >
        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="Write your message here"
            required
          />
        </div>

        {/* Subscribe */}
        <div className="form-control">
          <label className="label cursor-pointer justify-start space-x-2">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="checkbox w-4 h-4"
            />
            <span className="label-text">Subscribe to our newsletter</span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn bg-theme hover:bg-success w-full text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
