import React from 'react';
import 'tw-universal-tokens/dist/css/theme.css';

import { PrimaryButton } from './Buttons';

import './styles.css';

const tokensCloud = [
  ['CSS Variables', 'ES Module', 'JSON', 'SASS variables', 'SASS map', 'CJS module'],
  ['--tw-spacing-8', '--tw-text-xl', '--tw-color-blue-500', '--tw-rounded-xl', '--tw-shadow-sm'],
  ['theme.spacing.8', 'theme.shadow.sm', '', 'import { Spacing8, TextXl, ColorBlue500 }'],
  [`map-get($tw-tokens, 'color-blue-500')`, '', '$tw-spacing-8', '$tw-text-xl', '$tw-rounded-xl'],
  ['colors', 'spacing', 'typography', 'rounded corners', 'shadows', 'breakpoints'],
];

export default function App() {
  return (
    <div className="App">
      <section className="hero-container">
        <div className="hero-details">
          <div>
            <h1 className="hero-title">Universal Tokens</h1>
            <div className="hero-description">
              <p>Tailwind has a great collection of colors & other design tokens.</p>
              <p>Now you can use them without adapting utility classes.</p>
            </div>
          </div>
          <PrimaryButton />
        </div>
        <div className="tokens-cloud">
          {tokensCloud.map((tokenRow, index) => (
            <div key={index} className="tokens-cloud-row">
              {tokenRow.map((token) => (
                <span key={token} className="token">
                  {token}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
