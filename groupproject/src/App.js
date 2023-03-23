import Content from "./components/Content";
import Footer from "./components/Footer";
import Top from "./components/Top";
import React,{useState} from "react";

function App() {
  const [data, setdata] = useState('');
  return (
    <div className="App">
      <Top />
      <Content setdata={setdata}  />
      <Footer />
    </div>
  );
}

export default App;
