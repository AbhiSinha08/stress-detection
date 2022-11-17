import { useEffect, useState } from "react";
import InputField from "./InputField";
import { predict } from "../API";
import PieChart, { COLORS } from "./PieChart";


function APITest() {
    const [inputs, setInputs] = useState({
        "BVP_mean": -0.181673262,
        "BVP_std": 107.648359,
        "EDA_phasic_mean": 1.824289,
        "EDA_phasic_min": 0.367977083,
        "EDA_smna_min": 0.0000000522965804,
        "EDA_tonic_mean": 1.23216412,
        "Resp_mean": 0.148183977,
        "Resp_std": 2.93561681,
        "TEMP_mean": 35.8170909,
        "TEMP_std": 0.0126739141,
        "TEMP_slope": -0.000169059802,
        "BVP_peak_freq": 0.13566987,
        "age": 27,
        "height": 175.0,
        "weight": 80.0
    });

    

    const [results, setResults] = useState(null);
    const [processedResults, setProcessedResults] = useState(null);

    async function handleSubmit() {
        const res = await predict(inputs);
        setResults(res);
    }

    useEffect(() => {
        if (results) {
            let x = [];
            for (let i = 0; i < 3; i++) {
                let temp = {
                    name: results.labels[i],
                    prob: results.prob[i]
                };
                x.push(temp);
            }

            setProcessedResults(x);
            console.log(x);
        }
    }, [results])

    

    return (
        <>
            <div className="text-3xl text-center text-white/60 mt-8 mb-4">
                Model Demonstration
            </div>
            <div className="flex justify-between mx-auto w-[60%] flex-wrap">
                <InputField inputs={inputs} setInputs={setInputs} name="BVP_mean" />
                <InputField inputs={inputs} setInputs={setInputs} name="BVP_std" />
                <InputField inputs={inputs} setInputs={setInputs} name="EDA_phasic_mean" />
                <InputField inputs={inputs} setInputs={setInputs} name="EDA_phasic_min" />
                <InputField inputs={inputs} setInputs={setInputs} name="EDA_smna_min" />
                <InputField inputs={inputs} setInputs={setInputs} name="EDA_tonic_mean" />
                <InputField inputs={inputs} setInputs={setInputs} name="Resp_mean" />
                <InputField inputs={inputs} setInputs={setInputs} name="TEMP_mean" />
                <InputField inputs={inputs} setInputs={setInputs} name="TEMP_std" />
                <InputField inputs={inputs} setInputs={setInputs} name="TEMP_slope" />
                <InputField inputs={inputs} setInputs={setInputs} name="BVP_peak_freq" />
                <div className="w-40"></div>
                <InputField inputs={inputs} setInputs={setInputs} name="age" small />
                <InputField inputs={inputs} setInputs={setInputs} name="height" small />
                <InputField inputs={inputs} setInputs={setInputs} name="weight" small />
                <button className="rounded-lg bg-yellow-500 hover:bg-yellow-600 transition duration-150 px-2 h-min py-2 mr-12 text-indigo-900 font-semibold mt-4"
                    onClick={handleSubmit}>
                    Predict Stress
                </button>
            </div>

            {processedResults && (
                <div className="flex justify-center items-center text-2xl rounded-xl bg-black/20 mx-16 mt-8">
                    <PieChart data={processedResults} width={500} height={500} outerRadius={200} label />
                    <div className="flex flex-col gap-4">
                        {processedResults.map((entry, index) => (
                            <div className="flex gap-4 items-center">
                                <div className="w-8 h-6 border-[1px] border-white" style={{backgroundColor: COLORS[index % COLORS.length]}}></div>
                                {entry.name} - {entry.prob * 100}%
                            </div>
                        ))}
                        
                    </div>
                </div>
            )}
        </>
    );
}

export default APITest;