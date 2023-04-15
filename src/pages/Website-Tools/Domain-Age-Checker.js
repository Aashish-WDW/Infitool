import React, { useState } from "react";
import moment from "moment";
import styles from '../../styles/Website.module.css';

const DomainAgeChecker = () => {
    const [domain, setDomain] = useState("");
    const [data, setData] = useState(null);
    const [domainAge, setDomainAge] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/domainAge?domain=${domain}`);
            const results = await response.json();
            setData(results);

            if (results && results.creationDate) {
                const creationDate = moment(results.creationDate);
                const currentDate = moment();
                const years = currentDate.diff(creationDate, "years");
                const months = currentDate.diff(creationDate, "months") % 12;
                const days = currentDate.diff(creationDate, "days") % 30;
                setDomainAge(`${years} years ${months} months ${days} days`);
            } else {
                setDomainAge(null);
            }
        } catch (error) {
            console.error("Failed to fetch domain whois info", error);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Domain Age Checker</h3>
                        </div>
                        <div className={styles.ibox}>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Enter domain name"
                                        value={domain}
                                        onChange={(e) => setDomain(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className={`btn btn-primary ${styles['but']}`}>Check Domain Age</button>
                                </div>
                            </form>
                            {data && (
                                <div>
                                    <h2>Domain Information:</h2>
                                    <p>Domain: {data.domainName}</p>
                                    <p>Creation Date: {data.creationDate}</p>
                                </div>
                            )}
                            {domainAge && (
                                <div>
                                    <h2>Domain Age:</h2>
                                    <p>{domainAge}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>What is a Domain Age Checker?</h3>
                        <h6>A domain age checker is an online tool that allows you to determine the age of a specific domain
                            name. This information is valuable in several ways, including understanding the history of a domain,
                            assessing its credibility, and gauging its potential for search engine optimization.</h6>
                        <br />
                        <h3>The Importance of Domain Age</h3>
                        <h6>The age of a domain is a critical factor in evaluating its credibility and determining its search
                            engine ranking. Older domains are generally considered to be more trustworthy and reliable, and
                            therefore, they tend to have a higher search engine ranking compared to newer domains. Search
                            engines also give preference to older domains as they have had more time to establish their online
                            presence and reputation.</h6>

                        <br />
                        <h3>How to Use a Domain Age Checker</h3>
                        <h6>Using a domain age checker is simple. All you have to do is enter the URL of the domain you wish to
                            check, and the tool will provide you with the necessary information, including the domain's age,
                            registration date, and expiration date. With this information, you can make informed decisions about
                            your domain and your online presence.

                            In conclusion, understanding the age of your domain is essential for both SEO and credibility
                            purposes. Utilizing a domain age checker can provide valuable insights and help you make informed
                            decisions about your domain and your online presence.</h6>
                    </div>
                </div>
                <div className={styles.right}></div>
            </div>
        </div>
    );
};

export default DomainAgeChecker;
