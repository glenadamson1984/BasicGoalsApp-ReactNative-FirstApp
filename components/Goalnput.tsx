import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = (props: any) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText: any) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}><Button title="CANCEL" color="red" onPress={props.onCancelGoal} /></View>
                    <View style={styles.buttonView}><Button title="ADD" onPress={addGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width:"80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%"
    },
    buttonView: {
        width: "30%"
    }
});

export default GoalInput;