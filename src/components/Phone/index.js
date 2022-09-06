function Phone({ value, onChange }) {
  return (
    <div>
      <label htmlFor="phone">Phone:</label>
      <input id="phone" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Phone;
