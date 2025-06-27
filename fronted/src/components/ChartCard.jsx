import React from 'react';
import Chart from 'react-apexcharts';

const ChartCard = ({ title, type, income, expense, data = [] }) => {
  let chartOptions, chartSeries;

  if (type === 'bar') {
    chartOptions = {
      chart: { id: 'bar-chart' },
      xaxis: { categories: ['Income', 'Expense'] },
      colors: ['#4ade80', '#f87171'],
    };
    chartSeries = [{ name: 'Amount', data: [income, expense] }];
  } else if (type === 'pie') {
    const categoryMap = {};
    data
      .filter((t) => t.type === 'expense')
      .forEach((t) => {
        categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
      });
    chartOptions = {
      labels: Object.keys(categoryMap),
    };
    chartSeries = Object.values(categoryMap);
  }

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow">
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      <Chart options={chartOptions} series={chartSeries} type={type} width="100%" height="250" />
    </div>
  );
};

export default ChartCard;
