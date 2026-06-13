'use client';

import React from 'react';
import { Panel, PanelHeader, PanelTitle } from '@/modules/portfolio/components/panel';
import SectionBorders from '@/components/shared/SectionBorders';
import { CollapsibleList } from '@/components/collapsible-list';
import { ExperienceItem } from '../experience-item';
import { EXPERIENCES } from '../../data/experiences';

const ID = 'experiences';

const Experiences = () => {
  return (
    <Panel id={ID}>
      <SectionBorders />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Experiences.</a>
        </PanelTitle>
      </PanelHeader>
      <CollapsibleList
        items={EXPERIENCES}
        renderItem={(project) => (
          <div className="border-b last:border-b-0">
            <ExperienceItem experience={project} />
          </div>
        )}
      />
    </Panel>
  );
};

export default Experiences;
