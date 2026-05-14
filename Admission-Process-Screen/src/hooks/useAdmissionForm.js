import Swal from "sweetalert2";
import { useState } from "react";
import admissionValidationSchema from "../validations/admissionValidation";
import { useNavigate } from "react-router-dom";


const useAdmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

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
    admissionDate: "",
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
      setSubmitted(true);

      setSubmittedData(values);

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
    submitted,
    submittedData,
  };
};

export default useAdmissionForm;
