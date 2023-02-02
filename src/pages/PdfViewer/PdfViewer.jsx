import React from "react";
import Pagecomponent from "../../components/Pagecomponent/Pagecomponent.jsx";
import PDFViewer from "pdf-viewer-reactjs";

const PdfViewer = () => {
  return (
    <Pagecomponent>
      <div>
        <PDFViewer
          document={{
            url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
          }}
        />
      </div>
    </Pagecomponent>
  );
};

export default PdfViewer;
