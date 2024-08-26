import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import EstimationAssistant from "./pages/EstimationAssistant";
import Tools from "./pages/Tools";
import Compliance from "./pages/Compliance";
import Downloads from "./pages/Downloads";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ marginTop: "100px" }}>
        {" "}
        {/* Adjust based on AppBar height */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/estimation-assistant"
            element={<EstimationAssistant />}
          />
          <Route path="/tools" element={<Tools />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
