import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { OPERATORS_LIST } from "../constants";

import {
  OperatorSelectionWrapper,
  StyledBackground,
  OperatorCardContainer,
  OperatorCardWrapper,
  OperatorSelectionTitle,
  OperatorSelectionContainer,
  StyledListLogo,
} from "./styleIndex";

interface Operator {
  id: string;
  name: string;
  image: string;
}
export default function OperatorSelection() {
  const router: NextRouter = useRouter();
  const [index, setIndex] = useState(3);
  const lenOperatorsList = Object.keys(OPERATORS_LIST).length;

  return (
    <StyledBackground>
      <OperatorSelectionContainer>
        <OperatorSelectionWrapper>
          <OperatorSelectionTitle>Выберите оператора:</OperatorSelectionTitle>
          <OperatorCardWrapper>
            {OPERATORS_LIST.map((element) => {
              if (index >= element.id)
                return (
                  <OperatorCardContainer
                    key={element.id}
                    onClick={() => {
                      router.push({
                        pathname: `/paymentform/[id]`,
                        query: { id: element.id },
                      });
                    }}
                  >
                    <StyledListLogo src={element.logo} />
                    {element.name}
                  </OperatorCardContainer>
                );
            })}
          </OperatorCardWrapper>
        </OperatorSelectionWrapper>
      </OperatorSelectionContainer>
    </StyledBackground>
  );
}
