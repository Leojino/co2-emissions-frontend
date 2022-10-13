import "./App.css";
import Header from "components/header";
import MainPanel from "components/MainPanel";
import SidePanel from "components/SidePanel";
import poolOne from 'data/pool_1.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex h-screen pt-12">
        <MainPanel poolData={poolOne}/>
        <SidePanel poolData={poolOne}/>
      </div>
    </div>
  );
}

export default App;
