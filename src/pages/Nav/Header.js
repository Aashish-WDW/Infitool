import styles from '../../styles/navbar.module.css';
import Head from "next/head";

export default function Header() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://kit.fontawesome.com/e5def6309a.js" crossorigin="anonymous"></script>
            </Head>
            <nav class={`navbar navbar-expand-lg bg-dark ${styles['navbar']}`}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">INFIT<i class="fa-solid fa-infinity"></i>L</a>
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        WEBSITE
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/Domain-Age-Checker">Domain Age Checker</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/Domain-Authority-Checker">Domain Authority Checker</a>
                                        </li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/smallink/Smallink">URL Shortner</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/QR-Generator">QR Generator</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        TEXT
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Text-Speech">Text To Speech</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Word-Counter">Word Counter</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Case-Converter">Case Converter</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Morse-Text">Morse Text</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Morse-Generator">Morse Generator</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        PASSWORD
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Password-Tools/Password-Strength-Checker">Password
                                            Strength</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Password-Tools/Random-Password-Genarator">Random
                                            Password</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        UNIT
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a href="/Unit-Tools/Area-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Area Converter</a></li>
                                        <li><a href="/Unit-Tools/Byte-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Byte Converter</a></li>
                                        <li><a href="/Unit-Tools/Length-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Length Converter</a></li>
                                        <li><a href="/Unit-Tools/Power-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Power Converter</a></li>
                                        <li><a href="/Unit-Tools/Speed-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Speed Converter</a></li>
                                        <li><a href="/Unit-Tools/Temperature-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Temperture Converter</a></li>
                                        <li><a href="/Unit-Tools/Time-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Time Converter</a></li>
                                        <li><a href="/Unit-Tools/Volume-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Volume Converter</a></li>
                                        <li><a href="/Unit-Tools/Weight-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Weight Converter</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        CALCULATORS
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Percentage-Calculator">Percentage Calculator</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Discount-Calculator">Discount Calculator</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Age-Calculator">Age Calculator</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Loan-Calculator">Loan Calculator</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        BINARY
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a href="/Binary-Tools/ASCII-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>ASCII To Binary</a></li>
                                        <li><a href="/Binary-Tools/Binary-ASCII" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To ASCII</a></li>
                                        <li><a href="/Binary-Tools/Decimal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Decimal To Binary</a></li>
                                        <li><a href="/Binary-Tools/Binary-Decimal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Decimal</a></li>
                                        <li><a href="/Binary-Tools/Binary-Hexdecimal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Hex</a></li>
                                        <li><a href="/Binary-Tools/Hexdecimal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Hex To Binary</a></li>
                                        <li><a href="/Binary-Tools/Text-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Text To Binary</a></li>
                                        <li><a href="/Binary-Tools/Binary-Text" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Text</a></li>
                                        <li><a href="/Binary-Tools/Octal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Octal To Binary</a></li>
                                        <li><a href="/Binary-Tools/Binary-Octal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Octal</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <a class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        COLOR
                                    </a>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Hexcode-Genarator">Genarate Hex</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Gradient-Genarator">Gradient</a></li>
                                        <li><a class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Random-Gradient">Random Gradient</a></li>
                                    </ul>
                                </div>
                            </ul>

                            <div class="boxy"></div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}