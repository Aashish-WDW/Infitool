import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [ascii, setAscii] = useState("");
    const [binary, setBinary] = useState("");

    const handleAsciiChange = (event) => {
        setAscii(event.target.value);
    };

    const convertAsciiToBinary = () => {
        let binaryDigits = [];

        for (let i = 0; i < ascii.length; i++) {
            let asciiCode = ascii.charCodeAt(i);
            let binaryCode = asciiCode.toString(2).padStart(8, "0");
            binaryDigits.push(binaryCode);
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
                            <h3>ASCII to Binary Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="ascii-input">Enter ASCII text:</label>
                            <textarea
                                className={styles.txtarea}
                                id="ascii-input"
                                value={ascii}
                                onChange={handleAsciiChange}
                            ></textarea>
                            <button type="button" className="btn btn-primary btn-sm" onClick={convertAsciiToBinary}>Convert</button>
                            {binary && <p>Binary: {binary}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to ASCII to Binary Converter</h3>
                        <h6>ASCII to Binary Converter is a tool or software that allows users to convert ASCII (American Standard Code for Information Interchange) characters into binary code. ASCII is a standard encoding system that represents text characters as numerical codes, with each character assigned a unique numerical value. Binary code, on the other hand, uses a combination of 0s and 1s to represent information in a form that can be understood by computers. ASCII to Binary Converter provides a quick and efficient way to convert text characters into binary code, which can be useful in various contexts, such as computer programming, data transmission, or data storage.
                        </h6>
                        <h3>Features and Functionality of ASCII to Binary Converter</h3>
                        <h6>ASCII to Binary Converters typically offer a simple and user-friendly interface that allows users to input ASCII characters and convert them into binary code. These converters can handle a wide range of ASCII characters, including letters, numbers, punctuation marks, and special characters. The converter usually displays the binary code in a clear and readable format, such as a string of 0s and 1s, or grouped in sets of 8 bits, which is the standard length for ASCII characters. Some ASCII to Binary Converters also offer additional features, such as the ability to convert binary code back to ASCII characters, or to convert ASCII characters into other encoding systems, such as hexadecimal or octal.
                        </h6>
                        <h3>Benefits of Using an ASCII to Binary Converter</h3>
                        <h6>The use of an ASCII to Binary Converter offers several benefits in converting ASCII characters into binary code. Firstly, it provides a quick and convenient way to convert text characters into binary code, eliminating the need for manual calculations or complex encoding schemes. This can be particularly useful in computer programming, where binary code is often used to represent machine instructions or data. Secondly, ASCII to Binary Converters can help users understand the binary representation of text characters, which can be important in learning about computer systems, data representation, or data communication. Moreover, ASCII to Binary Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert ASCII characters into binary code for their specific purposes, such as debugging, data analysis, or educational purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
