![](https://tw-tokens.netlify.app/preview-tw-tokens.jpg)

# Universal Tokens for Tailwind

Many people wish to use Tailwind's hand-crafted design tokens but don't want to adapt Utility CSS approach. This package provides all the tokens as

### 1. CSS variables

Import the CSS file in your bundle. For webpack this works—

```js
import 'tw-universal-tokens/dist/css/theme.css';
```

This will add all the Tailwind design tokens on `:root`. Then just use them in your CSS file—

```css
.card {
  padding: var(--tw-spacing-4) var(--tw-spacing-8);
  min-width: var(--tw-spacing-24);
  background-color: var(--tw-color-green-100);
  border-radius: var(--tw-rounded-md);
  box-shadow: var(--tw-shadow-lg);
}
```

[List of all CSS variables](https://github.com/itaditya/tw-universal-tokens/blob/master/packages/core/dist/css/theme.css)

### 2. SASS variables

Use the SCSS partial in your SCSS file like this—

```scss
@import 'tw-universal-tokens/dist/scss/theme_variables';

.card {
  padding: $tw-spacing-4 $tw-spacing-8;
  min-width: $tw-spacing-24;
  background-color: $tw-color-green-100;
  border-radius: $tw-rounded-md;
  box-shadow: $tw-shadow-lg;
}
```

[List of all SCSS variables](https://github.com/itaditya/tw-universal-tokens/blob/master/packages/core/dist/scss/_theme_variables.scss)

### 3. SASS map

Use the SCSS partial in your SCSS file like this—

```scss
@import 'tw-universal-tokens/dist/scss/theme_map';

.card {
  padding: map-get($tw-tokens, 'spacing-4') map-get($tw-tokens, 'spacing-8');
  min-width: map-get($tw-tokens, 'spacing-24');
  background-color: map-get($tw-tokens, 'color-green-100');
  border-radius: map-get($tw-tokens, 'rounded-md');
  box-shadow: map-get($tw-tokens, 'shadow-lg');
}
```

[Content of the SCSS map](https://github.com/itaditya/tw-universal-tokens/blob/master/packages/core/dist/scss/_theme_map.scss)

### 4. ES Module

Import the required tokens from the package—

```js
import { Spacing4, Spacing8, Spacing24, ColorGreen100, RoundedLg, ShadowLg } from 'tw-universal-tokens';
```

Then use them in style attribute like this—

```js
const regularStyles = {
  padding: `${Spacing4} ${Spacing8}`,
  minWidth: Spacing24,
  backgroundColor: ColorGreen100,
  borderRadius: RoundedMd,
  boxShadow: ShadowLg,
};

<Card style={regularStyles} />
```

Similarly for CSS in JS libraries do this—

```js
const emotionStyles = css`
  padding: ${Spacing4} ${Spacing8},
  min-width: ${Spacing24},
  background-color: ${ColorGreen100},
  border-radius: ${RoundedMd},
  box-shadow: ${ShadowLg},
`;

<Card css={regularStyles} />
```

[List of all exports in ES module](https://github.com/itaditya/tw-universal-tokens/blob/master/packages/core/dist/esm/theme.js)

### 5. JSON file

A JSON file is also available. In case you need it import from—

```
"tw-universal-tokens/dist/json/theme.json"
```

[Content of JSON file](https://github.com/itaditya/tw-universal-tokens/blob/master/packages/core/dist/json/theme.json)
