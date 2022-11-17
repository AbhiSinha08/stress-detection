import Header from "./components/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import SelectedContext from "./Contexts";
import { useState } from "react";

function App() {
    const [selected, setSelected] = useState(1);
    return (
        <SelectedContext.Provider value={{selected, setSelected}}>
        <div>
            <Header />
            <div className="flex">
                <Nav />
                <Dashboard />
            </div>
        </div>
        </SelectedContext.Provider>
    );
}

export default App;
