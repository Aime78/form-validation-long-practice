function Email({ value, onChange }) {
  return (
    <div>
      <label htmlFor="email">Email:</label>
      <input id="email" type="text" value={value} onChange={onChange}></input>
    </div>
  );
}

export default Email;
