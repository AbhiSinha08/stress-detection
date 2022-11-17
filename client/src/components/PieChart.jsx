import { useEffect } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#FFBB28', '#0088FE', '#b2420a'];

function Chart(props) {
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };


    return ( 
        <PieChart width={props.width} height={props.height}>
            <Pie
                data={props.data}
                dataKey="prob"
                outerRadius={props.outerRadius}
                label={props.label ? renderCustomizedLabel: null}
            >
                {
                    props.data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
        </PieChart>
     );
}

export default Chart;
export { COLORS };