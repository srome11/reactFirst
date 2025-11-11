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

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(function (item) { 
            return (
              <li key={item.objectID}>
                <span style={{ marginRight: '10px' }}>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span style={{ marginRight: '10px' }}>{item.author}</span>
                <span style={{ 
                  marginRight: '10px',
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.9em'
                }}>
                  💬 {item.num_comments} comments
                </span>
                <span style={{ 
                  backgroundColor: '#f3e5f5',
                  color: '#7b1fa2',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  ⭐ {item.points} points
                </span>
              </li>
            ); 
        })}
      </ul>
      

    </div>
  )
}

export default App
