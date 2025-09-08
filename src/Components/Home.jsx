import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [details, setDetails] = useState(null);
  let navigate = useNavigate();

  let fetchData = async () => {
    let { data } = await axios.get("http://localhost:3000/Employee");
    setDetails(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/Employee/${id}`)
    location.reload()
  }

  return (
    <section id="home_page">

      <nav className="navbar">
        <h1 className="logo">Employee Registry</h1>
        <button
          className="nav_btn"
          onClick={() => navigate("/create-employee")}
        >
          + Create Employee
        </button>
      </nav>

      <main className="employee-list">
        {details == null ? (
          <p className="loading">Loading Employees...</p>
        ) : details.length === 0 ? (
          <p className="no-data">No Employees Found 👀</p>
        ) : (
          details.map((employee) => (
            <article className="employee-card" key={employee.id}>
              <img
                src={employee.photo}
                alt={employee.name}
                className="employee-photo"
              />
              <h2 className="employee-name">{employee.name}</h2>
              <p className="employee-email">{employee.email}</p>
              <p className="employee-phone">📞 +91 {employee.phone}</p>
              <p className="employee-dob">🎂 {employee.dob}</p>
              <h3 className="employee-designation">{employee.designation}</h3>
              <div className="card-actions">
                <button className="btn-view" onClick={()=>navigate(`/view-employee/${employee.id}`)}>View</button>
                <button className="btn-update" onClick={()=>navigate(`/update-employee/${employee.id}`)}>Update</button>
                <button className="btn-delete" onClick={()=>handleDelete(employee.id)}>Delete</button>
              </div>
            </article>
          ))
        )}
      </main>
    </section>
  );
};

export default Home;
