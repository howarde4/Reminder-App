import React, { useState } from "react";
import { Text, Button } from 'react-native'
import styled from "styled-components";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default AddReminder = ({ submitHandler }) => {
    const [reminder, setReminder] = useState("");
    const [time, setTime] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const timeSetter = (time) => {
        setTime(time);
        hideDatePicker();
    }


    return (
        <Container>
            <InputContainer>
                <Input
                    placeholder="Add a Reminder..."
                    value={reminder}
                    onChangeText={setReminder}
                />
            </InputContainer>
            <Button title="Date & Time" onPress={showDatePicker} color="white" />
            <DateTimePickerModal
                mode='datetime'
                isVisible={isDatePickerVisible}
                value={time}
                onDateChange={setTime}
                onConfirm={timeSetter}
                onCancel={hideDatePicker}
            />
            <SubmitButton
                onPress={() => {
                    submitHandler({ reminder, time });
                    setReminder('');
                    setTime(null);
                }}
            >
                <Text style={{ fontSize: 20, color: 'midnightblue' }}>Add</Text>
            </SubmitButton>
        </Container>
    );
}

const Container = styled.View`
  align-items: center;
`;

const InputContainer = styled.View`
  border-radius: 10px;
  align-items: center;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 350px;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 100px;
  justify-content: center;
  align-items: center;
  background-color: powderblue;
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 10px;
`;