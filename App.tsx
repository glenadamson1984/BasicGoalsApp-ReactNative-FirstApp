import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalnput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState( [{
      key: "",
      value: ""
  }]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goal: any) => {
      //setCourseGoals([...courseGoals, enteredGoal]);
      // if using a flat list the list expects the key on the item so the array will now be an array of objects
      setCourseGoals([...courseGoals, {key: Math.random().toString(), value: goal}]);
      // alternative code for this is passing a function rather than a value where currentGoals is the assumed state
      // value of the setCourseGoals - apparently there are cases where passing the value has been known not to be
      // the most updated version but its a rare occasion -> stick with the above unless a problem occurs then switch
      // to the below syntax
      // -> setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
      setIsAddMode(false);
  }

  const onDeleteHandler = (goalKey: any) => {
    setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalKey);
    })
  }

  const onShowAddGoalHandler = () => {
    setIsAddMode(true);
  }

    const onCancelAddGoalHandler = () => {
        setIsAddMode(false);
    }

  return (
    <View style={styles.screen}>
        <Button title="Add new Goal" onPress={onShowAddGoalHandler} />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={onCancelAddGoalHandler} />
        {/*use a flat list when the number of items can be quite large*/}
        <FlatList data={courseGoals} renderItem={(itemData: any) => (<GoalItem id={itemData.item.key} onDelete={onDeleteHandler} title={itemData.item.value} />)}/>
        {/*or you can use scrollview but it renders all items even once outside scroll window so its not as performant*/}
          {/*<ScrollView>*/}
          {/*    {courseGoals.map((goal: any, index: any) => {*/}
          {/*        return <View key={index} style={styles.listItem}>*/}
          {/*          <Text>{goal}</Text>*/}
          {/*        </View>*/}
          {/*    })}*/}
          {/*</ScrollView>*/}
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
});

export default App;
