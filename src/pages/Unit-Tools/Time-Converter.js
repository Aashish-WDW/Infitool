import { useState } from "react";
import styles from '../../styles/Website.module.css';

const TimeConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputScale, setInputScale] = useState("seconds");
    const [outputScale, setOutputScale] = useState("minutes");

    const scales = {
        seconds: {
            label: "Seconds",
            value: 1,
        },
        minutes: {
            label: "Minutes",
            value: 60,
        },
        hours: {
            label: "Hours",
            value: 3600,
        },
        days: {
            label: "Days",
            value: 86400,
        },
        weeks: {
            label: "Weeks",
            value: 604800,
        },
        months: {
            label: "Months",
            value: 2628000,
        },
        years: {
            label: "Years",
            value: 31536000,
        },
    };

    const convertTime = (value, inputScale, outputScale) => {
        const seconds = value * scales[inputScale].value;
        const result = seconds / scales[outputScale].value;
        return result.toFixed(2);
    };

    const convertedValue = convertTime(inputValue, inputScale, outputScale);

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Time Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label>
                                Input Value:
                                <input
                                    className="form-control"
                                    type="number"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </label>
                            <br />
                            <label>
                                Input Scale:
                                <select className={styles.btntop}
                                    value={inputScale}
                                    onChange={(e) => setInputScale(e.target.value)}
                                >
                                    {Object.keys(scales).map((scale) => (
                                        <option value={scale} key={scale}>
                                            {scales[scale].label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <br />
                            <label>
                                Output Scale:
                                <select
                                    value={outputScale}
                                    onChange={(e) => setOutputScale(e.target.value)}
                                >
                                    {Object.keys(scales).map((scale) => (
                                        <option value={scale} key={scale}>
                                            {scales[scale].label}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <br />
                            <p>
                                {inputValue} {scales[inputScale].label} = {convertedValue}{" "}
                                {scales[outputScale].label}
                            </p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Time Converter</h3>
                        <h6>A time converter is a tool or software that facilitates the conversion of time measurements from one format to another. It is commonly used in various fields, such as scheduling, time management, travel planning, and global communications, where accurate and precise time measurements are crucial. Time converters simplify the process of converting time between different time zones, time formats, or clock systems, such as 12-hour and 24-hour clocks.
                        </h6>
                        <h3>Features and Functionality of Time Converters</h3>
                        <h6>Time converters typically offer a range of features and functionalities to ensure accurate and efficient time conversions. They allow users to input time values in one format or time zone and provide the equivalent time value in another format or time zone. Some time converters also support conversion between different time systems, such as local time, Coordinated Universal Time (UTC), or Greenwich Mean Time (GMT), and offer customization options, such as daylight saving adjustments, selecting different time zones, or providing conversion formulas or explanations for reference. Additionally, time converters may have specialized functionalities, such as converting between specific time zones used in a particular region or country, or accounting for time differences during travel or international communications.
                        </h6>
                        <h3>Benefits of Using a Time Converter</h3>
                        <h6>The use of a time converter offers several benefits in managing time measurements effectively. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting time, ensuring accurate and consistent time measurements. This is particularly important in fields where precise time measurements are critical, such as scheduling appointments or coordinating international meetings. Secondly, time converters provide convenience and efficiency by quickly converting time between different formats or time zones, saving time and effort. Moreover, time converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert time measurements for their specific purposes, such as professionals in various industries or individuals who require accurate time conversions for personal use.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeConverter;
