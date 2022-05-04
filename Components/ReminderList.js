import React, { useState } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import moment from "moment";
import { Switch } from "react-native-switch";

export default ReminderList = ({ item, deleteItem }) => {

    const [completed, setCompleted] = useState(false);


    const timeFormat = time => {
        if (!time) {
            return "anytime";
        }
        return moment(time).format('MMMM Do YYYY, h:mm:ss a');
    };

    const complete = () => {
        setCompleted(previousState => !previousState);
    };

    return (
        <ComponentContainer>
            <ListContainer>
                <View>
                    <Switch
                        onValueChange={complete}
                        value={completed}
                        inActiveText={'To Do'}
                        activeText={'Done'}
                        circleSize={30}
                        switchWidthMultiplier={3}
                    />
                    <TextItem>{item.reminder} complete by {timeFormat(item.time)}</TextItem>
                </View>
                <IconContainer onPress={() => deleteItem(item.key)}>
                    <MaterialIcons name="delete" size={24} color="midnightblue" />
                </IconContainer>
            </ListContainer>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  padding: 10px;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 280px;
  font-size: 20px;
  margin-top: 10px;
`;

const IconContainer = styled.TouchableOpacity`
  margin-right: 5px;
`;