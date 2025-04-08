import styles from "./css/map.module.css";

const Map = () => {
  return (
    <div className={`${styles.map} relative w-full h-120`}>
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8826717260513!2d-74.00148213956105!3d40.72059928673751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a32c0eea7%3A0xb2b91a336adead47!2s447%20Broadway%202nd%20Floor%2C%20Suite%20896%2C%20New%20York%2C%20NY%2010013%2C%20USA!5e0!3m2!1sen!2sin!4v1742894605233!5m2!1sen!2sin&output=embed&iwloc=0"
        width="100%"
        height="100%"
        style={{
          border: "0", // Ensures interactivity
        }}
        fullscreencontrol="false"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Color Overlay - Keeping Map Clickable */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#007fff94] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default Map;
