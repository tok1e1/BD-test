import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import type { StaticImageData } from "next/image";

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

export default OperatorSelection;
