function Email({ value, onChange, submitted, errorMessage }) {
  return (
    <div className="fieldset">
      <label htmlFor="email">Email:</label>
      <input
        className={submitted && !value ? "failed" : ""}
        placeholder="Your Email Address"
        id="email"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
      <p className="error-message">{submitted && !value && errorMessage}</p>
    </div>
  );
}

export default Email;
