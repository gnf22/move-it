import React from 'react';

import { ExperienceBarHeader, CurrentExperience } from '../../styles/global';

export function ExperienceBar() {
  return (
    <ExperienceBarHeader>
      <span>0 xp</span>

      <div>
        <div style={{ width: '50%' }} />

        <CurrentExperience style={{ left: '50%' }}>
          300 xp
        </CurrentExperience>
      </div>

      <span>600 xp</span>
    </ExperienceBarHeader>
  )
}
