import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ExportButtonsProps {
  targetRef: React.RefObject<HTMLDivElement | null>;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ targetRef }) => {
  const exportToImage = async () => {
    if (!targetRef.current) return;
    
    try {
      // Crear una copia del elemento para exportar
      const element = targetRef.current.cloneNode(true) as HTMLElement;
      
      // Cambiar el gradiente problemático por colores sólidos
      const gradientElements = element.querySelectorAll('.bg-gradient-to-r');
      gradientElements.forEach((el) => {
        el.classList.remove('from-blue-600', 'to-purple-600', 'bg-gradient-to-r');
        el.classList.add('bg-blue-600');
      });
      
      // Agregar el elemento temporalmente al DOM
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.style.top = '0';
      document.body.appendChild(element);
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight
      });
      
      // Remover el elemento temporal
      document.body.removeChild(element);
      
      const link = document.createElement('a');
      link.download = 'curriculum-vitae.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error al exportar imagen:', error);
      alert('Error al exportar la imagen. Intenta de nuevo.');
    }
  };

  const exportToPDF = async () => {
    if (!targetRef.current) return;
    
    try {
      // Crear una copia del elemento para exportar
      const element = targetRef.current.cloneNode(true) as HTMLElement;
      
      // Cambiar el gradiente problemático por colores sólidos
      const gradientElements = element.querySelectorAll('.bg-gradient-to-r');
      gradientElements.forEach((el) => {
        el.classList.remove('from-blue-600', 'to-purple-600', 'bg-gradient-to-r');
        el.classList.add('bg-blue-600');
      });
      
      // Agregar el elemento temporalmente al DOM
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.style.top = '0';
      document.body.appendChild(element);
      
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight
      });
      
      // Remover el elemento temporal
      document.body.removeChild(element);
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('curriculum-vitae.pdf');
    } catch (error) {
      console.error('Error al exportar PDF:', error);
      alert('Error al exportar el PDF. Intenta de nuevo.');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <button
        onClick={exportToImage}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[140px]"
        title="Exportar como imagen"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="hidden sm:inline">Imagen</span>
      </button>
      
      <button
        onClick={exportToPDF}
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 flex items-center gap-2 min-w-[140px]"
        title="Exportar como PDF"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="hidden sm:inline">PDF</span>
      </button>
    </div>
  );
};

export default ExportButtons; 