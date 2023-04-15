import { useState } from "react";
import styles from '../../styles/Website.module.css';

const WeightConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputScale, setInputScale] = useState("grams");
    const [outputScale, setOutputScale] = useState("kilograms");

    const convertWeight = (value, inputScale, outputScale) => {
        const gramValue =
            inputScale === "grams"
                ? value
                : inputScale === "kilograms"
                    ? value * 1000
                    : inputScale === "pounds"
                        ? value * 453.592
                        : inputScale === "ounces"
                            ? value * 28.3495
                            : value * 1000000;

        const result =
            outputScale === "grams"
                ? gramValue
                : outputScale === "kilograms"
                    ? gramValue / 1000
                    : outputScale === "pounds"
                        ? gramValue / 453.592
                        : outputScale === "ounces"
                            ? gramValue / 28.3495
                            : gramValue / 1000000;

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

    const convertedValue = convertWeight(inputValue, inputScale, outputScale);

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Weight Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <label>
                                    Value:
                                    <input className="form-control" type="number" value={inputValue} onChange={handleInputChange} />
                                </label>
                                <label className={styles.btntop} >
                                    Scale:
                                    <select value={inputScale} onChange={handleInputScaleChange}>
                                        <option value="grams">Grams</option>
                                        <option value="kilograms">Kilograms</option>
                                        <option value="pounds">Pounds</option>
                                        <option value="ounces">Ounces</option>
                                        <option value="tonnes">Tonnes</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className={styles.btntop} >
                                    Scale:
                                    <select value={outputScale} onChange={handleOutputScaleChange}>
                                        <option value="grams">Grams</option>
                                        <option value="kilograms">Kilograms</option>
                                        <option value="pounds">Pounds</option>
                                        <option value="ounces">Ounces</option>
                                        <option value="tonnes">Tonnes</option>
                                    </select>
                                </label>
                                <label>
                                    Value:
                                    <input type="text" value={convertedValue} readOnly />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Weight Converter</h3>
                        <h6>A weight converter is a tool or software that facilitates the conversion of weight measurements from one unit to another. It is commonly used in various fields, such as commerce, health and fitness, cooking, and engineering, where accurate weight measurements are essential. Weight converters simplify the process of converting weights between different units, such as kilograms to pounds, ounces to grams, or tons to metric tons.
                        </h6>
                        <h3>Features and Functionality of Weight Converters</h3>
                        <h6>Weight converters typically offer a range of features and functionalities to ensure accurate and efficient weight conversions. They allow users to input weight values in one unit of measurement and provide the equivalent value in another unit. Some weight converters also support conversion between different weight units, such as ounces, pounds, kilograms, or tons, and offer customization options, such as selecting different units, providing conversion factors, or rounding decimals. Additionally, weight converters may have specialized functionalities, such as converting between specific units used in a particular industry or field, such as medical or culinary.
                        </h6>
                        <h3>Benefits of Using a Weight Converter</h3>
                        <h6>The use of a weight converter offers several benefits in managing weight measurements effectively. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting weights, ensuring accurate and consistent measurements. This is particularly important in fields where precise weight measurements are critical, such as commerce or health and fitness. Secondly, weight converters provide convenience and efficiency by quickly converting weights between different units, saving time and effort. Moreover, weight converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert weight measurements for their specific purposes, such as professionals in various industries or individuals who require accurate weight conversions for personal use.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightConverter;
