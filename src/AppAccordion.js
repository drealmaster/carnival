import React from 'react'
import AccordionWrapper from './components/AccordionWrapper'; 
import AccordionItem from './components/AccordionItem';
import styled from 'styled-components'
// import plus from '../src/assets/plus.svg'


function App() {

  const data = [
    {
      "title": "Who we are",
      "description": "Carnival Forex is an online investment platform specialized in trading the financial markets. Our objective is to trade and manage our clients’ portfolio and earn them profits."
    },
     {
      "title": "What is the minimum amount of money I can invest?",
      "description": "At Carnival Forex, we are able to offer competitive minimums for our investments. For Carnival investments that are part of our short term note programs, the minimum you can invest in a deal is $500. For Carnival Forex investment, investment minimums vary per deal. It’s worth noting that, historically, deals on Carnival Forex start at $5,000 or greater. Please see the individual deal page to verify the minimum investment amount required to take part in a deal before you decide to invest. Lastly, if you are investing with an IRA via a custodian, the minimum you can invest in a deal is $2,500."
    },
     {
      "title": "How secure are my funds if the market Crash?",
      "description": "There are money-back guarantees depending on the plan you subscribe for. We have a risk management department that keeps your investment protected."
    },
    {
      "title": "How long does it take for my deposits to be added to my account?",
      "description": "Your account will be updated once the deposit transaction is confirmed, this usually takes about 5minutes."
    },
    {
      "title": "How do I invest?",
      "description": "To make an investment you have to create an account either as a private or institutional investor. Once you are signed up, choose an investment plan that suits you and proceed to make a deposit. All deposits must be made through the Investor portfolio area."
    },
    {
      "title": "How is profit calculated?",
      "description": "All profits are calculated in Bitcoin, which means Carnival's Forex objective is to increase your Bitcoin holdings."
    },
     {
      "title": "Are my deposits insured by FDIC?",
      "description": "Yes, your funds are held at Signature Bank, an FDIC-insured bank. Funds deposited with Carnival Forex are insured up to $250,000, the maximum amount allowed by law. Please note that if you have additional accounts at Signature Bank, your funds will be covered up to $250,000 for all insured deposits that are maintained with Signature Bank."
    },
     {
      "title": "How can I withdraw funds?",
      "description": "Login to your account using your username and password and check the withdraw section."
    },
    {
      "title": "What is the withdrawal process time?",
      "description": "After you have submitted a withdrawal, it will take 24h for the fund to liquidate your positions and send you your BTC."
    },
   
  ];

  return (
    <Wrapper>
     <div className="App">
      <div className="content">
        <div className="app-description">
          <h1>FAQ</h1>
          <p>Some common questions that are asked </p>
        </div>
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>
      </div>
    </div> 
    </Wrapper>
  );
}

const Wrapper = styled.div`
.accordion-wrapper .accordion-item h3.accordion-title {
  font-size: 1.75rem;
  margin: 0;
}

.accordion-wrapper .accordion-item h3.accordion-title button {
  position: relative;
  display: flex;
  align-items: center;
  background: #c4c4c4;
  border-radius: 1rem;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 1rem;
}

.accordion-wrapper .accordion-item h3.accordion-title button.active {
  background-color: #dfbd85;
  color: #ffffff;
  border: #dfbd85 solid 1px;
}

.accordion-wrapper .accordion-item h3.accordion-title button:hover {
    background-color: #dfbd85;
}

.accordion-wrapper .accordion-item h3.accordion-title button span.title-wrapper {
  display: block;
  position: relative;
  width: 100%;
}

.accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper {
  width: 10%;
  display: flex;
  justify-content: center;
}


.accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.minus {
  content: url('../src/assets/line.svg');
  width: 24px;
  height: 24px;
}

.accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper span.plus {
  /* content: url('../src/assets/plus.svg'); */
  content: url(plus); 
  width: 24px;
  height: 24px;
  transform: rotate(90deg);
  transition-timing-function: ease-in;
  transition: all 1s;
}

.accordion-wrapper .accordion-item .accordion-panel .panel-close { 
  background: #e0e0e0;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0 1rem;
  opacity:0;
  width:100%;
  height:0;
  overflow: hidden;
  transition-timing-function: ease-out;
  transition: all 1s;
}

.accordion-wrapper .accordion-item .accordion-panel .panel-open {
  overflow: hidden;
  background: #e0e0e0;
  padding: 1rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  border-radius: 1rem;
  opacity:1;
  width:100%;
  height: auto;
  transition-timing-function: ease-in;
  transition: all 1s;
}

.accordion-wrapper .accordion-item .accordion-panel p {
  margin: 0;
}

.App .content {
  min-height: calc(100vh - 150px);
  max-width: 500px;
  margin: 1rem auto 0 auto;
  padding: 0 1rem;
}

.App .content .app-description {
  text-align: center;
}

.App .content .app-description p { 
  line-height: 1.75rem;
}


`
export default App;