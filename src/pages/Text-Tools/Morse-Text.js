import { useState } from "react";
import styles from '../../styles/Website.module.css';

const MORSE_CODE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
};

export default function Home() {
    const [morse, setMorse] = useState("");
    const [text, setText] = useState("");

    const handleMorseChange = (event) => {
        setMorse(event.target.value);
    };

    const convertMorseToText = () => {
        const words = morse.trim().split("   ");
        const textArray = words.map((word) =>
            word
                .split(" ")
                .map((code) => MORSE_CODE_TABLE[code] || "")
                .join("")
        );
        setText(textArray.join(" "));
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Morse - Text</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="morse-input">Enter Morse code:</label>
                            <input
                                className="form-control"
                                id="morse-input"
                                type="text"
                                value={morse}
                                onChange={handleMorseChange}
                            />
                            <button type="button" className={`btn btn-primary btn-sm" ${styles['btntop']}`} onClick={convertMorseToText}>Convert</button>
                            {text && <p>Text: {text}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Decoding Morse Code for Textual Representation</h3>
                        <h6>Morse to Text Converter is a handy tool that translates Morse code back into text, allowing users to decode Morse code messages and obtain the corresponding textual representation. This tool is essential for anyone who needs to interpret Morse code messages, whether it's for learning, communication, or decoding historic Morse code transmissions. With its ability to convert Morse code to text, Morse to Text Converter provides a practical solution for deciphering Morse code and extracting meaningful information from encoded messages.
                        </h6>
                        <h3>Features and Functionality of Morse to Text Converter</h3>
                        <h6>Morse to Text Converter offers a straightforward and easy-to-use interface for decoding Morse code. Users can input Morse code manually or paste Morse code from external sources into the tool, and it will automatically convert it to text. The tool supports various formats of Morse code, including dots, dashes, and spaces for letters, numbers, punctuation, and special characters. Additionally, Morse to Text Converter provides options for adjusting the decoding speed and tone frequency, allowing users to customize the decoding process based on their preferences or requirements.
                        </h6>
                        <h3>Benefits of Using Morse to Text Converter</h3>
                        <h6>Morse to Text Converter offers several benefits for users. Firstly, it provides an efficient and accurate way to decode Morse code messages, saving time and effort compared to manual decoding methods. Secondly, Morse to Text Converter is a valuable tool for learning and practicing Morse code, as users can input Morse code and obtain the corresponding text output to verify their decoding skills. Thirdly, Morse to Text Converter is useful for decoding historic Morse code messages or signals, such as those used in aviation, maritime, or military communication. Overall, Morse to Text Converter is a reliable tool that simplifies the process of decoding Morse code and obtaining textual representation for various purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
