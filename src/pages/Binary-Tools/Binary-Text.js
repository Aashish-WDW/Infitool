import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [binary, setBinary] = useState("");
    const [text, setText] = useState("");

    const handleBinaryChange = (event) => {
        setBinary(event.target.value);
    };

    const convertBinaryToText = () => {
        let binaryValue = binary.trim();
        let textValue = "";

        // convert binaryValue to textValue
        for (let i = 0; i < binaryValue.length; i += 8) {
            const byte = binaryValue.substr(i, 8);
            const charCode = parseInt(byte, 2);
            const char = String.fromCharCode(charCode);
            textValue += char;
        }

        setText(textValue);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Binary to Text Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="binary-input">Enter binary:</label>
                            <textarea
                                className={styles.txtarea}
                                id="binary-input"
                                rows="5"
                                value={binary}
                                onChange={handleBinaryChange}
                            />
                            <button type="button" className="btn btn-primary btn-sm" onClick={convertBinaryToText}>Convert</button>
                            {text && <p>Text: {text}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Binary to Text Converter</h3>
                        <h6>A Binary to Text Converter is a tool or software that allows users to convert binary code, which is a system of representing information using only two digits (0s and 1s), into text or character representation. Binary code is commonly used in computer systems and networks to represent data in a machine-readable format. Binary to Text Converter provides an easy and convenient way to convert binary code into human-readable text, which can be useful in various applications, such as decoding binary files, interpreting network protocols, or analyzing data.
                        </h6>
                        <h3>Features and Functionality of Binary to Text Converter</h3>
                        <h6>Binary to Text Converters typically offer a user-friendly interface that allows users to input binary code and convert it into text or character representation. These converters may support various encoding schemes, such as ASCII, UTF-8, or other character encoding standards, which determine how binary digits are mapped to text characters. The converter typically displays the converted text in the chosen encoding scheme, allowing users to easily interpret and use the resulting text output. Some Binary to Text Converters may also offer additional features, such as the ability to customize the encoding scheme, handle binary code of different lengths or formats, or support batch processing for converting multiple binary files at once.
                        </h6>
                        <h3>Benefits of Using a Binary to Text Converter</h3>
                        <h6>Using a Binary to Text Converter can offer several benefits in converting binary code into human-readable text. Firstly, it provides an easy way to decode binary files or data that may be encoded in binary format, such as image files, audio files, or network packets. Binary to Text Converters can help users interpret the binary data and extract meaningful information from it, such as text messages, file formats, or protocol headers. Secondly, Binary to Text Converters can be used in reverse engineering or forensic analysis, where converting binary code into text can aid in understanding the inner workings of a system or identifying potential security vulnerabilities. Additionally, Binary to Text Converters can be used for educational purposes, allowing students or learners to understand the concept of binary code and how it is used to represent information in computers and networks. Binary to Text Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert binary code into text for their specific purposes, such as data analysis, reverse engineering, or educational exercises.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
