import { useState } from "react";
import Swal from "sweetalert2";

const useAdmissionForm = () => {
  const initialFormData = {
    title: "",
    patientName: "",
    dob: "",
    age: "",
    gender: "",
    maritalStatus: "",
    phone: "",
    homePhone: "",
    email: "",
    bloodGroup: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    emergencyContact: "",
    disease: "",
    doctor: "",
    admissionDate: "",
    insurance: "",
    symptoms: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  // CHANGE HERE ✅
  const [submitted, setSubmitted] = useState(false);

  // ADD THIS ✅
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Confirm Submission?",
      text: "Do you want to submit this admission form?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      setSubmitted(true);

      // ADD THIS ✅
      setSubmittedData(formData);

      Swal.fire({
        title: "Admission Submitted!",
        text: "Patient admission completed successfully.",
        icon: "success",
        confirmButtonColor: "#2563eb",
      });

      // CLEAR FORM ✅
      setFormData(initialFormData);
    }
  };

  return {
    formData,
    submitted,
    submittedData, // ADD THIS ✅
    handleChange,
    handleSubmit,
  };
};

export default useAdmissionForm;
