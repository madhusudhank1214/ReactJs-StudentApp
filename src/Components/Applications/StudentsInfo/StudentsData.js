import React, { Component,useEffect, useState } from 'react';
import axios from "axios";
import variables from './Variables';

export class StudentsData extends Component{
constructor(props){
    super(props);
    this.state = {
        students: [],
DataisLoaded: false
    };
}
//fetch(variables.STUDENT_URL)
// refreshList(){
//     fetch('https://localhost:44303/api/students')
//     .then((response) => response.json())
//     .then(data => {
//         this.setState({students:data});
//     })
//     .catch((error) =>{
//         console.error(error);
//     });
//     }
//     // componentDidMount(){
//     //     this.refreshList();
//     // }
// }
componentDidMount() {
fetch(variables.STUDENT_URL)
.then((res) => res.json())
.then((json) => {
this.setState({
    students: json,
DataisLoaded: true
});
})
}
render(){
    const { DataisLoaded, students } = this.state;
        if (!DataisLoaded) return <div>
    <h1> Pleses wait some time.... </h1> </div> ;
    return( <div>
        <p>Students Data</p>
        <table className='table table-stripped'>
<thead>
    <tr>
        <th>StudentId</th>
        <th>StudentName</th>
    </tr>
</thead>
<tbody>
    {students.map(stud=>
    <tr key={stud.studentId}>
        <td>{stud.studentId}</td>
        <td>{stud.studentName}</td>
    </tr>
        )}
    </tbody>
        </table>
        </div>);
    
}
// render() {
//     const { DataisLoaded, students } = this.state;
//     if (!DataisLoaded) return <div>
//     <h1> Pleses wait some time.... </h1> </div> ;
//     return (
//     <div className = "App">
//     <h1> Fetch data from an api in react </h1> {
//     students.map((stud) => (
//     <ol key = { stud.id } >
//     User_Name: { stud.studentId },
//     Full_Name: { stud.studentName },
//     User_Email: { stud.studentName }
//     </ol>
//     ))
//     }
//     </div>
//     );
//     }
    
}