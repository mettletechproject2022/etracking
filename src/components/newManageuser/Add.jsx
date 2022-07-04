 import React, { useState, useRef, useEffect } from 'react'
 import Swal from 'sweetalert2';
 

 
//form add user or admin
function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [passwordConfirmation, setcPassword] = useState('');
    const [userType,setuserType] = useState('');
    const [Directory, setDirectory] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || !passwordConfirmation || !userType || !Directory ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation,
            userType,
            Directory
            
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                     placeholder='Enter First name'
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder='Enter last name'
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder='Enter email '
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder='Enter your password'
                    name="password"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                />

                  <label htmlFor="password">Confirm Password</label>
                <input
                    id="cpassword"
                    type="Password"
                    placeholder='Confirm Password'
                    name="password"
                    value={passwordConfirmation}
                    onChange={e => setcPassword(e.target.value)}
                />
                
                <label htmlFor="userType">User Type</label>    
                <select>
                   <option value="select">Select option</option>
                    <option value="Admin">Admin</option>
                    <option value="user">User</option>
                    </select>
                    
                

                <div>
                <label htmlFor="directory"onChange={e => setDirectory(e.target.value)}>Select Directory</label>    
                <select>
                   <option value="select">Select option</option>
                    <option value="Dev-1">Developer 1</option>
                    <option value="Dev-2">Developer 2</option>
                    <option value="Dev-3">Developer 3</option>
                    <option value="Dev-4">Developer 4</option>
                    <option value="Dev-5">Developer 5</option>
                    <option value="Dev-6">Developer 6</option>
                    <option value="Dev-7">Developer 7</option>
                    <option value="Dev-8">Developer 8</option>
                     </select>
                </div>
            

                
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add