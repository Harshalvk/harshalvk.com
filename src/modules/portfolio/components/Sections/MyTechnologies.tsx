'use client';

import React from 'react';
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../panel';
import MotionBadge from '@/components/MotionBadge';
import {
  backendAndDatabases,
  devopsAndCloud,
  frameworksAndLibraries,
  programmingLanguagesAndOthers,
} from '@/components/constants';
import SectionBorders from '@/components/shared/SectionBorders';

const ID = 'technologies';

const MyTechnologies = () => {
  return (
    <Panel id={ID}>
      <SectionBorders />
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Technologies I Use.</a>
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="p-4">
          <p className="text-muted-foreground font-mono leading-5">
            Over the years, I have worked with a variety of technologies. Here are some of the
            technologies I have experience with:
          </p>
          <MotionBadge badges={frameworksAndLibraries} />
          <MotionBadge badges={backendAndDatabases} reverse={true} />
          <MotionBadge badges={devopsAndCloud} />
          <MotionBadge badges={programmingLanguagesAndOthers} reverse={true} />
          <p className="text-muted-foreground mt-1 text-center font-mono">...and many more!</p>
        </div>
      </PanelContent>
    </Panel>
  );
};

export default MyTechnologies;
