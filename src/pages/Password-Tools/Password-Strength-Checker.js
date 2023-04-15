import { useState } from "react";
import styles from '../../styles/Website.module.css';

const calculatePasswordStrength = (password) => {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[\W_]/;

    let score = 0;

    if (password.length < 8) {
        return 0;
    }

    if (lowerCaseRegex.test(password)) {
        score += 1;
    }

    if (upperCaseRegex.test(password)) {
        score += 1;
    }

    if (numberRegex.test(password)) {
        score += 1;
    }

    if (symbolRegex.test(password)) {
        score += 1;
    }

    if (password.length >= 12) {
        score += 1;
    }

    return score;
};

const getPasswordStrengthLabel = (strengthScore) => {
    if (strengthScore === 0) {
        return "Very Weak";
    } else if (strengthScore === 1) {
        return "Weak";
    } else if (strengthScore === 2) {
        return "Fair";
    } else if (strengthScore === 3) {
        return "Strong";
    } else if (strengthScore === 4) {
        return "Very Strong";
    }
};

export default function Home() {
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        setPassword(password);
        setPasswordStrength(calculatePasswordStrength(password));
    };

    const passwordStrengthLabel = getPasswordStrengthLabel(passwordStrength);

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Password Strength Checker</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <input
                                    className="form-control"
                                    id="password-input"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <div>
                                <label htmlFor="password-strength-label">Password Strength:</label>
                                <span id="password-strength-label">{passwordStrengthLabel}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Evaluating the Security of Passwords</h3>
                        <h6>Password Strength Checker is a powerful tool that assesses the strength and security of passwords, helping users create robust and reliable passwords for their accounts. In today's digital world, where online security is crucial, having strong passwords is essential to protect personal information and prevent unauthorized access to accounts. Password Strength Checker provides an easy-to-use solution to evaluate the strength of passwords and ensure they meet the necessary security requirements.
                        </h6>
                        <h3>Features and Functionality of Password Strength Checker</h3>
                        <h6>Password Strength Checker offers a range of features and functionalities to evaluate the strength of passwords. Users can input passwords into the tool, and it will analyze various factors, such as length, complexity, character types, and common patterns, to generate a password strength score or rating. The tool also provides feedback on how to improve the password, such as suggesting longer passwords, incorporating special characters, or avoiding common words or phrases. Additionally, Password Strength Checker may include additional security checks, such as checking against known compromised passwords or dictionary attacks, to further enhance the accuracy of the assessment.
                        </h6>
                        <h3>Benefits of Using Password Strength Checker</h3>
                        <h6>Password Strength Checker offers several benefits for users. Firstly, it helps users create strong and secure passwords that are less susceptible to being cracked or hacked. Secondly, Password Strength Checker educates users on password best practices and provides feedback on how to improve the password strength, helping users develop good password hygiene habits. Thirdly, Password Strength Checker can be used by organizations and websites to enforce password policies and ensure that users create passwords that meet their security standards. Overall, Password Strength Checker is a valuable tool for evaluating the strength of passwords and promoting better password security practices in the digital realm.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
