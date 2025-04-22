import { useForm } from "react-hook-form";
import "flowbite";
import { useState, useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { BsLightningChargeFill } from "react-icons/bs";
import axios from "axios";
import emailjs from "@emailjs/browser";
const postJobForm = async (formattedData) => {
  const { data } = await axios.post(
    "http://uw0gkswco04wsogkccggkk0s.82.25.90.229.sslip.io/api/carrear-forms-entires",
    formattedData, // Sending formattedData in the request body
    {
      headers: {
        "Content-Type": "application/json", // Ensure JSON content type
      },
    }
  );
  return data;
};
const ApplyNowForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // cloudnary variables
  const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_PRESET;
  // states
  const [loading, setLoading] = useState(false);
  const [showOtherPositionInput, setShowOtherPositionInput] = useState(false);
  const [showOtherJobTypeInput, setShowOtherJobTypeInput] = useState(false);
  const [showOtherFindInput, setShowOtherFindInput] = useState(false);
  const [showOtherReasonInput, setShowOtherReasonInput] = useState(false);
  const [showDateInput, setshowDateInput] = useState(false);
  const [showJoinInput, setshowJoinInput] = useState(false);
  // watchers
  const FullnameValue = watch("name", "");
  const EmailValue = watch("Email", "");
  const PhoneValue = watch("Phone", "");
  const PositionValue = watch("Position", "");
  const OtherPositionValue = watch("OtherPosition", "");
  const ExperienceValue = watch("Experience", "");
  const JobTypeValue = watch("JobType", "");
  const OtherJobTypeValue = watch("OtherJobType", "");
  const CurrentCtcValue = watch("CurrentCtc", "");
  const ExpectedCtcValue = watch("ExpectedCtc", "");
  const CurrentCityValue = watch("CurrentCity", "");
  const FindValue = watch("Find", "");
  const OtherFindValue = watch("OtherFind", "");
  const ReasonValue = watch("Reason", "");
  const OtherReasonValue = watch("OtherReason", "");
  const SystemValue = watch("System", "");
  const InternetValue = watch("Internet", "");
  const NoticeValue = watch("Notice", "");
  const DateValue = watch("Date", "");
  const JoinValue = watch("Join", "");
  const MessageValue = watch("Message", "");
  // for uploading resume
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");
  // watchers to show fields
  // show other position input field
  useEffect(() => {
    if (PositionValue === "Other") {
      setShowOtherPositionInput(true);
    } else {
      setShowOtherPositionInput(false);
    }
  }, [PositionValue]);
  // other job type input field
  useEffect(() => {
    if (JobTypeValue === "Other") {
      setShowOtherJobTypeInput(true);
    } else {
      setShowOtherJobTypeInput(false);
    }
  }, [JobTypeValue]);
  // other find input field
  useEffect(() => {
    if (FindValue === "Other") {
      setShowOtherFindInput(true);
    } else {
      setShowOtherFindInput(false);
    }
  }, [FindValue]);
  // other reason input field
  useEffect(() => {
    if (ReasonValue === "Other") {
      setShowOtherReasonInput(true);
    } else {
      setShowOtherReasonInput(false);
    }
  }, [ReasonValue]);
  // to display join dropdown or date input
  useEffect(() => {
    if (NoticeValue === "Yes") {
      setshowJoinInput(true);
      setshowDateInput(false);
    } else if (NoticeValue === "No") {
      setshowJoinInput(false);
      setshowDateInput(true);
    } else {
      setshowJoinInput(false);
      setshowDateInput(false);
    }
  }, [NoticeValue]);
  const onFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed.");
        setFileName(""); // Clear the file name
      } else if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB.");
        setFileName(""); // Clear the file name
      } else {
        setFileName(file.name);
        setValue("resume", file); // ✅ Manually set file in react-hook-form
        trigger("resume");
        setError(""); // Clear previous errors
      }
    }
  };
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", data.resume);
    formData.append("upload_preset", UPLOAD_PRESET); // Required by Cloudinary

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result);
      setFileUrl(result.secure_url); // ✅ Store the file URL
      data.resume = result.secure_url;
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload resume");
    }
    emailjs
      .send(
        import.meta.env.VITE_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_CONTACTTEMPLATEID, // Replace with your EmailJS Template ID
        data,
        import.meta.env.VITE_PUBLICID // Replace with your EmailJS Public Key
      )
      .then(() => console.log(""))
      .catch((error) => alert("Error sending email: " + error.text));
    const formatedData = {
      data: {
        FullName: data.name,
        Email: data.Email,
        Phone: data.Phone,
        Position: data.Position,
        OtherPosition: data.OtherPosition,
        Experiance: data.Experience,
        JobType: data.JobType,
        OtherJobType: data.OtherJobType,
        CurrentCtc: data.CurrentCtc,
        ExpectCtc: data.ExpectedCtc,
        City: data.CurrentCity,
        ResumeLink: data.resume,
        JobPortal: data.Find,
        OtherJobPortal: data.OtherFind,
        ResonToLeave: data.Reason,
        OtherResonToLeave: data.OtherPosition,
        OwnSystem: data.System,
        Internet: data.Internet,
        NoticePeriod: data.Notice,
        RelavingDate: data.Join,
        JoiningDate: data.Date,
        Message: data.Message,
      },
    };
    postJobForm(formatedData);
    setLoading(false);
    reset();
    setFileName("");
    setFileUrl("");
  };
  return (
    <>
      
        {/* <div className="ApplyNowForm flex flex-col md:flex-row gap-4 justify-between items-center rounded-2xl bg-[#fff]">
          <div>
            <h2 className=" text-center flex items-center md:justify-start justify-center gap-2">
              <BsLightningChargeFill />
              AutoFill Application
            </h2>
            <p className="">Save time by applying through our AutoFill form</p>
          </div>
          <div>
            <span className="text-white bg-[#0a66c2] p-4 flex items-center gap-2 rounded-xl cursor-pointer">
              <CiLinkedin className="text-4xl text-[#fff]" /> Apply with
              Linkedin
            </span>
          </div>
        </div> */}
        <datalist id="CitiesNames">
          <option value="Port Blair">Port Blair</option>
          <option value="Adoni">Adoni</option>
          <option value="Amaravati">Amaravati</option>
          <option value="Anantapur">Anantapur</option>
          <option value="Chandragiri">Chandragiri</option>
          <option value="Chittoor">Chittoor</option>
          <option value="Dowlaiswaram">Dowlaiswaram</option>
          <option value="Eluru">Eluru</option>
          <option value="Guntur">Guntur</option>
          <option value="Kadapa">Kadapa</option>
          <option value="Kakinada">Kakinada</option>
          <option value="Kurnool">Kurnool</option>
          <option value="Machilipatnam">Machilipatnam</option>
          <option value="Nagarjunakoṇḍa">Nagarjunakoṇḍa</option>
          <option value="Rajahmundry">Rajahmundry</option>
          <option value="Srikakulam">Srikakulam</option>
          <option value="Tirupati">Tirupati</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Vizianagaram">Vizianagaram</option>
          <option value="Yemmiganur">Yemmiganur</option>
          <option value="Itanagar">Itanagar</option>
          <option value="Dhuburi">Dhuburi</option>
          <option value="Dibrugarh">Dibrugarh</option>
          <option value="Dispur">Dispur</option>
          <option value="Guwahati">Guwahati</option>
          <option value="Jorhat">Jorhat</option>
          <option value="Nagaon">Nagaon</option>
          <option value="Sivasagar">Sivasagar</option>
          <option value="Silchar">Silchar</option>
          <option value="Tezpur">Tezpur</option>
          <option value="Tinsukia">Tinsukia</option>
          <option value="Ara">Ara</option>
          <option value="Barauni">Barauni</option>
          <option value="Begusarai">Begusarai</option>
          <option value="Bettiah">Bettiah</option>
          <option value="Bhagalpur">Bhagalpur</option>
          <option value="Bihar Sharif">Bihar Sharif</option>
          <option value="Bodh Gaya">Bodh Gaya</option>
          <option value="Buxar">Buxar</option>
          <option value="Chapra">Chapra</option>
          <option value="Darbhanga">Darbhanga</option>
          <option value="Dehri">Dehri</option>
          <option value="Dinapur Nizamat">Dinapur Nizamat</option>
          <option value="Gaya">Gaya</option>
          <option value="Hajipur">Hajipur</option>
          <option value="Jamalpur">Jamalpur</option>
          <option value="Katihar">Katihar</option>
          <option value="Madhubani">Madhubani</option>
          <option value="Motihari">Motihari</option>
          <option value="Munger">Munger</option>
          <option value="Muzaffarpur">Muzaffarpur</option>
          <option value="Patna">Patna</option>
          <option value="Purnia">Purnia</option>
          <option value="Pusa">Pusa</option>
          <option value="Saharsa">Saharsa</option>
          <option value="Samastipur">Samastipur</option>
          <option value="Sasaram">Sasaram</option>
          <option value="Sitamarhi">Sitamarhi</option>
          <option value="Siwan">Siwan</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Ambikapur">Ambikapur</option>
          <option value="Bhilai">Bhilai</option>
          <option value="Bilaspur">Bilaspur</option>
          <option value="Dhamtari">Dhamtari</option>
          <option value="Durg">Durg</option>
          <option value="Jagdalpur">Jagdalpur</option>
          <option value="Raipur">Raipur</option>
          <option value="Rajnandgaon">Rajnandgaon</option>
          <option value="Daman">Daman</option>
          <option value="Diu">Diu</option>
          <option value="Silvassa">Silvassa</option>
          <option value="Delhi">Delhi</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Madgaon">Madgaon</option>
          <option value="Panaji">Panaji</option>
          <option value="Ahmadabad">Ahmadabad</option>
          <option value="Amreli">Amreli</option>
          <option value="Bharuch">Bharuch</option>
          <option value="Bhavnagar">Bhavnagar</option>
          <option value="Bhuj">Bhuj</option>
          <option value="Dwarka">Dwarka</option>
          <option value="Gandhinagar">Gandhinagar</option>
          <option value="Godhra">Godhra</option>
          <option value="Jamnagar">Jamnagar</option>
          <option value="Junagadh">Junagadh</option>
          <option value="Kandla">Kandla</option>
          <option value="Khambhat">Khambhat</option>
          <option value="Kheda">Kheda</option>
          <option value="Mahesana">Mahesana</option>
          <option value="Morbi">Morbi</option>
          <option value="Nadiad">Nadiad</option>
          <option value="Navsari">Navsari</option>
          <option value="Okha">Okha</option>
          <option value="Palanpur">Palanpur</option>
          <option value="Patan">Patan</option>
          <option value="Porbandar">Porbandar</option>
          <option value="Rajkot">Rajkot</option>
          <option value="Surat">Surat</option>
          <option value="Surendranagar">Surendranagar</option>
          <option value="Valsad">Valsad</option>
          <option value="Veraval">Veraval</option>
          <option value="Ambala">Ambala</option>
          <option value="Bhiwani">Bhiwani</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Faridabad">Faridabad</option>
          <option value="Firozpur Jhirka">Firozpur Jhirka</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Hansi">Hansi</option>
          <option value="Hisar">Hisar</option>
          <option value="Jind">Jind</option>
          <option value="Kaithal">Kaithal</option>
          <option value="Karnal">Karnal</option>
          <option value="Kurukshetra">Kurukshetra</option>
          <option value="Panipat">Panipat</option>
          <option value="Pehowa">Pehowa</option>
          <option value="Rewari">Rewari</option>
          <option value="Rohtak">Rohtak</option>
          <option value="Sirsa">Sirsa</option>
          <option value="Sonipat">Sonipat</option>
          <option value="Bilaspur">Bilaspur</option>
          <option value="Chamba">Chamba</option>
          <option value="Dalhousie">Dalhousie</option>
          <option value="Dharmshala">Dharmshala</option>
          <option value="Hamirpur">Hamirpur</option>
          <option value="Kangra">Kangra</option>
          <option value="Kullu">Kullu</option>
          <option value="Mandi">Mandi</option>
          <option value="Nahan">Nahan</option>
          <option value="Shimla">Shimla</option>
          <option value="Una">Una</option>
          <option value="Anantnag">Anantnag</option>
          <option value="Baramula">Baramula</option>
          <option value="Doda">Doda</option>
          <option value="Gulmarg">Gulmarg</option>
          <option value="Jammu">Jammu</option>
          <option value="Kathua">Kathua</option>
          <option value="Punch">Punch</option>
          <option value="Rajouri">Rajouri</option>
          <option value="Srinagar">Srinagar</option>
          <option value="Udhampur">Udhampur</option>
          <option value="Bokaro">Bokaro</option>
          <option value="Chaibasa">Chaibasa</option>
          <option value="Deoghar">Deoghar</option>
          <option value="Dhanbad">Dhanbad</option>
          <option value="Dumka">Dumka</option>
          <option value="Giridih">Giridih</option>
          <option value="Hazaribag">Hazaribag</option>
          <option value="Jamshedpur">Jamshedpur</option>
          <option value="Jharia">Jharia</option>
          <option value="Rajmahal">Rajmahal</option>
          <option value="Ranchi">Ranchi</option>
          <option value="Saraikela">Saraikela</option>
          <option value="Badami">Badami</option>
          <option value="Ballari">Ballari</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Belagavi">Belagavi</option>
          <option value="Bhadravati">Bhadravati</option>
          <option value="Bidar">Bidar</option>
          <option value="Chikkamagaluru">Chikkamagaluru</option>
          <option value="Chitradurga">Chitradurga</option>
          <option value="Davangere">Davangere</option>
          <option value="Halebid">Halebid</option>
          <option value="Hassan">Hassan</option>
          <option value="Hubballi-Dharwad">Hubballi-Dharwad</option>
          <option value="Kalaburagi">Kalaburagi</option>
          <option value="Kolar">Kolar</option>
          <option value="Madikeri">Madikeri</option>
          <option value="Mandya">Mandya</option>
          <option value="Mangaluru">Mangaluru</option>
          <option value="Mysuru">Mysuru</option>
          <option value="Raichur">Raichur</option>
          <option value="Shivamogga">Shivamogga</option>
          <option value="Shravanabelagola">Shravanabelagola</option>
          <option value="Shrirangapattana">Shrirangapattana</option>
          <option value="Tumakuru">Tumakuru</option>
          <option value="Vijayapura">Vijayapura</option>
          <option value="Alappuzha">Alappuzha</option>
          <option value="Vatakara">Vatakara</option>
          <option value="Idukki">Idukki</option>
          <option value="Kannur">Kannur</option>
          <option value="Kochi">Kochi</option>
          <option value="Kollam">Kollam</option>
          <option value="Kottayam">Kottayam</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Mattancheri">Mattancheri</option>
          <option value="Palakkad">Palakkad</option>
          <option value="Thalassery">Thalassery</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Thrissur">Thrissur</option>
          <option value="Kargil">Kargil</option>
          <option value="Leh">Leh</option>
          <option value="Balaghat">Balaghat</option>
          <option value="Barwani">Barwani</option>
          <option value="Betul">Betul</option>
          <option value="Bharhut">Bharhut</option>
          <option value="Bhind">Bhind</option>
          <option value="Bhojpur">Bhojpur</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Burhanpur">Burhanpur</option>
          <option value="Chhatarpur">Chhatarpur</option>
          <option value="Chhindwara">Chhindwara</option>
          <option value="Damoh">Damoh</option>
          <option value="Datia">Datia</option>
          <option value="Dewas">Dewas</option>
          <option value="Dhar">Dhar</option>
          <option value="Dr. Ambedkar Nagar (Mhow)">
            Dr. Ambedkar Nagar (Mhow)
          </option>
          <option value="Guna">Guna</option>
          <option value="Gwalior">Gwalior</option>
          <option value="Hoshangabad">Hoshangabad</option>
          <option value="Indore">Indore</option>
          <option value="Itarsi">Itarsi</option>
          <option value="Jabalpur">Jabalpur</option>
          <option value="Jhabua">Jhabua</option>
          <option value="Khajuraho">Khajuraho</option>
          <option value="Khandwa">Khandwa</option>
          <option value="Khargone">Khargone</option>
          <option value="Maheshwar">Maheshwar</option>
          <option value="Mandla">Mandla</option>
          <option value="Mandsaur">Mandsaur</option>
          <option value="Morena">Morena</option>
          <option value="Murwara">Murwara</option>
          <option value="Narsimhapur">Narsimhapur</option>
          <option value="Narsinghgarh">Narsinghgarh</option>
          <option value="Narwar">Narwar</option>
          <option value="Neemuch">Neemuch</option>
          <option value="Nowgong">Nowgong</option>
          <option value="Orchha">Orchha</option>
          <option value="Panna">Panna</option>
          <option value="Raisen">Raisen</option>
          <option value="Rajgarh">Rajgarh</option>
          <option value="Ratlam">Ratlam</option>
          <option value="Rewa">Rewa</option>
          <option value="Sagar">Sagar</option>
          <option value="Sarangpur">Sarangpur</option>
          <option value="Satna">Satna</option>
          <option value="Sehore">Sehore</option>
          <option value="Seoni">Seoni</option>
          <option value="Shahdol">Shahdol</option>
          <option value="Shajapur">Shajapur</option>
          <option value="Sheopur">Sheopur</option>
          <option value="Shivpuri">Shivpuri</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Vidisha">Vidisha</option>
          <option value="Ahmadnagar">Ahmadnagar</option>
          <option value="Akola">Akola</option>
          <option value="Amravati">Amravati</option>
          <option value="Aurangabad">Aurangabad</option>
          <option value="Bhandara">Bhandara</option>
          <option value="Bhusawal">Bhusawal</option>
          <option value="Bid">Bid</option>
          <option value="Buldhana">Buldhana</option>
          <option value="Chandrapur">Chandrapur</option>
          <option value="Daulatabad">Daulatabad</option>
          <option value="Dhule">Dhule</option>
          <option value="Jalgaon">Jalgaon</option>
          <option value="Kalyan">Kalyan</option>
          <option value="Karli">Karli</option>
          <option value="Kolhapur">Kolhapur</option>
          <option value="Mahabaleshwar">Mahabaleshwar</option>
          <option value="Malegaon">Malegaon</option>
          <option value="Matheran">Matheran</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Nanded">Nanded</option>
          <option value="Nashik">Nashik</option>
          <option value="Osmanabad">Osmanabad</option>
          <option value="Pandharpur">Pandharpur</option>
          <option value="Parbhani">Parbhani</option>
          <option value="Pune">Pune</option>
          <option value="Ratnagiri">Ratnagiri</option>
          <option value="Sangli">Sangli</option>
          <option value="Satara">Satara</option>
          <option value="Sevagram">Sevagram</option>
          <option value="Solapur">Solapur</option>
          <option value="Thane">Thane</option>
          <option value="Ulhasnagar">Ulhasnagar</option>
          <option value="Vasai-Virar">Vasai-Virar</option>
          <option value="Wardha">Wardha</option>
          <option value="Yavatmal">Yavatmal</option>
          <option value="Imphal">Imphal</option>
          <option value="Cherrapunji">Cherrapunji</option>
          <option value="Shillong">Shillong</option>
          <option value="Aizawl">Aizawl</option>
          <option value="Lunglei">Lunglei</option>
          <option value="Kohima">Kohima</option>
          <option value="Mon">Mon</option>
          <option value="Phek">Phek</option>
          <option value="Wokha">Wokha</option>
          <option value="Zunheboto">Zunheboto</option>
          <option value="Balangir">Balangir</option>
          <option value="Baleshwar">Baleshwar</option>
          <option value="Baripada">Baripada</option>
          <option value="Bhubaneshwar">Bhubaneshwar</option>
          <option value="Brahmapur">Brahmapur</option>
          <option value="Cuttack">Cuttack</option>
          <option value="Dhenkanal">Dhenkanal</option>
          <option value="Kendujhar">Kendujhar</option>
          <option value="Konark">Konark</option>
          <option value="Koraput">Koraput</option>
          <option value="Paradip">Paradip</option>
          <option value="Phulabani">Phulabani</option>
          <option value="Puri">Puri</option>
          <option value="Sambalpur">Sambalpur</option>
          <option value="Udayagiri">Udayagiri</option>
          <option value="Karaikal">Karaikal</option>
          <option value="Mahe">Mahe</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Yanam">Yanam</option>
          <option value="Amritsar">Amritsar</option>
          <option value="Batala">Batala</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Faridkot">Faridkot</option>
          <option value="Firozpur">Firozpur</option>
          <option value="Gurdaspur">Gurdaspur</option>
          <option value="Hoshiarpur">Hoshiarpur</option>
          <option value="Jalandhar">Jalandhar</option>
          <option value="Kapurthala">Kapurthala</option>
          <option value="Ludhiana">Ludhiana</option>
          <option value="Nabha">Nabha</option>
          <option value="Patiala">Patiala</option>
          <option value="Rupnagar">Rupnagar</option>
          <option value="Sangrur">Sangrur</option>
          <option value="Abu">Abu</option>
          <option value="Ajmer">Ajmer</option>
          <option value="Alwar">Alwar</option>
          <option value="Amer">Amer</option>
          <option value="Barmer">Barmer</option>
          <option value="Beawar">Beawar</option>
          <option value="Bharatpur">Bharatpur</option>
          <option value="Bhilwara">Bhilwara</option>
          <option value="Bikaner">Bikaner</option>
          <option value="Bundi">Bundi</option>
          <option value="Chittaurgarh">Chittaurgarh</option>
          <option value="Churu">Churu</option>
          <option value="Dhaulpur">Dhaulpur</option>
          <option value="Dungarpur">Dungarpur</option>
          <option value="Ganganagar">Ganganagar</option>
          <option value="Hanumangarh">Hanumangarh</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Jaisalmer">Jaisalmer</option>
          <option value="Jalor">Jalor</option>
          <option value="Jhalawar">Jhalawar</option>
          <option value="Jhunjhunu">Jhunjhunu</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Kishangarh">Kishangarh</option>
          <option value="Kota">Kota</option>
          <option value="Merta">Merta</option>
          <option value="Nagaur">Nagaur</option>
          <option value="Nathdwara">Nathdwara</option>
          <option value="Pali">Pali</option>
          <option value="Phalodi">Phalodi</option>
          <option value="Pushkar">Pushkar</option>
          <option value="Sawai Madhopur">Sawai Madhopur</option>
          <option value="Shahpura">Shahpura</option>
          <option value="Sikar">Sikar</option>
          <option value="Sirohi">Sirohi</option>
          <option value="Tonk">Tonk</option>
          <option value="Udaipur">Udaipur</option>
          <option value="Gangtok">Gangtok</option>
          <option value="Gyalshing">Gyalshing</option>
          <option value="Lachung">Lachung</option>
          <option value="Mangan">Mangan</option>
          <option value="Arcot">Arcot</option>
          <option value="Chengalpattu">Chengalpattu</option>
          <option value="Chennai">Chennai</option>
          <option value="Chidambaram">Chidambaram</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Cuddalore">Cuddalore</option>
          <option value="Dharmapuri">Dharmapuri</option>
          <option value="Dindigul">Dindigul</option>
          <option value="Erode">Erode</option>
          <option value="Kanchipuram">Kanchipuram</option>
          <option value="Kanniyakumari">Kanniyakumari</option>
          <option value="Kodaikanal">Kodaikanal</option>
          <option value="Kumbakonam">Kumbakonam</option>
          <option value="Madurai">Madurai</option>
          <option value="Mamallapuram">Mamallapuram</option>
          <option value="Nagappattinam">Nagappattinam</option>
          <option value="Nagercoil">Nagercoil</option>
          <option value="Palayamkottai">Palayamkottai</option>
          <option value="Pudukkottai">Pudukkottai</option>
          <option value="Rajapalayam">Rajapalayam</option>
          <option value="Ramanathapuram">Ramanathapuram</option>
          <option value="Salem">Salem</option>
          <option value="Thanjavur">Thanjavur</option>
          <option value="Tiruchchirappalli">Tiruchchirappalli</option>
          <option value="Tirunelveli">Tirunelveli</option>
          <option value="Tiruppur">Tiruppur</option>
          <option value="Thoothukudi">Thoothukudi</option>
          <option value="Udhagamandalam">Udhagamandalam</option>
          <option value="Vellore">Vellore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Karimnagar">Karimnagar</option>
          <option value="Khammam">Khammam</option>
          <option value="Mahbubnagar">Mahbubnagar</option>
          <option value="Nizamabad">Nizamabad</option>
          <option value="Sangareddi">Sangareddi</option>
          <option value="Warangal">Warangal</option>
          <option value="Agartala">Agartala</option>
          <option value="Agra">Agra</option>
          <option value="Aligarh">Aligarh</option>
          <option value="Amroha">Amroha</option>
          <option value="Ayodhya">Ayodhya</option>
          <option value="Azamgarh">Azamgarh</option>
          <option value="Bahraich">Bahraich</option>
          <option value="Ballia">Ballia</option>
          <option value="Banda">Banda</option>
          <option value="Bara Banki">Bara Banki</option>
          <option value="Bareilly">Bareilly</option>
          <option value="Basti">Basti</option>
          <option value="Bijnor">Bijnor</option>
          <option value="Bithur">Bithur</option>
          <option value="Budaun">Budaun</option>
          <option value="Bulandshahr">Bulandshahr</option>
          <option value="Deoria">Deoria</option>
          <option value="Etah">Etah</option>
          <option value="Etawah">Etawah</option>
          <option value="Faizabad">Faizabad</option>
          <option value="Farrukhabad-cum-Fatehgarh">
            Farrukhabad-cum-Fatehgarh
          </option>
          <option value="Fatehpur">Fatehpur</option>
          <option value="Fatehpur Sikri">Fatehpur Sikri</option>
          <option value="Ghaziabad">Ghaziabad</option>
          <option value="Ghazipur">Ghazipur</option>
          <option value="Gonda">Gonda</option>
          <option value="Gorakhpur">Gorakhpur</option>
          <option value="Hamirpur">Hamirpur</option>
          <option value="Hardoi">Hardoi</option>
          <option value="Hathras">Hathras</option>
          <option value="Jalaun">Jalaun</option>
          <option value="Jaunpur">Jaunpur</option>
          <option value="Jhansi">Jhansi</option>
          <option value="Kannauj">Kannauj</option>
          <option value="Kanpur">Kanpur</option>
          <option value="Lakhimpur">Lakhimpur</option>
          <option value="Lalitpur">Lalitpur</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Mainpuri">Mainpuri</option>
          <option value="Mathura">Mathura</option>
          <option value="Meerut">Meerut</option>
          <option value="Mirzapur-Vindhyachal">Mirzapur-Vindhyachal</option>
          <option value="Moradabad">Moradabad</option>
          <option value="Muzaffarnagar">Muzaffarnagar</option>
          <option value="Partapgarh">Partapgarh</option>
          <option value="Pilibhit">Pilibhit</option>
          <option value="Prayagraj">Prayagraj</option>
          <option value="Rae Bareli">Rae Bareli</option>
          <option value="Rampur">Rampur</option>
          <option value="Saharanpur">Saharanpur</option>
          <option value="Sambhal">Sambhal</option>
          <option value="Shahjahanpur">Shahjahanpur</option>
          <option value="Sitapur">Sitapur</option>
          <option value="Sultanpur">Sultanpur</option>
          <option value="Tehri">Tehri</option>
          <option value="Varanasi">Varanasi</option>
          <option value="Almora">Almora</option>
          <option value="Dehra Dun">Dehra Dun</option>
          <option value="Haridwar">Haridwar</option>
          <option value="Mussoorie">Mussoorie</option>
          <option value="Nainital">Nainital</option>
          <option value="Pithoragarh">Pithoragarh</option>
          <option value="Alipore">Alipore</option>
          <option value="Alipur Duar">Alipur Duar</option>
          <option value="Asansol">Asansol</option>
          <option value="Baharampur">Baharampur</option>
          <option value="Bally">Bally</option>
          <option value="Balurghat">Balurghat</option>
          <option value="Bankura">Bankura</option>
          <option value="Baranagar">Baranagar</option>
          <option value="Barasat">Barasat</option>
          <option value="Barrackpore">Barrackpore</option>
          <option value="Basirhat">Basirhat</option>
          <option value="Bhatpara">Bhatpara</option>
          <option value="Bishnupur">Bishnupur</option>
          <option value="Budge Budge">Budge Budge</option>
          <option value="Burdwan">Burdwan</option>
          <option value="Chandernagore">Chandernagore</option>
          <option value="Darjeeling">Darjeeling</option>
          <option value="Diamond Harbour">Diamond Harbour</option>
          <option value="Dum Dum">Dum Dum</option>
          <option value="Durgapur">Durgapur</option>
          <option value="Halisahar">Halisahar</option>
          <option value="Haora">Haora</option>
          <option value="Hugli">Hugli</option>
          <option value="Ingraj Bazar">Ingraj Bazar</option>
          <option value="Jalpaiguri">Jalpaiguri</option>
          <option value="Kalimpong">Kalimpong</option>
          <option value="Kamarhati">Kamarhati</option>
          <option value="Kanchrapara">Kanchrapara</option>
          <option value="Kharagpur">Kharagpur</option>
          <option value="Cooch Behar">Cooch Behar</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Krishnanagar">Krishnanagar</option>
          <option value="Malda">Malda</option>
          <option value="Midnapore">Midnapore</option>
          <option value="Murshidabad">Murshidabad</option>
          <option value="Nabadwip">Nabadwip</option>
          <option value="Palashi">Palashi</option>
          <option value="Panihati">Panihati</option>
          <option value="Purulia">Purulia</option>
          <option value="Raiganj">Raiganj</option>
          <option value="Santipur">Santipur</option>
          <option value="Shantiniketan">Shantiniketan</option>
          <option value="Shrirampur">Shrirampur</option>
          <option value="Siliguri">Siliguri</option>
          <option value="Siuri">Siuri</option>
          <option value="Tamluk">Tamluk</option>
          <option value="Titagarh">Titagarh</option>
        </datalist>
        <div className="px-6 md:px-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div className="py-4">
              <div className="relative">
                <input
                  type="text"
                  id="FullName"
                  {...register("name", { required: "Full Name is required" })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.name
                      ? "border-red-600"
                      : FullnameValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="FullName"
                  className={`absolute text-sm ${
                    errors.name
                      ? "text-red-600"
                      : FullnameValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Full Name
                </label>
              </div>
              {errors.name && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.name.message}
                </span>
              )}
            </div>
            {/* Email */}
            <div className="py-4">
              <div className="relative">
                <input
                  type="text"
                  id="Email"
                  {...register("Email", {
                    required: "Email is required",
                    validate: (value) =>
                      value.includes("@") || "Email should include @",
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Email
                      ? "border-red-600"
                      : EmailValue.length <= 0
                      ? "border-gray-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="Email"
                  className={`absolute text-sm ${
                    errors.Email
                      ? "text-red-600"
                      : EmailValue.length <= 0
                      ? "text-gray-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Email
                </label>
              </div>
              {errors.Email && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Email.message}
                </span>
              )}
            </div>
            {/* Phone number */}
            <div className="py-4">
              <div className="relative">
                <input
                  type="text"
                  id="Phone"
                  {...register("Phone", {
                    required: "Phone is required",
                    maxLength: {
                      value: 10,
                      message: "Phone number should be 10 digits",
                    },
                  })}
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                    errors.Phone
                      ? "border-red-600"
                      : PhoneValue.length <= 0
                      ? "border-gray-500"
                      : PhoneValue.length < 10
                      ? "border-yellow-500"
                      : "border-green-600"
                  } appearance-none focus:outline-none focus:ring-0 peer`}
                  placeholder=""
                />
                <label
                  htmlFor="Phone"
                  className={`absolute text-sm ${
                    errors.Phone
                      ? "text-red-600"
                      : PhoneValue.length <= 0
                      ? "text-gray-500"
                      : PhoneValue.length < 10
                      ? "text-yellow-500"
                      : "text-green-600"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                >
                  Enter Your Phone
                </label>
              </div>
              {errors.Phone && (
                <span className="mt-2 pl-2 text-xs text-red-600">
                  {errors.Phone.message}
                </span>
              )}
            </div>
            {/* Position | Experience | Other Position | Other JobType*/}
            <div className="flex md:flex-row flex-col md:gap-4 justify-between">
              {/* Position */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="Position"
                    {...register("Position", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.Position
                        ? "border-red-600"
                        : PositionValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Choose
                    </option>
                    <option value="Front_End_Developer">
                      Front End Developer
                    </option>
                    <option value="Back_End_Developer">
                      Back End Developer
                    </option>
                    <option value="Full_Stack_Developer">
                      Full Stack Developer
                    </option>
                    <option value="Data_Engineer">Data Engineer</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="Position"
                    className={`absolute text-sm ${
                      errors.Position
                        ? "text-red-600"
                        : PositionValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Select Your Position
                  </label>
                </div>
                {errors.Position && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Position.message}
                  </span>
                )}
              </div>
              {/* Other Position */}
              <div
                className={`${
                  showOtherPositionInput ? "block" : "hidden"
                } py-4 w-full`}
              >
                <div className="relative">
                  <input
                    type="text"
                    id="OtherPosition"
                    {...register("OtherPosition", {
                      required: !showOtherPositionInput
                        ? false
                        : "Full Name is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherPosition
                        ? "border-red-600"
                        : OtherPositionValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherPosition"
                    className={`absolute text-sm ${
                      errors.OtherPosition
                        ? "text-red-600"
                        : OtherPositionValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Position
                  </label>
                </div>
                {errors.OtherPosition && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherPosition.message}
                  </span>
                )}
              </div>
              {/* Experience */}
              <div className="py-4 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="Experience"
                    {...register("Experience", {
                      required: "Experience is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.Experience
                        ? "border-red-600"
                        : ExperienceValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="Experience"
                    className={`absolute text-sm ${
                      errors.Experience
                        ? "text-red-600"
                        : ExperienceValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Experience
                  </label>
                </div>
                {errors.Experience && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Experience.message}
                  </span>
                )}
              </div>
              {/* Job Type */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="JobType"
                    {...register("JobType", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.JobType
                        ? "border-red-600"
                        : JobTypeValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Choose
                    </option>
                    <option value="Full_Time">Full Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="JobType"
                    className={`absolute text-sm ${
                      errors.JobType
                        ? "text-red-600"
                        : JobTypeValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Select Your Job Type
                  </label>
                </div>
                {errors.JobType && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.JobType.message}
                  </span>
                )}
              </div>
              {/* Other Job Type*/}
              <div
                className={`${
                  showOtherJobTypeInput ? "block" : "hidden"
                } py-4 w-full`}
              >
                <div className="relative">
                  <input
                    type="text"
                    id="OtherJobType"
                    {...register("OtherJobType", {
                      required: !showOtherJobTypeInput
                        ? false
                        : "Other Job Type is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherJobType
                        ? "border-red-600"
                        : OtherJobTypeValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherJobType"
                    className={`absolute text-sm ${
                      errors.OtherJobType
                        ? "text-red-600"
                        : OtherJobTypeValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Job Type
                  </label>
                </div>
                {errors.OtherJobType && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherJobType.message}
                  </span>
                )}
              </div>
            </div>
            {/* Current CTC | Expected CTC | City */}
            <div className="flex md:flex-row flex-col md:gap-4 justify-between">
              {/* Current CTC */}
              <div className="py-4 w-full">
                <div className="relative ">
                  <input
                    type="number"
                    id="CurrentCtc"
                    {...register("CurrentCtc", {
                      required: "Current Ctc is required",
                    })}
                    min={JobTypeValue === "Internship" ? 0 : 100000}
                    value={JobTypeValue === "Internship" ? 0 : CurrentCtcValue}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.CurrentCtc
                        ? "border-red-600"
                        : CurrentCtcValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="CurrentCtc"
                    className={`absolute text-sm ${
                      errors.CurrentCtc
                        ? "text-red-600"
                        : CurrentCtcValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Current CTC
                  </label>
                </div>
                {errors.CurrentCtc && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.CurrentCtc.message}
                  </span>
                )}
              </div>
              {/* Expected CTC */}
              <div className="py-4 w-full">
                <div className="relative ">
                  <input
                    type="number"
                    id="ExpectedCtc"
                    {...register("ExpectedCtc", {
                      required: "Expected ctc is required",
                    })}
                    min={JobTypeValue === "Internship" ? 0 : 100000}
                    // value=""
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.ExpectedCtc
                        ? "border-red-600"
                        : ExpectedCtcValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="ExpectedCtc"
                    className={`absolute text-sm ${
                      errors.ExpectedCtc
                        ? "text-red-600"
                        : ExpectedCtcValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Expected CTC
                  </label>
                </div>
                {errors.ExpectedCtc && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.ExpectedCtc.message}
                  </span>
                )}
              </div>
              {/* Current City */}
              <div className="py-4 w-full">
                <div className="relative">
                  <input
                    list="CitiesNames"
                    type="text"
                    id="CurrentCity"
                    {...register("CurrentCity", {
                      required: "Current City is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.CurrentCity
                        ? "border-red-600"
                        : CurrentCityValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="CurrentCity"
                    className={`absolute text-sm ${
                      errors.CurrentCity
                        ? "text-red-600"
                        : CurrentCityValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Current City
                  </label>
                </div>
                {errors.CurrentCity && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.CurrentCity.message}
                  </span>
                )}
              </div>
            </div>
            {/* Upload Resume */}
            <div className="flex items-center justify-center w-full my-4">
              <label
                htmlFor="dropzone-file"
                className="flex bg-white flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {fileName ? (
                    <p className="mb-2 text-sm text-green-600 font-semibold">
                      {fileName}
                    </p>
                  ) : (
                    <>
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
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
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        Only PDF (MAX. 5MB)
                      </p>
                    </>
                  )}
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={onFileChange} // ✅ Handles file selection and validation
                />
              </label>
            </div>
            {/* Show Error Message */}
            {error && (
              <span className="mt-2 text-sm text-red-600">{error}</span>
            )}
            {/* Find | Reason */}
            <div className="flex md:flex-row flex-col md:gap-4 justify-between">
              {/* Find */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="Find"
                    {...register("Find", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.Find
                        ? "border-red-600"
                        : FindValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="AasaanJobs">AasaanJobs</option>
                    <option value="Careesma">Careesma</option>
                    <option value="CutShort">CutShort</option>
                    <option value="EDIT Training Institute">
                      EDIT Training Institute
                    </option>
                    <option value="Whatsapp">Whatsapp</option>
                    <option value="WorkIndia">WorkIndia</option>
                    <option value="ShortJobs Consultancy">
                      ShortJobs Consultancy
                    </option>
                    <option value="Rohan Joshi Instagram">
                      Rohan Joshi Instagram
                    </option>
                    <option value="Quikr">Quikr</option>
                    <option value="Naukri">Naukri</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Internshala">Internshala</option>
                    <option value="Indeed">Indeed</option>
                    <option value="Hirist">Hirist</option>
                    <option value="FirstNaukri">FirstNaukri</option>
                    <option value="Facebook">Facebook</option>
                    <option value="EduBridge India">EduBridge India</option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="Find"
                    className={`absolute text-sm ${
                      errors.Find
                        ? "text-red-600"
                        : FindValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Select Where You Find This Job
                  </label>
                </div>
                {errors.Find && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Find.message}
                  </span>
                )}
              </div>
              {/* Other Find */}
              <div
                className={`${
                  showOtherFindInput ? "block" : "hidden"
                } py-4 w-full`}
              >
                <div className="relative">
                  <input
                    type="text"
                    id="OtherFind"
                    {...register("OtherFind", {
                      required: !showOtherFindInput
                        ? false
                        : "Other Find is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherFind
                        ? "border-red-600"
                        : OtherFindValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherFind"
                    className={`absolute text-sm ${
                      errors.OtherFind
                        ? "text-red-600"
                        : OtherFindValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Find
                  </label>
                </div>
                {errors.OtherFind && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherFind.message}
                  </span>
                )}
              </div>
              {/* Reason */}
              <div className={`py-4 w-full`}>
                <div className="relative">
                  <select
                    id="Reason"
                    {...register("Reason", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.Reason
                        ? "border-red-600"
                        : ReasonValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="Better_Growth_Opportunities">
                      Better Growth Opportunities
                    </option>
                    <option value="Higher_Pay_Expectations">
                      Higher Pay Expectations
                    </option>
                    <option value="Better_Growth_Opportunities">
                      Better Working Environment
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <label
                    htmlFor="Reason"
                    className={`absolute text-sm ${
                      errors.Reason
                        ? "text-red-600"
                        : ReasonValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Select Reason For Leaving
                  </label>
                </div>
                {errors.Reason && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Reason.message}
                  </span>
                )}
              </div>
              {/* Other Reason */}
              <div
                className={`${
                  showOtherReasonInput ? "block" : "hidden"
                } py-4 w-full`}
              >
                <div className="relative">
                  <input
                    type="text"
                    id="OtherReason"
                    {...register("OtherReason", {
                      required: !showOtherReasonInput
                        ? false
                        : "Other Reason is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.OtherReason
                        ? "border-red-600"
                        : OtherReasonValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="OtherReason"
                    className={`absolute text-sm ${
                      errors.OtherReason
                        ? "text-red-600"
                        : OtherReasonValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Other Reason
                  </label>
                </div>
                {errors.OtherReason && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.OtherReason.message}
                  </span>
                )}
              </div>
            </div>
            {/* System | Internet */}
            <div className="flex md:flex-row flex-col md:gap-4 justify-between">
              {/* System */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="System"
                    {...register("System", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.System
                        ? "border-red-600"
                        : SystemValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <label
                    htmlFor="System"
                    className={`absolute text-sm ${
                      errors.System
                        ? "text-red-600"
                        : SystemValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Do You Own A Computer System For (WFH/Hybrid)
                  </label>
                </div>
                {errors.System && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.System.message}
                  </span>
                )}
              </div>
              {/* Internet */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="Internet"
                    {...register("Internet", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.Internet
                        ? "border-red-600"
                        : InternetValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <label
                    htmlFor="Internet"
                    className={`absolute text-sm ${
                      errors.Internet
                        ? "text-red-600"
                        : InternetValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Do You Have Internet?
                  </label>
                </div>
                {errors.Reason && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Reason.message}
                  </span>
                )}
              </div>
            </div>
            {/* Notice Priod | Date of Joining | Join question | Message */}
            <div className="flex md:flex-row flex-col md:gap-4 justify-between">
              {/* Notice Period */}
              <div className="py-4 w-full">
                <div className="relative">
                  <select
                    id="Notice"
                    {...register("Notice", {
                      required: "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                    ${
                      errors.Notice
                        ? "border-red-600"
                        : NoticeValue
                        ? "border-green-600"
                        : "border-gray-500"
                    } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  <label
                    htmlFor="Notice"
                    className={`absolute text-sm ${
                      errors.Notice
                        ? "text-red-600"
                        : NoticeValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Are You On Notice Period?
                  </label>
                </div>
                {errors.Notice && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Notice.message}
                  </span>
                )}
              </div>
              {/* Date Picker */}
              <div
                className={`${showDateInput ? "block" : "hidden"} py-4 w-full`}
              >
                <div className="relative">
                  <input
                    type="date"
                    id="Date"
                    {...register("Date", {
                      required: !showDateInput ? false : "Date is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                  ${
                    errors.Date
                      ? "border-red-600"
                      : DateValue?.length > 0
                      ? "border-green-600"
                      : "border-gray-500"
                  } 
                    appearance-none focus:outline-none focus:ring-0 peer`}
                  />

                  <label
                    htmlFor="Date"
                    className={`absolute text-sm ${
                      errors.Date
                        ? "text-red-600"
                        : DateValue?.length > 0
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Joining Date
                  </label>
                </div>
                {errors.Date && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Date.message}
                  </span>
                )}
              </div>
              {/* Join */}
              <div
                className={`${showJoinInput ? "block" : "hidden"} py-4 w-full`}
              >
                <div className="relative">
                  <select
                    id="Join"
                    {...register("Join", {
                      required: !showJoinInput
                        ? false
                        : "This field is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 
                        ${
                          errors.Join
                            ? "border-red-600"
                            : JoinValue
                            ? "border-green-600"
                            : "border-gray-500"
                        } 
                        appearance-none focus:outline-none focus:ring-0 peer`}
                  >
                    <option value="" hidden>
                      Chosse
                    </option>
                    <option value="Immediate">Immediate Joiner</option>
                    <option value="15-30">Need 15-30 days notice period</option>
                    <option value="30-60">Need 30-60 days notice period</option>
                    <option value="60+">Need 60+ days notice period</option>
                  </select>
                  <label
                    htmlFor="Join"
                    className={`absolute text-sm ${
                      errors.Join
                        ? "text-red-600"
                        : JoinValue
                        ? "text-green-600"
                        : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    How Soon Can You Join?
                  </label>
                </div>
                {errors.Join && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Join.message}
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="py-4 w-full">
                <div className="relative">
                  <input
                    type="text"
                    id="Message"
                    {...register("Message", {
                      required: "Message is required",
                    })}
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 ${
                      errors.Message
                        ? "border-red-600"
                        : MessageValue.length <= 0
                        ? "border-gray-500"
                        : "border-green-600"
                    } appearance-none focus:outline-none focus:ring-0 peer`}
                    placeholder=""
                  />
                  <label
                    htmlFor="Message"
                    className={`absolute text-sm ${
                      errors.name
                        ? "text-red-600"
                        : MessageValue.length <= 0
                        ? "text-gray-500"
                        : "text-green-600"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-[#fafafa] px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1`}
                  >
                    Enter Your Message
                  </label>
                </div>
                {errors.Message && (
                  <span className="mt-2 pl-2 text-xs text-red-600">
                    {errors.Message.message}
                  </span>
                )}
              </div>
            </div>
            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-4 bg-[#007fff] hover:bg-[#0066ff] hover:cursor-pointer text-white px-16 py-4 rounded-lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
    </>
  );
};

export default ApplyNowForm;
