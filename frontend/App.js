import React from "react";

import { ScrollView, StyleSheet } from "react-native";

import { NativeRouter, Route, Routes } from "react-router-native";

/* PESTAÑAS DE LA APLICACIÓN */
import LoginPage from "./src/pages/LoginPage";
import HomePage from "./src/pages/HomePage";
import ShowTasksPage from "./src/pages/ShowTasksPage";
import AddTaskPage from "./src/pages/AddTaskPage";
import RegisterPage from "./src/pages/RegisterPage";
import UpdateTaskPage from "./src/pages/UpdateTaskPage";

function App() {
  return(
      // <ScrollView style={styles.scrollView}>
      //   <LoginPage />
      // </ScrollView>
    <ScrollView style={styles.scrollView}>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </NativeRouter>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: "#4c70b9",
  }
})