import Swal from "sweetalert2";
// import { useState } from "react";
import admissionValidationSchema from "../pages/AdmissionPage/admissionValidation";
import { useNavigate } from "react-router-dom";

const useAdmissionForm = () => {
  const navigate = useNavigate();

  const initialValues = {
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
    admissionDate: new Date().toISOString().split("T")[0],
    insurance: "",
    symptoms: "",
    notes: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const result = await Swal.fire({
      title: "Confirm Submission?",
      text: "Do you want to submit this admission form?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Admission Submitted!",
        text: "Patient admission completed successfully.",
        icon: "success",
        confirmButtonColor: "#2563eb",
      });

      navigate("/confirmation", {
        state: values,
      });

      resetForm();
    }
  };

  return {
    initialValues,
    validationSchema: admissionValidationSchema,
    handleSubmit,
  };
};

export default useAdmissionForm;
