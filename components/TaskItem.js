import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
//importamos este hook para navegar
import { useNavigation } from '@react-navigation/native';
const TaskItem = ({task,handleDelete}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
      onPress={()=>navigation.navigate("TaskFormScreen",{id:task.id}) }
      >
          <Text style={styles.itemTitle}>{ task.title}</Text>
          <Text style={styles.itemTitle}>{ task.description}</Text>

      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:"#ee5253",borderRadius:5,padding:7}}
      onPress={()=>  handleDelete(task.id)}
      >
      <Text style={{color:"#ffffff" }} >Delete</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        //alineamos el boton de eliminar a la derecha
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    itemTitle: {
        color: "#ffffff"
    }
})



export default TaskItem