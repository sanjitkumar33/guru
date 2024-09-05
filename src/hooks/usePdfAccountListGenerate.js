import { PDFDocument } from 'pdf-lib';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePDF = async (tableId, password) => {
  const input = document.getElementById(tableId);

  const options = {
    scale: 2,
    useCORS: true,
  };

  const canvas = await html2canvas(input, options);
  const imgData = canvas.toDataURL('image/png');

  // Create initial PDF with jsPDF
  const pdf = new jsPDF('p', 'mm', 'a4');
  pdf.addImage(imgData, 'PNG', 10, 30, 190, 0);

  // Add header and footer
  pdf.setFontSize(12);
  pdf.text('Virtual Account Table', 10, 10);
  pdf.text('Your Company Name', 10, 20);
  const pageCount = pdf.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.text(`Page ${i} of ${pageCount}`, pdf.internal.pageSize.width - 20, pdf.internal.pageSize.height - 10);
  }

  // Convert jsPDF document to PDFDocument (pdf-lib)
  const jsPdfBytes = pdf.output('arraybuffer');
  const pdfDoc = await PDFDocument.load(jsPdfBytes);

  // Set document metadata
  pdfDoc.setTitle('Virtual Account Table');
  pdfDoc.setCreator('Your Company Name');
  pdfDoc.setSubject('Virtual Account Details');

  // Encrypt PDF using pdf-lib
  if (password) {
    pdfDoc.updatePermissions({
      userPassword: password,
      ownerPassword: password,
      permissions: {
        printing: 'highResolution',
        modifying: false,
        copying: false,
      },
    });
  }

  // Save and download the encrypted PDF
  const protectedPdfBytes = await pdfDoc.save();
  const protectedPdfBlob = new Blob([protectedPdfBytes], { type: 'application/pdf' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(protectedPdfBlob);
  downloadLink.download = 'protected_virtual_account_table.pdf';
  downloadLink.click();
};

export default generatePDF;
