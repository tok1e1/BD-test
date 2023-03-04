import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

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

export default function OperatorsList() {
  const OperatorSelection = () => {
    const [selectedOperator, setSelectedOperator] = useState<Operator | null>(
      null
    );

    const handleOperatorSelect = (operator: Operator) => {
      setSelectedOperator(operator);
      // Redirect to payment form page passing the selected operator ID as a query parameter
      window.location.href = `/payment-form?operator=${operator.id}`;
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
