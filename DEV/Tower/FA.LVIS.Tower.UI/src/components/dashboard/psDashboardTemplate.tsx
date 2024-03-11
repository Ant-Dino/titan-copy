// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

// ChartJS registration
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define types for our data
interface ExceptionSummary {
  ExceptionName: string;
  NoOfExceptions: number;
  ThreshholdCount: number;
  DateTime: string;
}

interface ExceptionChartData {
  labels: string[];
  datasets: [{
    label: string;
    data: number[];
    backgroundColor: string[];
  }];
}

// Define the React component with TypeScript
const Dashboard: React.FC = () => {
  const [beqSummaryList, setBeqSummaryList] = useState<ExceptionSummary[]>([]);
  const [teqSummaryList, setTeqSummaryList] = useState<ExceptionSummary[]>([]);
  const [beqChartData, setBeqChartData] = useState<ExceptionChartData | null>(null);
  const [teqChartData, setTeqChartData] = useState<ExceptionChartData | null>(null);

// Function to fetch data - simulating AngularJS ngInit and controller methods
  useEffect(() => {
    const fetchExceptionSummaries = async () => {
      try {
        // Simulate fetching data for Business Exception Queue Summary (BEQ)
        const beqResponse = await axios.get('/api/exceptions/beq');
        setBeqSummaryList(beqResponse.data);
        // Preparation for chart data
        prepareChartData(beqResponse.data, 'BEQ');

        // Simulate fetching data for Technical Exception Queue Summary (TEQ)
        const teqResponse = await axios.get('/api/exceptions/teq');
        setTeqSummaryList(teqResponse.data);
        // Preparation for chart data
        prepareChartData(teqResponse.data, 'TEQ');
      } catch (error) {
        console.error('Error fetching exception summaries', error);
      }
    };
    fetchExceptionSummaries();
  }, []);

// Function to prepare data for charts
  const prepareChartData = (data: ExceptionSummary[], type: 'BEQ' | 'TEQ') => {
    const labels = data.map(d => d.ExceptionName);
    const chartData = data.map(d => d.NoOfExceptions);
    const backgroundColors = data.map(d => d.NoOfExceptions >= d.ThreshholdCount ? 'rgba(255, 99, 132, 0.7)' : 'rgba(54, 162, 235, 0.7)');
    const preparedData: ExceptionChartData = {
      labels: labels,
      datasets: [{
        label: `${type} Exception Counts`,
        data: chartData,
        backgroundColor: backgroundColors,
      }],
    };

    if (type === 'BEQ') setBeqChartData(preparedData);
    else setTeqChartData(preparedData);
  };

  return (
    <div className="dashboard">
      {/* Business Exception Queue */}
      <div className="col-md-6">
        <h3>Business Exception Queue</h3>
        {beqSummaryList.map((exc, index) => (
          <div key={index}>{exc.ExceptionName} - {exc.NoOfExceptions}</div>
        ))}
        {beqChartData && <Bar data={beqChartData} />}
      </div>
      {/* Technical Exception Queue */}
      <div className="col-md-6">
        <h3>Technical Exception Queue</h3>
        {teqSummaryList.map((exc, index) => (
          <div key={index}>{exc.ExceptionName} - {exc.NoOfExceptions}</div>
        ))}
        {teqChartData && <Bar data={teqChartData} />}
      </div>
    </div>
  );
};

// Export the component
export default Dashboard;