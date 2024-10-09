import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import OrderManagement from "../../service/Order";
import PropTypes from "prop-types";

const Payment = ({ totalAmount, formData, cartItems }) => {
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
    const response = await fetch(
      "https://44pro-server.vercel.app/api/payments/create-payment-intent",
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
      const data = { formData, cartItems };
      OrderManagement.createOrder(data).then(() => {
        toast.success("Payment Successful!");
        localStorage.removeItem("cartItems");
        navigate("/");
      });
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
Payment.propTypes = {
  cartItems: PropTypes.array,
  totalAmount: PropTypes.any,
  formData: PropTypes.object,
};

export default Payment;
