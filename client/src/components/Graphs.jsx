import { useContext, useEffect, useState } from "react";
import SelectedContext from "../Contexts";
import { getTestCase, getTestResult } from "../API";
import { PieChart, Pie, Cell } from 'recharts';

function Graphs() {
    const {selected} = useContext(SelectedContext);

    const [BVP, setBVP] = useState(null);
    const [EDA, setEDA] = useState(null);
    const [res, setRes] = useState(null);

    const labels = ["Amused", "Neutral", "Stressed"];

    useEffect(() => {
        async function getTestData(num) {
            let temp = await getTestCase(num);
            setBVP(temp.BVP);
            setEDA(temp.EDA);
            temp = await getTestResult(num);
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
        if (selected) {
            getTestData(selected);
        }
    }, [selected])


    return (
        <div className="rounded-lg bg-black/20 w-[80%] h-[70vh] mx-auto mt-8">
            {res && (
                <div>
                    <PieChart data={res} width={50} height={50} outerRadius={20} />
                    
                </div>
                
            )}
        </div>
    );
}

export default Graphs;