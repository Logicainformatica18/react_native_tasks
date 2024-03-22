import React from 'react'
//cuando se importa un componente como tasklist debe ser sin llaves
import TasksList from "../components/TasksList";
//importando estilos 
import Layout from '../components/Layout';

const HomeScreen = () => 
   (
    <Layout>
    <TasksList/>
    </Layout>
  )

export default HomeScreen