import { Field, ErrorMessage } from "formik";

const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  as,
  options = [],
  rows,
  readOnly = false,
  min,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>

      {as === "select" ? (
        <Field as="select" name={name} className="input-style">
          <option value="">Select {label}</option>

          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>
      ) : as === "textarea" ? (
        <Field
          as="textarea"
          name={name}
          rows={rows}
          placeholder={placeholder}
          className="textarea-style"
        />
      ) : (
        <Field name={name}>
          {({ field, form }) => (
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className="input-style"
              readOnly={readOnly}
              min={min}
              onChange={(e) => {
                field.onChange(e);

                if (onChange) {
                  onChange(e, form);
                }
              }}
            />
          )}
        </Field>
      )}

      <ErrorMessage name={name} component="span" className="error-style" />
    </div>
  );
};

export default FormField;
