import { useState } from "react";
import styles from '../../styles/Website.module.css';

const MORSE_CODE = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/",
};

export default function Home() {
    const [text, setText] = useState("");
    const [morseCode, setMorseCode] = useState("");

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const convertToMorseCode = () => {
        let morseCodeValue = "";

        for (let i = 0; i < text.length; i++) {
            const char = text[i].toLowerCase();
            const code = MORSE_CODE[char];
            if (code) {
                morseCodeValue += code + " ";
            }
        }

        setMorseCode(morseCodeValue.trim());
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Text - Morse</h3>
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
                            <button className="btn btn-primary btn-sm" type="button" onClick={convertToMorseCode}>Convert</button>
                            {morseCode && <p>Morse Code: {morseCode}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Converting Text to Morse Code</h3>
                        <h6> Morse Code Generator is a unique tool that converts text into Morse code, a system of representing letters and numbers using dots and dashes. This tool allows users to easily generate Morse code from any text, making it useful for various applications, such as learning Morse code, sending encoded messages, or incorporating Morse code into artistic or design projects. With its ability to convert text into Morse code, Morse Code Generator provides a fun and interactive way to explore and utilize this historic communication system.
                        </h6>
                        <h3>Features and Functionality of Morse Code Generator</h3>
                        <h6>Morse Code Generator offers a range of features and functionalities to convert text to Morse code. Users can input text or paste text from external sources into the tool, and it will automatically generate the corresponding Morse code. The tool supports a wide range of characters, including letters, numbers, punctuation, and special characters. Additionally, Morse Code Generator allows users to customize the Morse code output with options for different speeds, tone frequencies, and spacing between letters and words. This flexibility enables users to adapt the Morse code output to their specific needs or preferences.
                        </h6>
                        <h3>Benefits of Using Morse Code Generator</h3>
                        <h6>Morse Code Generator offers several benefits for users. Firstly, it provides an interactive and engaging way to learn Morse code, allowing users to see the visual representation of text in Morse code and decode it in real-time. Secondly, Morse Code Generator is a practical tool for sending encoded messages, as users can input their desired text and obtain the corresponding Morse code output to share via various communication channels. Thirdly, Morse Code Generator can be used for creative projects, such as incorporating Morse code into art, jewelry, or other designs. Overall, Morse Code Generator is a versatile tool that enables users to convert text into Morse code for learning, communication, and artistic purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
