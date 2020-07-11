import React from 'react';
import { storiesOf } from '@storybook/react';

const Component /**
cccccccccccccccccccccccc *
cccccccccccccccccccccccc */ /**
cccccccccccccccccccccccc *
cccccccccccccccccccccccc */ /**
cccccccccccccccccccccccc *
cccccccccccccccccccccccc */ /**
cccccccccccccccccccccccc *
cccccccccccccccccccccccc */ /**
cccccccccccccccccccccccc *
cccccccccccccccccccccccc */ /**
cccccccccccccccccc *
cccccccccccccccccc */ = () => (
  <div id="from-function" />
);

const Simple /**
ccccccccccccccccccccc *
ccccccccccccccccccccc */ /**
ccccccccccccccccccccc *
ccccccccccccccccccccc */ /**
ccccccccccccccccccccc *
ccccccccccccccccccccc */ /**
ccccccccccccccccccccc *
ccccccccccccccccccccc */ /**
ccccccccccccccccccccc *
ccccccccccccccccccccc */ /**
ccccccccccccccc *
ccccccccccccccc */ = props => (
  <div>
    <span>Hello</span>
    {props.children}
  </div>
);

storiesOf('Children Array', module)
  .addWithJSX(
    'Simple Array',
    () => (
      <div>
        <div />
        <div />
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Array with function',
    () => (
      <div>
        <div />
        <div />
        {Component()}
      </div>
    ),
    { skip: 1 }
  )
  .addWithJSX(
    'Array with nested component',
    () => (
      <div>
        <div />
        <Simple>
          <span>hello</span>
        </Simple>
      </div>
    ),
    { skip: 1 }
  );
