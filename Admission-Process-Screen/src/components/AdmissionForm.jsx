import doctors from "../data/dummaydata";
import useAdmissionForm from "../hooks/useAdmissionForm";
import { FaUserDoctor } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const {
    initialValues,
    validationSchema,
    handleSubmit
  } = useAdmissionForm();

  return (
    <div className="admission-container">
      <div className="admission-wrapper">
        <div className="admission-card">
          {/* Header */}
          <div className="admission-header">
            <h2 className="admission-title">
              <FaUserDoctor />
              Patient Admission Form
            </h2>

            <p className="admission-subtitle">
              AI Healthcare & Telemedicine Ecosystem
            </p>
          </div>

          {/* Form */}
          <div className="admission-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form-grid">
                {/* Title */}
                <div className="form-group">
                  <label className="form-label">Title *</label>

                  <Field as="select" name="title" className="input-style">
                    <option value="">Select Title</option>
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                    <option>Dr.</option>
                  </Field>

                  <ErrorMessage
                    name="title"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Patient Name */}
                <div className="form-group">
                  <label className="form-label">Patient Name *</label>

                  <Field
                    type="text"
                    name="patientName"
                    placeholder="Enter Patient Name"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="patientName"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* DOB */}
                <div className="form-group">
                  <label className="form-label">Date of Birth *</label>

                  <Field type="date" name="dob" className="input-style" />

                  <ErrorMessage
                    name="dob"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Age */}
                <div className="form-group">
                  <label className="form-label">Age *</label>

                  <Field
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="age"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Gender */}
                <div className="form-group">
                  <label className="form-label">Gender *</label>

                  <Field as="select" name="gender" className="input-style">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>

                  <ErrorMessage
                    name="gender"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Marital Status */}
                <div className="form-group">
                  <label className="form-label">Marital Status *</label>

                  <Field
                    as="select"
                    name="maritalStatus"
                    className="input-style"
                  >
                    <option value="">Select Marital Status</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </Field>

                  <ErrorMessage
                    name="maritalStatus"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Mobile */}
                <div className="form-group">
                  <label className="form-label">Mobile Number *</label>

                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter Mobile Number"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Home Phone */}
                <div className="form-group">
                  <label className="form-label">Home Phone</label>

                  <Field
                    type="text"
                    name="homePhone"
                    placeholder="Enter Home Phone"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="homePhone"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address *</label>

                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="email"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Blood Group */}
                <div className="form-group">
                  <label className="form-label">Blood Group *</label>

                  <Field as="select" name="bloodGroup" className="input-style">
                    <option value="">Select Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Field>

                  <ErrorMessage
                    name="bloodGroup"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Address */}
                <div className="form-group full-width">
                  <label className="form-label">Address *</label>

                  <Field
                    as="textarea"
                    name="address"
                    rows="3"
                    placeholder="Enter Full Address"
                    className="textarea-style"
                  />

                  <ErrorMessage
                    name="address"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* City */}
                <div className="form-group">
                  <label className="form-label">City *</label>

                  <Field
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="city"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* State */}
                <div className="form-group">
                  <label className="form-label">State *</label>

                  <Field
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="state"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Zip Code */}
                <div className="form-group">
                  <label className="form-label">Zip Code *</label>

                  <Field
                    type="text"
                    name="zipCode"
                    placeholder="Enter Zip Code"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="zipCode"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="form-group">
                  <label className="form-label">Emergency Contact</label>

                  <Field
                    type="text"
                    name="emergencyContact"
                    placeholder="Enter Emergency Contact"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="emergencyContact"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Disease */}
                <div className="form-group">
                  <label className="form-label">Disease / Problem *</label>

                  <Field
                    type="text"
                    name="disease"
                    placeholder="Enter Disease / Problem"
                    className="input-style"
                  />

                  <ErrorMessage
                    name="disease"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Doctor */}
                <div className="form-group">
                  <label className="form-label">Doctor Assigned *</label>

                  <Field as="select" name="doctor" className="input-style">
                    <option value="">Select Doctor</option>

                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} - {doc.department}
                      </option>
                    ))}
                  </Field>

                  <ErrorMessage
                    name="doctor"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Admission Date */}
                <div className="form-group">
                  <label className="form-label">Admission Date *</label>

                  <Field
                    type="date"
                    name="admissionDate"
                    className="input-style"
                    min={new Date().toISOString().split("T")[0]}
                  />

                  <ErrorMessage
                    name="admissionDate"
                    component="span"
                    className="error-style"
                  />
                </div>

                {/* Insurance */}
                <div className="form-group">
                  <label className="form-label">Insurance Provider</label>

                  <Field
                    type="text"
                    name="insurance"
                    placeholder="Enter Insurance Provider"
                    className="input-style"
                  />
                </div>

                {/* Symptoms */}
                <div className="form-group full-width">
                  <label className="form-label">Symptoms</label>

                  <Field
                    as="textarea"
                    name="symptoms"
                    rows="3"
                    placeholder="Enter Symptoms"
                    className="textarea-style"
                  />
                </div>

                {/* Notes */}
                <div className="form-group full-width">
                  <label className="form-label">Additional Notes</label>

                  <Field
                    as="textarea"
                    name="notes"
                    rows="3"
                    placeholder="Enter Additional Notes"
                    className="textarea-style"
                  />
                </div>

                {/* Submit Button */}
                <div className="full-width">
                  <button type="submit" className="submit-btn">
                    Submit Admission
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
