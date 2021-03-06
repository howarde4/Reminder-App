import React from "react";
import styled from "styled-components";

export default function Empty() {
    return (
        <ComponentContainer>
            <EmptyImage
                source={require("../empty.png")}
            />
            <EmptyText>Add a Reminder</EmptyText>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 600px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 200px;
`;

const EmptyText = styled.Text`
  color: white;
  margin-top: 30px;
  font-size: 30px;
`;