import { pdf } from "@react-pdf/renderer";
import MyDocument from "./JDSample"; // Import your PDF document component

const openPdfInNewTab = async (title = "document") => {
  const blob = await pdf(<MyDocument title={title} />).toBlob(); // Generate PDF blob
  const url = URL.createObjectURL(blob); // Create a temporary URL for the PDF
  window.open(url, "_blank"); // Open in new tab
};

export default openPdfInNewTab;
