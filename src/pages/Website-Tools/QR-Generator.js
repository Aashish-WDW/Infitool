import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from '../../styles/Website.module.css';

function Generate() {
  const [qrCodeValue, setQrCodeValue] = useState("");

  return (

    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>QR Generator</h3>
            </div>
            <div className={styles.ibox}>
              <div className={styles.QR}>
                {qrCodeValue != "" && (
                  <QRCode value={qrCodeValue} className={styles.QR} />
                )}
                <div class="form-group">
                  <input
                    placeholder="Enter Text or URL"
                    className="form-control"
                    onChange={(e) => {
                      setQrCodeValue(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <h3>What is a QR Code Generator?</h3>
            <h6>A QR Code Generator is an online tool that creates Quick Response (QR) codes, which are
              two-dimensional barcodes that can store and quickly access data. QR codes can store a variety of
              information, including URLs, text, and contact information, and can be easily scanned using a
              smartphone camera.</h6>
            <br></br>
            <h3>The Benefits of Using a QR Code Generator</h3>
            <h6>There are many benefits to using a QR Code Generator. QR codes make accessing data quick and
              convenient, as users can simply scan the code using their smartphone camera. QR codes are also an
              effective way to share information and are widely used for marketing and advertising purposes, as
              well as for tracking product information and inventory management.</h6>
            <br></br>
            <br></br>
            <h3>How to Use a QR Code Generator</h3>
            <h6>Using a QR Code Generator is simple. All you have to do is enter the data you want to store in the
              QR code, such as a URL, text, or contact information. The tool will then generate a QR code that you
              can download and use wherever you need it, such as on a website, in a marketing campaign, or on a
              product label.
              <br></br>
              In conclusion, QR codes are a convenient and effective way to store and quickly access data. By
              using a QR Code Generator, you can easily create and use QR codes for a variety of purposes,
              including marketing and advertising, tracking product information, and inventory management.
            </h6>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Generate;