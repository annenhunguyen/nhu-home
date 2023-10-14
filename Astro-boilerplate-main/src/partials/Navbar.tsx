import {
  Logo,
  GradientText,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns> 
        {/* <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="3" y="12" width="6" height="8" rx="1"></rect>
              <rect x="9" y="8" width="6" height="12" rx="1"></rect>
              <rect x="15" y="4" width="6" height="16" rx="1"></rect>
              <path d="M4 20h14"></path>
            </svg>
          } 
          name = "Nhu's Site"
        >*/}
      <p>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }} >
          {/*<img
            src="/assets/images/flower-logo.png" // Replace with the actual path to your SVG image
            alt="Rose Icon" // Provide a meaningful alt text for accessibility
            width="30" // Adjust the width as needed
            height="30" // Adjust the height as needed
            style={{ verticalAlign: 'middle' }} // Add vertical alignment
      /> */}
          <span style={{ fontSize: '18px', marginLeft: '8px', verticalAlign: 'middle'}}>
            <GradientText>Don't let the rickety dock stay</GradientText>
          </span>
        </a> 
      </p>
      

      <NavMenu>
        <NavMenuItem href="/">Home</NavMenuItem>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/assets/images/Nhu-T-Nguyen_Resume.pdf">Resume</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
