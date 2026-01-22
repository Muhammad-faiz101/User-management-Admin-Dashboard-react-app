

function SearchBar ({search,setSearch}){

        
    return(
    <div className="container">

        <input value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control m-4"  type="text" placeholder="Search name ,email ,roles ,status " />
    
    
    </div>)
//style={{width:"500px"}}


}
export default SearchBar