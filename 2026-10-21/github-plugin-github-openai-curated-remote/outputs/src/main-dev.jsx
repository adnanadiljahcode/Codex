import { createRoot } from "react-dom/client";
import "./style-dev.css";

const MyVar = 'my var';

const MyData = {
    col1: 'col1',
    col2: 'col2',
    col3: 'col3',
};

const Arr = [
    "arr-0",
    "arr-1",
    "arr-2",
];

const MapArr = Arr.map(x => <p><b>{x}</b></p> );

const MyDataArr = [{
    col1: 'col1',
    col2: 'col2',  
},{
    col1: 'col1',
    col2: 'col2',
}];


function MyParagraph () {
    return (
        <p class="border-4 border-double outline-4 outline-dotted">paragraph. MyVar = {MyVar}</p>
    );
}

function MyButtonProp ( {prop} ) {
    function MyOnClick () {
        alert("onClick: " + prop.prop1);
    }

    return (    
        <button onClick = { MyOnClick } > 
            ( MyButtonProp - {prop.prop2}, {prop.prop3} )
        </button>
    );
}

function MyButtonAttr ( {attr1, attr2, attr3} ) {
    function MyOnClick () {
        alert("onClick: " + attr1);
    }

    return (    
        <button onClick = { MyOnClick } > 
            ( MyButtonAttr - {attr2}, {attr3} )
        </button>
    );
}

function MyButton () {
    function MyOnClick () {
        alert("onClick: " + MyData.col3);
    }

    return (    
        <button class="border-4 border-double border-blue-500" onClick = { MyOnClick } > 
            ( MyButton - { MyData.col2 } )
        </button>
    );
}

function MyAnimation () {
    return (    
        <div>
            <svg>
                <circle cx="50" cy="50" r="10" 
                        class="animate-bounce fill-blue-700 stroke-red-300 stroke-3">                        
                </circle>
            </svg>
        </div>
    );
}

function App () {
    return (
        <div>
            <br /><br />
            <MyParagraph></MyParagraph>
            <br /><br />
            Arr[0] = {Arr[0]}<br />
            Arr[1] = {Arr[1]}<br />
            Arr[2] = {Arr[2]}<br />
            <br />
            MyDataArr[0].col1 = {MyDataArr[0].col1} <br />
            MyDataArr[0].col2 = {MyDataArr[0].col2} <br />
            MyDataArr[1].col1 = {MyDataArr[1].col1} <br />
            MyDataArr[1].col2 = {MyDataArr[1].col2} <br />
            <br />
            MapArr = {MapArr}
            <br /><br />
            {MyData.col1} : <MyButton></MyButton>
            <br /><br />
            {MyData.col1} : <MyButtonAttr attr1="attr1" 
                                          attr2="attr2" 
                                          attr3="attr3">
                            </MyButtonAttr>
            <br /><br />
            {MyData.col1} : <MyButtonProp prop={{ prop1: "prop1", 
                                                  prop2: "prop2", 
                                                  prop3: "prop3" }}>
                            </MyButtonProp>
            <br /><br />
            <MyAnimation></MyAnimation>
            <br /><br />
        
            {MyVar}
        
            <RCmp>Div</RCmp>
            <br />
        
            <RBoxTest></RBoxTest>

            <hr />
            <br />
            
        </div>
    );
}

import RCmp from "./RCmp.jsx";

function RBox( { children } ){
  return (
      <div className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 mx-1 px-2 py-1 text-slate-900 shadow-sm font-sans font-semibold text-sm tracking-wider">
        {children}
      </div>          
  );  
}

function RBoxTest () {
    return (
        <div>
            <br />  
            <RBox>Tailwind CSS</RBox>
            <RBox>Tailwind CSS</RBox>
            <RBox>Tailwind CSS</RBox>
        </div>    
    );
}

createRoot(document.getElementById("root")).render(<App />);
