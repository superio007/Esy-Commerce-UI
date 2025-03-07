import { useState } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
import { CiLinkedin } from "react-icons/ci";

const LinkedInLogin = ({ onSuccess }) => {
  const [linkedInData, setLinkedInData] = useState(null);

  const { linkedInLogin } = useLinkedIn({
    clientId: "YOUR_CLIENT_ID",
    redirectUri: "http://localhost:3000/auth/linkedin",
    scope: "r_liteprofile r_emailaddress",
    onSuccess: async (code) => {
      try {
        // Exchange auth code for access token
        const { data } = await axios.post(
          "https://www.linkedin.com/oauth/v2/accessToken",
          {
            grant_type: "authorization_code",
            code,
            redirect_uri: "http://localhost:5173/auth/linkedin",
            client_id: "77ea6mwh9klial",
            client_secret: "WPL_AP1.V536TAsHV4muCvPF.intyIQ==",
          }
        );

        const accessToken = data.access_token;

        // Fetch LinkedIn profile details
        const profileResponse = await axios.get(
          "https://api.linkedin.com/v2/me",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        // Fetch LinkedIn email
        const emailResponse = await axios.get(
          "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        const userData = {
          name: `${profileResponse.data.localizedFirstName} ${profileResponse.data.localizedLastName}`,
          email: emailResponse.data.elements[0]["handle~"].emailAddress,
        };

        console.log("LinkedIn Data:", userData);
        setLinkedInData(userData);

        if (onSuccess) onSuccess(userData); // Send data to parent component if needed
      } catch (error) {
        console.error("LinkedIn Login Error:", error);
      }
    },
    onError: (error) => console.error("LinkedIn Auth Error:", error),
  });

  return (
    <button
      onClick={linkedInLogin}
      className="text-white bg-[#0a66c2] p-4 flex items-center gap-2 rounded-xl cursor-pointer"
    >
      <CiLinkedin className="text-4xl text-[#fff]" /> Apply with LinkedIn
    </button>
  );
};

export default LinkedInLogin;
