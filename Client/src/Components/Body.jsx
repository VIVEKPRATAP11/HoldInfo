import React, { useEffect, useState } from "react";
import axios from "axios";

const Body = () => {
  const [value, setValue] = useState([]);

  const item = async () => {
    const { data } = await axios.get("http://localhost:9000/api/v1/data");
    console.log(data.data);
    setValue(data.data);
  };
  useEffect(() => {
    item();
  }, []);
  return (
    <>
      <div className="main-body">
        <table className="center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          <tbody>
            {value.map((items, i) => (
              <tr key={i} className="tableLine">
                <td className="tlbl">{items.name}</td>
                <td>₹{Number(items.last).toFixed(2)}</td>
                <td>₹{Number(items.buy).toFixed(2)}</td>
                <td>₹{Number(items.sell).toFixed(2)}</td>
                <td>₹{Number(items.volume).toFixed(2)}</td>
                <td className="trbr">{items.base_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Body;
