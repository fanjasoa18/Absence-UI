import React, { useState } from 'react';
import LogOut from '../Components/LogOut';
import face from '../Images/head.png';
import '../Styles/Student.css';

function Student() {
    const [firstName, setFirstName] = useState("");
    const [isTeacher, setIsTeacher] = useState(false)
    
    

    return (
        <>
            
            <div className='body' >
                <div className="header">
                    <img src={face} alt=""></img>
                    <h3>HEY YOU!</h3>
                    <input type="date"/>
                </div>
                <div className='header content'>
                    <LogOut />
                    <div className="card">
                        <table id="data">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Course</th>
                                    <th>Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Student;