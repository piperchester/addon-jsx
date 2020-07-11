import React from 'react';
import { storiesOf } from '@storybook/react';

import Simple from '../components/simple';

storiesOf('With Props', module)
  .addWithJSX('No children - No options', () => (
    <Simple value foo="bar" test="test" />
  ))
  .addWithJSX('No children - Rename', () => <Simple value test="test" />, {
    displayName: 'Renamed'
  })
  .addWithJSX('With children - No options', () => (
    <Simple value test="test">
      <span>World</span>
    </Simple>
  ))
  .addWithJSX(
    'With children - Skip',
    () => (
      <Simple>
        <Simple value test="test">
          <div />
        </Simple>
      </Simple>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'With children - Skip and rename',
    () => (
      <Simple>
        <Simple value test="test">
          <span>World</span>
        </Simple>
      </Simple>
    ),
    { skip: 1, displayName: () => 'Renamed' }
  )
  .addWithJSX(
    'With dangerouslySetInnerHTML - onBeforeRender',
    () => (
      <Simple>
        <Simple value test="test">
          <div
            dangerouslySetInnerHTML={{
              __html: '<div>Inner HTML<ul><li>1</li><li>2</li></ul></div>'
            }}
          />
        </Simple>
      </Simple>
    ),
    {
      skip: 1,
      onBeforeRender: domString => {
        if (domString.search('dangerouslySetInnerHTML') < 0) {
          return '';
        }

        try {
          domString = /(dangerouslySetInnerHTML={{)([^}}]*)/.exec(domString)[2];
          domString = /(')([^']*)/.exec(domString)[2];
        } catch (err) {}

        return domString;
      }
    }
  )
  .addWithJSX(
    'With Chromatic disable',
    () => (
      <Simple>
        <Simple value test="test">
          <div
            dangerouslySetInnerHTML={{
              __html: '<div>Inner HTML<ul><li>1</li><li>2</li></ul></div>'
            }}
          />
        </Simple>
      </Simple>
    ),
    {
      chromatic: {
        disable: false
      }
    }
  );
