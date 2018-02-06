import React, {Component} from 'react';
import TopCourse from './studioHomepages/TopCourse';
import VerticalImageResourceCardRow from './VerticalImageResourceCardRow';
import {pegasus} from '@cdo/apps/lib/util/urlHelpers';
import i18n from '@cdo/locale';

export default class MakerLanding extends Component {

  render() {
    const cards = [
       {
        title: i18n.applabMarketingTitle(),
        description: i18n.applabMarketingDesc(),
        link: pegasus('/applab'),
        image: "applab-marketing",
        buttonText: i18n.applabMarketingButton()
      },
      {
        title: i18n.applabProjectTitle(),
        description: i18n.applabProjectDesc(),
        link: "/projects/applab/new",
        image: "applab-project",
        buttonText: i18n.applabProjectButton()
      },
      {
        title: i18n.applabTutorialTitle(),
        description: i18n.applabTutorialDesc(),
        link: "/s/applab-intro/reset",
        image: "applab-tutorial",
        buttonText: i18n.applabTutorialButton()
      }
    ];

    return (
      <div>
        <TopCourse
          assignableName="Course 6"
          lessonName="Maker Toolkit"
          linkToOverview="http://localhost-studio.code.org:3000/s/course1"
          linkToLesson="http://localhost-studio.code.org:3000/s/course1/stage/3/puzzle/1"
        />
        <VerticalImageResourceCardRow
          cards={cards}
        />
      </div>
    );
  }
}
