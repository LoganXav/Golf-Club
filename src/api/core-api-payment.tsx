import { postRequest } from '@/config/base-query';
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';

interface CoreApiPaymentProps {
  payload: {
    name: string;
    email: string;
    metadata: { data: FieldValues };
  };
  paymentMethod: string;
}

export const usePaymentMutation = () => {
  const {
    mutate: initializePayment,
    isLoading,
    error,
  } = useMutation({
    mutationFn: async ({ payload, paymentMethod }: CoreApiPaymentProps) => {
      const { data } = await postRequest({
        endpoint: `/payment/initialize/${paymentMethod}`,
        payload,
      });
      if (data?.status !== 200) {
        throw data?.error;
      }
      return data;
    },
    onSuccess: (values) => {
      const redirectUrl = values?.data?.link;
      window.location.href = redirectUrl;
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { initializePayment, isLoading, error };
};
