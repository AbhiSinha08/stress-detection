import { useContext, useEffect, useState } from "react";
import SelectedContext from "../Contexts";
import { getTestCase, getTestResult } from "../API";
import PieChart, { COLORS } from "./PieChart";
import LineChart from "./LineChart";

function Graphs() {
    const {selected} = useContext(SelectedContext);

    const [BVP, setBVP] = useState(null);
    const [EDA, setEDA] = useState(null);
    const [res, setRes] = useState(null);

    const labels = ["Amused", "Neutral", "Stressed"];

    useEffect(() => {
        if (selected) {
            async function getTestData(num) {
                let temp = await getTestCase(num);
                setBVP(temp.BVP);
                setEDA(temp.EDA);
                temp = await getTestResult(num);
                temp = JSON.parse(temp);
                let x = []
                for (let i = 0; i < 3; i++) {
                    let t = {
                        name: labels[i],
                        prob: temp[i]
                    };
                    x.push(t);
                }
                setRes(x);
            }
            getTestData(selected);
        }
    }, [selected])


    return (
        <div className="rounded-lg bg-black/20 w-[90%] h-[75vh] flex items-center mt-8 mx-auto">
            {res && (
                <>
                    <div className="flex flex-col justify-center items-center mx-16 mt-4">
                        <PieChart data={res} width={150} height={150} outerRadius={70} />
                        <div className="flex flex-col justify-center gap-2 pl-4">
                            {res.map((entry, index) => (
                                <div className="flex gap-4 items-center" key={index}>
                                    <div className="w-4 h-3 border-[1px] border-white" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                                    {entry.name} - {entry.prob}%
                                </div>
                            ))}

                        </div>
                    </div>
                    <div>
                        <LineChart data={BVP} range={[-400, 600]} color="#db29ab" yname="Beats Per Second" name="Blood Volume Pulse" />
                        <LineChart data={EDA} range={['auto', 'auto']} color="#06b20b" width={2} yname="Microsiemens" name="Electrodermal Activity" />
                    </div>
                </>
            )}
        </div>
    );
}

export default Graphs;