function Phone({ value, onChange }) {
  return (
    <div>
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        placeholder="0781237521"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Phone;
