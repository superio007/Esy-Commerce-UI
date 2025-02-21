import React, { useEffect, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const RecaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState("");

  const handleVerify = async () => {
    if (!executeRecaptcha) {
      console.log("reCAPTCHA not yet available");
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("submit");
      console.log("reCAPTCHA Token:", recaptchaToken);
      setToken(recaptchaToken);
    } catch (error) {
      console.error("reCAPTCHA Error:", error);
    }
  };

  useEffect(() => {
    handleVerify(); // Auto-run on component mount
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Google reCAPTCHA v3 Test</h2>
      <button
        onClick={handleVerify}
        style={{ padding: "10px", fontSize: "16px" }}
      >
        Verify reCAPTCHA
      </button>
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
