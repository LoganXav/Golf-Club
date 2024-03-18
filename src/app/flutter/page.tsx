'use client';
import {
  getPaymentDetails,
  initiatePayment,
} from '@/app/api/payment/initialize/flutterwave/route';
import { useState } from 'react';

function PaymentComponent() {
  const [paymentLink, setPaymentLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    const amount = 10000; // Replace with your actual amount
    const email = 'user@example.com'; // Replace with user's email
    const name = 'John Doe'; // Replace with user's name (optional)
    const phoneNumber = '+234812345678'; // Replace with user's phone number (optional)
    const redirectUrl = 'http://localhost:3007'; // Replace with your redirection URL

    try {
      const paymentDetails = getPaymentDetails(
        amount,
        email,
        name,
        phoneNumber,
        redirectUrl
      );
      const link = await initiatePayment(paymentDetails);
      setPaymentLink(link);
    } catch (error) {
      setError(error.message);
    }
  };

  if (paymentLink) {
    return <a href={paymentLink}>Pay Now</a>;
  } else if (error) {
    return <div>Error: {error}</div>;
  }

  return <button onClick={handlePayment}>Initiate Payment</button>;
}

export default PaymentComponent;
