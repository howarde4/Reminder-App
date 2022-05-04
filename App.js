import React, { useState } from "react";
import { View, FlatList } from "react-native";
import styled from "styled-components";
import AddReminder from "./Components/AddReminder";
import ReminderList from "./Components/ReminderList";
import Empty from "./Components/Empty";
import Header from "./Components/Header";


export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = ({ reminder, time }) => {
    setData((prevReminder) => {
      return [
        {
          reminder: reminder,
          time: time,
          key: Math.random().toString(),
        },
        ...prevReminder,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevReminder) => {
      return prevReminder.filter((reminder) => reminder.key != key);
    });
  };
  return (
    <ComponentContainer>
      <View>
        <FlatList
          data={data}
          ListHeaderComponent={() => <Header />}
          ListEmptyComponent={() => <Empty />}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <ReminderList item={item} deleteItem={deleteItem} />}
        />
        <View>
          <AddReminder submitHandler={submitHandler} />
        </View>
      </View>
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: slateblue;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;