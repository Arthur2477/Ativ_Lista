import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Divider, IconButton, Text, TextInput } from 'react-native-paper'

export default function ListaCarros() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editing, setEditing] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  function addTodo() {
    let todoList = todos
    todoList.push(inputValue)
    setTodos(todoList)
    setIsEditing(null)
    setInputValue('')
  }

  function editTodo() {
    let todoList = todos
    todoList.splice(todos.indexOf(isEditing), 1, inputValue)
    setTodos(todoList)
    setEditing(false)
    setInputValue('')
  }

  function deleteTodo(todo) {
    const todoList = todos.filter(item => item !== todo)
    setTodos(todoList)
  }

  function handleEditTodo(todo) {
    setIsEditing(todo)
    setInputValue(todo)
    setEditing(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 4 }}
          mode='outlined'
          label='ToDo'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => (editing) ? editTodo() : addTodo()}
        >
          {editing ? 'Edit' : 'Add'}
        </Button>

      </View>

      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            mode='outlined'
          >
            <Card.Content style={styles.cardContent}>
              <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
              <IconButton icon='pen' onPress={() => {
                handleEditTodo(item)
              }} />
              <IconButton icon='trash-can-outline' onPress={() => {
                deleteTodo(item)
              }} />
            </Card.Content>
          </Card>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
  inputContainer: {
    flexDirection: 'row',
    width: '95%',
    paddingTop: 10,
    gap: 5,
    paddingBottom: 30,
    borderBottomColo: "black",
    borderBottomWidth: 2
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    width: '95%',
    marginTop: 10
  },
  card: {
    margin: 5
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 300
  },
  divider : {
    backgroundColor: "red",
    width: 30
  }
})