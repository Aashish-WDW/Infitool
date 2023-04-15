import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [hexadecimal, setHexadecimal] = useState("");
    const [binary, setBinary] = useState("");

    const handleHexadecimalChange = (event) => {
        setHexadecimal(event.target.value.toUpperCase());
    };

    const convertHexadecimalToBinary = () => {
        let hexadecimalValue = hexadecimal.trim();
        let binaryValue = "";

        // convert hexadecimalValue to binaryValue
        for (let i = 0; i < hexadecimalValue.length; i++) {
            const hexDigit = hexadecimalValue.charAt(i);
            const decimalValue = parseInt(hexDigit, 16);
            const binaryDigit = decimalValue.toString(2).padStart(4, "0");
            binaryValue += binaryDigit;
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
                            <h3>Hexadecimal to Binary Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="hexadecimal-input">Enter hexadecimal:</label>
                            <input
                                className="form-control"
                                id="hexadecimal-input"
                                type="text"
                                maxLength="16"
                                value={hexadecimal}
                                onChange={handleHexadecimalChange}
                            />
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertHexadecimalToBinary}>Convert</button>
                            {binary && <p>Binary: {binary}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Hexadecimal to Binary Converter</h3>
                        <h6>A Hexadecimal to Binary Converter is a tool or software that enables users to convert hexadecimal numbers, which are numbers represented in base 16 with digits ranging from 0 to 9 and letters A to F, into binary code, which is a system of representing information using only two digits (0s and 1s). Hexadecimal code is commonly used in computer systems and networks as a way to represent data in a more compact and human-readable format compared to binary code. Hexadecimal to Binary Converter provides a convenient way to convert hexadecimal numbers into binary code, which can be useful in various applications, such as encoding data, understanding binary representations, or performing computations in binary systems.
                        </h6>
                        <h3>Features and Functionality of Hexadecimal to Binary Converter</h3>
                        <h6>Hexadecimal to Binary Converters typically offer a user-friendly interface that allows users to input hexadecimal numbers and convert them into binary code. These converters use algorithms or mathematical operations to convert hexadecimal numbers into binary representations, where each digit in the hexadecimal code corresponds to a group of four binary digits. The converter typically displays the binary code as a sequence of 0s and 1s, representing the binary digits, which can be used in various applications, such as encoding data for storage, transmission, or processing. Some Hexadecimal to Binary Converters may also offer additional features, such as the ability to handle different formats of hexadecimal numbers, convert fractions or handle negative numbers, or provide options for formatting or customizing the binary output.
                        </h6>
                        <h3>Benefits of Using a Hexadecimal to Binary Converter</h3>
                        <h6>Using a Hexadecimal to Binary Converter can offer several benefits in converting hexadecimal numbers into binary code. Firstly, it provides an easy way to convert hexadecimal numbers, which are commonly used in computer systems and networks, into binary representations, which are the fundamental language of computers. Hexadecimal to Binary Converters can help users visualize and comprehend the binary code corresponding to a given hexadecimal number, which can aid in understanding how binary systems work or how data is represented in binary format. Secondly, Hexadecimal to Binary Converters can be used in programming or coding tasks, where binary code may be needed for specific operations or protocols. Converting hexadecimal numbers into binary code can be useful in writing code for binary-based operations, such as bitwise operations, memory addressing, or network protocols. Additionally, Hexadecimal to Binary Converters can be used for educational purposes, allowing students or learners to practice converting hexadecimal numbers into binary code as part of their computer science or digital logic studies. Hexadecimal to Binary Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert hexadecimal numbers into binary code for their specific purposes, such as coding tasks, data analysis, or educational exercises.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
