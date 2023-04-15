import React, { useState } from 'react';
import styles from '../../styles/Website.module.css';

export default function Case() {

    const [text, setText] = useState('');
    const handleLow = () => {
        let lowText = text.toLowerCase();
        setText(lowText);
    }

    const handleUp = () => {
        let upText = text.toUpperCase();
        setText(upText);
    }

    const handleRem = () => {
        let rmText = text.split(/[ ]+/);
        setText(rmText.join(""));
    }

    const onChangeHandle = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById('mytxt');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Case - Converter</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div className='ToolMain'>
                                <div className='ToolLeft'>
                                    <br />
                                    <div className='SubMain'>
                                        <div className='GradiBox'>
                                            <div className='textBoxCase'>
                                                <div className='mb-3'>
                                                    <p>Words:{text.split("").length} | Characters: {text.length} | {0.008 * text.split("").length} minutes to read</p>
                                                    <textarea
                                                        className={styles.txtarea}
                                                        id='mytxt'
                                                        rows="10"
                                                        placeholder='Enter your text here'
                                                        onChange={onChangeHandle}
                                                        value={text}
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className={styles.OptionsCase}>
                                                <div className='mb-3'>
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleLow}>LowerCase</button>
                                                </div>
                                                <div className='mb-3'>
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleUp}>UpperCase</button>
                                                </div>
                                                <div className='mb-3'>
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleRem}>Remove extra space</button>
                                                </div>
                                                <div className='mb-3'>
                                                    <button type="button" className="btn btn-primary btn-lg" onClick={handleCopy}>Copy text</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='ToolRight'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Simplifying Text Formatting</h3>
                        <h6>Text Case Converter is a handy tool that simplifies text formatting by converting text to different letter cases. This versatile tool allows users to easily change the capitalization of text, making it convenient for various use cases such as correcting text case errors, formatting titles or headings, converting text for programming purposes, and more. With its simple and user-friendly interface, Text Case Converter has become a popular tool for writers, editors, developers, and anyone who needs to manipulate text capitalization with ease.
                        </h6>
                        <h3>Features and Functionality of Text Case Converter</h3>
                        <h6>Text Case Converter offers a range of features and functionalities to convert text to different letter cases. Users can choose from options such as Sentence Case, Title Case, UPPERCASE, lowercase, Capitalize Each Word, and more. These options allow users to easily convert text to different formats, such as proper nouns, sentence case, or all uppercase, depending on their specific needs. Text Case Converter also supports multiple languages, making it a versatile tool for users across different regions and languages.
                        </h6>
                        <h3>Benefits of Using Text Case Converter</h3>
                        <h6>Text Case Converter offers several benefits for users. Firstly, it simplifies the process of converting text to different letter cases, saving time and effort compared to manual formatting. Secondly, it helps users maintain consistency in their writing, ensuring that text is correctly formatted according to the desired capitalization rules. Thirdly, Text Case Converter is a valuable tool for developers, as it can quickly convert text to different cases for programming purposes, such as generating variable names or formatting code. Overall, Text Case Converter is a convenient and efficient tool that streamlines text formatting and enhances the readability and professionalism of written content.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}