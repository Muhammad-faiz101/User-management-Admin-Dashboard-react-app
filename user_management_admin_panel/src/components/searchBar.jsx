

function SearchBar ({search,setSearch}){

        
    return(
    <div className="container-fluid">

        <input value={search} onChange={(e)=>setSearch(e.target.value)} className="form-control m-4 mx-auto" style={{maxWidth:"700px"}} type="text" placeholder="Search name ,email ,roles ,status " />
    
    
    </div>)



}
export default SearchBar