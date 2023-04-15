import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [binary, setBinary] = useState("");
    const [decimal, setDecimal] = useState("");

    const handleBinaryChange = (event) => {
        setBinary(event.target.value);
    };

    const convertBinaryToDecimal = () => {
        let decimalValue = 0;

        for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
            if (binary[i] === "1") {
                decimalValue += Math.pow(2, j);
            }
        }

        setDecimal(decimalValue);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Binary to Decimal Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="binary-input">Enter binary:</label>
                            <input
                                className="form-control"
                                id="binary-input"
                                type="text"
                                value={binary}
                                onChange={handleBinaryChange}
                            />
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertBinaryToDecimal}>Convert</button>
                            {decimal && <p>Decimal: {decimal}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Binary to Decimal Converter</h3>
                        <h6>Binary to Decimal Converter is a tool or software that allows users to convert binary code, which is a system of representing information using only two digits (0s and 1s), into decimal (base-10) numbers. Decimal numbers are the standard numerical representation used in everyday life, where each digit represents a power of 10. Binary to Decimal Converter provides a convenient way to convert binary code into decimal numbers, which can be useful in various applications, such as computer programming, digital electronics, or data processing.
                        </h6>
                        <h3>Features and Functionality of Binary to Decimal Converter</h3>
                        <h6>Binary to Decimal Converters typically offer a user-friendly interface that allows users to input binary code and convert it into decimal numbers. These converters can handle binary code of different lengths, such as 8-bit, 16-bit, or custom lengths, depending on the size of the binary number being converted. The converter typically displays the converted decimal number in standard decimal format, allowing users to easily interpret and use the converted numerical value. Some Binary to Decimal Converters may also offer additional features, such as the ability to convert decimal numbers into other numeral systems, such as hexadecimal or octal, or to customize the output format.
                        </h6>
                        <h3>Benefits of Using a Binary to Decimal Converter</h3>
                        <h6>The use of a Binary to Decimal Converter offers several benefits in converting binary code into decimal numbers. Firstly, it provides a quick and efficient way to convert binary data into the standard decimal format used in everyday life, eliminating the need for manual calculations or complex conversion formulas. This can be particularly useful in computer programming or digital electronics, where binary code needs to be converted into decimal numbers for processing or output. Secondly, Binary to Decimal Converters can help users understand the numerical value of binary data in decimal form, which can be important in analyzing and interpreting binary-encoded information. Moreover, Binary to Decimal Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert binary code into decimal numbers for their specific purposes, such as numerical calculations, data analysis, or educational purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
