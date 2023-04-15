import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [binary, setBinary] = useState("");
    const [hexadecimal, setHexadecimal] = useState("");

    const handleBinaryChange = (event) => {
        setBinary(event.target.value);
    };

    const convertBinaryToHexadecimal = () => {
        let binaryValue = binary.trim();
        let hexadecimalValue = "";

        // pad binaryValue with zeros if its length is not a multiple of 4
        while (binaryValue.length % 4 !== 0) {
            binaryValue = "0" + binaryValue;
        }

        // convert binaryValue to hexadecimalValue
        for (let i = 0; i < binaryValue.length; i += 4) {
            const nibble = binaryValue.slice(i, i + 4);
            const decimalValue = parseInt(nibble, 2);
            const hexDigit = decimalValue.toString(16);
            hexadecimalValue += hexDigit;
        }

        setHexadecimal(hexadecimalValue.toUpperCase() || "0");
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Binary to Hexadecimal Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="binary-input">Enter binary:</label>
                            <input
                                className="form-control"
                                id="binary-input"
                                type="text"
                                maxLength="64"
                                value={binary}
                                onChange={handleBinaryChange}
                            />
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertBinaryToHexadecimal}>Convert</button>
                            {hexadecimal && <p>Hexadecimal: {hexadecimal}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Binary to Hexadecimal Converter</h3>
                        <h6>A Binary to Hexadecimal Converter is a tool or software that allows users to convert binary code, which is a system of representing information using only two digits (0s and 1s), into hexadecimal (base-16) numbers. Hexadecimal numbers are commonly used in computer programming and digital electronics, as they provide a compact and convenient way to represent large binary values. Binary to Hexadecimal Converter provides a quick and easy way to convert binary code into hexadecimal numbers, which can be useful in various applications, such as programming, data representation, or network communication.
                        </h6>
                        <h3>Features and Functionality of Binary to Hexadecimal Converter</h3>
                        <h6>Binary to Hexadecimal Converters typically offer a user-friendly interface that allows users to input binary code and convert it into hexadecimal numbers. These converters can handle binary code of different lengths, such as 8-bit, 16-bit, or custom lengths, depending on the size of the binary number being converted. The converter typically displays the converted hexadecimal number in standard hexadecimal format, using the digits 0-9 and the letters A-F to represent the values 10-15, respectively. Some Binary to Hexadecimal Converters may also offer additional features, such as the ability to convert hexadecimal numbers into other numeral systems, such as decimal or octal, or to customize the output format.
                        </h6>
                        <h3>Benefits of Using a Binary to Hexadecimal Converter</h3>
                        <h6>Using a Binary to Hexadecimal Converter offers several benefits in converting binary code into hexadecimal numbers. Firstly, it provides a compact and efficient way to represent large binary values, as hexadecimal numbers use base-16 and can represent 4 bits of binary data with a single digit. This can be particularly useful in computer programming, where hexadecimal numbers are commonly used in memory addresses, machine code, or color codes. Secondly, Binary to Hexadecimal Converters can help users easily interpret and use hexadecimal values, as they provide a human-readable representation of binary data that is easier to work with compared to long sequences of binary digits. Moreover, Binary to Hexadecimal Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert binary code into hexadecimal numbers for their specific purposes, such as programming, data analysis, or educational purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
