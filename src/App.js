import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered & Almond Unsalted"
    },

    {
      id: 2,
      checked: false,
      item: "Item 2"
    } ,

    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, 
    checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist' , JSON.stringify(listItems));
 }
   
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem('shoppinglist' , JSON.stringify(listItems));
    } 
  

  return (
    <div className="App">

      <Header  title="Grocery  List"/>
      <Content 
         items ={items}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;

//App is a component
//return() statement in the component return JSX
//inside any fuction component we can add more js  ln-5 defind a variable
//JSX provide a template for the component layer and it also render data as text when displays it if we provide txt or integer it renders into txt , and ln-23 has input as a array and output is a string , not render boolean
// logo is lexical scope of this component ln-1
// ln - 13,14,15 all these are functional component which we create and import in main js file app.js and then return it  in JSX .

//Work with props inside the Header