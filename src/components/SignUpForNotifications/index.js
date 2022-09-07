function SignUpForNotifications({ value, onChange }) {
  return (
    <div className="sign-up-container">
      <label htmlFor="signup">Sign up for email notifications:</label>
      <input type="checkbox" value={value} onChange={onChange} />
    </div>
  );
}
export default SignUpForNotifications;
