import React, { useState } from 'react';
import styles from '../../styles/Website.module.css';

const TextToSpeech = () => {
    const [text, setText] = useState('');
    const [speechUrl, setSpeechUrl] = useState('');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSpeak = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }
    };

    const handleDownload = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            const blob = new Blob([text], { type: 'text/plain' });
            setSpeechUrl(URL.createObjectURL(blob));
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setText(event.target.result);
        };
        reader.readAsText(file);
    };

    return (
        <div className={styles.main}>
            <div className={styles.mainin}>
                <div className={styles.left}></div>
                <div className={styles.cen}>
                    <div className={styles.wrapper}>
                        <div className={styles.bHead}>
                            <h3>Text - Speech</h3>
                        </div>
                        <div className={styles.ibox}>
                            <textarea className={styles.txtarea} value={text} onChange={handleTextChange} />
                            <div className={styles.OptionsCase2}>
                                <button type="button" className="btn btn-primary btn-sm" onClick={handleSpeak}>Speak</button>
                                <button type="button" className="btn btn-primary btn-sm" onClick={handleDownload}>Download</button>
                                <input type="file" className="btn btn-primary btn-sm" accept=".txt" onChange={handleFileUpload} />
                                {speechUrl && (
                                    <a href={speechUrl} download="speech.txt">
                                        Download Speech
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        <h3>A Revolutionary Technology</h3>
                        <h6>Text-to-Speech (TTS) converter is a cutting-edge technology that has transformed the way we interact with digital content. This powerful tool converts written text into spoken words, enabling users to listen to text-based information effortlessly. TTS technology has gained widespread popularity in various applications, including accessibility for individuals with visual impairments, language learning, audiobooks, virtual assistants, and more. With its ability to convert text into natural-sounding human-like voices, TTS has become an invaluable asset in today's digital world.
                        </h6>
                        <h3>How Does Text-to-Speech Converter Work?</h3>
                        <h6>Text-to-Speech converters employ advanced algorithms and linguistic models to analyze and synthesize text into audible speech. The process involves several steps, including text analysis, linguistic processing, voice generation, and audio rendering. First, the text is analyzed to identify the language, punctuation, and other elements for proper pronunciation. Then, the linguistic processing stage involves converting the text into phonemes, which are the basic units of speech. Next, the TTS system selects the appropriate voice from a database of pre-recorded human voices or synthesized voices. Finally, the audio rendering stage produces the final speech output, which can be customized with various parameters such as pitch, speed, and volume.
                        </h6>
                        <h3>
                            Benefits and Limitations of Text-to-Speech Converter</h3>
                        <h6>The TTS technology offers numerous benefits, including accessibility for visually impaired individuals, improved language learning opportunities, enhanced user experience in virtual assistants and chatbots, and increased productivity in various industries. TTS can also be used for creating engaging multimedia content, such as videos, presentations, and podcasts. However, like any technology, TTS also has some limitations. These include potential inaccuracies in pronunciation, limitations in voice customization options, and challenges in generating truly natural-sounding speech. Nevertheless, TTS continues to evolve and improve, with ongoing research and development efforts aimed at enhancing its capabilities and expanding its applications in diverse fields.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextToSpeech;
