
function UserTableRow({user ,ToggleStatus,handleRoleChange})
{
    return(
    
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <select onChange={() =>handleRoleChange(user.id,"User")} value={user.role}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </td>
            <td><button onClick={()=>ToggleStatus(user.id)}>{user.enable?"Enabled":"Disabled"}</button></td>
        </tr>
    
    
)   
                        
                            
                        
}
export default UserTableRow