import React, { useEffect, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const RecaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isHuman, setIsHuman] = useState(false);

  // Function to verify reCAPTCHA
  const handleVerify = async () => {
    if (!executeRecaptcha) {
      console.log("reCAPTCHA not yet available");
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("submit");
      console.log("reCAPTCHA Token:", recaptchaToken);
      setToken(recaptchaToken);
      setIsHuman(true); // Mark the user as verified
    } catch (error) {
      console.error("reCAPTCHA Error:", error);
      setIsHuman(false);
    }
  };

  // Auto-run reCAPTCHA on component mount
  useEffect(() => {
    handleVerify();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure reCAPTCHA is verified before form submission
    if (!isHuman || !token) {
      console.log("Re-running reCAPTCHA...");
      await handleVerify(); // Try verifying again
      return;
    }

    // Simulate form submission
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Google reCAPTCHA v3 Test</h2>

      {/* Form with Name & Email */}
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Submit Form
        </button>
      </form>

      {/* Display reCAPTCHA token */}
      {token && (
        <div>
          <h3>Generated Token:</h3>
          <p
            style={{
              wordBreak: "break-all",
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {token}
          </p>
        </div>
      )}
    </div>
  );
};

const RecaptchaTest = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LfnGt4qAAAAAHrf-1sXWF60NATVetcMTfSYKdSv">
      <RecaptchaComponent />
    </GoogleReCaptchaProvider>
  );
};

export default RecaptchaTest;
