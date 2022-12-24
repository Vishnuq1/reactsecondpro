import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

//const name="Vishnu";
//const currDate = new Date().toLocaleDateString();
//const currTime = new Date().toLocaleTimeString();
let currTime=new Date();
currTime = currTime.getHours();
// const img1= " https,://picsum.photos/200/300";
// const img2= " https://picsum.photos/200/300";
// const img3= " https://picsum.photos/200/300";
// const link="https://www.w3schools.com/";

let greetings=''; 
const cssStyle={ };

if(currTime<=12){
greetings="Good Morning";
cssStyle.color='blue';
}
else if(currTime>12&&currTime<18){
greetings="Good Afternoon";
cssStyle.color='orange';
}
else{
    greetings="Good Night";
    cssStyle.color='navyblue';
}


ReactDOM.render(
    

<h1>Hello Sir,<span style={cssStyle}>{greetings}</span></h1>
//<p>todays date is { //currDate }</p>
//<p>Current time is {//currTime}</p>
//<img src={img1} alt="randomImage"/>
//img src={img2} alt="randomImage"/>
//<a href={link} target="_w3school">
//<img src={img3} alt="randomImage" />
//</a>


, document.getElementById("root"));
