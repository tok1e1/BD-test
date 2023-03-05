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
  StyledLogo,
} from "./stylePayment";
import { OPERATORS_LIST } from "../constants";
import { NextRouter, useRouter } from "next/router";

interface PaymentFormData {
  phone: string;
  amount: number;
}

export default function PaymentForm() {
  const router: NextRouter = useRouter();
  const [paymentSum, setPaymentSum] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("89");
  const urlHandlePayment = `/api/handle-payment`;

  const [formData, setFormData] = useState<PaymentFormData>({
    phone: "",
    amount: 0,
  });
  const [formErrors, setFormErrors] = useState<Partial<PaymentFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
  const regularExpression = () => {
    const regex = new RegExp(/\D/, "g");
    return regex;
  };
  const handlePhoneChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const valueLength = target.value.length;
    const phoneValue = target.value;
    if (valueLength <= 10 && valueLength >= 2) {
      setPhoneNumber(phoneValue.replace(regularExpression(), ""));
    }
  };
  const handlerDisplayOperator = (id: string) => {
    let nameOperator = "";
    let logoOperator = "";
    OPERATORS_LIST.map((element) => {
      if (element.id == +id) {
        nameOperator = element.name;
        logoOperator = element.logo;
      }
    });
    return { nameOperator, logoOperator };
  };
  const { nameOperator, logoOperator } = handlerDisplayOperator(
    String(router.query.id)
  );

  return (
    <PaymentFormContainer>
      <PaymentFormWrapper>
        <PaymentFormTitle>
          Оплата
          <StyledLogo src={logoOperator} />
          {nameOperator}
        </PaymentFormTitle>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="phone">Номер телефона</InputLabel>
          <InputField
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
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
            onChange={handlePhoneChange}
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
}
