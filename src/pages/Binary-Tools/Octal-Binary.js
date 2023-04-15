import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
  const [octal, setOctal] = useState("");
  const [binary, setBinary] = useState("");

  const handleOctalChange = (event) => {
    setOctal(event.target.value);
  };

  const convertOctalToBinary = () => {
    let octalDigits = octal.split("").reverse();
    let binaryDigits = [];

    // convert octal digits to binary groups
    for (let i = 0; i < octalDigits.length; i++) {
      let binaryGroup = parseInt(octalDigits[i], 8).toString(2);
      // pad with zeros if necessary
      if (i !== 0) {
        binaryGroup = binaryGroup.padStart(3, "0");
      }
      binaryDigits.unshift(binaryGroup);
    }

    setBinary(binaryDigits.join(""));
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>Octal to Binary Converter</h3>
            </div>
            <div className={styles.ibox}>
              <label htmlFor="octal-input">Enter octal number:</label>
              <input
                className="form-control"
                id="octal-input"
                type="text"
                value={octal}
                onChange={handleOctalChange}
              />
              <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertOctalToBinary}>Convert</button>
              {binary && <p>Binary: {binary}</p>}
            </div>
          </div>
          <div className={styles.description}>
            <h3>Introduction to Octal to Binary Converter</h3>
            <h6>An Octal to Binary Converter is a tool or software that allows users to convert octal numbers, which are numbers represented in base 8 with digits ranging from 0 to 7, into binary code, which is a system of representing information using only two digits (0s and 1s). Octal code is commonly used in computer systems and networks for various purposes, such as representing file permissions, memory addressing, or network addresses. Octal to Binary Converter provides a convenient way to convert octal numbers into binary code, which can be useful in various applications, such as encoding data, understanding binary representations, or performing computations in binary systems.
            </h6>
            <h3>Features and Functionality of Octal to Binary Converter</h3>
            <h6>Octal to Binary Converters typically offer a user-friendly interface that allows users to input octal numbers and convert them into binary code. These converters use algorithms or mathematical operations to convert octal numbers into binary representations, where each digit in the octal code corresponds to a group of three binary digits. The converter typically displays the binary code as a sequence of 0s and 1s, representing the binary digits, which can be used in various applications, such as encoding data for storage, transmission, or processing. Some Octal to Binary Converters may also offer additional features, such as the ability to handle different formats of octal numbers, convert fractions or handle negative numbers, or provide options for formatting or customizing the binary output.
            </h6>
            <h3>Benefits of Using an Octal to Binary Converter</h3>
            <h6>Using an Octal to Binary Converter can offer several benefits in converting octal numbers into binary code. Firstly, it provides an easy way to convert octal numbers, which are commonly used in computer systems and networks, into binary representations, which are the fundamental language of computers. Octal to Binary Converters can help users visualize and comprehend the binary code corresponding to a given octal number, which can aid in understanding how binary systems work or how data is represented in binary format. Secondly, Octal to Binary Converters can be used in programming or coding tasks, where binary code may be needed for specific operations or protocols. Converting octal numbers into binary code can be useful in writing code for binary-based operations, such as bitwise operations, memory addressing, or network protocols. Additionally, Octal to Binary Converters can be used for educational purposes, allowing students or learners to practice converting octal numbers into binary code as part of their computer science or digital logic studies. Octal to Binary Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert octal numbers into binary code for their specific purposes, such as coding tasks, data analysis, or educational exercises.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
