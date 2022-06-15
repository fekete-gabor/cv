import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Language } from "./components";
import { HomePage, ErrorPage } from "./pages";
import { useMainContext } from "./context/main-context";

const App = () => {
  const { language } = useMainContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          {language ? (
            <Route path="/" element={<HomePage />} />
          ) : (
            <Route path="/" element={<Language />} />
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
