import React from 'react';

const DisplayUser = (props) => {
    const renderTable = ({userdata}) =>{
        if(userdata){
            return userdata.map((item) => {
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.role}</td>
                        <td>{item.city}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div className="container">
            <center><h3>User List</h3></center>
            <table className="table table-responsive" id="mytable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>

    )
}

export default DisplayUser;