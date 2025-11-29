import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list = [
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

const App = () => ( 
    <div>

      <h1>Carthago delenda est</h1>

      <Search />

      <hr />
      
      <List />

    </div> 
)

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

const List = () => (
    <ul> 
      {list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments} comments</span>
          <span>{item.points} points</span>
        </li>
      ))}
    </ul>
)

export default App
