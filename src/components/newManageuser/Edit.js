import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    // const [email, setEmail] = useState(selectedEmployee.email);
    const [UserType, setUserType] = useState(selectedEmployee.UserType);
   const [directory, setDirectory] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !UserType || !directory) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            UserType,
            directory
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                {/* <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /> */}
                <div>
                <label htmlFor="userType" onChange={e => setUserType(e.target.value)}>User Type</label> 
                <select>
                   <option value="select">Select option</option>
                    <option value="Admin"  onChange={e => setUserType(e.target.value)}>Admin</option>
                    <option value="user"  onChange={e => setUserType(e.target.value)}>User</option>
                    </select>
                </div>



                 <div>
                <label htmlFor="directory"onChange={e => setDirectory(e.target.value)}>Select Directory</label>    
                <select>
                   <option value="select">Select option</option>
                    <option value="Dev-1"onChange={e => setDirectory(e.target.value)}>Developer 1</option>
                    <option value="Dev-2"onChange={e => setDirectory(e.target.value)}>Developer 2</option>
                    <option value="Dev-3"onChange={e => setDirectory(e.target.value)}>Developer 3</option>
                    <option value="Dev-4"onChange={e => setDirectory(e.target.value)}>Developer 4</option>
                    <option value="Dev-5"onChange={e => setDirectory(e.target.value)}>Developer 5</option>
                    <option value="Dev-6"onChange={e => setDirectory(e.target.value)}>Developer 6</option>
                    <option value="Dev-7"onChange={e => setDirectory(e.target.value)}>Developer 7</option>
                    <option value="Dev-8"onChange={e => setDirectory(e.target.value)}>Developer 8</option>
                     </select>
                </div>
                {/* <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                /> */}
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit