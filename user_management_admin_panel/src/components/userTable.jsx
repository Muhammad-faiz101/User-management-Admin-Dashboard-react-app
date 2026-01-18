import UserTableRow from "./userTableRow.jsx";

function UserTable({Users,SetUsers})
{
   

    function ToggleUserStatus(targetId){
        const updatedArray=Users=> Users.map(user=>
            user.id===targetId? {...user,enable:!user.enable}:user
        );
        SetUsers(updatedArray);
        
    }

    function ToggleUserRole(targetId,currentValue)
    {
        const updatedArray=Users=>Users.map(user=>
            user.id===targetId?{...user,role:user.role===currentValue?"Admin":"User"}:user
        )
        SetUsers(updatedArray)
    }



    return(
        <div className="p-4">
            <table className="table border ">
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
                        Users.map((user)=>
                            <UserTableRow key={user.id} user={user} ToggleStatus={ToggleUserStatus} handleRoleChange={ToggleUserRole}></UserTableRow>
                        )
                    }
                    
                       
                    
                </tbody>
            </table>
        </div>
    );

}
export default UserTable