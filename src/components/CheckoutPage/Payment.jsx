import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Payment = ({ totalAmount, formData }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError(null);
    const cardElement = elements.getElement(CardElement);

    // Create payment intent on your server
    const response = await fetch(
      "http://localhost:5000/api/payments/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount * 100, currency: "usd" }), // amount in cents
      }
    );

    const { clientSecret } = await response.json();

    // Confirm the payment
    const { error: stripeError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (stripeError) {
      setError(stripeError.message);
    } else {
      // Payment succeeded
      toast.success("Payment Successful!");
      localStorage.removeItem("cartItems");
      navigate("/");
    }

    setProcessing(false);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="bg-blue-100 border border-blue-400 mt-10 rounded p-5">
        <h1 className="mb-5">Payment</h1>
        <div className="bg-white p-3 rounded">
          <CardElement />
        </div>
      </div>
      <button
        className="text-center hover:opacity-85 bg-blue-500 w-full p-2 text-white rounded-md mt-5"
        type="submit"
        disabled={!stripe || processing}
      >
        {processing ? "Processing..." : `Pay $${totalAmount}`}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Payment;
