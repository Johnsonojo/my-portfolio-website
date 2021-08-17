import React from "react";
import { AiFillSlackSquare } from "react-icons/ai";
import {
  DiGithub,
  DiHeroku,
  DiIllustrator,
  DiPostgresql,
  DiReact,
  DiTrello,
} from "react-icons/di";
import { SiJest } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the frontend and backend
      aspects of the software development world. Here are some of the
      technologies I'm experienced with:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML, CSS, Javascript, Angular, Typescript, Next.js,
            Bootstrap, Sass, Styled-components, Redux, and React-Query.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express.js, PostgreSQL, Sequelize ORM, MongoDB, and
            Mongoose.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIllustrator size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma, Adobe XD and Invision.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHeroku size="3rem" />
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Experience with <br />
            Heroku, Netlify, Digital Ocean, Vultr, Code Climate and Travis CI.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiJest size="3rem" />
        <ListContainer>
          <ListTitle>Testing</ListTitle>
          <ListParagraph>
            Experience with <br />
            Jest, Enzyme, Mocha, Chai, Puppeteer and Code Climate.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListItem>
          <DiGithub size="3rem" />
          <ListContainer>
            <ListTitle>Version Control</ListTitle>
            <ListParagraph>
              Experience with <br />
              Git, GitHub and BitBucket.
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </ListItem>
      <ListItem>
        <DiTrello size="3rem" />
        <ListContainer>
          <ListTitle>Project Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Trello Board, Jira Board, and Pivotal Tracker.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillSlackSquare size="3rem" />
        <ListContainer>
          <ListTitle>Collaboration</ListTitle>
          <ListParagraph>
            Experience with <br />
            Slack, Zoom, Microsoft Teams, Skype, Google Meet and Team Viewer.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
    <br />
  </Section>
);

export default Technologies;
