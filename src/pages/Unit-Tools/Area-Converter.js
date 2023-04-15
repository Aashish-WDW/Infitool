import { useState } from "react";
import styles from '../../styles/Website.module.css';

const conversions = {
    squareInch: {
        name: "Square Inches",
        factor: 0.00064516,
    },
    squareFeet: {
        name: "Square Feet",
        factor: 0.092903,
    },
    squareYards: {
        name: "Square Yards",
        factor: 0.836127,
    },
    squareMeter: {
        name: "Square Meters",
        factor: 1,
    },
    acre: {
        name: "Acres",
        factor: 4046.86,
    },
    hectare: {
        name: "Hectares",
        factor: 10000,
    },
};

const AreaConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputUnit, setInputUnit] = useState("squareMeter");
    const [outputUnit, setOutputUnit] = useState("squareFeet");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputUnitChange = (event) => {
        setInputUnit(event.target.value);
    };

    const handleOutputUnitChange = (event) => {
        setOutputUnit(event.target.value);
    };

    const convertArea = () => {
        const inputFactor = conversions[inputUnit].factor;
        const outputFactor = conversions[outputUnit].factor;
        const inputValueNum = parseFloat(inputValue);
        const outputValue = inputValueNum * (inputFactor / outputFactor);
        return outputValue.toFixed(4);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Area Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <label htmlFor="input-value">Input Value:</label>
                                <input
                                    className="form-control"
                                    id="input-value"
                                    type="number"
                                    min="0"
                                    step="any"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.btntop}>
                                <label htmlFor="input-unit">Input Unit:</label>
                                <select id="input-unit" value={inputUnit} onChange={handleInputUnitChange}>
                                    {Object.keys(conversions).map((key) => (
                                        <option key={key} value={key}>
                                            {conversions[key].name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="output-unit">Output Unit:</label>
                                <select id="output-unit" value={outputUnit} onChange={handleOutputUnitChange}>
                                    {Object.keys(conversions).map((key) => (
                                        <option key={key} value={key}>
                                            {conversions[key].name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <p>Output Value:</p>
                                <p>{convertArea()}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Area Converter</h3>
                        <h6>An area converter is a tool or software that facilitates the conversion of one unit of area measurement to another. It simplifies the process of converting areas from one unit to another, such as square feet to square meters, acres to hectares, or square kilometers to square miles. Area converters are commonly used in various fields, including architecture, engineering, real estate, and land management, where accurate and precise area measurements are essential.
                        </h6>
                        <h3>Features and Functionality of Area Converters</h3>
                        <h6>Area converters typically offer a range of features and functionalities to ensure accurate and efficient conversions. They allow users to input values in one unit of measurement and instantly provide the converted value in another unit. Some area converters also support conversion between different measurement systems, such as metric and imperial. Additionally, area converters may offer customization options, such as rounding decimals, selecting different units, and providing conversion formulas or explanations for reference.
                        </h6>
                        <h3>Benefits of Using an Area Converter</h3>
                        <h6>The use of an area converter offers several benefits. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting areas. This ensures accurate and consistent measurements, which are crucial in fields where precision is essential. Secondly, area converters provide convenience and efficiency by quickly converting areas between different units, saving time and effort. Moreover, area converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert area measurements for their specific purposes.
                        </h6>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AreaConverter;
