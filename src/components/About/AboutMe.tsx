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
        I am currently an undergraduate in my junior year from the School of Computer Science and Engineering :)
        I am also an amateur cellist.
      </p>
      <p>
        My Chinese name is 刘兆薰, pronounces [lʲə́u ʈʂàu ɕʷīn]. You can also call me <strong>Springs</strong> if this pronounces
        easier for you.
      </p>
      <p>
        "Part of what made the Macintosh great was that the people working on it
        were musicians, poets, and artists, and zoologists, and historians. They also happened to be the best
        computer scientists in the world", saying Steve Jobs.
      </p>
      <p>
        I have been pondering how machines can break out of their computational boundaries to understand human
        intelligence. My goal is to develop computationally efficient deep learning models and algorithms,
        building the computational foundations to enable computers with the abilities to analyze, recognize and
        predict subtle human communicative behaviors during social interactions.
      </p>
      <p>
        My interests mainly are&nbsp;
        <a
          href="https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction"
          target="_blank"
          rel="noopener noreferrer"
        >
          Human-computer Interaction (HCI)&nbsp;
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
          href="../../../files/zhaoxun_liu_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          curriculum vitae
        </a>
        &nbsp;in case you want to have a look :)
      </p>
      <p> Sometimes I&nbsp;
        <a
          href="https://twitter.com/SpringsLau"
          target="_blank"
          rel="noopener noreferrer"
        >
          tweet on Twitter
        </a>
        &nbsp;and share&nbsp;
        <a
          href="https://www.instagram.com/springslau/"
          target="_blank"
          rel="noopener noreferrer"
        >
          moments and pics on Instagram
        </a>
        &nbsp;. You can contact me via these social media accounts or simply sending an E-mail to&nbsp;
        <a
          rel="noopener"
          target="_blank"
          href="mailto:this.is.springs@gmail.com"
        >
          this.is.springs@gmail.com
        </a>
      </p>
      <p>
        Cheers!
      </p>
    </Content>
  )
}

export default AboutMe
