import { useState } from "react";
import styles from '../../styles/Website.module.css';

const LENGTH_FACTORS = {
  inches: 1,
  feet: 12,
  yards: 36,
  meters: 39.37,
  miles: 63360,
  kilometers: 39370.08,
  nanometers: 0.00003937,
  millimeters: 0.03937,
  centimeters: 0.3937
};

const LengthConverter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("inches");
  const [outputUnit, setOutputUnit] = useState("feet");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const convertValue = () => {
    const inputValueInInches = parseFloat(inputValue) * LENGTH_FACTORS[inputUnit];
    const outputValue = inputValueInInches / LENGTH_FACTORS[outputUnit];
    return outputValue.toFixed(2);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>Length Converter</h3>
            </div>
            <div className={styles.ibox}>
              <div>
                <input
                  placeholder="Input Value:"
                  className="form-control"
                  id="input-value"
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <select className={styles.btntop} value={inputUnit} onChange={handleInputUnitChange}>
                  <option value="inches">Inches</option>
                  <option value="feet">Feet</option>
                  <option value="yards">Yards</option>
                  <option value="meters">Meters</option>
                  <option value="miles">Miles</option>
                  <option value="kilometers">Kilometers</option>
                  <option value="nanometers">Nanometers</option>
                  <option value="millimeters">Millimeters</option>
                  <option value="centimeters">Centimeters</option>
                </select>
              </div>
              <div>
                <input
                  placeholder="Output Value:"
                  className={`form-control ${styles['btntop']}`}
                  id="output-value"
                  type="number"
                  value={convertValue()}
                  readOnly
                />
                <select className={styles.btntop} value={outputUnit} onChange={handleOutputUnitChange}>
                  <option value="inches">Inches</option>
                  <option value="feet">Feet</option>
                  <option value="yards">Yards</option>
                  <option value="meters">Meters</option>
                  <option value="miles">Miles</option>
                  <option value="kilometers">Kilometers</option>
                  <option value="nanometers">Nanometers</option>
                  <option value="millimeters">Millimeters</option>
                  <option value="centimeters">Centimeters</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <h3>Introduction to Length Converter</h3>
            <h6>A length converter is a tool or software that allows the conversion of length or distance measurements from one unit to another. It is commonly used in various fields, such as engineering, construction, architecture, and science, where accurate and precise length measurements are crucial. Length converters simplify the process of converting lengths between different units, such as inches to centimeters, feet to meters, or miles to kilometers.
            </h6>
            <h3>Features and Functionality of Length Converters</h3>
            <h6>Length converters typically offer a range of features and functionalities to ensure accurate and efficient conversions. They allow users to input length values in one unit of measurement and provide the equivalent value in another unit. Some length converters also support conversion between different systems, such as imperial and metric, and offer customization options, such as rounding decimals, selecting different units, or providing conversion formulas or explanations for reference. Additionally, length converters may have specialized functionalities, such as converting between specific units used in a particular field or industry.
            </h6>
            <h3>Benefits of Using a Length Converter</h3>
            <h6>The use of a length converter offers several benefits in dealing with length measurements. Firstly, it eliminates the need for manual calculations and reduces the risk of errors in converting lengths, ensuring accurate and consistent measurements. This is particularly important in fields where precision is crucial, such as construction or engineering. Secondly, length converters provide convenience and efficiency by quickly converting lengths between different units, saving time and effort. Moreover, length converters are easily accessible online or as standalone applications, making them readily available for anyone who needs to convert length measurements for their specific purposes, such as professionals in various industries or individuals who require accurate length conversions for personal use.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LengthConverter;
