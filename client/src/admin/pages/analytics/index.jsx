import React, { useContext, useEffect, useRef } from "react";
import Dashboard from "../dashboard";
import "../home/index.scss";
import { UserContext } from "../../../context/UserContext";
import "./index.scss";
const Analytics = () => {
  const chartRef = useRef(null);
  const { revenue } = useContext(UserContext);

  return (
    <section className="adminMain">
      <div className="admin-head">
        <Dashboard />
        <div className="analytics">
          <div className="totalPrice">
            <div className="col-xl-3">
              <div className="total-card">
                <div className="card-title">
                  <span>Total revenue:</span>
                  <h2>${revenue.toFixed(2)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
