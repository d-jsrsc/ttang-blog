"use client";
import { jsPDF } from "jspdf";

export default function ExportPDF() {
  return (
    <button
      type="submit"
      onClick={() => {
        // const doc = new jsPDF();
        const doc = new jsPDF({
          orientation: "landscape",
          unit: "in",
          format: [4, 2],
        });

        const aboutDom = document.getElementById("about");
        if (!aboutDom) return;

        doc.html(aboutDom, {
          async callback(doc) {
            await doc.save("about");
          },
        });
      }}
      className="bg-sky-500 flex-auto shadow text-white rounded-md text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-sky-600 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 dark:focus:ring-offset-slate-900 dark:focus:ring-sky-700"
    >
      Export Page as PDF
    </button>
  );
}
