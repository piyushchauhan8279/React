import Heading from "./components/Heading";
import Card from "./components/Card";
import './App.css'
function App() {
  let titleArr=["Ai Robot","self Driving Car","Automatic Plane","Anomaly Detector"]

  return (
    <>
      <Heading/>
      <div className="main-container">
        <Card titleArr={titleArr} idx={0}/>
        <Card titleArr={titleArr} idx={1}/>
        <Card titleArr={titleArr} idx={2}/>
        <Card titleArr={titleArr} idx={3}/>
      </div>
    </>
  );
}

export default App;
