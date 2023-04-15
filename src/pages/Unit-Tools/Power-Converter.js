import { useState } from "react";
import styles from '../../styles/Website.module.css';

const wattToOther = {
    kW: 0.001,
    MW: 0.000001,
    hp: 0.00134,
    ftlbf_s: 1.35582,
    BTU_h: 3.41214,
};

const otherToWatt = {
    kW: 1000,
    MW: 1000000,
    hp: 746,
    ftlbf_s: 0.737562,
    BTU_h: 0.293071,
};

const PowerConverter = () => {
    const [watts, setWatts] = useState(0);
    const [unit, setUnit] = useState("W");

    const handleInputChange = (event) => {
        const value = event.target.value;
        setWatts(value);
    };

    const handleSelectChange = (event) => {
        const value = event.target.value;
        setUnit(value);
    };

    const convertTo = (unit) => {
        const conversionFactor = wattToOther[unit];
        return watts * conversionFactor;
    };

    const convertFrom = (value, unit) => {
        const conversionFactor = otherToWatt[unit];
        return value * conversionFactor;
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Power Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <label htmlFor="watts-input">Watts:</label>
                                <input
                                    className="form-control"
                                    id="watts-input"
                                    type="number"
                                    value={watts}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.btntop}>
                                <label htmlFor="unit-select">Convert to:</label>
                                <select id="unit-select" value={unit} onChange={handleSelectChange}>
                                    <option value="W">Watts</option>
                                    <option value="kW">Kilowatts</option>
                                    <option value="MW">Megawatts</option>
                                    <option value="hp">Horsepower</option>
                                    <option value="ftlbf_s">Foot-pounds per second</option>
                                    <option value="BTU_h">BTUs per hour</option>
                                </select>
                            </div>
                            <div>
                                <p>{`${watts} W = ${convertTo(unit)} ${unit}`}</p>
                                <p>{`${convertTo(unit)} ${unit} = ${convertFrom(
                                    convertTo(unit),
                                    unit
                                )} W`}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Power Converter</h3>
                        <h6>A power converter is a tool or software that facilitates the conversion of power or energy measurements from one unit to another. It is commonly used in various fields, such as electrical engineering, physics, and renewable energy, where accurate and precise power measurements are essential. Power converters simplify the process of converting power between different units, such as watts to kilowatts, horsepower to kilocalories per hour, or BTU (British Thermal Units) to joules.
                        </h6>
                        <h3>Features and Functionality of Power Converters</h3>
                        <h6>Power converters typically offer a range of features and functionalities to ensure accurate and efficient conversions. They allow users to input power values in one unit of measurement and provide the equivalent value in another unit. Some power converters also support conversion between different systems, such as metric and imperial, and offer customization options, such as rounding decimals, selecting different units, or providing conversion formulas or explanations for reference. Additionally, power converters may have specialized functionalities, such as converting between specific units used in a particular industry or for specific applications, such as solar power or electric vehicle power.
                        </h6>
                        <h3>Benefits of Using a Power Converter</h3>
                        <h6>The use of a power converter offers several benefits in dealing with power measurements. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting power, ensuring accurate and consistent measurements. This is particularly important in fields where precise power measurements are critical, such as electrical engineering or renewable energy. Secondly, power converters provide convenience and efficiency by quickly converting power between different units, saving time and effort. Moreover, power converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert power measurements for their specific purposes, such as professionals in various industries or individuals who require accurate power conversions for personal use.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PowerConverter;
