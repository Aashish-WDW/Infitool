import { useState } from "react";
import styles from '../../styles/Website.module.css';

const VolumeConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputScale, setInputScale] = useState("liters");
    const [outputScale, setOutputScale] = useState("gallons");

    const volumeScales = [
        { name: "liters", label: "Liters" },
        { name: "gallons", label: "Gallons" },
        { name: "cubic-meters", label: "Cubic Meters" },
        { name: "cubic-feet", label: "Cubic Feet" },
        { name: "cubic-inches", label: "Cubic Inches" },
    ];

    const convertVolume = (value, inputScale, outputScale) => {
        const liters = inputScale === "liters" ? value : inputScale === "gallons" ? value * 3.78541 : inputScale === "cubic-meters" ? value * 1000 : inputScale === "cubic-feet" ? value * 28.3168 : value * 0.0163871;
        const result = outputScale === "liters" ? liters : outputScale === "gallons" ? liters / 3.78541 : outputScale === "cubic-meters" ? liters / 1000 : outputScale === "cubic-feet" ? liters / 28.3168 : liters / 0.0163871;
        return result.toFixed(2);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputScaleChange = (event) => {
        setInputScale(event.target.value);
    };

    const handleOutputScaleChange = (event) => {
        setOutputScale(event.target.value);
    };

    const convertedValue = convertVolume(inputValue, inputScale, outputScale);

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Volume Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
                            <select className={styles.btntop} value={inputScale} onChange={handleInputScaleChange}>
                                {volumeScales.map((scale) => (
                                    <option key={scale.name} value={scale.name}>
                                        {scale.label}
                                    </option>
                                ))}
                            </select>
                            <span> = </span>
                            <input className={`form-control ${styles['btntop']}`} type="text" value={convertedValue} readOnly />
                            <select className={styles.btntop} value={outputScale} onChange={handleOutputScaleChange}>
                                {volumeScales.map((scale) => (
                                    <option key={scale.name} value={scale.name}>
                                        {scale.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Volume Converter</h3>
                        <h6>A volume converter is a tool or software that facilitates the conversion of volume measurements from one unit to another. It is commonly used in various fields, such as engineering, physics, chemistry, and cooking, where precise volume measurements are necessary. Volume converters simplify the process of converting volumes between different units, such as liters to gallons, cubic meters to cubic feet, or fluid ounces to milliliters.
                        </h6>
                        <h3>Features and Functionality of Volume Converters</h3>
                        <h6>Volume converters typically offer a range of features and functionalities to ensure accurate and efficient volume conversions. They allow users to input volume values in one unit of measurement and provide the equivalent value in another unit. Some volume converters also support conversion between different volume units, such as cubic inches, cubic centimeters, gallons, or liters, and offer customization options, such as selecting different units, providing conversion factors, or rounding decimals. Additionally, volume converters may have specialized functionalities, such as converting between specific units used in a particular industry or field, such as construction or chemistry.
                        </h6>
                        <h3>Benefits of Using a Volume Converter</h3>
                        <h6>The use of a volume converter offers several benefits in dealing with volume measurements. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting volumes, ensuring accurate and consistent measurements. This is particularly important in fields where precise volume measurements are critical, such as engineering or scientific research. Secondly, volume converters provide convenience and efficiency by quickly converting volumes between different units, saving time and effort. Moreover, volume converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert volume measurements for their specific purposes, such as professionals in various industries or individuals who require accurate volume conversions for personal use.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolumeConverter;
