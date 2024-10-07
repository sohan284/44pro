import React, { useState } from "react";
import Footer from "../shared/Footer";
import NavBar from "../shared/navBar";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "../components/CheckoutPage/Payment";

const stripePromise = loadStripe(
  "pk_test_51Q7CdfLx5KAnXwY6x7FsarUIy9l3sftmhY7X5Ear4VFso2xPlQ97BrcN41KJJK66wGVy96DrlQvyNfYRBWUwKJUH00bv4w4ucv"
);

const CheckoutPage = () => {
  const cartItems = localStorage.getItem("cartItems");
  const parsedCartItems = cartItems ? JSON.parse(cartItems) : [];

  // Calculate total price
  const totalPrice = parsedCartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });

  const [errors, setErrors] = useState({});
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.zipcode) newErrors.zipcode = "Zip code is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsPaymentVisible(true); // Show payment section
    }
  };

  return (
    <div className="home-container ">
      <NavBar />
      <div className="bg-zinc-100">
        <div className="container pt-12 mx-auto grid lg:grid-cols-2">
          <div className="mx-10">
            <h1 className="text-xl text-start text-zinc-900  mb-3">
              Order Summary
            </h1>

            <div className="grid grid-cols-2 ">
              <div className="lg:col-span-2 shadow-md mb-10 col-span-3 bg-white rounded-lg">
                {parsedCartItems?.map((item, i) => (
                  <div className="py-5 border-b" key={i}>
                    <div className="flex justify-around ">
                      <h1 className="text-xl font-medium my-10">
                        {item.title}
                      </h1>
                      <h1 className="text-xl font-medium my-10">
                        ${item.price}
                      </h1>
                    </div>
                  </div>
                ))}
                <h2 className="text-xl font-thin px-10 pt-5 flex justify-between">
                  Subtotal <span>${totalPrice.toFixed(2)}</span>
                </h2>
                <h2 className="text-xl font-thin px-10 pt-5 flex justify-between">
                  Shipping <span>Free</span>
                </h2>
                <h2 className="text-xl border-t m-10 pt-2 flex justify-between">
                  Total <span>${totalPrice.toFixed(2)}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-10 p-5">
            <h1 className="text-xl">Contact Information</h1>
            {!isPaymentVisible ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Email<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Phone Number<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone}</p>
                  )}
                </div>
                <h1 className="text-xl mt-10 mb-2">Shipping Address</h1>

                <div className="mb-4">
                  <label className="block text-gray-700">
                    Name<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Address<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.address && (
                    <p className="text-red-500">{errors.address}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      City<span className="text-red-500 text-sm">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border rounded-md p-1"
                    />
                    {errors.city && (
                      <p className="text-red-500">{errors.city}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">
                      Zip Code<span className="text-red-500 text-sm">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full border rounded-md p-1"
                    />
                    {errors.zipcode && (
                      <p className="text-red-500">{errors.zipcode}</p>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    State<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.state && (
                    <p className="text-red-500">{errors.state}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Country<span className="text-red-500 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border rounded-md p-1"
                  />
                  {errors.country && (
                    <p className="text-red-500">{errors.country}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 text-white p-2 rounded"
                >
                  Continue to Payment
                </button>
              </form>
            ) : (
              <div className="bg-white p-5 rounded-md shadow-md">
                <h1 className="text-xl mb-4">Review Your Information</h1>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Address:</strong> {formData.address}
                </p>
                <p>
                  <strong>City:</strong> {formData.city}
                </p>
                <p>
                  <strong>State:</strong> {formData.state}
                </p>
                <p>
                  <strong>Country:</strong> {formData.country}
                </p>
                <p>
                  <strong>Zip Code:</strong> {formData.zipcode}
                </p>

                <Elements stripe={stripePromise}>
                  <Payment totalAmount={totalPrice} formData={formData} />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
