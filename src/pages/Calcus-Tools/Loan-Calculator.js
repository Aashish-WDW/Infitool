import { useState } from 'react';
import styles from '../../styles/Website.module.css';

function LoanCalculator() {
    const [amount, setAmount] = useState(0);
    const [months, setMonths] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [equal, setEqual] = useState(true);
    const [result, setResult] = useState(0);

    const calculateLoan = () => {
        const r = interestRate / 1200; // monthly interest rate
        let installment = 0;

        if (equal) {
            // Equal payments (annuity)
            installment =
                (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
        } else {
            // Equal principal payments
            installment = amount / months + amount * r;
        }

        setResult(installment.toFixed(2));
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Loan Calculator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div className="form-row">
                                <label htmlFor="amount">Amount:</label>
                                <input
                                    className="form-control"
                                    id="amount"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="months">Months:</label>
                                <input
                                    className="form-control"
                                    id="months"
                                    type="number"
                                    value={months}
                                    onChange={(e) => setMonths(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <label htmlFor="interestRate">Interest rate:</label>
                                <input
                                    className="form-control"
                                    id="interestRate"
                                    type="number"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                />
                                %
                            </div>
                            <div className="form-row">
                                <label htmlFor="equal">Equal/Annual:</label>
                                <input
                                    id="equal"
                                    type="checkbox"
                                    checked={equal}
                                    onChange={(e) => setEqual(e.target.checked)}
                                />
                            </div>
                            <div className="form-row">
                                <label></label>
                                <button className="btn btn-primary" onClick={calculateLoan}>
                                    Calculate
                                </button>
                            </div>
                            <div className="form-row">
                                <label htmlFor="result">Monthly payment:</label>
                                <input
                                    className="form-control"
                                    id="result"
                                    type="text"
                                    value={result}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Loan Calculator</h3>
                        <h6>A loan calculator is a tool or software that helps borrowers or lenders calculate the monthly payments, interest rates, and other details associated with a loan. It is commonly used in various contexts, such as personal finance, mortgages, auto loans, or business loans, where borrowers or lenders need to estimate the costs and terms of a loan. Loan calculators provide a quick and convenient way to determine the affordability and feasibility of a loan, helping borrowers or lenders make informed decisions about borrowing or lending money.
                        </h6>
                        <h3>Features and Functionality of Loan Calculators</h3>
                        <h6>Loan calculators typically offer a range of features and functionalities to accurately calculate the loan details. They allow users to input various loan parameters, such as loan amount, interest rate, loan term, and any additional fees or costs. Based on these inputs, loan calculators can calculate and display the monthly payments, total interest paid, and the total cost of the loan. Some loan calculators also offer additional features, such as the ability to compare different loan options, generate amortization schedules, or calculate loan payments with different payment frequencies. Additionally, some loan calculators may have customization options, such as adjusting payment dates or including extra payments in the calculation.
                        </h6>
                        <h3>Benefits of Using a Loan Calculator</h3>
                        <h6>The use of a loan calculator offers several benefits in accurately estimating the costs and terms of a loan. Firstly, it helps borrowers or lenders to understand the financial implications of a loan, including the monthly payments, total interest paid, and the total cost of the loan over its term. This information can be crucial in determining the affordability and feasibility of a loan, helping borrowers or lenders make informed decisions about borrowing or lending money. Secondly, loan calculators provide convenience and efficiency by quickly calculating loan details based on the loan parameters inputted by the user, saving time and effort in manual calculations. Moreover, loan calculators are easily accessible online or as standalone applications, making them readily available for borrowers or lenders who need to estimate loan costs and terms for their specific purposes, such as budgeting, financial planning, or loan comparison.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoanCalculator;
