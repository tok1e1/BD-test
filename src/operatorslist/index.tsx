import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";

import {
  OperatorSelectionWrapper,
  StyledBackground,
  OperatorCardContainer,
  OperatorCardWrapper,
  OperatorSelectionTitle,
  OperatorSelectionContainer,
} from "./styleIndex";

interface Operator {
  id: string;
  name: string;
  image: string;
}
export default function OperatorsList() {
  const operators: Operator[] = [
    {
      id: "mts",
      name: "  МТС",
      image: "/mts.png",
    },
    {
      id: "beeline",
      name: "Билайн",
      image: "/beeline.png",
    },
    {
      id: "megafon",
      name: "Мегафон",
      image: "/megafon.png",
    },
  ];

  const OperatorSelection = () => {
    const router = useRouter();

    const handleOperatorSelect = (operator: Operator) => {
      // Navigate to payment form page passing the selected operator ID as a query parameter
      router.push({
        pathname: "/payment-form",
        query: { operator: operator.id },
      });
    };

    return (
      <StyledBackground>
        <OperatorSelectionContainer>
          <OperatorSelectionWrapper>
            <OperatorSelectionTitle>Выберите оператора:</OperatorSelectionTitle>
            <OperatorCardWrapper>
              {operators.map((operator) => (
                <OperatorCardContainer
                  key={operator.id}
                  onClick={() => handleOperatorSelect(operator)}
                >
                  <Image
                    src={operator.image}
                    alt={operator.name}
                    width={50}
                    height={50}
                  />
                  {operator.name}
                </OperatorCardContainer>
              ))}
            </OperatorCardWrapper>
          </OperatorSelectionWrapper>
        </OperatorSelectionContainer>
      </StyledBackground>
    );
  };

  return <OperatorSelection />;
}
