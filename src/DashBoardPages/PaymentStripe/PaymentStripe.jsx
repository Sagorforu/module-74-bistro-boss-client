import { Helmet } from "react-helmet-async";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const PaymentStripe = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"
      ></SectionTitle>
      <h1></h1>
    </div>
  );
};

export default PaymentStripe;
