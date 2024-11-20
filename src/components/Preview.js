import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Preview({ formData }) {
  // Function to generate PDF
  const generatePDF = async () => {
    const previewSection = document.getElementById("preview-section");
    const canvas = await html2canvas(previewSection);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Add content as image
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Add clickable links (GitHub and LinkedIn)
    let yOffset = pdfHeight + 10; // Position below the image
    if (formData.github) {
      pdf.text("GitHub: ", 10, yOffset);
      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink(formData.github, 35, yOffset, { url: formData.github });
      yOffset += 10;
    }
    if (formData.linkedin) {
      pdf.setTextColor(0, 0, 0); // Reset text color
      pdf.text("LinkedIn: ", 10, yOffset);
      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink(formData.linkedin, 35, yOffset, { url: formData.linkedin });
    }

    // Save the PDF
    pdf.save("portfolio.pdf");
  };

  return (
    <section className="preview-section">
      <h2>Portfolio Preview</h2>
      <div id="preview-section" className="preview-card">
        <h3 className="name">{formData.name || "Your Name"}</h3>
        <p className="bio">{formData.bio || "Your bio will appear here."}</p>
        <h4>Skills:</h4>
        <p className="skills">{formData.skills || "Your skills will appear here."}</p>
        <div className="links">
          {formData.github && (
            <a href={formData.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {formData.linkedin && (
            <a href={formData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="actions">
        <button onClick={generatePDF} className="download-pdf">
          Download as PDF
        </button>
      </div>
    </section>
  );
}

export default Preview;
