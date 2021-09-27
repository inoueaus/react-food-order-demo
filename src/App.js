import { useState } from "react";
import "./App.css";
import OrderConfirmation from "./components/Order/OrderConfirmation";
import MenuList from "./components/Menu/MenuList";
import Header from "./components/Header/Header";
import CartProvider from "./helpers/CartProvider";

function App() {
  const [showOrder, setShowOrder] = useState(false);

  const toggleOrderForm = () => {
    if (showOrder) {
      setShowOrder(false);
    } else {
      setShowOrder(true);
    }
  };

  return (
    <CartProvider setShowOrder={setShowOrder}>
      {showOrder && (
        <OrderConfirmation
          toggleOrderForm={toggleOrderForm}
        />
      )}
      <Header toggleOrderForm={toggleOrderForm} />
      <MenuList />
    </CartProvider>
  );
}

export default App;
