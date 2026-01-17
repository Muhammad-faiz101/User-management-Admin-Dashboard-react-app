import { useContext } from "react"
import { usersContext } from "../App"
import UserTableRow from "./userTableRow.jsx";

function UserTable()
{
    const {users}=useContext(usersContext);
    const {setUsers}=useContext(usersContext);

    function ToggleUserStatus(targetId){
        const updatedArray=users=> users.map(user=>
            user.id===targetId? {...user,enable:!user.enable}:user
        );
        setUsers(updatedArray);
        


    }



    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>
                            <UserTableRow key={user.id} user={user} ToggleStatus={ToggleUserStatus}></UserTableRow>
                        )
                    }
                    
                       
                    
                </tbody>
            </table>
        </>
    );

}
export default UserTable