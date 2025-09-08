import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const CreateEmployee = () => {
  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      designation: "",
      photo: "",
    },
    onSubmit: (details, { resetForm }) => {
      axios.post("http://localhost:3000/Employee", details);
      resetForm();
      toast.success("Employee Created Successfully 🥳");
      setTimeout(() => {
        navigate("/");
      }, 4000);
    },
  });

  let handleImageChange = (e) => {
    let file = e.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = () => {
        formik.setFieldValue("photo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  let { name, email, phone, dob, designation } = formik.values;
  let { handleChange, handleSubmit } = formik;

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Employee</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile no."
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Enter your designation"
            value={designation}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" name="photo" id="photo" onChange={handleImageChange} />
        </div>

        <button type="submit" className="btn-primary">
          Create Employee
        </button>
      </form>

      <button onClick={() => navigate("/")} className="btn-secondary">
        Go to Home Page
      </button>

      <ToastContainer />
    </div>
  );
};

export default CreateEmployee;
