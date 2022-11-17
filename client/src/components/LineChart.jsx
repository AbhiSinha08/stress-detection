import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart(props) {
    return ( 
        <div>
            <div className='text-center text-lg font-semibold' style={{color: props.color}}> {props.name} </div>
            <div className='relative flex'>
                <div className='absolute transform -rotate-90 -left-10 top-20 text-white/40'> {props.yname} </div>
                <LineChart
                  width={900}
                  height={200}
                  data={props.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                    <CartesianGrid strokeDasharray="1 3 0" stroke='grey' horizontal={false} />
                    <XAxis dataKey="timestamp" />
                    <YAxis type="number" domain={props.range} />
                    <Line type="monotone" dataKey="value" stroke={props.color} strokeWidth={props.width} dot={{ fill:props.color, r: 1}} />
                </LineChart>
            </div>
            <div className="text-center text-white/40 pb-4 -mt-2"> Time (in s) </div>
        </div>
    );
}

export default Chart;