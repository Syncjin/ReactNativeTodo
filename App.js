/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';

import Todo from "./ToDo"


const { height, width } = Dimensions.get("window")



type Props = {};
export default class App extends Component<Props> {
  state = {
    newTodo: ""
  }
  render() {
    const { newTodo } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>This is To Do</Text>
        <View style={styles.card}>
          <TextInput 
            style={styles.input} 
            value={newTodo}
            onChangeText={this._controlNewTodo}
            placeholder={"New To Do"}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false} //키보드 자동수정방지
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <Todo />
          </ScrollView>
        </View>
      </View>
    );
  }

  _controlNewTodo = text => {
    this.setState({
      newTodo: text
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center', // column일때 center
    backgroundColor: '#F23657',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card:{
    backgroundColor:"white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
    ...Platform.select({ //shadow 적용법
      ios: {
        shadowColor:"rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 30,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos: {
    alignItems: "center"
  }
  
});
