import React from 'react';
import { Text4Xl, Spacing4, Spacing8, RoundedLg } from 'tw-universal-tokens';

const btnStyles = {
  fontSize: Text4Xl,
  border: 'none',
  borderRadius: RoundedLg,
  padding: `${Spacing4} ${Spacing8}`,
};

export function PrimaryButton() {
  return <a className="btn btn-primary" style={btnStyles} href="https://github.com/itaditya/tw-universal-tokens">Get Started</a>;
}
