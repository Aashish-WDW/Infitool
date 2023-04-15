import React from 'react'
import Search from './components/Search';
import styles from '../../styles/Website.module.css';

function Smallink() {
    return (

        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Short-Link Generator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div className='ToolMain'>
                                <div className='ToolLeft'>
                                    <div className='SubMain'>
                                        <div className='GradiBox3'>
                                            <Search />
                                        </div>
                                    </div>
                                </div>
                                <div className='ToolRight'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>What is a URL Shortener?</h3>
                        <h6>A URL Shortener is an online tool that takes a long and complex URL and shortens it into a shorter,
                            more manageable link. This can be useful for a variety of purposes, including making links easier to
                            share on social media, reducing the number of characters in a link for text messaging, and
                            simplifying links for email.</h6>
                        <br />
                        <h3>The Benefits of Using a URL Shortener</h3>
                        <h6>There are many benefits to using a URL Shortener. In addition to making links easier to share and
                            manage, URL Shorteners can also track clicks and provide analytics on link usage. This information
                            can be valuable for marketing and advertising purposes, as it provides insights into the performance
                            of specific links and the effectiveness of campaigns.</h6>
                        <br></br>
                        <h3>How to Use a URL Shortener</h3>
                        <h6>Using a URL Shortener is straightforward. Simply enter the long URL you want to shorten, and the
                            tool will generate a shortened link for you. You can then copy and paste the shortened link wherever
                            you need to use it, whether it be on social media, in an email, or in a text message.
                            <br></br>
                            In conclusion, URL Shorteners are a useful tool for simplifying long and complex links. Whether you
                            need to share links on social media, in messages, or in emails, a URL Shortener can make your life
                            easier and provide valuable insights through link tracking and analytics.
                        </h6>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Smallink;