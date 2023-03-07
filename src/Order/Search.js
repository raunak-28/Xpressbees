import React, { useState } from "react";
import "./Search.css";

const initFilter = {
  orderId: "",
  vendorName: "",
  pickupDate: "",
  status: "",
};

function Search({ orders, setOrders, data, setCurrentPage }) {
  const [filter, setFilter] = useState(initFilter);

  const handleChange = (field, e) => {
    setFilter({ ...filter, [field]: e.target.value });
  };

  const handleSearch = () => {
    const filteredData = orders.filter((order) => {
      let filterOrderId =
        filter.orderId.length > 0
          ? order.orderId.toString() === filter.orderId
          : true;
      let filterVendorName =
        filter.vendorName.length > 0
          ? order.vendorName.toLowerCase() === filter.vendorName.toLowerCase()
          : true;

      let filterPickupDate =
        filter.pickupDate.length > 0
          ? new Date(order.pickupDate).getFullYear() ===
              new Date(filter.pickupDate).getFullYear() &&
            new Date(order.pickupDate).getDate() ===
              new Date(filter.pickupDate).getDate() &&
            new Date(order.pickupDate).getMonth() ===
              new Date(filter.pickupDate).getMonth()
          : true;

      let filterStatus =
        filter.status.length > 0
          ? order.status.toLowerCase() === filter.status.toLowerCase()
          : true;

      return (
        filterOrderId && filterVendorName && filterStatus && filterPickupDate
      );
    });

    setOrders([...filteredData]);
    setCurrentPage(1);
  };
  const handleReset = () => {
    setFilter(initFilter);
    setOrders([...data]);
  };
  return (
    <div className="search">
      <div className="search-ele">
        <label for="order_id">Order Id</label>
        <input
          id="order_id"
          value={filter.orderId}
          onChange={(e) => handleChange("orderId", e)}
        />
      </div>
      <div className="search-ele">
        <label for="Vendor_Name">Vendor Name</label>
        <input
          id="Vendor_Name"
          value={filter.vendorName}
          onChange={(e) => handleChange("vendorName", e)}
        />
      </div>
      <div className="search-ele">
        <label for="pickup_date">Pickup Date</label>
        <input
          id="pickup_date"
          type="date"
          value={filter.pickupDate}
          onChange={(e) => handleChange("pickupDate", e)}
        />
      </div>
      <div className="search-ele">
        <label for="status">Status</label>
        <select
          id="status"
          name="status"
          value={filter.status}
          onChange={(e) => handleChange("status", e)}
        >
          <option value="">--Please choose an option--</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="shipped">Shipped</option>
        </select>
      </div>
      <button className="search-btn" onClick={handleSearch}>
        Search
      </button>
      <button className="search-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Search;
