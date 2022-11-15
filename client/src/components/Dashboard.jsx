import Graphs from "./Graphs";
import APITest from "./APITest";

function Dashboard() {
    return ( 
        <div className="overflow-y-scroll">
            <Graphs />
            <APITest />
        </div>
    );
}

export default Dashboard;