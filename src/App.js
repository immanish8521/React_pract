import React from 'react'
import Tweet from './components/tweet';
import Nav from './components/nav'
import './App.css';
import Data from './components/tweet.json';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <div className='main-tweet'>
      <Tweet name='Manish'/>
      <Tweet name='Kumar'/>
      <Tweet name='Pathak' />
      </div>
      {
        Data.map(post => {
          return (
            <div key={post.id} className='json'>
              <h1>{post.id}</h1>
              <h2>{post.name}</h2>
              <h3>{post.address}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
