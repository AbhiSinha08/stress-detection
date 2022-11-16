import Graphs from "./Graphs";
import APITest from "./APITest";

function Dashboard() {
    return ( 
        <div className="overflow-y-scroll h-[85vh]">
            <Graphs />
            <APITest />
        </div>
    );
}

export default Dashboard;