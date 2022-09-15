import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type';
import '../Styles/PresenceList.css';
import { Bg } from "../Components/Bg";

export type userType = {
    lastName: string,
    firstName: string,
}
export type type = {
    name: string
}
export type table = {
    lastName: string,
    firstName: string,
}

const NewPresence:React.FC = () => {
    const[teacher, setTeacher] = useState<userType>({
          'lastName':'',
          'firstName': ''
      });
    const[course, setCourse] = useState<type>({'name': ''});
    const[student,setStudent] = useState<table>({
        'lastName':'',
        'firstName':''
    })

    useEffect(() => {
        (
          async () => {
            const {data} = await axios.get("https://localhost:8080/teacher/{teachers_id}");
            setTeacher(data.information);
          }  
        )();
        (
            async () => {
                const {data} = await axios.get("https://localhost:8080/courses/{course_id}");
                setCourse(data.information);
            }
        )();
        (
            async () => {
                const {data} = await axios.get("https://localhost:8080/students");
                setStudent(data.information);
            }
        )
    
      }, [])
    return(
        <>
            <Bg style={{ background: "grey" }} />
            <div className='presence-container'>
            <div className='contour'>
                <div className='header'>
                    
                    <div className='first'>
                        <h4>Teacher</h4>
                       <h3>LASTNAME: {teacher.lastName}</h3>
                        <h3>FIRSTNAME: {teacher.firstName}</h3>
                    
                    </div>
                    <div className='second'>
                        <h1>LIST OF PRESENCE</h1>
                    </div>
                    <div className='three'>
                        <h3>Date: <input type="date" /></h3>
                        
                    </div>
                </div>
                <div className='card-table'>
                    <table id="data">
                            <thead>
                                <tr>
                                    <th>LastName</th>
                                    <th>FirstName</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{student.lastName}</td>
                                    <td>{student.firstName}</td>
                                    <td>{course.name}</td>
                                    <td><input type="checkbox" className='check'/></td>
                                </tr>
                                <tr>
                                    <td>{student.lastName}</td>
                                    <td>{student.firstName}</td>
                                    <td>{course.name}</td>
                                    <td><input type="checkbox" className='check'/></td>
                                </tr>
                            </tbody>
                    </table>
                    
                </div>
            </div>
            <button>Add</button>
            </div>
        </>
    )
}
export default NewPresence;