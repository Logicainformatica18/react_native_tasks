import { View, Text,FlatList, RefreshControl } from 'react-native'
import React,{useState,useEffect} from 'react'
import TaskItem from './TaskItem'
import { getTasks,deleteTask } from '../api'

//importanto un hook
import { useIsFocused } from '@react-navigation/native'



const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] =  useState(false) 
  const isFocused = useIsFocused();
  
  const loadTasks = async () => {
    const data = await getTasks();

    setTasks(data);
  };

  useEffect(() => {
   // console.log(isFocused)
    loadTasks();
  }, [isFocused]);
  
  const handleDelete = async(id)=>{
    await deleteTask(id)
    await loadTasks();
  }



  const renderItem = ({ item }) => {
    return <TaskItem task={ item} handleDelete={handleDelete} />;

  }





  const onRefresh= React.useCallback(async() =>{
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  },[])

  return (
     
    <FlatList
      style={{width:"100%"}}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl 
        refreshing={refreshing}
        color={["#78e08f"]}
        onRefresh={onRefresh}
        progressBackgroundColor={["#0a3d62"]}
        >
  
        </RefreshControl>
      }
    ></FlatList>
  )
}
export default TasksList