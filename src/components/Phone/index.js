function Phone({ value, onChange, submitted, errorMessage }) {
  return (
    <div className="fieldset">
      <label htmlFor="phone">Phone:</label>
      <input
        className={submitted && !value ? "failed" : ""}
        id="phone"
        placeholder="0781237521"
        type="text"
        value={value}
        onChange={onChange}
      />
      <p className="error-message">{submitted && !value && errorMessage}</p>
    </div>
  );
}

export default Phone;
