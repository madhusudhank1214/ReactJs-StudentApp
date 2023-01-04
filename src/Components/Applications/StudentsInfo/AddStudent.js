import axios from "axios";
import React from "react";
import variables from './Variables';

const baseURL = variables.STUDENT_URL;

export default function AddStudent() {
  const [students, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!students) return null;

  return (
    <div>
      <h1>Students Information</h1>
      <table className='table table-stripped'>
<thead>
    <tr>
        <th>StudentId</th>
        <th>StudentName</th>
    </tr>
</thead>
<tbody>
    {
    students
    .map(stud=>
    <tr key={stud.studentId}>
        <td>{stud.studentId}</td>
    <td>{stud.studentName}</td>
    </tr>
        )
        }
</tbody>
        </table>
    </div>
    
  );
}