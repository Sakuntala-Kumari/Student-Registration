import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios"

function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001")
        .then(result => setStudents(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete("http://localhost:3001/deleteStudent/"+id)
        .then(res => {
            console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className='btn btn-success'>Add Student</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => {
                                return (
                                    <tr key={student.email}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.age}</td>
                                        <td>
                                            <Link to={`/update/${student._id}`} className='btn btn-success' style={{marginRight: '10px'}}>Update</Link>
                                            <button className='btn btn-danger' 
                                            onClick={(e) => handleDelete(student._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Students;

