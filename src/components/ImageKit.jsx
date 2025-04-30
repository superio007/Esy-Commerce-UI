import { useState } from "react";
import ImageKit from "imagekit-javascript";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
  const authEndpoint = import.meta.env.VITE_IMAGEKIT_AUTH_ENDPOINT;

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file || file.type !== "application/pdf") {
      alert("Only PDF files allowed");
      return;
    }

    setFileName(file.name);

    // Get authentication params
    const authRes = await fetch(authEndpoint);
    const auth = await authRes.json();

    const imagekit = new ImageKit({
      publicKey,
      urlEndpoint,
      authenticationEndpoint: authEndpoint,
    });

    imagekit.upload(
      {
        file, // actual file object
        fileName: file.name,
        tags: ["pdf"],
        folder: "/Esycommerce",
        useUniqueFileName: false,
        ...auth,
      },
      (err, result) => {
        if (err) {
          console.error("Upload error", err);
          alert("Upload failed");
        } else {
          console.log("Upload success", result);
          setFileUrl(result.filePath);
        }
      }
    );
  };
  console.log(`https://ik.imagekit.io/2cdga3aqf${fileUrl}`);
  return (
    <div className="flex items-center justify-center w-full my-4">
      <label
        htmlFor="pdf-upload"
        className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {fileName ? (
            <p className="text-sm text-green-600 font-semibold">{fileName}</p>
          ) : (
            <>
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag a
                PDF
              </p>
              <p className="text-xs text-gray-500">PDF only, Max 5MB</p>
            </>
          )}
        </div>
        <input
          id="pdf-upload"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileSelect}
        />
      </label>
    </div>
  );
};

export default FileUpload;
