import React, {useState} from 'react';
import './components/users.css'
import './components/search.css'
import Users from './components/users';
import profileData from './components/profileData';
import Search from './components/search';

function App() {
  const {search, setSearch} = useState('')
  const profileElement = profileData.map(data => {
        return (

          <Users 
            key = {data.id}
            picture = {data.picture}
            id = {data.id}
            title = {data.title}
            firstName = {data.firstName}
            lastName = {data.lastName}
          />
        )
      })
    
      return(
        <div className='App'>
          <Search />
          <section className='main-body'>
            {profileElement}
          </section>
        </div>
      )
      
      
    
    
  
}

export default App;
