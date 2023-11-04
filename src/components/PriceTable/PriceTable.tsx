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
            Courtyard rent ($ / mile)
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
      <tbody className="request-table-pc">
        <tr className="request-row">
          <th className="request-header-pc" colSpan={4}>
            CITY RENT
          </th>
        </tr>
        <tr>
          <td className="table-additional-heading-pc">City rent ($ / hour)</td>
          <td className="table-additional-heading-pc">
            Courtyard rent ($ / mile)
          </td>
          <td className="table-additional-heading-pc">Minimal rent time</td>
          <td className="table-additional-heading-pc">Holiday Prices</td>
        </tr>
        <tr>
          <td className="table-additional-row-pc">{cityRent}</td>
          <td className="table-additional-row-pc">{courtyYard}</td>
          <td className="table-additional-row-pc">{minimalRentTime}</td>
          <td className="table-additional-row-pc">{holidayPrices}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
