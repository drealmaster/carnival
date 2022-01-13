import React from "react";
import styled from "styled-components";
// import { PageHero } from '../components'
import aboutImg from "../assets/image6.jpg";
import AppAccordion from "../AppAccordion";
import ContactForm from "../components/ContactForm";
import { Footer } from "../components";
import { useTranslation } from 'react-i18next'
const AboutPage = () => {
  const { t, i18n } = useTranslation();

  const fetchUsers = () => {
    // Where we're fetching data from
    return fetch("https://blockchain.info/charts/$chart-type?format=json")
    // We get the API response and receive data in JSON format
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch ((error) => console.error(error));}
  return (
    <main>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>{t("OurStory")}</h2>
          </div>
          <p>
            {t("About1")}
          </p>

          <p>
          {t("About2")}
          </p>
        </article>
      </Wrapper>

     
      <coingecko-coin-compare-chart-widget
        coin-ids="bitcoin,eos,ethereum,litecoin,ripple,bitcoin-cash,solana,inu-token,dogecoin"
        currency="usd"
        locale="en"
      ></coingecko-coin-compare-chart-widget>
      <AppAccordion />
      <ContactForm />
      <Footer />
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
