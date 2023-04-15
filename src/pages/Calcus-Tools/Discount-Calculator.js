import { useState } from "react";
import styles from '../../styles/Website.module.css';

const DiscountCalculator = () => {
    const [originalPrice, setOriginalPrice] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [discountAmount, setDiscountAmount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const handleCalculate = () => {
        const discount = (originalPrice * discountPercentage) / 100;
        setDiscountAmount(discount);
        setFinalPrice(originalPrice - discount);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Discount Calculator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <label>Original Price:</label>
                                <input
                                    type="number"
                                    value={originalPrice}
                                    onChange={(e) => setOriginalPrice(Number(e.target.value))}
                                />
                            </div>
                            <div className={styles.btntop}>
                                <label>Discount Percentage:</label>
                                <input
                                    type="number"
                                    value={discountPercentage}
                                    onChange={(e) => setDiscountPercentage(Number(e.target.value))}
                                />
                            </div>
                            <div>
                                <button
                                    type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={handleCalculate}>Calculate</button>
                            </div>
                            <div>
                                <label>Discount Amount:</label>
                                <span>{discountAmount.toFixed(2)}</span>
                            </div>
                            <div>
                                <label>Final Price:</label>
                                <span>{finalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Discount Calculator</h3>
                        <h6>A discount calculator is a tool or software that calculates the discounted price of a product or service based on the original price and the discount percentage. It is commonly used in various contexts, such as retail, e-commerce, or personal finance, where discounts are offered or applied to determine the final cost of a product or service. Discount calculators provide a quick and convenient way to calculate the discounted price, helping consumers or businesses determine the amount they can save or the final cost of a discounted item.
                        </h6>
                        <h3>Features and Functionality of Discount Calculators</h3>
                        <h6>Discount calculators typically offer a range of features and functionalities to accurately calculate the discounted price of a product or service. They allow users to input the original price of the item and the discount percentage, and then calculate and display the discounted price. Some discount calculators also offer additional features, such as the ability to calculate discounts in different formats, such as percentage, fixed amount, or buy-one-get-one (BOGO) deals, or provide options to include or exclude taxes or other fees in the calculation. Additionally, some discount calculators may have customization options, such as rounding decimals or displaying results in different currencies.
                        </h6>
                        <h3>Benefits of Using a Discount Calculator</h3>
                        <h6>The use of a discount calculator offers several benefits in accurately calculating the discounted price of a product or service. Firstly, it eliminates the need for manual calculations and reduces the risk of errors, ensuring accurate and consistent discount calculations. This can be particularly useful in retail or e-commerce where accurate pricing is essential for making informed purchasing decisions. Secondly, discount calculators provide convenience and efficiency by quickly calculating the discounted price based on the original price and discount percentage, saving time and effort. Moreover, discount calculators are easily accessible online or as standalone applications, making them readily available for consumers or businesses who need to calculate discounts for their specific purposes, such as budgeting, comparison shopping, or promotional pricing.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountCalculator;
