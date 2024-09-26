import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ValuationChart = ({ valuation, size, propertyType, state, city, area, secondArea }) => {
  // Updated area-wise price data for Residential and Commercial
  const priceData = {
    Residential: {
      Karnataka: {
        Bengaluru: {
          "Koramangala": 15000,
          "Whitefield": 10500,
          "Indiranagar": 14000,
          "Jayanagar": 12000,
          "HSR Layout": 10000,
        },
        Mysuru: {
          "VV Mohalla": 7500,
          "Gokulam": 6500,
          "Jayalakshmipuram": 7200,
          "Siddhartha Layout": 5800,
          "Kuvempunagar": 6200,
        },
      },
      Maharashtra: {
        Mumbai: {
          "South Mumbai": 60000,
          "Bandra": 45000,
          "Juhu": 42000,
          "Powai": 30000,
          "Goregaon": 28000,
        },
        Pune: {
          "Kothrud": 15000,
          "Baner": 14000,
          "Viman Nagar": 14500,
          "Koregaon Park": 20000,
          "Wakad": 12000,
        },
      },
    },
    Commercial: {
      Karnataka: {
        Bengaluru: {
          "Koramangala": 18000,
          "Whitefield": 12500,
          "Indiranagar": 16000,
          "Jayanagar": 14000,
          "HSR Layout": 12000,
        },
        Mysuru: {
          "VV Mohalla": 9000,
          "Gokulam": 8000,
          "Jayalakshmipuram": 8500,
          "Siddhartha Layout": 7000,
          "Kuvempunagar": 7200,
        },
      },
      Maharashtra: {
        Mumbai: {
          "South Mumbai": 75000,
          "Bandra": 55000,
          "Juhu": 50000,
          "Powai": 38000,
          "Goregaon": 34000,
        },
        Pune: {
          "Kothrud": 20000,
          "Baner": 18000,
          "Viman Nagar": 19000,
          "Koregaon Park": 25000,
          "Wakad": 16000,
        },
      },
    },
  };

  // Fetch base price per sq ft for first and second area
  const basePricePerSqFt = priceData[propertyType]?.[state]?.[city]?.[area];
  const secondBasePricePerSqFt = priceData[propertyType]?.[state]?.[city]?.[secondArea];

  // Calculate the base value for both areas
  const baseValue = basePricePerSqFt ? size * basePricePerSqFt : 0;
  const secondBaseValue = secondBasePricePerSqFt ? size * secondBasePricePerSqFt : 0;

  // Data for the chart with two datasets
  const data = {
    labels: ['Base Value', 'Area (sq.ft)', 'Total Valuation'],
    datasets: [
      {
        label: `Valuation for ${area}`,
        data: [baseValue, size, valuation],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: `Valuation for ${secondArea}`,
        data: [secondBaseValue, size, secondBaseValue],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Chart options with tooltips enabled for both datasets
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000000,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw.toLocaleString()} ₹`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h4>Property Valuation Chart</h4>
      <Line data={data} options={options} />
      {/* Display additional info below the chart */}
      <div>
        <p><strong>State:</strong> {state}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Area 1:</strong> {area}</p>
        <p><strong>Area 2:</strong> {secondArea}</p>
        <p><strong>Property Type:</strong> {propertyType}</p>
        <p><strong>Property Size:</strong> {size} sq.ft</p>
      </div>
    </div>
  );
};

export default ValuationChart;
