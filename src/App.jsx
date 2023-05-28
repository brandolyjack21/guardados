import { useState, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import axios from 'axios'
import DataUser from './components/DataUser'

function App() {
  const [userState, setUserState] = useState([])

  useEffect(() => {
    allUser()
  }, [])

  const sendUser = (user) => {
     axios.post('https://users-crud.academlo.tech/users/',user )
          .then(() => allUser())
          .catch(error => console.log(error))
  }

  const allUser = () => {
    axios.get('https://users-crud.academlo.tech/users/')
         .then(res => setUserState(res.data))
         .catch(error => console.log(error))
  }

  const edit = idUsuario => {
    const ddd = userState.filter( user => user.id === idUsuario)
    console.log(ddd)
  }
 
 console.log(userState)
  return (
    <>
      <UserForm
      sendUser={ sendUser }
      />
      <ul>
        {
          userState.map( user =>  
            <DataUser
            userState={user}
            edit={edit}
            />
          )
        }
      </ul>
    </>
  )
}

export default App
