
function UserTableRow({user ,ToggleStatus})
{
    return(
    
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td><button onClick={()=>ToggleStatus(user.id)}>{user.enable?"Enabled":"Disabled"}</button></td>
        </tr>
    
    
)   
                        
                            
                        
}
export default UserTableRow