
import { createRoot } from "react-dom/client";

import "./style-dev.css";

function App() {
  return (
    <div>
    
    {/*
        <h2>h2</h2>
        <p>paragraph</p>
        <form action="about:blank" method="get">
            <input type="text" name="text"></input>
            <input type="submit"></input>
            <button onClick={OnClk}>button</button>
        </form>
    */}

    <svg className="fill-blue-900 stroke-green-900 stroke-8">
        <circle r={48}></circle>    
    </svg>
    <p>paragraph</p>
    <button onClick={OnClk}>button</button>
    <ADiv></ADiv>
    <AAttr attr="attr"></AAttr>
    <AProp prop={ {prop: "prop"} }></AProp>
    <ATag> tag </ATag>
    <div> {MyVar} </div>
    <div> {MyProp.prop1}, {MyProp.prop2} </div>
    <div> {MyArr[0]}, {MyArr[1]} </div>
    <div> map-{MyMapArr[0]}, map-{MyMapArr[1]} </div>
    <div> filter-{MyFilterArr[0]}, filter-{MyFilterArr[1]} </div>
    <img src="./assets/cafe.png" alt="cafe"/>
    <img src="./assets/bookings.png" alt="bookings"/>
    <img src="./assets/cafe.jpg" alt="cafe"/>
    <img src="./assets/bookings.jpg" alt="bookings"/>
    </div>
    
  );
}

const MyVar = "myvar";
const MyProp = { prop1:"prop0", prop2:"prop1" } ;
const MyArr = ["arr0", "arr1"];
const MyMapArr = MyArr.map(x => <b>{x}</b> );
const MyFilterArr = MyArr.filter(x => x !== "arr0");

function ADiv() {
    return ( <div> div </div> );
}

function AAttr( {attr} ) {
    return ( <div> {attr} </div> );
}

function AProp( {prop} ) {
    return ( <div> {prop.prop} </div> );
}

function ATag ( {children} ) {
    return ( <div> {children} </div>);
}

function OnClk() {
    alert("OnClk");
}

createRoot(document.getElementById("root")).render(<App />);
