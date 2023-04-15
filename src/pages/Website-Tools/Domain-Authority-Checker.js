import React, { useState } from "react";
import styles from '../../styles/Website.module.css';

const DomainAgeChecker = () => {
    const [domain, setDomain] = useState("");
    const [data, setData] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/domainAge?domain=${domain}`);
            const results = await response.json();
            setData(results);
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
                            <h3>Domain Authority Checker</h3>
                        </div>
                        <div className={styles.ibox}>
                            <form onSubmit={handleSubmit}>
                                <div class="form-group">
                                    <input
                                        class="form-control"
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
                                    <p>Expiration Date: {data.expirationDate}</p>
                                    <p>Updated Date: {data.updatedDate}</p>
                                    <p>RegistrarWhoisServer: {data.registrarWhoisServer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>What is a Domain Authority Checker?</h3>
                        <h6>A Domain Authority Checker is an online tool that calculates the strength of a website's domain. It
                            predicts how well a website will rank on search engines based on several factors, including the
                            quality and quantity of links pointing to the domain, its age, and its content.</h6>
                        <br />
                        <h3>The Importance of Domain Authority</h3>
                        <h6>Domain Authority is an important metric for determining the strength and credibility of a website. A
                            high Domain Authority score indicates that a website is likely to have a strong online presence,
                            attract a large amount of traffic, and rank well on search engines. On the other hand, a low Domain
                            Authority score may indicate that a website is not performing well in terms of search engine
                            optimization and may need improvement.
                        </h6>

                        <br />
                        <h3>How to Use a Domain Authority Checker</h3>
                        <h6>Using a Domain Authority Checker is simple. All you have to do is enter the URL of the domain you
                            wish to check, and the tool will provide you with a score ranging from 1 to 100, with 100 being the
                            highest. With this information, you can track the progress of your website's Domain Authority over
                            time and make informed decisions about your SEO strategies to improve it.
                            <br>
                            </br>
                            In conclusion, Domain Authority is a critical metric for determining the strength and credibility of
                            a website. By utilizing a Domain Authority Checker, you can track the progress of your website and
                            make informed decisions about your SEO strategies to improve its online presence.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainAgeChecker;