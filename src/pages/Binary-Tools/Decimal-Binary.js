import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");

  const handleDecimalChange = (event) => {
    setDecimal(event.target.value);
  };

  const convertDecimalToBinary = () => {
    let binaryValue = "";
    let tempDecimal = decimal;

    while (tempDecimal > 0) {
      binaryValue = (tempDecimal % 2) + binaryValue;
      tempDecimal = Math.floor(tempDecimal / 2);
    }

    setBinary(binaryValue || "0");
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>Decimal to Binary Converter</h3>
            </div>
            <div className={styles.ibox}>
              <label htmlFor="decimal-input">Enter decimal:</label>
              <input
                className="form-control"
                id="decimal-input"
                type="number"
                value={decimal}
                onChange={handleDecimalChange}
              />
              <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertDecimalToBinary}>Convert</button>
              {binary && <p>Binary: {binary}</p>}
            </div>
          </div>
          <div className={styles.description}>
            <h3>Introduction to Decimal to Binary Converter</h3>
            <h6>A Decimal to Binary Converter is a tool or software that allows users to convert decimal numbers, which are numbers represented in base 10 with digits ranging from 0 to 9, into binary code, which is a system of representing information using only two digits (0s and 1s). Binary code is commonly used in computer systems and networks as a way to represent data in a machine-readable format. Decimal to Binary Converter provides a convenient way to convert decimal numbers into binary code, which can be useful in various applications, such as encoding data, understanding binary representations, or performing computations in binary systems.
            </h6>
            <h3>Features and Functionality of Decimal to Binary Converter</h3>
            <h6>Decimal to Binary Converters typically offer a user-friendly interface that allows users to input decimal numbers and convert them into binary code. These converters use algorithms or mathematical operations to convert decimal numbers into binary representations, where each digit in the binary code corresponds to a power of 2. The converter typically displays the binary code as a sequence of 0s and 1s, representing the binary digits, which can be used in various applications, such as encoding data for storage, transmission, or processing. Some Decimal to Binary Converters may also offer additional features, such as the ability to convert fractions or handle negative numbers, or provide options for formatting or customizing the binary output.
            </h6>
            <h3>Benefits of Using a Decimal to Binary Converter</h3>
            <h6>Using a Decimal to Binary Converter can offer several benefits in converting decimal numbers into binary code. Firstly, it provides an easy way to understand and work with binary representations, which are commonly used in computer systems and networks for encoding data or performing computations. Decimal to Binary Converters can help users visualize and comprehend the binary code corresponding to a given decimal number, which can aid in understanding how binary systems work or how data is represented in binary format. Secondly, Decimal to Binary Converters can be used in programming or coding tasks, where binary code may be needed for specific operations or protocols. Converting decimal numbers into binary code can be useful in writing code for binary-based operations, such as bitwise operations, network protocols, or embedded systems. Additionally, Decimal to Binary Converters can be used for educational purposes, allowing students or learners to practice converting decimal numbers into binary code as part of their computer science or digital logic studies. Decimal to Binary Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert decimal numbers into binary code for their specific purposes, such as coding tasks, data analysis, or educational exercises.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
