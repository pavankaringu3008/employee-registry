// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ViewEmployee = () => {
//   let { id } = useParams()
//   let [employee, setEmployee] = useState(null)
//   let fetchData = async () => {
//     let { data } = await axios.get(`http://localhost:3000/Employee/${id}`)
//     setEmployee(data)
//   }
//   useEffect(() => {
//     fetchData()
//   }, [])
//   return (
//     <div>
//       {employee == null ? "Loading..." : <article>

//         <h2>{employee.name}</h2>
//         <p>{employee.email}</p>
//         <p>📞 +91 {employee.phone}</p>
//         <p>🎂 {employee.dob}</p>
//         <h3>{employee.designation}</h3>
//         <img
//           src={employee.photo}
//           alt={employee.name}
//           className="employee-photo"
//         />
//       </article>}
//     </div>
//   )
// }

// export default ViewEmployee

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewEmployee = () => {
  let { id } = useParams();
  let [employee, setEmployee] = useState(null);

  let fetchData = async () => {
    let { data } = await axios.get(`http://localhost:3000/Employee/${id}`);
    setEmployee(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="view-container">
      {employee == null ? (
        <div className="loading">Loading...</div>
      ) : (
        <article className="employee-card">
          <div className="employee-header">
            <img
              src={employee.photo}
              alt={employee.name}
              className="employee-photo"
            />
            <div className="employee-info">
              <h2>{employee.name}</h2>
              <h3>{employee.designation}</h3>
            </div>
          </div>

          <div className="employee-details">
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 {employee.phone}
            </p>
            <p>
              <strong>🎂 DOB:</strong> {employee.dob}
            </p>
          </div>
        </article>
      )}
    </div>
  );
};

export default ViewEmployee;
