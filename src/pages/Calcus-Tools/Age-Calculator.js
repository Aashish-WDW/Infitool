import { useState } from 'react';
import styles from '../../styles/Website.module.css';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [age, setAge] = useState('');
    const [months, setMonths] = useState('');
    const [time, setTime] = useState('');

    const calculateAge = () => {
        const today = new Date();
        const birthDateTime = new Date(`${birthDate}T${birthTime}`);
        const ageDate = new Date(today - birthDateTime);

        const years = ageDate.getUTCFullYear() - 1970;
        const months = ageDate.getUTCMonth();
        const days = ageDate.getUTCDate() - 1;

        setAge(years);
        setMonths(months);
        setTime(days);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Age Calculator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <label htmlFor="birthDate">Enter your birth date: </label>
                            <input
                                type="date"
                                id="birthDate"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                            />
                            <label htmlFor="birthTime">Enter your birth time: </label>
                            <input
                                type="time"
                                id="birthTime"
                                value={birthTime}
                                onChange={(e) => setBirthTime(e.target.value)}
                            />
                            <button type="button" className="btn btn-primary btn-sm" onClick={calculateAge}>Calculate</button>
                            {age !== '' && (
                                <p>
                                    Your age is: {age} {age === 1 ? 'year' : 'years'}, {months}{' '}
                                    {months === 1 ? 'month' : 'months'}, and {time}{' '}
                                    {time === 1 ? 'day' : 'days'} old.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Age Calculator</h3>
                        <h6>An age calculator is a tool or software that calculates the age of a person based on their birthdate and the current date. It is commonly used in various contexts, such as health and fitness, retirement planning, or for personal record-keeping. Age calculators provide a simple and convenient way to determine the age of an individual, which can be useful for various purposes, such as tracking age-related milestones, estimating remaining years until retirement, or determining age eligibility for certain benefits or services.
                        </h6>
                        <h3>Features and Functionality of Age Calculators</h3>
                        <h6>Age calculators typically offer a range of features and functionalities to accurately calculate the age of an individual. They allow users to input the birthdate of the person, and then calculate and display the age in years, months, days, or even in hours or minutes, depending on the level of precision required. Some age calculators also offer additional features, such as the ability to calculate age in different calendar systems, account for leap years or time zones, or provide age-related statistics or insights, such as life expectancy or age milestones.
                        </h6>
                        <h3>Benefits of Using an Age Calculator</h3>
                        <h6>The use of an age calculator offers several benefits in determining the age of an individual accurately and conveniently. Firstly, it eliminates the need for manual calculations and reduces the risk of errors, ensuring accurate and consistent age calculations. This can be particularly useful in fields where precise age calculations are critical, such as retirement planning or health and fitness tracking. Secondly, age calculators provide convenience and efficiency by quickly calculating the age of an individual based on their birthdate and the current date, saving time and effort. Moreover, age calculators are easily accessible online or as standalone applications, making them readily available for anyone who needs to calculate the age of an individual for their specific purposes, such as individuals, businesses, or organizations that require age calculations for various applications.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgeCalculator;