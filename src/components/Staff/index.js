function Staff({ value, check, onChange }) {
  return (
    <div>
      <label htmlFor="staff">{value}:</label>
      <input type="radio" value={value} checked={check} onChange={onChange} />
    </div>
  );
}

export default Staff;
