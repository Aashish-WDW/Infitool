import { useState } from "react";
import styles from '../../styles/Website.module.css';

const byteToKiloByte = (bytes) => bytes / 1024;
const byteToMegaByte = (bytes) => byteToKiloByte(bytes) / 1024;
const byteToGigaByte = (bytes) => byteToMegaByte(bytes) / 1024;
const byteToTeraByte = (bytes) => byteToGigaByte(bytes) / 1024;

const formatBytes = (bytes) => {
    if (bytes < 1024) {
        return bytes + " B";
    } else if (bytes < 1024 ** 2) {
        return byteToKiloByte(bytes).toFixed(2) + " KB";
    } else if (bytes < 1024 ** 3) {
        return byteToMegaByte(bytes).toFixed(2) + " MB";
    } else if (bytes < 1024 ** 4) {
        return byteToGigaByte(bytes).toFixed(2) + " GB";
    } else {
        return byteToTeraByte(bytes).toFixed(2) + " TB";
    }
};

export default function ByteConverter() {
    const [inputBytes, setInputBytes] = useState("");
    const [selectedUnit, setSelectedUnit] = useState("KB");

    const handleInputChange = (event) => {
        setInputBytes(event.target.value);
    };

    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    const convertBytes = (bytes) => {
        switch (selectedUnit) {
            case "KB":
                return byteToKiloByte(bytes);
            case "MB":
                return byteToMegaByte(bytes);
            case "GB":
                return byteToGigaByte(bytes);
            case "TB":
                return byteToTeraByte(bytes);
            default:
                return bytes;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const bytes = parseInt(inputBytes);
        if (isNaN(bytes)) {
            alert("Please enter a valid number of bytes.");
            return;
        }
        const result = formatBytes(convertBytes(bytes));
        alert(result);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Byte Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="form-control"
                                    id="byte-input"
                                    type="number"
                                    value={inputBytes}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter Bytes"
                                />
                                <div className={styles.btntop}>
                                    <label htmlFor="unit-select">Convert to:</label>
                                    <select id="unit-select" value={selectedUnit} onChange={handleUnitChange}>
                                        <option value="KB">Kilobytes (KB)</option>
                                        <option value="MB">Megabytes (MB)</option>
                                        <option value="GB">Gigabytes (GB)</option>
                                        <option value="TB">Terabytes (TB)</option>
                                    </select>
                                    <button className="btn btn-primary btn-sm" type="submit">Convert</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Byte Converter</h3>
                        <h6>A byte converter is a tool or software that enables the conversion of data storage units from one size to another. It is commonly used in the field of computing to convert data sizes, such as bytes, kilobytes, megabytes, gigabytes, and terabytes. Byte converters are essential for tasks that involve managing digital data, such as file storage, data transfer, and computer memory management.
                        </h6>
                        <h3>Features and Functionality of Byte Converters</h3>
                        <h6>Byte converters typically offer a range of features and functionalities to facilitate accurate and convenient conversions. They allow users to input data sizes in one unit of measurement and instantly provide the equivalent value in another unit. Some byte converters also support conversion between different prefixes, such as binary (e.g., kilobytes, megabytes) and decimal (e.g., kibibytes, mebibytes), which are commonly used in computing. Additionally, byte converters may offer customization options, such as rounding decimals, selecting different units or prefixes, and providing conversion formulas or explanations for reference.
                        </h6>
                        <h3>Benefits of Using a Byte Converter</h3>
                        <h6>The use of a byte converter offers several benefits in managing digital data. Firstly, it ensures accurate and consistent conversions between different data storage units, which are critical in tasks that involve data management, storage, and transfer. Secondly, byte converters provide convenience and efficiency by quickly converting data sizes, saving time and effort in manual calculations. Moreover, byte converters are easily accessible online or as standalone applications, making them readily available for anyone who deals with digital data in their day-to-day activities, such as IT professionals, software developers, and data analysts.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
