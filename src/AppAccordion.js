import React from 'react'
import AccordionWrapper from './components/AccordionWrapper'; 
import AccordionItem from './components/AccordionItem';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'


function App() {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
     <div className="App">
      <div className="content">
        <div className="app-description">
          <h1>{t("FAQ")}</h1>
          <p>{t("FAQDesc")}</p>
        </div>
          <AccordionWrapper>
            {/* {Accordion.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))} */}

{t('Accordion', {returnObjects: true}).map((Accordion, index) => {
          return <AccordionItem key={index} index={index} title={Accordion.title} description={Accordion.description}  />
        })}
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
  background-color: var(--clr-primary-5);
  color: #ffffff;
  border: #dfbd85 solid 1px;
}

.accordion-wrapper .accordion-item h3.accordion-title button:hover {
    background-color: var(--clr-primary-10);
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