import React from 'react';
import SectionBorders from '@/components/shared/SectionBorders';
import { Prose } from '@/components/Typography';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '@/modules/portfolio/components/panel';
import { MarkdownClient } from '../../../../components/markdown';
import { USER } from '@/modules/portfolio/data/user';

const ID = 'about';

const AboutMe = () => {
  return (
    <Panel id={ID}>
      <SectionBorders />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>About Me.</a>
        </PanelTitle>
      </PanelHeader>
      <PanelContent className="p-4">
        <Prose>
          <MarkdownClient>{USER.about}</MarkdownClient>
        </Prose>
      </PanelContent>
    </Panel>
  );
};

export default AboutMe;
