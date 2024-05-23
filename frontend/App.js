import { useState, useEffect } from "react";

import { ScrollView, StyleSheet, View, Text, StatusBar } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { NativeRouter, Route, Routes } from "react-router-native";

/* PESTAÑAS DE LA APLICACIÓN */
import LoginPage from "./src/pages/LoginPage";
import HomePage from "./src/pages/HomePage";
import ShowTasksPage from "./src/pages/ShowTasksPage";
import AddTaskPage from "./src/pages/AddTaskPage";
import RegisterPage from "./src/pages/RegisterPage";
import UpdateTaskPage from "./src/pages/UpdateTaskPage";
import LoadingPage from "./src/pages/LoadingPage";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
      return <LoadingPage />;
  }

  return(
    <>
    <StatusBar backgroundColor={'black'} />
    <SafeAreaProvider>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/show-tasks" element={<ShowTasksPage />} />
            <Route path="/add-task" element={<AddTaskPage />} />
          </Routes>
        </NativeRouter>
    </SafeAreaProvider>
    </>
  )
}

export default App;