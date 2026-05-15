import doctors from "../../data/dummaydata";
import useAdmissionForm from "../../hooks/useAdmissionForm";
import calculateAge from "./utils";

import { FaUserDoctor } from "react-icons/fa6";
import { Formik, Form } from "formik";

import FormField from "../../components/FormField";
import "../AdmissionPage/AdmissionForm.css";

const AdmissionPage = () => {
  const { initialValues, validationSchema, handleSubmit } = useAdmissionForm();

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
                <FormField
                  label="Title *"
                  name="title"
                  as="select"
                  options={["Mr.", "Mrs.", "Ms.", "Dr."]}
                />

                {/* Patient Name */}
                <FormField
                  label="Patient Name *"
                  name="patientName"
                  placeholder="Enter Patient Name"
                />

                {/* DOB */}
                <FormField
                  label="Date of Birth *"
                  name="dob"
                  type="date"
                  onChange={(e, form) => {
                    const dob = e.target.value;

                    form.setFieldValue("age", calculateAge(dob));
                  }}
                />

                {/* Age */}
                <FormField label="Age *" name="age" type="number" readOnly />

                {/* Gender */}
                <FormField
                  label="Gender *"
                  name="gender"
                  as="select"
                  options={["Male", "Female", "Other"]}
                />

                {/* Marital Status */}
                <FormField
                  label="Marital Status *"
                  name="maritalStatus"
                  as="select"
                  options={["Single", "Married", "Divorced", "Widowed"]}
                />

                {/* Mobile */}
                <FormField
                  label="Mobile Number *"
                  name="phone"
                  placeholder="Enter Mobile Number"
                />

                {/* Home Phone */}
                <FormField
                  label="Home Phone"
                  name="homePhone"
                  placeholder="Enter Home Phone"
                />

                {/* Email */}
                <FormField
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                />

                {/* Blood Group */}
                <FormField
                  label="Blood Group *"
                  name="bloodGroup"
                  as="select"
                  options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                />

                {/* Address */}
                <div className="full-width">
                  <FormField
                    label="Address *"
                    name="address"
                    as="textarea"
                    rows={3}
                    placeholder="Enter Full Address"
                  />
                </div>

                {/* City */}
                <FormField
                  label="City *"
                  name="city"
                  placeholder="Enter City"
                />

                {/* State */}
                <FormField
                  label="State *"
                  name="state"
                  placeholder="Enter State"
                />

                {/* Zip Code */}
                <FormField
                  label="Zip Code *"
                  name="zipCode"
                  placeholder="Enter Zip Code"
                />

                {/* Emergency Contact */}
                <FormField
                  label="Emergency Contact"
                  name="emergencyContact"
                  placeholder="Enter Emergency Contact"
                />

                {/* Disease */}
                <FormField
                  label="Disease / Problem *"
                  name="disease"
                  placeholder="Enter Disease / Problem"
                />

                {/* Doctor */}
                <FormField
                  label="Doctor Assigned *"
                  name="doctor"
                  as="select"
                  options={doctors.map(
                    (doc) => `${doc.name} - ${doc.department}`,
                  )}
                />

                {/* Admission Date */}
                <FormField
                  label="Admission Date *"
                  name="admissionDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                />

                {/* Insurance */}
                <FormField
                  label="Insurance Provider"
                  name="insurance"
                  placeholder="Enter Insurance Provider"
                />

                {/* Symptoms */}
                <div className="full-width">
                  <FormField
                    label="Symptoms"
                    name="symptoms"
                    as="textarea"
                    rows={3}
                    placeholder="Enter Symptoms"
                  />
                </div>

                {/* Notes */}
                <div className="full-width">
                  <FormField
                    label="Additional Notes"
                    name="notes"
                    as="textarea"
                    rows={3}
                    placeholder="Enter Additional Notes"
                  />
                </div>

                {/* Submit */}
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

export default AdmissionPage;
