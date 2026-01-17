import { createContext, useState } from "react"
import Header from "./components/header"
import SearchBar from "./components/searchBar"
import UserTable from "./components/userTable";

export const usersContext =createContext();
function App() {

  const [users,setUsers]=useState([
      {id:crypto.randomUUID(),name:"faiz", email:"muhammadfaiz6151@gmail.com",role:"admin",enable:true},
      {id:crypto.randomUUID(),name:"Ali", email:"Ali1111@gmail.com",role:"user",enable:false}
  ])
  
  

  return (
    <>
    <usersContext.Provider value={{users ,setUsers}}>
        <Header></Header>
        <SearchBar></SearchBar>
        <UserTable></UserTable>
    </usersContext.Provider>
    </>
  )
}

export default App
