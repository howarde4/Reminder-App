import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <ComponentContainer>
            <HeaderText>Reminders</HeaderText>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  height: 100px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-size: 30px;
`;
