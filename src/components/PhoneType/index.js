function PhoneType({ value, onChange, submitted, errorMessage }) {
  return (
    <div>
      <div className="select-dropdown fieldset">
        <select
          className={submitted && !value ? "failed" : ""}
          name="phoneType"
          value={value}
          onChange={onChange}
        >
          <option>Select a phone type...</option>
          <option>Home</option>
          <option>Work</option>
          <option>Mobile</option>
        </select>
      </div>

      <p className="error-message">{submitted && !value && errorMessage}</p>
    </div>
  );
}

export default PhoneType;
