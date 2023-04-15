import { useState } from "react";
import styles from '../../styles/Website.module.css';

const SpeedConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("m/s");
    const [toUnit, setToUnit] = useState("km/h");
    const [result, setResult] = useState("");

    const convertSpeed = (value, from, to) => {
        const conversions = {
            "m/s": {
                "m/s": 1,
                "ft/s": 3.28084,
                "km/h": 3.6,
                "mph": 2.23694,
                "knots": 1.94384,
            },
            "ft/s": {
                "m/s": 0.3048,
                "ft/s": 1,
                "km/h": 1.09728,
                "mph": 0.681818,
                "knots": 0.592484,
            },
            "km/h": {
                "m/s": 0.277778,
                "ft/s": 0.911344,
                "km/h": 1,
                "mph": 0.621371,
                "knots": 0.539957,
            },
            "mph": {
                "m/s": 0.44704,
                "ft/s": 1.46667,
                "km/h": 1.60934,
                "mph": 1,
                "knots": 0.868976,
            },
            "knots": {
                "m/s": 0.514444,
                "ft/s": 1.68781,
                "km/h": 1.852,
                "mph": 1.15078,
                "knots": 1,
            },
        };
        const result = value * conversions[from][to];
        return result.toFixed(4);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setResult(convertSpeed(e.target.value, fromUnit, toUnit));
    };

    const handleFromUnitChange = (e) => {
        setFromUnit(e.target.value);
        setResult(convertSpeed(inputValue, e.target.value, toUnit));
    };

    const handleToUnitChange = (e) => {
        setToUnit(e.target.value);
        setResult(convertSpeed(inputValue, fromUnit, e.target.value));
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Speed Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
                            <select className={styles.btntop} value={fromUnit} onChange={handleFromUnitChange}>
                                <option value="m/s">m/s</option>
                                <option value="ft/s">ft/s</option>
                                <option value="km/h">km/h</option>
                                <option value="mph">mph</option>
                                <option value="knots">knots</option>
                            </select>
                            <span> = </span>
                            <span>{result}</span>
                            <select value={toUnit} onChange={handleToUnitChange}>
                                <option value="m/s">m/s</option>
                                <option value="ft/s">ft/s</option>
                                <option value="km/h">km/h</option>
                                <option value="mph">mph</option>
                                <option value="knots">knots</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Speed Converter</h3>
                        <h6>A speed converter is a tool or software that enables the conversion of speed or velocity measurements from one unit to another. It is commonly used in various fields, such as physics, engineering, transportation, and sports, where accurate and precise speed measurements are important. Speed converters simplify the process of converting speeds between different units, such as miles per hour to kilometers per hour, knots to meters per second, or feet per second to meters per minute.
                        </h6>
                        <h3>Features and Functionality of Speed Converters</h3>
                        <h6>Speed converters typically offer a range of features and functionalities to ensure accurate and efficient conversions. They allow users to input speed values in one unit of measurement and provide the equivalent value in another unit. Some speed converters also support conversion between different systems, such as imperial and metric, and offer customization options, such as rounding decimals, selecting different units, or providing conversion formulas or explanations for reference. Additionally, speed converters may have specialized functionalities, such as converting between specific units used in a particular industry or for specific applications, such as aviation or automotive.
                        </h6>
                        <h3>Benefits of Using a Speed Converter</h3>
                        <h6>The use of a speed converter offers several benefits in dealing with speed measurements. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting speeds, ensuring accurate and consistent measurements. This is particularly important in fields where precise speed measurements are crucial, such as transportation or sports. Secondly, speed converters provide convenience and efficiency by quickly converting speeds between different units, saving time and effort. Moreover, speed converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert speed measurements for their specific purposes, such as professionals in various industries or individuals who require accurate speed conversions for personal use.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeedConverter
