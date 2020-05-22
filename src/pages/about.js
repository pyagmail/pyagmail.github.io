import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>What’s Pyagmail?</h2>
            <p>Pyagmail is a python program that boost the staff’s productivity by offering new ways to send emails.<br />To increase the number of the emails sent every day.</p>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Our Targets</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Handling lists of emails via csv files</h3>
                            <p>Manage email contacts with csv file lists and give it to Pyagmail for start seding automatic mails to them.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Manage the timing to send  emails</h3>
                            <p>Choose the right hours of the day to send your emails is important to give you the possibility that the receiver will see your mail.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Raise productivity</h3>
                            <p>When Pyagmail works, you'll have free time because it will do the work for you, and  you can start doing something new.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Boost your free time and happiness</h3>
                            <p>It is Obvious that a happy employee will make the environment happy and energetic! Sending a  lot of mail every day is realy boring!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
