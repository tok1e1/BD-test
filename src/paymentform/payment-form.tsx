import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  PaymentFormContainer,
  PaymentFormWrapper,
  PaymentFormTitle,
  InputLabel,
  InputField,
  ErrorMessage,
  SuccessMessage,
  PaymentFormButton,
} from "./stylePayment";
import { useRouter } from "next/router";

interface Operator {
  id: string;
  name: string;
  image: StaticImageData;
}

const operators: Operator[] = [
  {
    id: "mts",
    name: "  МТС",
    image: require("../public/mts.png") as StaticImageData,
  },
  {
    id: "beeline",
    name: "Билайн",
    image: require("../public/beeline.png") as StaticImageData,
  },
  {
    id: "megafon",
    name: "Мегафон",
    image: require("../public/megafon.png") as StaticImageData,
  },
];

interface PaymentFormProps {
  operator: Operator;
}

interface PaymentFormData {
  phone: string;
  amount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ operator }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    phone: "",
    amount: 0,
  });
  const [formErrors, setFormErrors] = useState<Partial<PaymentFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = name === "Сумма" ? parseFloat(value) : value;
    setFormData((prevState) => ({ ...prevState, [name]: newValue }));
    setFormErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic validation
    const errors: Partial<PaymentFormData> = {};

    if (!formData.phone) {
      errors.phone = "Укажите номер телефона.(Без +7 или 8)";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Неправильный номер телефона. Укажите без +7 или 8";
    }

    if (!formData.amount) {
      errors.amount = 0;
    } else if (Number(formData.amount) < 1 || Number(formData.amount) > 1000) {
      errors.amount = 1;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    // Simulate API call with random success or failure
    const isSuccess = Math.random() < 0.5;

    setTimeout(() => {
      if (isSuccess) {
        setIsSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setIsLoading(false);
        setFormErrors({
          phone: "Что-то пошло не так. Пожалуйста, попробуйте еще раз.",
        });
      }
    }, 2000);
  };

  return (
    <PaymentFormContainer>
      <PaymentFormWrapper>
        <PaymentFormTitle>
          Оплата {operator?.name || "Оператор"}
        </PaymentFormTitle>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="phone">Номер телефона</InputLabel>
          <InputField
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {formErrors.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
          <InputLabel htmlFor="amount">Сумма (в руб.)</InputLabel>
          <InputField
            type="number"
            name="amount"
            id="amount"
            min={1}
            max={1000}
            value={formData.amount}
            onChange={handleInputChange}
          />
          {formErrors.amount && (
            <ErrorMessage>{formErrors.amount}</ErrorMessage>
          )}
          {isLoading ? (
            <PaymentFormButton disabled>Загрузка...</PaymentFormButton>
          ) : (
            <PaymentFormButton type="submit">Оплатить</PaymentFormButton>
          )}
        </form>
        {isSuccess && (
          <SuccessMessage>
            Оплата прошла успешно. Перенаправление...
          </SuccessMessage>
        )}
      </PaymentFormWrapper>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
