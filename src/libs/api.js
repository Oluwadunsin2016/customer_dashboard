import axios from "axios"
import { useMutation } from "@tanstack/react-query";

export const getBanks=()=>{
const banks = axios.get('https://api.paystack.co/bank')
return banks
}

export const useCheckAccountNumber = () => {
   return useMutation({
    mutationFn: async (payload) => {
      return await axios.get(`https://api.paystack.co/bank/resolve?account_number=${payload.account_number}&bank_code=${payload.bank_code}&currency=NGN`, {
            headers: {
              Authorization: `Bearer sk_test_b089543969fecb2f49aa0731274c958a5d5d63a8`, // Add your token here
            },
          }).then((res) => {
       return res.data;
      });
    },
  });
};

export const useVerifyBvn = () => {
  return useMutation({
    mutationFn: (payload) => {
      return axios.post('https://lendnode.creditclan.com/myidentitypass/api/verify/bvn', payload);
    },
  });
};