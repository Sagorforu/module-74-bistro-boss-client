import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../Hooks/useCart";

// Todo: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentStripe = () => {
  const [, cart ] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOut cart={cart} price={price}></CheckOut>
      </Elements>
    </div>
  );
};

export default PaymentStripe;
