import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'https://react.dev',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  return (
    <div>

      <h1>Carthago delenda est</h1>

      <Search />

      <hr />
      
      <List list={stories}/>

    </div> 
  );
}

const Search = () => {

  const handleChange = (event) => {
    // syn event 
    console.log(event);
    // value of target is the input element
    console.log(event.target.value);
  }

  const onClick = () => {
    console.log('clicked');
  }

  return (  
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} onClick={onClick}/>
    </div>
  
  ); 
}

const List = (props) => (
    <ul> 
      {props.list.map((item) => (
        <ListItem key={item.objectID} item={item} />
      ))}
    </ul>
)

const ListItem = (props) => (
  <ul> 
     <li key={props.item.objectID}>
          <span>
            <a href={props.item.url}>{props.item.title}</a>
          </span>
          <span>{props.item.author}</span>
          <span>{props.item.num_comments} comments</span>
          <span>{props.item.points} points</span>
        </li>
  </ul>
)

export default App
