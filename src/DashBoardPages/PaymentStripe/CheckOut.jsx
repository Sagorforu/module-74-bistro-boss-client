import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

const CheckOut = () => {
  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = Elements.getElement(CardElement);
    if (card === null) {
        return
    }
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
