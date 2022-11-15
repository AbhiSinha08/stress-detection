import { useState } from "react";
import TestCaseBtn from "./TestCaseBtn";

function Nav() {
    const [selected, setSelected] = useState(2);
    return ( 
        <div className="mt-4 relative flex flex-col gap-8 right-2  pr-6 border-r-[1px] border-white rounded-lg">
            <br />
            <TestCaseBtn number={1} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={2} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={3} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={4} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={5} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={6} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={7} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={8} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={9} selected={selected} setSelected={setSelected}/>
            <TestCaseBtn number={10} selected={selected} setSelected={setSelected}/>
            <br />
        </div>
    );
}

export default Nav;