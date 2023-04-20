import styles from '../styles/index.module.css';
import Image from 'next/image';
import one from '../icons/dage.svg';
import two from '../icons/da.svg';
import the from '../icons/link.svg';
import QR from '../icons/QrIcon.svg';
import CaseCounterIcon from '../icons/CaseCounterIcon.svg';
import Text2SpeechIcon from '../icons/Text2SpeechIcon.svg';
import WordCounterIcon from '../icons/WordCounterIcon.svg';
import mo from '../icons/mo.svg';
import PasswordStrengthIcon from '../icons/PasswordStrengthIcon.svg';
import PasswordGene from '../icons/PasswordGene.svg';
import area from '../icons/area.svg';
import Byte from '../icons/byte.svg';
import scale from '../icons/scale.svg';
import Power from '../icons/Power.svg';
import spe from '../icons/spe.svg';
import tem from '../icons/tem.svg';
import Time from '../icons/Time.svg';
import vol from '../icons/vol.svg';
import we from '../icons/we.svg';
import LoanI from '../icons/LoanI.svg';
import Discl from '../icons/Discl.svg';
import Disl from '../icons/Disl.svg';
import AgeI from '../icons/AgeI.svg';
import Bi from '../icons/Bi.svg';
import Ass from '../icons/Ass.svg';
import de from '../icons/de.svg';
import hex from '../icons/hex.svg';
import tex from '../icons/tex.svg';
import gra from '../icons/gra.svg';
import co from '../icons/co.svg';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="3C1__bI-Ubi-k6tJaWj0aMc57ZKq0LYvRCusJXrK-s0" />
      </Head>
      <div className={styles.container2}>
        <div className={styles.left}></div>
        <div className={styles.Main}>
          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Website Management Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Website-Tools/Domain-Age-Checker" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={one} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <div className={styles.pew2Text}>Domain Age Checker</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Website-Tools/Domain-Authority-Checker" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={two} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Domain Authority</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/smallink/Smallink" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={the} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>URL Shortner</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Website-Tools/QR-Generator" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={QR} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>QR Generator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm"></div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Text Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Text-Tools/Text-Speech" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Text2SpeechIcon} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Text Speech</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Text-Tools/Word-Counter" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={WordCounterIcon} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Word Counter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Text-Tools/Case-Converter" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={CaseCounterIcon} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Case Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Text-Tools/Morse-Text" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={mo} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Morse Text</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Text-Tools/Morse-Generator" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={mo} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Morse Generator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm"></div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Password Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Password-Tools/Password-Strength-Checker" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={PasswordStrengthIcon} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Password Strength Checker</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Password-Tools/Random-Password-Genarator" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={PasswordGene} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Random Password Genarator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Unit Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Area-Converter" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={area} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Area Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Byte-Converter" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={Byte} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Byte Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Length-Converter" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={scale} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Length Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Power-Converter" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Power} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Power Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Speed-Converter" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={spe} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Speed Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Temperature-Converter" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={tem} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Temperature Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Time-Converter" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Time} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Time Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Volume-Converter" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={vol} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Volume Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Unit-Tools/Weight-Converter" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={we} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Weight Converter</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Calculators Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Calcus-Tools/Percentage-Calculator" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Disl} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Percentage Calculator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Calcus-Tools/Discount-Calculator" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={Discl} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Discount Calculator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Calcus-Tools/Age-Calculator" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={AgeI} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Age Calculator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Calcus-Tools/Loan-Calculator" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={LoanI} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Loan Calculator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm"></div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Unit Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Binary-Tools/ASCII-Binary" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>ASCII Binary</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Binary-ASCII" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={Ass} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Binary ASCII</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Decimal-Binary" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Decimal Binary</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Binary-Decimal" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={de} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Binary Decimal</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Binary-Hexdecimal" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={hex} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Binary Hexdecimal</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Hexdecimal-Binary" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Hexdecimal Binary</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Text-Binary" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Text Binary</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Binary-Text" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={tex} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Binary Text</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Octal-Binary" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Octal-Binary</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Binary-Tools/Binary-Octal" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={Bi} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Binary Octal</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm"></div>
                  <div class="col-sm"></div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.cards}>
            <div className={styles.Htext}>
              <h2 className={styles.HCardh1}>Website Management Tools</h2>
            </div>
            <div className={styles.Htools}>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    <Link href="/Color-Tools/Hexcode-Genarator" className={styles.a}>
                      <div className={styles.card1}>
                        <div className={styles.pew1}>
                          <Image src={co} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Hexcode Genarator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Color-Tools/Gradient-Genarator" className={styles.a}>
                      <div className={styles.card2}>
                        <div className={styles.pew1}>
                          <Image src={gra} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Gradient Genarator</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div class="col-sm">
                    <Link href="/Color-Tools/Random-Gradient" className={styles.a}>
                      <div className={styles.card3}>
                        <div className={styles.pew1}>
                          <Image src={gra} alt="me" width="44" height="44" />
                        </div>
                        <div className={styles.pew2}>
                          <h4 className={styles.pew2Text}>Random Gradient</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className={styles.lolol}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Ads}></div>
      </div>
    </>
  )
}
