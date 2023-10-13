import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Flowdove"
        description="Flowdove is a collection of free AI tools 
        created by me and two friends. Flowdove makes every day tasks 
        easier and faster, without forcing users to create an account.
        "
        link="projects/flowdove/" 
        img={{
          src: '/assets/images/flowdove-logo.jpg',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Python</Tags>
            <Tags color={ColorTags.SKY}>JavaScript</Tags>
            <Tags color={ColorTags.AMBER}>Figma</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
          </>
        }
      />
      <Project
        name="Machine Learning Algorithm for Cancer-Detection"
        description="Project manager for post-diagnosis cancer detection product
        in early development. 
        "
        link="projects/ml-diagnosis/"
        img={{ src: '/assets/images/molecular.jpeg', alt: 'Project ML Diagnosis' }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>Execution</Tags>
            <Tags color={ColorTags.ORANGE}>Get in the Weed</Tags>
            <Tags color={ColorTags.NEUTRAL}>Business Dev</Tags>
          </>
        }
      />
      <Project
        name="Clinical Trial Readiness"
        description="Project manager leading manufacturing activities and establishing 
        clinical-grade storage for commercial launch."
        link="projects/clin-trial-readiness/"
        img={{ src: '/assets/images/drug-mfg.jpeg', alt: 'Project Clin trial readiness' }}
        category={
          <>
            <Tags color={ColorTags.ZINC}>Vendor management</Tags>
            <Tags color={ColorTags.INDIGO}>Empathy</Tags>
            <Tags color={ColorTags.ROSE}>Execution</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
