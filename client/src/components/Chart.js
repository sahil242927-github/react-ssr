import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart({ points, ids }) {
  const chartData = {
    labels: ids,
    datasets: [
      {
        label: 'Ids',
        data: points,
        backgroundColor: ['rgba(75, 192, 192, 0.6)'],
        borderWidth: 4,
      },
    ],
  };

  //   console.log('---------------------');
  //   console.log(points);
  //   console.log(ids);
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'Line chart', display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
