import React from "react";
import {
  Footer,
  Blog,
  Features,
  Header,
  Possibility,
  WhatGPT3,
  Record,
} from "./containers";
import { Brand, CTA, Navbar } from "./components";
import Quran from "./components/quran/Quran";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="recitation" element={<Quran />} />
        <Route path="upload-video" element={<Features />} />
        <Route path="record-audio" element={<Record />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
