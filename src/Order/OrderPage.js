import React, { useState } from "react";
import OrderTable from "./OrderTable";
import { orderData } from "../Data/OrderData";
import "./OrderPage.css";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const [orders, setOrders] = useState(orderData);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const validUser = JSON.parse(window.sessionStorage.getItem("validUser"));

  return (
    <>
      {validUser ? (
        <>
          <button className="logout-btn" onClick={() => navigate("/")}>
            LogOut
          </button>
          <Search
            orders={orders}
            setCurrentPage={setCurrentPage}
            setOrders={setOrders}
            data={orderData}
          />
          <div className="table-container">
            <OrderTable
              data={orders}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <div className="warning-msg">
          <div>PLEASE LOGIN TO CONTINUE</div>
          <button onClick={() => navigate("/")}>LOGIN</button>
        </div>
      )}
    </>
  );
}

export default OrderPage;
