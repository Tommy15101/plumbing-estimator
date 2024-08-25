import { jsPDF } from "jspdf";
import "jspdf-autotable";
import logo from "../assets/images/logo.png";

const usePDF = (jobType, jobNumber, jobNotes, cart) => {
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add Logo
    doc.addImage(logo, "PNG", 10, 10, 30, 30);

    // Define page width and margins
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;

    // Title of the document and Job Number aligned with the logo
    const titleYPosition = 25;
    const jobNumberYPosition = titleYPosition + 5;

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 255);
    const titleWidth = doc.getTextWidth("Estimation Assistant");
    doc.text(
      "Estimation Assistant",
      pageWidth - titleWidth - margin,
      titleYPosition
    );

    if (jobNumber) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);

      const jobNumberLabelWidth = doc.getTextWidth("Job Number:");
      const jobNumberValueWidth = doc.getTextWidth(jobNumber);

      const adjustedXPosition =
        pageWidth - jobNumberLabelWidth - jobNumberValueWidth - margin;
      const spacingX = 2.5; // Smaller spacing between the label and the number
      const spacingY = 2.5; // Vertical spacing to bring the text down

      doc.text("Job Number:", adjustedXPosition, jobNumberYPosition + spacingY);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      doc.text(
        jobNumber,
        adjustedXPosition + jobNumberLabelWidth + spacingX,
        jobNumberYPosition + spacingY
      );
    }

    // Job Type and Job Notes on the left side of the page
    let y = 50;
    const originalGap = 30; // Original gap value used for positioning text
    const slightAdjustment = 5; // Half of the last adjustment
    const additionalOffset = 2.5; // Additional offset to move Job Notes to the right

    if (jobType) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text("Job Type:", margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(jobType, margin + originalGap - slightAdjustment, y); // Adjusted position
      y += 10;
    }

    if (jobNotes) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 0, 0);
      doc.text("Job Notes:", margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);

      // Add job notes and calculate height
      const jobNotesText = doc.splitTextToSize(
        jobNotes,
        pageWidth - 2 * margin
      );
      jobNotesText.forEach((line, index) => {
        doc.text(
          line,
          margin + originalGap - slightAdjustment + additionalOffset,
          y
        );
        y += 6; // Adjusted line height here
      });

      // Add extra space before the table
      y += 10; // Additional spacing
    }

    // Adding Cart Details with a Table
    const tableData = Object.keys(cart).map((category) => ({
      category: category.toUpperCase(),
      items: cart[category].join(", "),
    }));

    const columns = [
      { header: "Category", dataKey: "category" },
      { header: "Items", dataKey: "items" },
    ];

    doc.autoTable({
      startY: y,
      head: [columns.map((col) => col.header)],
      body: tableData.map((row) => columns.map((col) => row[col.dataKey])),
      theme: "grid",
      styles: { fontSize: 12, cellPadding: 5 },
      headStyles: { fillColor: [0, 0, 255], textColor: [255, 255, 255] },
    });

    doc.save("cart.pdf");
  };

  return { handleDownloadPDF };
};

export default usePDF;
