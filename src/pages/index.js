import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailEvent from "../../static/images/csv-list.png"
import thumbnailBoard from "../../static/images/gmail-python.png"
import thumbnailNews from "../../static/images/python-clock.png"
import thumbnailTeams from "../../static/images/python-document.png"
import thumbnailStaff from "../../static/images/python-keyboard.png"
import iconGitHub from "../../static/images/icon-github.svg"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const IndexPage = () => (
    <Layout>
        <SEO title="Pyagmail, a python script for sending automatic mails to lists from your gmail account"/>

        <div className={"page-header home"}>
            <h1>Send automatic emails to csv lists<br/>With your Gmail account </h1>
            <p>Pyagmail gives your a complete python script for sending<br/>automatic mails, increase the possibility to acquire customers!</p>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-2"}>
                    
                    </div>
                    <div className={"col-8"}>
                    <deckgo-highlight-code
                        terminal="carbon"
                        src="https://raw.githubusercontent.com/pyagmail/pyagmail/master/pyagmail-website/home-hero-pyagmail.md"
                    >
                    </deckgo-highlight-code>
                    </div>
                    <div className={"col-2"}>
                    
                    </div>
                </div>
            </div>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Create a csv list</h2>
                                <p>Upload to the script an email list from a csv file, pyagmail will read all the addresses and send the selected email.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Make your email body</h2>
                                <p>Pyagmail read from a file your email text,<br/>Put the txt file in the pyagmail folder, and specify the file in the config.py script, pyagmail will use the text in the email body. </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Send at the right time</h2>
                                <p>Pyagmail send automatic email to the list only in days hours. By default, will send from 9:00 to 18:00, and will stop sending in night hours.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>See who received your email campain</h2>
                                <p>After running, Pyagmail will send to your email box two log files with the list of the rejected emails and the delivered emails.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailTeams}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Forget manual followups</h2>
                                <p>If you work every day with emails, and you repeat always the same tasks to follow up clients, with pyagmail will you forget it and start doing something else!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Fork it from GitHub</h2>
                    <p>Download or fork from GitHub to start using it for free.</p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}><img alt={"GitHub"} src={iconGitHub}/>Fork It!</a>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
