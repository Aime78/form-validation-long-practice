function Bio({ value, onChange }) {
  return (
    <div>
      <label htmlFor="bio">Bio:</label>
      <textarea
        placeholder="Your message here ..."
        id="bio"
        type="text"
        maxLength="280"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Bio;
