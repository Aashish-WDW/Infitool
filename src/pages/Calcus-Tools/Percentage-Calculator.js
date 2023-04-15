import { useState } from "react";
import styles from '../../styles/Website.module.css';

export default function PercentageCalculator() {
  const [percent, setPercent] = useState("");
  const [num, setNum] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const calculatePercentage1 = () => {
    setValue1(((num / 100) * percent).toFixed(2));
  };

  const calculatePercentage2 = () => {
    setValue2(((num1 * 100) / num2).toFixed(2) + "%");
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>Percentage Calculator</h3>
            </div>
            <div className={styles.ibox}>
              <div>
                <input type="number" value={percent} onChange={(e) => setPercent(e.target.value)} />% of
                <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
                <br />
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={calculatePercentage1}>Calculate</button>
                </div>
                <br />
                <input type="text" value={value1} readOnly />
              </div>
              <br />
              <div>
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />is what percentage of
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                <br />
                <br />
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" onClick={calculatePercentage2}>Calculate</button>
                </div>
                <br />
                <input type="text" value={value2} readOnly />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <h3>Introduction to Percentage Calculator</h3>
            <h6>A percentage calculator is a tool or software that helps users calculate percentages and related values. It is commonly used in various contexts, such as business, finance, mathematics, or everyday life, where percentage calculations are necessary. Percentage calculators provide a quick and convenient way to calculate percentages, helping users determine percentages of a value, find the percentage change, or calculate the original value based on a percentage increase or decrease.
            </h6>
            <h3>Features and Functionality of Percentage Calculators</h3>
            <h6>Percentage calculators typically offer a range of features and functionalities to accurately calculate percentages and related values. They allow users to input the values for which they want to calculate percentages, such as the part, whole, or percentage, and then calculate and display the result. Percentage calculators can calculate various types of percentages, such as percentage increase, percentage decrease, percentage of a total, and percentage difference. Some percentage calculators also offer additional features, such as the ability to reverse the calculation, convert percentages to decimals or fractions, or calculate multiple percentages at once. Additionally, some percentage calculators may have customization options, such as rounding decimals or choosing different percentage formats.
            </h6>
            <h3>Benefits of Using a Percentage Calculator</h3>
            <h6>The use of a percentage calculator offers several benefits in accurately calculating percentages and related values. Firstly, it eliminates the need for manual calculations and reduces the risk of errors, ensuring accurate and consistent percentage calculations. This can be particularly useful in business or finance where accurate percentage calculations are essential for financial planning, budgeting, or data analysis. Secondly, percentage calculators provide convenience and efficiency by quickly calculating percentages based on the values inputted by the user, saving time and effort in manual calculations. Moreover, percentage calculators are easily accessible online or as standalone applications, making them readily available for users who need to calculate percentages for their specific purposes, such as pricing, discounts, tax calculations, or data interpretation.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
