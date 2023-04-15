import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function TemperatureConverter() {
    const [inputValue, setInputValue] = useState("");
    const [inputScale, setInputScale] = useState("celsius");
    const [outputScale, setOutputScale] = useState("fahrenheit");

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleInputScaleChange(e) {
        setInputScale(e.target.value);
    }

    function handleOutputScaleChange(e) {
        setOutputScale(e.target.value);
    }

    function convertTemperature(value, inputScale, outputScale) {
        const celsius = inputScale === "celsius" ? value : inputScale === "fahrenheit" ? (value - 32) * 5 / 9 : value - 273.15;
        const result = outputScale === "celsius" ? celsius : outputScale === "fahrenheit" ? celsius * 9 / 5 + 32 : celsius + 273.15;
        return Number(result.toFixed(2));
    }

    const convertedValue = convertTemperature(inputValue, inputScale, outputScale);



    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Temperature Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <input className="form-control" type="number" id="temperature-input" value={inputValue} onChange={handleInputChange} placeholder="Enter temperature:" />
                            </div>
                            <div className={styles.btntop}>
                                <label htmlFor="input-scale">Input scale:</label>
                                <select id="input-scale" value={inputScale} onChange={handleInputScaleChange}>
                                    <option value="celsius">Celsius</option>
                                    <option value="fahrenheit">Fahrenheit</option>
                                    <option value="kelvin">Kelvin</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="output-scale">Output scale:</label>
                                <select id="output-scale" value={outputScale} onChange={handleOutputScaleChange}>
                                    <option value="celsius">Celsius</option>
                                    <option value="fahrenheit">Fahrenheit</option>
                                    <option value="kelvin">Kelvin</option>
                                </select>
                            </div>
                            <p>Converted temperature: {convertedValue}</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Temperature Converter</h3>
                        A temperature converter is a tool or software that allows the conversion of temperature measurements from one unit to another. It is commonly used in various fields, such as science, engineering, weather forecasting, and cooking, where accurate and precise temperature measurements are essential. Temperature converters simplify the process of converting temperatures between different units, such as Celsius to Fahrenheit, Kelvin to Celsius, or Rankine to Kelvin.

                        <h3>Features and Functionality of Temperature Converters</h3>
                        Temperature converters typically offer a range of features and functionalities to ensure accurate and efficient conversions. They allow users to input temperature values in one unit of measurement and provide the equivalent value in another unit. Some temperature converters also support conversion between different temperature scales, such as Celsius, Fahrenheit, Kelvin, or Rankine, and offer customization options, such as rounding decimals, selecting different units, or providing conversion formulas or explanations for reference. Additionally, temperature converters may have specialized functionalities, such as converting between specific units used in a particular field or industry, such as HVAC (Heating, Ventilation, and Air Conditioning) or scientific research.

                        <h3>Benefits of Using a Temperature Converter</h3>
                        The use of a temperature converter offers several benefits in dealing with temperature measurements. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting temperatures, ensuring accurate and consistent measurements. This is particularly important in fields where precise temperature measurements are critical, such as scientific research or food preparation. Secondly, temperature converters provide convenience and efficiency by quickly converting temperatures between different units, saving time and effort. Moreover, temperature converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert temperature measurements for their specific purposes, such as professionals in various industries or individuals who require accurate temperature conversions for personal use.
                    </div>
                </div>
            </div>
        </div>
    );
}
