import React from 'react';
import MakerLanding from './MakerLanding';

export default storybook => {
  return storybook
    .storiesOf('MakerLanding', module)
    .withReduxStore()
    .addStoryTable([
      {
        name: 'MakerLanding',
        description: 'Landing page for Maker Toolkit',
        story: () => (
          <MakerLanding/>
        )
      }
    ]);
};
