import React from "react";
import HigherOrder from "./HigherOrder";

const Hover = ({ count, increment }) => {
              return (
                  <div className='hover'>
                      <h2>Hover Button Created by Higher Order Component</h2>
                      <h3>Hover: {count} times</h3>
                      <button onMouseOver={increment}> Hover</button>
                  </div>
              )
          }
          export default HigherOrder(Hover)