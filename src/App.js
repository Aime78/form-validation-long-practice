import { useState, useEffect } from "react";
import Name from "./components/Name";
import Email from "./components/Email";
import Phone from "./components/Phone";
import PhoneType from "./components/PhoneType";
import Staff from "./components/Staff";
import Bio from "./components/Bio";
import SignUpForNotifications from "./components/SignUpForNotifications";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [isStaff, setIsStaff] = useState({ instructor: false, student: false });
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
    phoneTypeError: "",
  });

  useEffect(() => {
    const errors = {};
    if (name.length === 0) errors.nameError = "Please provide a name";

    if (!email.includes("@"))
      errors.emailError = "Please provide a valid Email";

    if (phone.length !== 10)
      errors.phoneError = "Phone number must be 10 digits";

    if (phoneType.length === 0)
      errors.phoneTypeError = "Please provide a phone type";

    if (staff.length === 0)
      errors.staffError = "Please provide a staff category";

    setErrorMessages({ ...errors });
  }, [name, email, phone, phoneType, staff]);

  useEffect(() => {
    if (isStaff.instructor) setStaff("instructor");
    if (isStaff.student) setStaff("student");
  }, [isStaff]);

  function onSubmit(e) {
    e.preventDefault();
    if (
      errorMessages.nameError ||
      errorMessages.emailError ||
      errorMessages.phoneError ||
      errorMessages.phoneTypeError ||
      errorMessages.staffError
    )
      return;
    const time = new Date();
    const registration = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      signUp,
      submittedOn: `${time.toDateString()} ${time.toTimeString()}`,
    };
    console.log(JSON.stringify(registration));
    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("");
    setBio("");
    setSignUp(false);
    setHasSubmitted(false);
  }

  return (
    <div className="container">
      <form className="contact" onSubmit={onSubmit}>
        <h2>Registration</h2>
        <h3>Contact us for a custom quote</h3>
        <h3 className="error-message">
          {hasSubmitted &&
            (errorMessages.nameError ||
              errorMessages.emailError ||
              errorMessages.phoneError ||
              errorMessages.phoneTypeError ||
              errorMessages.staffError) &&
            "Please fill all required fields"}
        </h3>
        <Name
          value={name}
          submitted={hasSubmitted}
          errorMessage={errorMessages.nameError}
          onChange={(e) => setName(e.target.value)}
        />
        <Email
          value={email}
          submitted={hasSubmitted}
          errorMessage={errorMessages.emailError}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Phone
          value={phone}
          submitted={hasSubmitted}
          errorMessage={errorMessages.phoneError}
          onChange={(e) => setPhone(e.target.value)}
        />
        <PhoneType
          value={phoneType}
          submitted={hasSubmitted}
          errorMessage={errorMessages.phoneTypeError}
          onChange={(e) => setPhoneType(e.target.value)}
        />
        <div>
          <Staff
            value="Instructor"
            check={isStaff.instructor}
            onChange={(e) => setIsStaff({ instructor: true, student: false })}
          />
          <Staff
            value="Student"
            check={isStaff.student}
            onChange={(e) => setIsStaff({ instructor: false, student: true })}
          />
          <p className="error-message">
            {hasSubmitted && !staff && errorMessages.staffError}
          </p>
        </div>
        <Bio value={bio} onChange={(e) => setBio(e.target.value)} />
        <SignUpForNotifications
          value={signUp}
          onChange={(e) => setSignUp(!signUp)}
        />
        <button onClick={() => setHasSubmitted(true)}>Submit</button>
      </form>
    </div>
  );
}

export default App;
