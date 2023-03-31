import ItemList from './ItemList';

const Content = ( {items, handleCheck, handleDelete} ) => {
  
    return(
      <main>
        {items.length ?(  
              <ItemList 
                   items={items}
                   handleCheck={handleCheck}
                   handleDelete={handleDelete}
              />
                ) :(<p style={{ marginTop: '2rem'}} >Your list is empty. </p>
               )}
      </main>
       
    )
}

export default Content


{/* <header className="App-header"></header>
<img src={logo} className="App-logo" alt="logo" /> */}
//ln-24 function expression
//handleNameChange() only cl once , we have fun defined appear the top call handling change when the page load we just cl action 
//it render component and display here
//we need to handle state of our component and react it actually gets it's name boz in react  to changes the state of component , when it changes it re-render(ln21-32) the JSX 
//Returns a stateful value, and a function to update it. - useState 
//When we click handleClick  (click it) then it use count state and locked the value in console 
//the value of the state comes into the fun() we dont alter that , even know you might use setCount or whatever you use to set the State for u used State
// we use const in name and count bcoz u don't want to change this value

//Each list item in react needs a Key (it is a attribute) ,so we just used id above item no as the key
//React needs key for each listItem these helps react to identify which item is changed  or add or remove bocz we acts or response to changes in State and It renders JSX.So reacts need to keep tracking them.So , that is why a list item needs to hv a key attribute. 



// const handleNameChange = () => {
//   const names = ['Rosy','Khushi','Rani'];
//   const int = Math.floor(Math.random() * 3);
//   // return names[int];
//   setName(names[int]);
// }

// const handleClick  = () => {
//   setCount(count + 1)
//   setCount(count + 1)
//   console.log(count)
// }

// const handleClick2  = () => {
//   console.log(count)
// }
// return(

//   <main>
//    <p onDoubleClick={handleClick}>
//      Hello  {name} !..
//    </p> 
//     <button onClick = {handleNameChange} > Change Name </button>
//     <button onClick = {handleClick} > Click It </button>
//     <button onClick = { handleClick2}> Click It </button>
//   </main>
// )

//Props u might expect it comes from properties
//Prop hold data and it pass the data from parent component to child component