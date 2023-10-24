import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Divider, IconButton, Text, TextInput } from 'react-native-paper'

export default function ListaCar() {
  const [total, setTotal] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editing, setEditing] = useState(false)
  const [isEditing, setIsEditing] = useState(null)

  function addTotal() {
    let todoLista = total
    todoLista.push(inputValue)
    setTotal(todoLista)
    setIsEditing(null)
    setInputValue('')
  }

  function editTotal() {
    let totalList = total
    totalList.splice(total.indexOf(isEditing), 1, inputValue)
    setTotal(totalList)
    setEditing(false)
    setInputValue('')
  }

  function deleteTotal(total) {
    const totalList = total.filter(item => item !== total)
    setTotal(totalList)
  }

  function handleEditTotal(total) {
    setIsEditing(total)
    setInputValue(total)
    setEditing(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToTal List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 4 }}
          mode='outlined'
          label='TotAL'
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => (editing) ? editTotal() : addTotal()}
        >
          {editing ? 'Edit' : 'Add'}
        </Button>

      </View>

      <FlatList
        style={styles.list}
        data={total}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            mode='outlined'
          >
            <Card.Content style={styles.cardContent}>
              <Text variant='titleMedium' style={{ flex: 1 }}>{item}</Text>
              <IconButton icon='pen' onPress={() => {
                handleEditTotal(item)
              }} />
              <IconButton icon='trash-can-outline' onPress={() => {
                deleteTotal(item)
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