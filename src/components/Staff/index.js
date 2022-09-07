function Staff({ value, check, onChange }) {
  return (
    <div className="input-bind">
      <input type="radio" value={value} checked={check} onChange={onChange} />
      <label className="radio-icon" htmlFor="staff">
        {value} name
      </label>
    </div>
  );
}

export default Staff;
