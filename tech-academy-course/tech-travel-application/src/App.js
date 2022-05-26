import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import GlobalStyled from "./styles/global";
import Header from "./components/Header";
import { CartContextProvider } from "./context/cart";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
      <GlobalStyled />
    </CartContextProvider>
  );
}

export default App;
