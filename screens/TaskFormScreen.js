import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//importando estilos
import Layout from '../components/Layout';
//importando save
import {saveTask, getTask, updateTask} from '../api';

const TaskFormScreen = ({navigation, route}) => {
  const [task, setTask] = useState ({
    title: '',
    description: '',
  });
  //inicialmente el formulario no va actualizar , pero si tiene un id sí
  const [editing, setEditing] = useState (false);

  const handleChange = (name, value) => setTask ({...task, [name]: value});

  const handleSubmit = async () => {
    if (!editing) {
      await saveTask (task);
    } else {
      console.log("ededfe")
      await updateTask(route.params.id,{...task} );
    }
    
    navigation.navigate ('HomeScreen');
  };

  useEffect (() => {
    if (route.params && route.params.id) {
      setEditing(true)
      //    console.log(route.params.id);
      navigation.setOptions ({headerTitle: 'Actualizando tarea'});
      (async () => {
        const task = await getTask (route.params.id);
        setTask({title: task.title, description: task.description});
      }) ();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a title"
        placeholderTextColor="#546574"
        onChangeText={text => handleChange ('title', text)}
        value={task.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a Description"
        placeholderTextColor="#546574"
        onChangeText={text => handleChange ('description', text)}
        value={task.description}
      />
      {!editing ?(
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
      ) 
        :(  <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Modificar Tarea</Text>
            </TouchableOpacity>
        ) }

    </Layout>
  );
};

const styles = StyleSheet.create ({
  input: {
    width: '90%',
    marginBottom: 7,
    borderWidth: 1,
    fontSize: 14,
    height: 35,
    color: '#ffffff',
    padding: 10,
    borderColor: '#0cf73f',
    borderRadius: 5,
  },
  buttonSave: {
    padding: 10,
    backgroundColor: '#10ac84',
    width: '90%',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default TaskFormScreen;
