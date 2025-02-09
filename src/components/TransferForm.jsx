/* eslint-disable react/prop-types */
import { Input, Button } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "../libs/utils";
import { getBanks, useCheckAccountNumber } from "../libs/api";
import { ImSpinner8 } from "react-icons/im";
import { Select } from "antd";

const { Option } = Select;

const TransferForm = ({ onClose }) => {
    const [banks, setBanks] = useState([]);
    const [selectedBank, setSelectedBank] = useState({});
    const [accountNumber, setAccountNumber] = useState('');
    const [validationResult, setValidationResult] = useState(null);


    const { mutateAsync: checkAccountNumber, isPending } =
    useCheckAccountNumber();

  useEffect(() => {
    async function fetchData() {
      const result = await getBanks();
      console.log(result.data.data);
      const mappedResult = result.data.data.map((bank) => {
        return { ...bank, label: bank.name, value: bank.name };
      });
      setBanks(mappedResult);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (accountNumber.length == 10 && selectedBank) {
      debouncedValidateAccountNumber({
        bank_code: selectedBank.code,
        account_number: accountNumber,
      });
    }
  }, [selectedBank, accountNumber]);


  const handleKeyDown = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
        console.log('backspace or delete key pressed');
    }else if (accountNumber.length >= 10) {
      event.preventDefault(); // Prevent further input when length is 10
    }
  };

  const handleChange = (value) => {

    
    console.log(value.length, accountNumber.length);
    
    // Allow setting value only if deleting OR length is less than 10
    if (value.length < accountNumber.length || value.length <= 10) {
      setAccountNumber(value);
    }
  };
  const handleSelectBank = (value) => {
    console.log(value);
    
    const result = banks.find((bank) => bank.name == value);
    setSelectedBank(result);
  };

  const validateAccountNumber = async (payload) => {
    console.log(payload);

    await checkAccountNumber(payload, {
      onSuccess: async (data) => {
        console.log(data);
        setValidationResult({
          message: data.data.account_name,
          type: "success",
        });
      },
      onError: () => {
        setValidationResult({
          message: "Account number is invalid",
          type: "error",
        });
      },
    });
  };

  const debouncedValidateAccountNumber = useCallback(
    debounce((payload) => {
      validateAccountNumber(payload);
    }, 500), // 500ms delay
    []
  );

  useEffect(() => {
    return () => {
      debouncedValidateAccountNumber.cancel();
    };
  }, [debouncedValidateAccountNumber]);



  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Transfer submitted successfully!");
    onClose(); // Close the drawer after submission
  };

  return (
   <div>
<h1 className="text-lg mb-4 font-semibold">Make a transfer</h1>
<form onSubmit={handleSubmit} className="space-y-6">
<Select
                showSearch
                placeholder={`Select recipient bank`}
                onChange={(value) => handleSelectBank(value)}
                className="w-full h-12"
                variant="filled"
              >
                {banks?.map((item) => (
                  <Option key={item.name} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>

              <div>
                  <Input
                    size="sm"
                    type='number'
                    label='Account Number'
                    required={true}
                    value={accountNumber}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => handleChange(e.target.value)}
                    fullWidth
                  />
                  <p
                    className={`${
                      validationResult?.type == "error"
                        ? "text-red-600"
                        : "text-orange-500"
                    } text-sm font-semibold mt-1 flex items-center`}
                  >
                    {isPending ? (
                      <ImSpinner8
                        size={15}
                        className="animate-spin text-gray-500 mt-2"
                      />
                    ) : (
                     <span>{validationResult?.message!==""&&validationResult?.message}</span>
                    )}
                  </p>
                </div>

      <Input
        label="Amount"
        type="number"
        fullWidth
        required
      />
      <Input
        label="Description"
        fullWidth
        required
      />
      <div className="flex justify-end space-x-4">
        <Button type="submit" color="primary" className="rounded-md">
          Submit
        </Button>
      </div>
    </form>
   </div>
  );
};

export default TransferForm;