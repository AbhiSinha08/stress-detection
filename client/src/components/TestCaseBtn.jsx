function TestCaseBtn(props) {
    return ( 
        <button className={`ml-4 bg-white text-indigo-900 px-2 py-1 rounded-lg relative ${props.selected==props.number && "left-4"}`}
        onClick={()=> {
            props.setSelected(props.number)
        }}>
            Test Case {props.number}
        </button>
    );
}

export default TestCaseBtn;