import axios from "axios";
export const sendMail = async (formattedData) => {
  const { data } = await axios.post(
    "http://bc800gckow0cg8g44ooccccw.82.25.90.229.sslip.io/send-email",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
