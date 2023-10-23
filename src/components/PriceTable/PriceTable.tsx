import React from "react";

import "./styles/price-table.css";

interface TableProps {
  cityRent: string;
  courtyYard: string;
  minimalRentTime: string;
  holidayPrices: string;
}

const PriceTable: React.FC<TableProps> = ({
  cityRent,
  courtyYard,
  minimalRentTime,
  holidayPrices,
}) => {
  return (
    <table className="request-table">
      <tbody className="request-tbody">
        <tr className="request-row">
          <th className="request-header" colSpan={2}>
            CITY RENT
          </th>
        </tr>
        <tr className="request-row-main">
          <td className="request-data" colSpan={2}>
            City rent ($ / hour)
          </td>
        </tr>
        <tr className="request-row-add">
          <td className="request-data" colSpan={2}>
            From {cityRent}
          </td>
        </tr>
        <tr className="request-row-main">
          <td className="request-data" colSpan={2}>
            Courtyard rent ($ / km)
          </td>
        </tr>
        <tr className="request-row-add">
          <td className="request-data" colSpan={2}>
            {courtyYard}
          </td>
        </tr>
        <tr className="request-row-main">
          <td className="request-data">Minimal rent time</td>
        </tr>
        <tr className="request-row-add">
          <td className="request-data" colSpan={2}>
            {minimalRentTime}
          </td>
        </tr>
        <tr className="request-row-main">
          <td className="request-data" colSpan={2}>
            Holiday Prices
          </td>
        </tr>
        <tr className="request-row-add">
          <td className="request-data" colSpan={2}>
            {holidayPrices}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
