import { useContext } from "react";
import SelectedContext from "../Contexts";

function TestCaseBtn(props) {
    const {selected, setSelected} = useContext(SelectedContext);
    return ( 
        <button className={`ml-4 bg-white hover:bg-slate-300 text-indigo-900 px-2 py-1 rounded-lg relative transition transform duration-100 ease-in
        ${selected===props.number && "translate-x-4"}`}
        onClick={()=> {
            setSelected(props.number)
        }}>
            Test Case {props.number}
        </button>
    );
}

export default TestCaseBtn;