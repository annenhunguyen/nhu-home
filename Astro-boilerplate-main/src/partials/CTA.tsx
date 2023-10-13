import {
  GradientText,
  //Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <p style={{ fontSize:'22px', fontWeight:'bold'}}>
      
          Contact me via {' '}
          <a href="https://www.linkedin.com/in/nhu-h-t-nguyen/">
          <GradientText>LinkedIn</GradientText>
          </a>
    </p>
  </Section>
);

export { CTA };
