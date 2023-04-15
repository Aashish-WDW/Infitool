import { useState } from 'react';
import styles from '../../styles/Website.module.css';

function atLeastTwoCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];

  return letters.length >= 2;
}

function absenceOfThreeConsecutiveCharacters(text) {
  for (const character of text) {
    const occurrences = Array.from(text).filter((v) => v === character).length;

    if (occurrences >= 3) {
      return false;
    }
  }

  return true;
}

export default function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    const splitted = inputText.trim().split(/[\s-]/);
    const letterCount = (inputText.match(/[a-z]/gi) || []).length;
    const spaceCount = (inputText.match(/\s+/g) || []).length;
    let wordCount = 0;

    outer: for (const text of splitted) {
      for (const check of [atLeastTwoCharacters, absenceOfThreeConsecutiveCharacters]) {
        if (!check(text)) {
          continue outer;
        }
      }

      wordCount++;
    }

    setText(inputText);
    setWordCount(wordCount);
    setLetterCount(letterCount);
    setSpaceCount(spaceCount);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainin}>
        <div className={styles.left}></div>
        <div className={styles.cen}>
          <div className={styles.wrapper}>
            <div className={styles.bHead}>
              <h3>Word - Counter</h3>
            </div>
            <div className={styles.ibox}>
              <div className="container-Word">
                <textarea className={styles.txtarea} value={text} onChange={handleTextChange} placeholder="Paste text here..." />
                <div>
                  <strong>Word Count: </strong>
                  <span className="word-count">{wordCount}</span>
                </div>
                <div>
                  <strong>Letter Count: </strong>
                  <span className="letter-count">{letterCount}</span>
                </div>
                <div>
                  <strong>Number of Spaces: </strong>
                  <span className="space-count">{spaceCount}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <h3>A Tool for Accurate Word Counting</h3>
            <h6>Word Counter is a valuable tool that provides an accurate count of the number of words in a given text. This simple yet powerful tool is widely used by writers, editors, students, and professionals to track word count in various contexts, such as essays, articles, reports, blogs, and social media posts. With its ability to quickly and accurately count words, Word Counter has become an essential tool for ensuring adherence to word count limits and meeting specific writing requirements.
            </h6>
            <h3>Features and Functionality of Word Counter</h3>
            <h6>Word Counter offers a range of features and functionalities that make it a versatile tool for word counting. Users can easily input text or upload documents in various formats, including text files, PDFs, and Word documents, for word counting. The tool provides an instant word count, along with other useful information such as character count, character with spaces count, and the estimated reading time. Word Counter also offers customization options, allowing users to exclude or include specific elements like headers, footers, or citations from the word count. Additionally, Word Counter provides a breakdown of word frequency, helping users identify commonly used words and improve their writing style.
            </h6>
            <h3> Benefits of Using Word Counter</h3>
            <h6>Word Counter offers several benefits for users. Firstly, it helps writers and editors stay within word count limits, such as those set by publishers, instructors, or guidelines for submissions. Secondly, Word Counter aids in improving writing accuracy and conciseness by providing a clear count of words and highlighting frequently used words. Thirdly, Word Counter is a useful tool for assessing readability and estimated reading time, which can be crucial for creating content that is easy to understand and engaging for readers. Overall, Word Counter is an invaluable tool that simplifies word counting, enhances writing quality, and ensures compliance with specific word count requirements.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
