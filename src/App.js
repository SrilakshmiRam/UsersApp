import {Component,useEffect,useState} from 'react'
import UserCard from '../src/UserCard'

import './App.css';


class App extends Component{
  state={data:[]}

  componentDidMount(){
     this.getDataList()
  }

  getDataList=async()=>{
    const url='https://jsonplaceholder.typicode.com/users'
    const options={
      method:'GET'
    }

    const response=await fetch(url,options)
    const responseData=await response.json()
    if(response.ok===true){
      this.setState({
        data:responseData
      })
    }
  }

  render(){
    const {data}=this.state
    console.log(data)
    return(
      <div className='app-container'>
        <h1 className='heading'>Alumnus of Law College</h1>
        <ul className='users-list'>
          {data.map(each=>(
            <UserCard key={each.id} details={each} />
          ))}
        </ul>
      </div>
    )
  }
}




{/*
  const App=()=>{
  const [data,setData]=useState([])

  useEffect=(()=>{
    const getData=async()=>{
      const url='https://jsonplaceholder.typicode.com/users'
    const options={
      method:'GET'
    }

    const response=await fetch(url,options)
    const responseData=await response.json()
    console.log(response)
    }
    getData()
  },[])

  return(
    <h1>Ram</h1>
  )
}

*/}

export default App
