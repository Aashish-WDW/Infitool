import { useState } from "react";
import styles from '../../styles/Website.module.css';

const generatePassword = (length, includeUpper, includeLower, includeNumbers, includeSymbols) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_-+=[]{}\\|;:'\"<>,.?/";

    let characters = "";
    if (includeUpper) characters += upper;
    if (includeLower) characters += lower;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
};

export default function Home() {
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(12);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    const handlePasswordLengthChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (value >= 4 && value <= 64) {
            setPasswordLength(value);
        }
    };

    const handleGenerateClick = () => {
        const newPassword = generatePassword(passwordLength, includeUpper, includeLower, includeNumbers, includeSymbols);
        setPassword(newPassword);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Random Password Generator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="password-length-input">Password length:</label>
                            <input
                                className="form-control"
                                id="password-length-input"
                                type="number"
                                min="4"
                                max="64"
                                value={passwordLength}
                                onChange={handlePasswordLengthChange}
                            />
                            <br />
                            <label htmlFor="include-upper-checkbox">Include uppercase letters:</label>
                            <input
                                id="include-upper-checkbox"
                                type="checkbox"
                                checked={includeUpper}
                                onChange={(event) => setIncludeUpper(event.target.checked)}
                            />
                            <br />
                            <label htmlFor="include-lower-checkbox">Include lowercase letters:</label>
                            <input
                                id="include-lower-checkbox"
                                type="checkbox"
                                checked={includeLower}
                                onChange={(event) => setIncludeLower(event.target.checked)}
                            />
                            <br />
                            <label htmlFor="include-numbers-checkbox">Include numbers:</label>
                            <input
                                id="include-numbers-checkbox"
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(event) => setIncludeNumbers(event.target.checked)}
                            />
                            <br />
                            <label htmlFor="include-symbols-checkbox">Include symbols:</label>
                            <input
                                id="include-symbols-checkbox"
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(event) => setIncludeSymbols(event.target.checked)}
                            />
                            <br />
                            <button type="submit" className={`btn btn-primary ${styles['but']}`} onClick={handleGenerateClick}>Generate Password</button>
                            {password && <p>Your password is: {password}</p>}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Password Generator</h3>
                        <h6>A password generator is a tool or software that creates unique and strong passwords to enhance online security. It is designed to generate random combinations of characters, numbers, and symbols that are difficult for hackers to crack. Password generators are used in various applications, such as creating passwords for online accounts, protecting sensitive information, and securing digital assets.
                        </h6>
                        <h3>Importance of Using a Password Generator</h3>
                        <h6>Using a password generator is crucial for maintaining robust security online. Weak passwords, such as common words or easily guessable patterns, are vulnerable to hacking attempts. Password generators create complex and unique passwords that are difficult for hackers to crack using brute force or dictionary attacks. By using a password generator, users can significantly reduce the risk of unauthorized access to their accounts and protect their personal information from being compromised.
                        </h6>
                        <h3>Features and Benefits of Password Generators</h3>
                        <h6>Password generators come with various features that enhance their effectiveness. These include the ability to specify password length, character types (e.g., uppercase, lowercase, numbers, symbols), and customization options. Some password generators also have additional security features, such as the option to exclude similar-looking characters or to avoid using common words. The benefits of using a password generator include improved security, reduced risk of password-related attacks, and simplified password management as users do not need to remember complex passwords.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
