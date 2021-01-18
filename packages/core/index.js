const fs = require('fs');
const defaultTheme = require('tailwindcss/defaultTheme');

function getJSON(data) {
  return JSON.stringify(data, null, 2);
}

function convertColor(colors) {
  const keys = Object.keys(colors);
  const properties = {};

  keys.forEach((key) => {
    const colorValue = colors[key];
    if (typeof colorValue === 'string') {
      properties[key] = {
        value: colorValue,
      };
    } else {
      const nestedValues = convertColor(colorValue);
      properties[key] = nestedValues;
    }
  });

  return properties;
}

function convertSpacing(spacing) {
  const keys = Object.keys(spacing);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: spacing[key],
    };
  });

  return properties;
}

function convertBoxShadow(boxShadow) {
  const keys = Object.keys(boxShadow);
  const properties = {};

  keys.forEach((key) => {
    const shadowValue = boxShadow[key];
    if (key !== 'none') {
      properties[key] = {
        value: shadowValue,
      };
    }
  });

  return properties;
}

function convertFontSize(fontSize) {
  const keys = Object.keys(fontSize);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: fontSize[key][0],
    };
  });

  return properties;
}

function convertFontFamily(fontFamily) {
  const keys = Object.keys(fontFamily);
  const properties = {};

  keys.forEach((key) => {
    const value = fontFamily[key].join(', ');
    properties[key] = {
      value,
    };
  });

  return properties;
}

function writeTheme() {
  const jsonData = getJSON(defaultTheme);
  fs.writeFileSync('./properties/theme.json', jsonData, 'utf8');
}

function writeColors(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/color/base.json', jsonData, 'utf8');
}

function writeSpacing(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/spacing/base.json', jsonData, 'utf8');
}

function writeShadows(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/shadow/base.json', jsonData, 'utf8');
}

function writeFontSize(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/fontSize/base.json', jsonData, 'utf8');
}

function writeFontFamily(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/fontFamily/base.json', jsonData, 'utf8');
}

function generateProperties() {
  const { colors, spacing, boxShadow, fontSize, fontFamily } = defaultTheme;

  const colorProperties = {
    color: convertColor(colors),
  };

  const spacingProperties = {
    spacing: convertSpacing(spacing),
  };

  const shadowProperties = {
    shadow: convertBoxShadow(boxShadow),
  };

  const fontSizeProperties = {
    text: convertFontSize(fontSize),
  };

  const fontFamilyProperties = {
    font: convertFontFamily(fontFamily),
  };

  writeColors(colorProperties);
  writeSpacing(spacingProperties);
  writeShadows(shadowProperties);
  writeFontSize(fontSizeProperties);
  writeFontFamily(fontFamilyProperties);
}

module.exports = generateProperties;
