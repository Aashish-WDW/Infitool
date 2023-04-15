import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [text, setText] = useState("");
    const [binary, setBinary] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const convertTextToBinary = () => {
        let binaryValue = "";

        // convert textValue to binaryValue
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const charBinary = charCode.toString(2).padStart(8, "0");
            binaryValue += charBinary;
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
                            <h3>Text to Binary Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="text-input">Enter text:</label>
                            <textarea
                                className={styles.txtarea}
                                id="text-input"
                                rows="5"
                                value={text}
                                onChange={handleTextChange}
                            />
                            <button type="button" className="btn btn-primary btn-sm" onClick={convertTextToBinary}>Convert</button>
                            {binary && <p>Binary: {binary}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Text to Binary Converter</h3>
                        <h6>A Text to Binary Converter is a tool or software that allows users to convert text or characters into binary code, which is a system of representing information using only two digits (0s and 1s). Text to Binary Converter is commonly used in various applications, such as encoding text for data storage, transmission, or processing, as well as understanding binary representations or performing computations in binary systems. Text to Binary Converters provide a convenient way to convert text or characters into binary code, which can be useful in various fields, such as programming, digital communications, cryptography, or data analysis.
                        </h6>
                        <h3>Features and Functionality of Text to Binary Converter</h3>
                        <h6>Text to Binary Converters typically offer a user-friendly interface that allows users to input text or characters and convert them into binary code. These converters use algorithms or lookup tables to convert text or characters into binary representations, where each character in the text is mapped to its corresponding binary code. The converter typically displays the binary code as a sequence of 0s and 1s, representing the binary digits, which can be used in various applications, such as encoding text for storage, transmission, or processing. Some Text to Binary Converters may also offer additional features, such as the ability to handle different character encodings or formats, customize the binary output, or perform batch conversions for multiple text inputs.
                        </h6>
                        <h3>Benefits of Using a Text to Binary Converter</h3>
                        <h6>Using a Text to Binary Converter can offer several benefits in converting text or characters into binary code. Firstly, it provides an easy way to encode text or characters into binary representations, which can be useful in various applications that require binary-based operations, such as programming, digital communications, cryptography, or data analysis. Text to Binary Converters can help users visualize and comprehend the binary code corresponding to a given text, which can aid in understanding how binary systems work or how data is represented in binary format. Secondly, Text to Binary Converters can be used in data storage or transmission, where binary code may be needed for efficient encoding or decoding of text-based information. Converting text or characters into binary code can be useful in compressing data, reducing storage or transmission overhead, or securing data through binary-based encryption or encoding techniques. Additionally, Text to Binary Converters can be used for educational purposes, allowing students or learners to practice encoding text into binary code as part of their computer science or information security studies. Text to Binary Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert text or characters into binary code for their specific purposes, such as data encoding, communication protocols, or educational exercises.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
