import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import Dashboard from "../dashboard";

const AdminHome = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const [wineData, setWineData] = useState([]);

  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await axios.get("https://winesite-2.onrender.com/wines");
        setWineData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWineData();
  }, []);

  useEffect(() => {
    if (pieChartRef.current && wineData.length > 0) {
      if (pieChartRef.current.chart) {
        pieChartRef.current.chart.destroy();
      }
      renderPieChart();
    }
  }, [wineData]);

  useEffect(() => {
    if (barChartRef.current && wineData.length > 0) {
      if (barChartRef.current.chart) {
        barChartRef.current.chart.destroy();
      }
      renderBarChart();
    }
  }, [wineData]);

  const renderPieChart = () => {
    const ctx = pieChartRef.current.getContext("2d");
    const countries = {};
    const colors = generateRandomColors(wineData.length);

    wineData.forEach((wine, index) => {
      const country = wine.country;
      if (!countries[country]) {
        countries[country] = {
          count: 1,
          color: colors[index],
        };
      } else {
        countries[country].count++;
      }
    });

    const labels = Object.keys(countries);
    const data = labels.map((country) => countries[country].count);
    const backgroundColor = labels.map((country) => countries[country].color);

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Wines by Country",
            data: data,
            backgroundColor: backgroundColor,
            hoverOffset: 4,
          },
        ],
      },
    });
  };

  const calculateMonthlySales = (data) => {
    const monthlySales = {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0,
    };

    data.forEach((wine) => {
      const date = new Date(wine.createdAt);
      const month = date.getMonth(); 
      const monthName = new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(new Date(0, month)); 
      monthlySales[monthName]++; 
    });

    return monthlySales;
  };

  const renderBarChart = () => {
    const ctx = barChartRef.current.getContext("2d");
    const monthlySales = calculateMonthlySales(wineData);
    const labels = Object.keys(monthlySales);
    const data = Object.values(monthlySales);

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Monthly Sales",
            data: data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
      colors.push(randomColor);
    }
    return colors;
  };

  return (
    <section className="adminMain">
      <div className="admin-head">
        <Dashboard />
        <div className="statistic">
          <div className="pie-chart">
          <h3>Statistics of countries according to wines</h3>
            <canvas
              id="pieChart"
              ref={pieChartRef}
              width="200"
              height="200"
            ></canvas>
          </div>
          <div className="bar-chart">
            <canvas
              id="barChart"
              ref={barChartRef}
              width="400"
              height="200"
            ></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
