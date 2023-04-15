import { useState } from 'react';
import styles from '../../styles/Website.module.css';

export default function Home() {
    const [hexCode, setHexCode] = useState('#000000');

    const generateHexCode = () => {
        const hexValues = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexValues[Math.floor(Math.random() * 16)];
        }
        setHexCode(color);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Hex Code Generator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div>
                                <button className={`btn btn-primary btn-sm ${styles['btnbelow']}`} onClick={generateHexCode}>Generate Hex Code</button>
                            </div>
                            <div style={{ backgroundColor: hexCode, width: '200px', height: '200px' }}>
                                <p>{hexCode}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Hex Code Generator</h3>
                        <h6>A tool for generating hexadecimal color codes
                            Hex Code Generator is a software or web-based tool that allows users to generate hexadecimal color codes for use in various design projects. Hexadecimal color codes are a popular way to represent colors in digital design and development, where each color is represented by a combination of six alphanumeric characters (0-9, A-F). Hex Code Generator provides an easy and convenient way for users to generate hexadecimal color codes by specifying color values, adjusting brightness, saturation, and other parameters, and obtaining the corresponding hexadecimal code for use in web design, graphic design, or other visual media.</h6>
                        <h3>Features and Functionality of Hex Code Generator</h3>
                        <h6>Color selection and customization options
                            Hex Code Generator typically offers a range of color selection and customization options to generate hexadecimal color codes that suit the user's specific design requirements. Users can choose colors from a color picker tool or input RGB or HSL values and obtain the corresponding hexadecimal code. Hex Code Generator may also provide options to adjust brightness, saturation, contrast, and other color parameters to fine-tune the color to the desired level. Additionally, the tool may offer the ability to generate color schemes, such as complementary, analogous, or triadic colors, based on the selected color, providing additional flexibility and creativity in color selection.</h6>
                        <h3>Benefits of Using Hex Code Generator</h3>
                        <h6>Accurate and efficient hexadecimal color code generation
                            Using a Hex Code Generator can offer several benefits in generating accurate and efficient hexadecimal color codes for design projects. Firstly, it ensures accuracy in color representation, as hexadecimal color codes are widely used in web design, digital graphics, and other visual media. Hex Code Generator eliminates the need for manual calculations or conversions, ensuring that the generated hexadecimal color codes are correct and consistent with the desired color. Secondly, Hex Code Generator offers efficiency in color code generation, saving time and effort compared to manual color code creation. Users can quickly select and customize colors, adjust parameters, and obtain the corresponding hexadecimal code, without the need for trial and error or complex calculations. Lastly, Hex Code Generator promotes customization and creativity, allowing users to experiment with different color combinations, generate color schemes, and fine-tune colors to match their design vision or branding requirements. It provides a user-friendly and accessible tool for designers, developers, and other creative professionals to generate accurate and visually appealing hexadecimal color codes in their projects.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
