import * as Yup from "yup";

const admissionValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),

  patientName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters allowed")
    .min(2, "Minimum 2 characters")
    .required("Patient name is required"),

  dob: Yup.string().required("Date of Birth is required"),

  age: Yup.number()
    .min(1, "Minimum age is 1")
    .max(120, "Maximum age is 120")
    .required("Age is required"),

  gender: Yup.string().required("Gender is required"),

  maritalStatus: Yup.string().required("Marital status is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter valid mobile number")
    .required("Mobile number is required"),

  homePhone: Yup.string().matches(
    /^[0-9]{10}$/,
    "Enter valid home phone number",
  ),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  bloodGroup: Yup.string().required("Blood group is required"),

  address: Yup.string()
    .min(5, "Address too short")
    .required("Address is required"),

  city: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters allowed")
    .required("City is required"),

  state: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters allowed ")
    .required("State is required"),

  zipCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Zip code must be 6 digits")
    .required("Zip code is required"),

  emergencyContact: Yup.string().matches(
    /^[0-9]{10}$/,
    "Enter valid emergency contact number",
  ),

  disease: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Disease is required"),

  doctor: Yup.string().required("Doctor is required"),

  admissionDate: Yup.date()
    .min(new Date(new Date().setHours(0, 0, 0, 0)), "Old dates are not allowed")
    .required("Admission date is required"),

  insurance: Yup.string(),

  symptoms: Yup.string(),

  notes: Yup.string(),
});

export default admissionValidationSchema;
