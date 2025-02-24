import  { useState } from "react";

function Contact() {
  const password = "123456";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const enteredPassword = e.target.elements.password.value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  const login = (
    <div>
 <form onSubmit={handleSubmit}>
      <input type="password" name="password" placeholder="Password" />
      <input type="submit" value="Submit" />
    </form>
    <label htmlFor="password">The Password is : 123456</label>
    </div>
   

  );

  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  if (authorized) {
    return (
      <div>
        <h1>Contact</h1>
        {contactInfo}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Enter the Password</h1>
        {login}

      </div>
    );
  }
}

export default Contact;

