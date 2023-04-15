import styles from '../../styles/navbar.module.css';
import Head from "next/head";
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script src="https://kit.fontawesome.com/e5def6309a.js" crossorigin="anonymous" async></script>
            </Head>
            <nav class={`navbar navbar-expand-lg bg-dark ${styles['navbar']}`}>
                <div class="container-fluid">
                    <Link class="navbar-brand" href="/">INFIT<i class="fa-solid fa-infinity"></i>L</Link>
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        WEBSITE
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/Domain-Age-Checker">Domain Age Checker</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/Domain-Authority-Checker">Domain Authority Checker</Link>
                                        </li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/smallink/Smallink">URL Shortner</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Website-Tools/QR-Generator">QR Generator</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        TEXT
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Text-Speech">Text To Speech</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Word-Counter">Word Counter</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Case-Converter">Case Converter</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Morse-Text">Morse Text</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Text-Tools/Morse-Generator">Morse Generator</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        PASSWORD
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Password-Tools/Password-Strength-Checker">Password
                                            Strength</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Password-Tools/Random-Password-Genarator">Random
                                            Password</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        UNIT
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link href="/Unit-Tools/Area-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Area Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Byte-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Byte Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Length-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Length Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Power-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Power Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Speed-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Speed Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Temperature-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Temperture Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Time-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Time Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Volume-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Volume Converter</Link></li>
                                        <li><Link href="/Unit-Tools/Weight-Converter" class={`dropdown-item ${styles['dropdown-item']}`}>Weight Converter</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        CALCULATORS
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Percentage-Calculator">Percentage Calculator</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Discount-Calculator">Discount Calculator</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Age-Calculator">Age Calculator</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Calcus-Tools/Loan-Calculator">Loan Calculator</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        BINARY
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link href="/Binary-Tools/ASCII-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>ASCII To Binary</Link></li>
                                        <li><Link href="/Binary-Tools/Binary-ASCII" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To ASCII</Link></li>
                                        <li><Link href="/Binary-Tools/Decimal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Decimal To Binary</Link></li>
                                        <li><Link href="/Binary-Tools/Binary-Decimal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Decimal</Link></li>
                                        <li><Link href="/Binary-Tools/Binary-Hexdecimal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Hex</Link></li>
                                        <li><Link href="/Binary-Tools/Hexdecimal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Hex To Binary</Link></li>
                                        <li><Link href="/Binary-Tools/Text-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Text To Binary</Link></li>
                                        <li><Link href="/Binary-Tools/Binary-Text" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Text</Link></li>
                                        <li><Link href="/Binary-Tools/Octal-Binary" class={`dropdown-item ${styles['dropdown-item']}`}>Octal To Binary</Link></li>
                                        <li><Link href="/Binary-Tools/Binary-Octal" class={`dropdown-item ${styles['dropdown-item']}`}>Binary To Octal</Link></li>
                                    </ul>
                                </div>
                            </ul>

                            <ul class="navbar-nav  mb-2 mb-lg-0">
                                <div class="dropdown">
                                    <div class={`nav-link dropdown-toggle ${styles['nav-link']}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        COLOR
                                    </div>
                                    <ul class={`dropdown-menu ${styles['dropdown-menu']}`}>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Hexcode-Genarator">Genarate Hex</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Gradient-Genarator">Gradient</Link></li>
                                        <li><Link class={`dropdown-item ${styles['dropdown-item']}`} href="/Color-Tools/Random-Gradient">Random Gradient</Link></li>
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