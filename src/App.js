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

    setErrorMessages({ ...errors });
  }, [name, email, phone, phoneType]);

  console.log(errorMessages);

  useEffect(() => {
    if (isStaff.instructor) setStaff("instructor");
    if (isStaff.student) setStaff("student");
  }, [isStaff]);

  function onSubmit(e) {
    e.preventDefault();
    // if (errorMessages.length > 0) {
    //   window.alert("Please fill the required fields");
    //   return;
    // }

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
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Name value={name} onChange={(e) => setName(e.target.value)} />
        <Email value={email} onChange={(e) => setEmail(e.target.value)} />
        <Phone value={phone} onChange={(e) => setPhone(e.target.value)} />
        <PhoneType
          value={phoneType}
          onChange={(e) => setPhoneType(e.target.value)}
        />
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
        <Bio value={bio} onChange={(e) => setBio(e.target.value)} />
        <SignUpForNotifications
          value={signUp}
          onChange={(e) => setSignUp(!signUp)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
