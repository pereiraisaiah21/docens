import React from "react";

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import MainTitle from "../../../components/title/MainTitle";
import { FaOptinMonster } from 'react-icons/fa';

/**
 * 
 * @returns 
 */

function NavigationMyStats () {

    const chartData = {
        labels: ['52', '16', '14', '8', '4', '1'],
        datasets: [
          {
            label: 'Perguntas',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Acertos',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return (

        <section className="chrt">
            <MainTitle description="estatistica" descriptionUnder="Meu aproveitamento" icon={<FaOptinMonster />} />
            <Chart type='line' data={chartData} />
        </section>
    );
}

export default NavigationMyStats;