import { useState } from "react";
import UserTableRow from "./userTableRow.jsx";
import ConfirmationModal from "./statusConfirmationModal.jsx";

function UserTable({Users,SetUsers})
{
    const [modalShow,setModalShow]=useState(false);
    const [selectedUser,setSelectedUser]=useState([]);

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

    function handleModalTrigger(user){
        setSelectedUser(user)
        setModalShow(true)
    }


    return(
        <>
            <div className="table-responsive-sm p-4 ">
                <table className="table table-bordered align-middle text-center " >
                    <thead>
                        <tr className="table-dark">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users.map((user)=>
                                <UserTableRow key={user.id} user={user} ToggleStatus={ToggleUserStatus} handleRoleChange={ToggleUserRole} handleStatusClick={handleModalTrigger}></UserTableRow>
                            )
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
            <ConfirmationModal show={modalShow} user={selectedUser} ToggleStatus={ToggleUserStatus} onHide={()=> setModalShow(false)}></ConfirmationModal>
        </>
    );

}
export default UserTable