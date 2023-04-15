import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [binary, setBinary] = useState("");
    const [octal, setOctal] = useState("");

    const handleBinaryChange = (event) => {
        setBinary(event.target.value);
    };

    const convertBinaryToOctal = () => {
        let binaryDigits = binary.split("").reverse();
        let octalDigits = [];

        // pad with zeros if necessary
        while (binaryDigits.length % 3 !== 0) {
            binaryDigits.push("0");
        }

        // convert binary groups to octal digits
        for (let i = 0; i < binaryDigits.length; i += 3) {
            let group = binaryDigits.slice(i, i + 3).reverse().join("");
            let octalDigit = parseInt(group, 2).toString(8);
            octalDigits.unshift(octalDigit);
        }

        setOctal(octalDigits.join(""));
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Binary to Octal Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="binary-input">Enter binary number:</label>
                            <input
                                className="form-control"
                                id="binary-input"
                                type="text"
                                value={binary}
                                onChange={handleBinaryChange}
                            />
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={convertBinaryToOctal}>Convert</button>
                            {octal && <p>Octal: {octal}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Binary to Octal Converter</h3>
                        <h6>A Binary to Octal Converter is a tool or software that enables users to convert binary code, which is a system of representing information using only two digits (0s and 1s), into octal (base-8) numbers. Octal numbers are commonly used in computer programming and digital electronics, as they provide a compact and efficient way to represent binary data in groups of three digits. Binary to Octal Converter provides an easy and convenient way to convert binary code into octal numbers, which can be useful in various applications, such as programming, data representation, or network communication.
                        </h6>
                        <h3>Features and Functionality of Binary to Octal Converter</h3>
                        <h6>Binary to Octal Converters typically offer a simple and intuitive interface that allows users to input binary code and convert it into octal numbers. These converters can handle binary code of different lengths, such as 3-bit, 6-bit, or custom lengths, depending on the size of the binary number being converted. The converter typically displays the converted octal number in standard octal format, using the digits 0-7 to represent the values 0-7, respectively. Some Binary to Octal Converters may also offer additional features, such as the ability to convert octal numbers into other numeral systems, such as decimal or hexadecimal, or to customize the output format.
                        </h6>
                        <h3>Benefits of Using a Binary to Octal Converter</h3>
                        <h6>Using a Binary to Octal Converter offers several benefits in converting binary code into octal numbers. Firstly, it provides a compact and efficient way to represent binary data, as octal numbers use base-8 and can represent 3 bits of binary data with a single digit. This can be particularly useful in computer programming, where octal numbers are commonly used in memory addresses, machine code, or file permissions. Secondly, Binary to Octal Converters can help users easily interpret and use octal values, as they provide a human-readable representation of binary data that is easier to work with compared to long sequences of binary digits. Moreover, Binary to Octal Converters are easily accessible online or as standalone applications, making them readily available for users who need to convert binary code into octal numbers for their specific purposes, such as programming, data analysis, or educational purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
