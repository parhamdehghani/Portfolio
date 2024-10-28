import React from 'react';
import { Bar } from 'react-chartjs-2';

const SkillsChart = () => {
  const data = {
    labels: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'AWS', 'Docker', 'Kubernetes'],
    datasets: [
      {
        label: 'Skill Level',
        data: [90, 80, 85, 70, 75, 60, 65], // Skill proficiency (percentage)
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(99, 255, 132, 0.6)',
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  // Using pure function concepts, the component does not modify any external state and depends only on its inputs.
  return <Bar data={data} options={options} />;
};

export default SkillsChart; // Ensure default is used here for export
