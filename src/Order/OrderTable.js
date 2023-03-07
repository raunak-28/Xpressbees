import React, { useEffect, useMemo, useRef, useState } from "react";
import OrderRow from "./OrderRow";
import "./OrderPage.css";
import Pagination from "../Pagination/Pagination";

function OrderTable({ data, currentPage, setCurrentPage }) {
  const [pageSize, setPageSize] = useState(10);
  const [pageLimit, setPageLimit] = useState(10);
  const timeoutId = useRef(null);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      setPageSize(pageLimit);
    }, 1000);
  }, [pageLimit]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th> Order Id </th>
            <th> Vendor Name </th>
            <th> Pickup Date </th>
            <th> Status </th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row) => {
            return (
              <OrderRow
                key={row.orderId}
                orderId={row.orderId}
                vendorName={row.vendorName}
                pickupDate={row.pickupDate}
                status={row.status}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className="pageSize">
        <label>Page Size</label>
        <input
          type="number"
          value={pageLimit}
          onChange={(e) => setPageLimit(e.target.value)}
        />
      </div>
    </>
  );
}

export default OrderTable;
