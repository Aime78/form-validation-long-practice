function Name({ value, onChange, submitted, errorMessage }) {
  return (
    <div className="fieldset">
      <label htmlFor="name">Name:</label>
      <input
        className={submitted && !value ? "failed" : ""}
        placeholder="Your name"
        type="text"
        id="name"
        value={value}
        onChange={onChange}
      />

      <p className="error-message">{submitted && !value && errorMessage}</p>
    </div>
  );
}

export default Name;
