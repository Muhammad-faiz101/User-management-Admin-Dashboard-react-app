import { createContext, useState } from "react"
import Header from "./components/header"
import SearchBar from "./components/searchBar"
import UserTable from "./components/userTable";

export const usersContext =createContext();
function App() {

  const [users,setUsers]=useState([
      {id:crypto.randomUUID(),name:"faiz", email:"muhammadfaiz6151@gmail.com",role:"Admin",enable:true},
      {id:crypto.randomUUID(),name:"Ali", email:"Ali1111@gmail.com",role:"User",enable:false}
  ])
  const [searchInput,setSearchInput]=useState("");
  const filterdUsers=users.filter(user=>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
            
        )
      
  

  return (
    <>
    
        <Header></Header>
        <SearchBar search={searchInput} setSearch={setSearchInput}></SearchBar>
        <UserTable Users={filterdUsers} SetUsers={setUsers}></UserTable>
    
    </>
  )
}

export default App
