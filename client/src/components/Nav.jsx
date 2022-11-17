import TestCaseBtn from "./TestCaseBtn";

function Nav() {
    return ( 
        <div className="mt-4 relative flex flex-col gap-8 right-2 w-[30%] pr-8 bg-black/20 rounded-2xl">
            <br />
            <TestCaseBtn number={1} />
            <TestCaseBtn number={2} />
            <TestCaseBtn number={3} />
            <TestCaseBtn number={4} />
            <TestCaseBtn number={5} />
            <TestCaseBtn number={6} />
            <TestCaseBtn number={7} />
            <TestCaseBtn number={8} />
            <TestCaseBtn number={9} />
            <TestCaseBtn number={10} />
            <br />
        </div>
    );
}

export default Nav;