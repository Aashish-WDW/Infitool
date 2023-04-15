import { useState } from "react";
import styles from '../../styles/Website.module.css';

const GradientGenerator = () => {
    const [color1, setColor1] = useState("#ff0000");
    const [color2, setColor2] = useState("#00ff00");

    const handleColor1Change = (event) => {
        setColor1(event.target.value);
    };

    const handleColor2Change = (event) => {
        setColor2(event.target.value);
    };

    const gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        height: "100vh",
        width: "100%",
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Gradient Generator</h3>
                        </div>
                        <div className={styles.ibox}>
                            <div style={gradientStyle}>
                                <div>
                                    <label htmlFor="color1-input">Color 1:</label>
                                    <input
                                        id="color1-input"
                                        type="color"
                                        value={color1}
                                        onChange={handleColor1Change}
                                    />
                                    <span style={{ color: color1 }}>{color1}</span>
                                </div>
                                <div>
                                    <label htmlFor="color2-input">Color 2:</label>
                                    <input
                                        id="color2-input"
                                        type="color"
                                        value={color2}
                                        onChange={handleColor2Change}
                                    />
                                    <span style={{ color: color2 }}>{color2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>Introduction to Gradient Generator</h3>
                        <h6>A tool for creating custom gradients
                            Gradient Generator is a web-based or software tool that allows users to create custom gradients for use in various design projects. Gradients are visual effects that transition between two or more colors, creating a smooth or gradual change in color intensity or hue. Gradient Generator provides an easy and intuitive way for users to create custom gradients by specifying color values, direction, type, and other parameters, and generate the corresponding CSS or image code for use in web design, graphic design, or other visual media.</h6>
                        <h3>Features and Functionality of Gradient Generator</h3>
                        <h6>Customizable gradient creation options
                            Gradient Generator typically offers a wide range of customization options to create gradients that suit the user's specific design requirements. Users can specify the starting and ending colors, as well as intermediate colors, along with their corresponding color values, such as RGB, HEX, or HSL. The tool may also provide options to choose the gradient direction, such as linear, radial, or angular, and adjust other parameters, such as gradient type (linear, radial, conic, etc.), gradient shape, size, opacity, and more. Gradient Generator may also offer pre-designed gradient templates or presets for users to choose from or modify as needed, making it easy to create visually appealing and unique gradients.</h6>
                        <h3>Benefits of Using Gradient Generator</h3>
                        <h6>Efficient and flexible gradient creation
                            Using a Gradient Generator can offer several benefits in creating custom gradients for design projects. Firstly, it provides an efficient and flexible way to create visually appealing gradients without the need for manual calculations or coding. Users can easily experiment with different color combinations, gradient directions, and other parameters to achieve the desired visual effect for their design. Gradient Generator also generates the corresponding CSS or image code, making it easy to implement the created gradients in web design or graphic design projects. Secondly, Gradient Generator saves time and effort compared to manual gradient creation, especially for complex or intricate gradients that require precise color values, direction, and other parameters. It eliminates the need for trial and error, as users can quickly preview and modify the gradients in real-time until they achieve the desired result. Lastly, Gradient Generator promotes creativity and customization, allowing users to create unique and personalized gradients that match their specific design vision or branding requirements. It offers a user-friendly and accessible tool for designers, developers, and other creative professionals to create eye-catching and engaging visual effects in their projects.</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientGenerator;
