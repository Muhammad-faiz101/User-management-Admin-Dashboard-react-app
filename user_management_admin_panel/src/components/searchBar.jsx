

function SearchBar ({search,setSearch}){

        
    return(
    <>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control m-4" style={{width:"500px"}} type="text" placeholder="Search name ,email ,roles ,staus " />
    
    
    </>)



}
export default SearchBar