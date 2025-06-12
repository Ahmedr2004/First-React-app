/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/
/*import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'*/
//import Card from './Card.jsx'
//import Button from './Button2.jsx'
//import Student from './Student(props).jsx'
import List from './List.jsx'
function App() { 
  const fruits = [{id : 1 , name: "apple" , cal: 95} , 
                    {id : 2 , name: "banana" , cal: 45}, 
                    {id : 3 , name: "cherry" , cal: 105}, 
                    {id : 4 , name: "date" , cal: 159}, 
                    {id : 5 , name: "elderberry" , cal: 37}];
    
  return(
    /*<>
      <Student name="Mohammed Ahmed" age={20} isStudent={true}/>
      <Student name="John Doe" age={22} isStudent={false}/>
      <Student name="Jane Smith" age={19} isStudent={true}/>
    </>*/

    <>
      {fruits.length>0 &&< List items = {fruits} category="Fruits" />}
    </>
  );
  
}

export default App;
