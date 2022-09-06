function Name({ value, onChange }) {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={value} onChange={onChange} />
    </div>
  );
}

export default Name;
