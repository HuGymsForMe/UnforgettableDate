import React from "react";

import { ScrollView, StyleSheet } from "react-native";

import { NativeRouter, Route, Switch } from "react-router-native";

/* PESTAÑAS DE LA APLICACIÓN */
import LoginPage from "./src/pages/LoginPage";
import HomePage from "./src/pages/HomePage";
import ShowTasksPage from "./src/pages/ShowTasksPage";
import AddTaskPage from "./src/pages/AddTaskPage";
import RegisterPage from "./src/pages/RegisterPage";
import UpdateTaskPage from "./src/pages/UpdateTaskPage";

function App() {
  return(
    <ScrollView style={styles.scrollView}>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/update-task" component={UpdateTaskPage} />
          <Route exact path="/add-task" component={AddTaskPage} />
          <Route exact path="/show-task" component={ShowTasksPage} />
        </Switch>
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