import doctors from "../data/dummaydata";
import useAdmissionForm from "../hooks/useAdmissionForm";
import { FaUserDoctor } from "react-icons/fa6";

const AdmissionForm = () => {
  const { formData, submitted, submittedData, handleChange, handleSubmit } =
    useAdmissionForm();

  const inputStyle =
   "w-full border border-gray-300 bg-white p-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 focus:invalid:border-red-500 focus:invalid:ring-red-400 shadow-sm";

  const textareaStyle =
   "w-full border border-gray-300 bg-white p-3 rounded-xl outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 focus:invalid:border-red-500 focus:invalid:ring-red-400 resize-none shadow-sm";
   
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden border border-white/30 animate__animated animate__fadeInUp">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
              <FaUserDoctor />
              Patient Admission Form
            </h2>

            <p className="text-center mt-3 text-blue-100 text-lg">
              AI Healthcare & Telemedicine Ecosystem
            </p>
          </div>

          {/* Form */}
          <div className="p-6 md:p-10">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Title */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Title
                </label>

                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Title</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </select>
              </div>

              {/* Patient Name */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Patient Name
                </label>

                <input
                  type="text"
                  name="patientName"
                  placeholder="Enter Patient Name"
                  pattern="[A-Za-z\s]{2,50}"
                  title="Name should contain only letters"
                  value={formData.patientName}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* DOB */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Date of Birth
                </label>

                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Age */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">Age</label>

                <input
                  type="number"
                  name="age"
                  placeholder="Enter Age"
                  min="1"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Gender
                </label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Marital Status */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Marital Status
                </label>

                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select Marital Status</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Mobile Number"
                  pattern="[6-9]{1}[0-9]{9}"
                  title="Enter valid 10 digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Home Phone */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Home Phone
                </label>

                <input
                  type="tel"
                  name="homePhone"
                  placeholder="Enter Home Phone"
                  pattern="[0-9]{10}"
                  title="Enter valid home phone number"
                  value={formData.homePhone}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Blood Group */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Blood Group
                </label>

                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="">Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2 flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Address
                </label>

                <textarea
                  name="address"
                  placeholder="Enter Full Address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  className={textareaStyle}
                  required
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  pattern="[A-Za-z\s]{2,30}"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* State */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  pattern="[A-Za-z\s]{2,30}"
                  value={formData.state}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Zip */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Zip Code
                </label>

                <input
                  type="text"
                  name="zipCode"
                  placeholder="Enter Zip Code"
                  pattern="[0-9]{6}"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Emergency */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Emergency Contact
                </label>

                <input
                  type="tel"
                  name="emergencyContact"
                  placeholder="Enter Emergency Contact"
                  pattern="[6-9]{1}[0-9]{9}"
                  value={formData.emergencyContact}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Disease */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Disease / Problem
                </label>

                <input
                  type="text"
                  name="disease"
                  placeholder="Enter Disease / Problem"
                  value={formData.disease}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Doctor */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Doctor Assigned
                </label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                >
                  <option value="">Select Doctor</option>

                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} - {doc.department}
                    </option>
                  ))}
                </select>
              </div>

              {/* Admission Date */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Admission Date
                </label>

                <input
                  type="date"
                  name="admissionDate"
                  value={formData.admissionDate}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              {/* Insurance */}
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Insurance Provider
                </label>

                <input
                  type="text"
                  name="insurance"
                  placeholder="Enter Insurance Provider"
                  value={formData.insurance}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              {/* Symptoms */}
              <div className="md:col-span-2 flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Symptoms
                </label>

                <textarea
                  name="symptoms"
                  placeholder="Enter Symptoms"
                  rows="3"
                  value={formData.symptoms}
                  onChange={handleChange}
                  className={textareaStyle}
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2 flex flex-col">
                <label className="mb-2 font-semibold text-gray-700">
                  Additional Notes
                </label>

                <textarea
                  name="notes"
                  placeholder="Enter Additional Notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className={textareaStyle}
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99]"
                >
                  Submit Admission
                </button>
              </div>
            </form>

            {/* Confirmation */}
            {submitted && (
              <div className="mt-10 bg-gradient-to-r from-green-50 to-green-100 border border-green-300 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  Admission Confirmed
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                  <p>
                    <strong>Name:</strong> {submittedData?.title}{" "}
                    {submittedData?.patientName}
                  </p>

                  <p>
                    <strong>Gender:</strong> {submittedData?.gender}
                  </p>

                  <p>
                    <strong>Age:</strong> {submittedData?.age}
                  </p>

                  <p>
                    <strong>DOB:</strong> {submittedData?.dob}
                  </p>

                  <p>
                    <strong>Email:</strong> {submittedData?.email}
                  </p>

                  <p>
                    <strong>Phone:</strong> {submittedData?.phone}
                  </p>

                  <p>
                    <strong>Doctor:</strong> {submittedData?.doctor}
                  </p>

                  <p>
                    <strong>Disease:</strong> {submittedData?.disease}
                  </p>

                  <p>
                    <strong>Blood Group:</strong> {submittedData?.bloodGroup}
                  </p>

                  <p>
                    <strong>Admission Date:</strong>{" "}
                    {submittedData?.admissionDate}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
