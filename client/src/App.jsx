import React from "react";
import SortTest1 from "./components/SortTest1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SortTest1 />} />
      </Routes>
    </BrowserRouter>
  );
}
