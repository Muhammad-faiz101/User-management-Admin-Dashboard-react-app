import { useState } from "react";


function UserTableRow({user ,ToggleStatus,handleRoleChange,handleStatusClick})
{   
    const [showModal, setShowModal] = useState(false);

    
     const handleModalShow = () => setShowModal(true);


    const roleBtnColor=user.role==="Admin"?"#50d7f2":"#f26b50"
    const statusBtnColor=user.enable?"black":"#adadad"
    return(
        <>
            <tr>
                <td style={{color:statusBtnColor}}>{user.name}</td>
                <td style={{color:statusBtnColor}}>{user.email}</td>
                <td >
                    <select className="rounded-pill w-auto text-center p-1"  style={{backgroundColor:roleBtnColor}} onChange={() =>handleRoleChange(user.id,"User")} value={user.role}>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </td>
                 
            <td><button className="btn btn-info"  onClick={()=>
            {if(user.enable)
            {
                handleStatusClick(user)
            }
            else{
                ToggleStatus(user.id)
            }}
           }>{user.enable?"Enabled":"Disabled"}</button></td>
            </tr>

        
        </>
    
    
)   
                        
                            
                        
}
export default UserTableRow