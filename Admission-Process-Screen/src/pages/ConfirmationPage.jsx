import { useLocation, useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import "../style/ConfirmationPage.css";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const patient = location.state;

  if (!patient) {
    return (
      <div className="confirmation-empty-container">
        <div className="confirmation-empty-card">
          <h2 className="confirmation-empty-title">No Admission Data Found</h2>

          <button
            onClick={() => navigate("/")}
            className="confirmation-back-btn"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <div className="confirmation-wrapper">
        {/* Header */}
        <div className="confirmation-header">
          <FaCircleCheck className="confirmation-icon" />

          <h1 className="confirmation-heading">Admission Confirmed</h1>

          <p className="confirmation-subtitle">
            Patient admission completed successfully
          </p>
        </div>

        {/* Details */}
        <div className="confirmation-grid">
          <div className="confirmation-card">
            <span className="confirmation-label">Patient Name</span>

            <p className="confirmation-value">
              {patient.title} {patient.patientName}
            </p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Gender</span>

            <p className="confirmation-value">{patient.gender}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Age</span>

            <p className="confirmation-value">{patient.age}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Date of Birth</span>

            <p className="confirmation-value">{patient.dob}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Phone</span>

            <p className="confirmation-value">{patient.phone}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Email</span>

            <p className="confirmation-value">{patient.email}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Blood Group</span>

            <p className="confirmation-value">{patient.bloodGroup}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Disease</span>

            <p className="confirmation-value">{patient.disease}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Doctor</span>

            <p className="confirmation-value">{patient.doctor}</p>
          </div>

          <div className="confirmation-card">
            <span className="confirmation-label">Admission Date</span>

            <p className="confirmation-value">{patient.admissionDate}</p>
          </div>

          <div className="confirmation-card full-width">
            <span className="confirmation-label">Address</span>

            <p className="confirmation-value">{patient.address}</p>
          </div>
        </div>

        {/* Button */}
        <div className="confirmation-footer">
          <button
            onClick={() => navigate("/")}
            className="confirmation-submit-btn"
          >
            Back To Admission Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
