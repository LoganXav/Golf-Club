import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

interface Customer {
  email: string;
  phone_number: string;
  name: string;
}

interface FlutterwaveConfig {
  public_key: string;
  tx_ref: number;
  amount: number;
  currency: string;
  payment_options: string;
  customer: Customer;
  customizations: {
    title: string;
    description: string;
    logo: string;
  };
}

export default function App(): React.FC {
  const config: FlutterwaveConfig = {
    public_key: 'process.env.',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Hello Test user</h1>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response: any) => {
              console.log(response);
              closePaymentModal(); // Close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with React hooks
      </button>
    </div>
  );
}
