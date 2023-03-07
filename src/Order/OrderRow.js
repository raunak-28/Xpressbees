import React from "react";

function OrderRow(props) {
  const { orderId, vendorName, pickupDate, status } = props;
  return (
    <tr>
      <td>{orderId}</td>
      <td>{vendorName}</td>
      <td>{pickupDate}</td>
      <td>{status}</td>
    </tr>
  );
}

export default OrderRow;
