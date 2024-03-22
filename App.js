import React from "react";
//importamos para la navegacion entre paginas
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text,TouchableOpacity } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";
// permite difinir la diferentes rutas o distintas paginas de la aplicacion
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={({ navigation }) => ({ 
          title:'Aplicación de Tareas',
          headerStyle: {
            backgroundColor: '#222f3e'
          },
          headerTitleStyle:
          {
            color: "#ffffff"
          },
          headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate("TaskFormScreen")}>
              <Text style={{color:"#ffffff",marginRight:20,fontSize:15}}>New</Text>

            </TouchableOpacity>
          )
        })}>

        </Stack.Screen>
        <Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
          options={({
            title: "Crea una nueva tareas",
            headerStyle: {
              backgroundColor: "#222f3e",
              padding: 20,
              flex: 1,
              alignItems: "center"
            },
            headerTitleStyle: {
                color: "#ffffff",
            }

    })}
        ></Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App