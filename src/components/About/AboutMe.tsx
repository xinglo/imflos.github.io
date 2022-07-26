import React from 'react'
import styled from 'styled-components'

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        I am currently an undergraduate in my Senior year from the School of Economics, University of California, Berkeley :)
      </p>
      <p>
        My Chinese name is 龙星汝. You can also call me <strong>Iris</strong> if this pronounces
        easier for you.
      </p>
      <p>
        "The most important quality for an investor is temperament,not intellect", saying Warren Buffett.
      </p>
      <p>
      I AM a self-driven and creative student with a solid knowledge base in economics 
      and keen acumen in business. Possessing experience working as a restaurant manager, 
      well-versed in establishing management systems and supervising adherence to rules 
      and regulations. Demonstrated excellent creativity by proposing sales-driven strategies 
      that maintained revenue increase during the pandemic. Seeking an entry-level position 
      n marketing to create value for organizations.
      </p>
      <p>
        My interests mainly are&nbsp;
        <a
          href="https://seekingalpha.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Investment (HCI)&nbsp;
        </a>
        and&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Visual_computing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Computing (Vision & Graphics)
        </a>
        &nbsp;.
      </p>
      <p>
        Here is my&nbsp;
        <a
          href="https://raw.githubusercontent.com/Imflos/Imflos.github.io/master/imgs/1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          curriculum vitae
        </a>
        &nbsp;in case you want to have a look :)
      </p>
      <p> Sometimes I&nbsp;
        <a
          href="https://twitter.com/shiver_o"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet on Twitter
        </a>
        &nbsp;and share&nbsp;
        <a
          href="https://www.instagram.com/xing._.l/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments and pics on Instagram
        </a>
        &nbsp;. You can contact me via these social media accounts or simply sending an E-mail to&nbsp;
        <a
          rel="noopener"
          target="_blank"
          href="mailto:longxingru2@gmail.com"
        >
          longxingru2@gmail.com
        </a>
      </p>
      <p>
        I am blessed to have unmatched support from my family and my dearest love&nbsp;
        <a
          href="https://instagram.com/ssyp37_?/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amy Peng
        </a>. She is the BEST GIRL for me and an outstanding User Experience Designer. I also thank the opportunities from all the renowned institutes I have encountered.
      </p>
      <p>
        Cheers!
      </p>
    </Content>
  )
}

export default AboutMe
