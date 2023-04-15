import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [binary, setBinary] = useState("");
    const [ascii, setAscii] = useState("");

    const handleBinaryChange = (event) => {
        setBinary(event.target.value);
    };

    const convertBinaryToAscii = () => {
        let asciiChars = [];

        for (let i = 0; i < binary.length; i += 8) {
            let binaryCode = binary.slice(i, i + 8);
            let asciiCode = String.fromCharCode(parseInt(binaryCode, 2));
            asciiChars.push(asciiCode);
        }

        setAscii(asciiChars.join(""));
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Binary to ASCII Converter</h3>
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
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertBinaryToAscii}>Convert</button>
                            {ascii && <p>ASCII: {ascii}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Binary to ASCII Converter</h3>
                        <h6>Binary to ASCII Converter is a tool or software that allows users to convert binary code into ASCII (American Standard Code for Information Interchange) characters. Binary code is a system of representing information using only two digits, typically 0s and 1s, where each digit represents a bit of information. On the other hand, ASCII is a standard encoding system that represents text characters as numerical codes, with each character assigned a unique numerical value. Binary to ASCII Converter provides a convenient and efficient way to convert binary code back into readable text characters, which can be useful in various contexts, such as data extraction, data recovery, or data interpretation.
                        </h6>
                        <h3>Features and Functionality of Binary to ASCII Converter</h3>
                        <h6>Binary to ASCII Converters typically offer a user-friendly interface that allows users to input binary code and convert it into ASCII characters. These converters can handle binary code of different lengths, such as 8-bit, 16-bit, or custom lengths, depending on the encoding system used. The converter typically displays the converted ASCII characters in a readable text format, allowing users to easily interpret and use the converted data. Some Binary to ASCII Converters may also offer additional features, such as the ability to convert ASCII characters into other encoding systems, such as hexadecimal or octal, or to customize the output format.
                        </h6>
                        <h3>Benefits of Using a Binary to ASCII Converter</h3>
                        <h6>The use of a Binary to ASCII Converter offers several benefits in converting binary code into readable text characters. Firstly, it provides a quick and efficient way to decode binary data and convert it into human-readable text, eliminating the need for manual calculations or complex decoding algorithms. This can be particularly useful in data recovery or data extraction scenarios where binary data needs to be interpreted and used in its original text form. Secondly, Binary to ASCII Converters can help users understand the meaning of binary data and its corresponding text characters, which can be important in analyzing and interpreting binary-encoded information. Moreover, Binary to ASCII Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert binary code into ASCII characters for their specific purposes, such as data analysis, text extraction, or troubleshooting.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
