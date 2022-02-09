import React,{useState, useEffect} from 'react'
import Loader from '../assets/Loader'
import UserItem from './UserItem'

export default function UsersResults() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  },[])
  
  const fetchUsers = async () =>{
    const response = await fetch(`${process.env.REACT_APP_GITHUUB_URL}/users`, {
      headers:{
        Authorization: `token ${process.env.REACT_APP_GITHUUB_TOKEN}`
      }
    }) 

    const data = await response.json()
    setUsers(data)
    setLoading(false)

  }

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user)=>(
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }else{
    return <Loader />
  }
}
