import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Nhu</GradientText> 
        </>
      }
      description={
        <>
          I am an analytical driven Project/Product Manager with background in engineering.
          I like to make things more efficient and beautiful, both at work and at home. 
          In my spare time you will find me hunting for the next cool apartment design, 
          gardening, reading, or doing pilates.
          {/*{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          */}
        </>
      }
      avatar={
        <div>          
          <img
          className="h-90 w-64"
          src="/assets/images/nhu.png"
          alt="Avatar image"
          loading="lazy"
          />
          <p style={{textAlign:'right', fontSize:'12px', }}>
            Generated by <a href="https://www.flowdove.com"><GradientText>Flowdove</GradientText></a>
          </p>
        </div>
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/nhu-h-t-nguyen/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>

          <a href="https://github.com/annenhunguyen">
            <HeroSocial
              src="/assets/images/github-svg.svg"
              alt="Github icon"
            />
          </a>

          <a href="https://www.facebook.com/anne.nhu"> 
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />            
          </a>
                    
          <a 
            href="/assets/images/Nhu-T-Nguyen_Resume.pdf" 
            target="_blank"
          >
              <HeroSocial
                src="/assets/images/download-vector.svg"
                alt="Download resume icon"
              />
          </a>
          
        </>
      }
    />
  </Section>
);

export { Hero };
