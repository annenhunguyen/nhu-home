import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    {/* <FooterCopyright site_name={AppConfig.site_name} /> */}
    <div className="text-sm text-gray-200"> 
    © {new Date().getFullYear()} {AppConfig.footer_text}.
    </div>
  </Section>
);

export { Footer };
