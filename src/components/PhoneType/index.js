function PhoneType({ value, onChange }) {
  return (
    <select name="phoneType" value={value} onChange={onChange}>
      <option>Select a phone type...</option>
      <option>Home</option>
      <option>Work</option>
      <option>Mobile</option>
    </select>
  );
}

export default PhoneType;
