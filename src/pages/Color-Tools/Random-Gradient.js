import { useState } from "react";
import styles from '../../styles/Website.module.css';

const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

export default function Home() {
    const [color1, setColor1] = useState(generateColor());
    const [color2, setColor2] = useState(generateColor());

    const generateNewColors = () => {
        setColor1(generateColor());
        setColor2(generateColor());
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Random Gradient Generator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div
                                style={{
                                    width: "100%",
                                    height: "200px",
                                    background: `linear-gradient(to right, ${color1}, ${color2})`,
                                }}
                            ></div>
                            <button type="button" className={`btn btn-primary btn-sm ${styles['btntop']}`} onClick={generateNewColors}>Generate New Gradient</button>
                            <p>Color 1: {color1}</p>
                            <p>Color 2: {color2}</p>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Random Gradient Generator</h3>
                        <h6>A tool for generating random and customizable gradients
                            Random Gradient Generator is a software or web-based tool that allows users to generate random gradients for use in various design projects. Gradients are a popular design element used in web design, graphic design, and other visual media to create visually appealing backgrounds, buttons, banners, and other elements. Random Gradient Generator provides a convenient way for users to generate random and customizable gradients by specifying color ranges, angle, direction, and other parameters, allowing for endless creative possibilities in gradient design.</h6>
                        <h3>Features and Functionality of Random Gradient Generator</h3>
                        <h6>Random gradient generation with customization options
                            Random Gradient Generator typically offers a range of customization options to generate unique and visually appealing gradients. Users can specify color ranges, such as choosing a range of hues, saturations, and brightness levels, to create gradients that align with their design vision. Users can also adjust the angle, direction, and size of the gradient to fit their specific design requirements. Random Gradient Generator may also provide options to add additional effects, such as opacity, noise, or texture, to further customize the generated gradients. Additionally, the tool may offer the ability to save and export gradients in various formats, such as CSS code, image files, or other design file formats, for easy integration into design projects.</h6>
                        <h3>Benefits of Using Random Gradient Generator</h3>
                        <h6>Creative and unique gradient design possibilities
                            Using a Random Gradient Generator can offer several benefits in generating creative and unique gradients for design projects. Firstly, it provides a quick and easy way to generate random gradients, saving time and effort compared to manually creating gradients from scratch. Random Gradient Generator can inspire creativity by generating unexpected color combinations and gradient styles, allowing designers to explore new design possibilities and push the boundaries of their creativity. Secondly, Random Gradient Generator offers customization options, giving users control over the gradient design and allowing them to fine-tune the gradients to suit their specific design requirements. It provides flexibility in creating gradients that align with the overall design theme, branding, or visual style of a project. Lastly, Random Gradient Generator can enhance the visual appeal of design projects, as gradients are a versatile and widely used design element that adds depth, dimension, and visual interest to web pages, graphics, and other visual media.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
