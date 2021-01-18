const fs = require('fs');
const defaultTheme = require('tailwindcss/defaultTheme');

function getJSON(data) {
  return JSON.stringify(data, null, 2);
}

function recursiveConvertColor(colors) {
  const keys = Object.keys(colors);
  const properties = {};

  keys.forEach((key) => {
    const colorValue = colors[key];
    if (typeof colorValue === 'string') {
      properties[key] = {
        value: colorValue,
      };
    } else {
      const nestedValues = recursiveConvertColor(colorValue);
      properties[key] = nestedValues;
    }
  });

  return properties;
}

function convertColor(colors) {
  const properties = recursiveConvertColor(colors);
  return {
    color: properties,
  };
}

function convertSpacing(spacing) {
  const keys = Object.keys(spacing);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: spacing[key],
    };
  });

  return {
    spacing: properties,
  };
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

  return {
    shadow: properties,
  };
}

function convertFontSize(fontSize) {
  const keys = Object.keys(fontSize);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: fontSize[key][0],
    };
  });

  return {
    text: properties,
  };
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

  return {
    font: properties,
  };
}

function convertLetterSpacing(letterSpacing) {
  const keys = Object.keys(letterSpacing);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: letterSpacing[key],
    };
  });

  return {
    tracking: properties,
  };
}

function convertLineHeight(lineHeight) {
  const keys = Object.keys(lineHeight);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: lineHeight[key],
    };
  });

  return {
    leading: properties,
  };
}

function convertBorderRadius(borderRadius) {
  const keys = Object.keys(borderRadius);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: borderRadius[key],
    };
  });

  return {
    rounded: properties,
  };
}

function convertScreen(screen) {
  const keys = Object.keys(screen);
  const properties = {};

  keys.forEach((key) => {
    properties[key] = {
      value: screen[key],
    };
  });

  return {
    screen: properties,
  };
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

function writeLetterSpacing(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/letterSpacing/base.json', jsonData, 'utf8');
}

function writeLineHeight(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/lineHeight/base.json', jsonData, 'utf8');
}

function writeBorderRadius(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/borderRadius/base.json', jsonData, 'utf8');
}

function writeScreen(properties) {
  const jsonData = getJSON(properties);
  fs.writeFileSync('./properties/screen/base.json', jsonData, 'utf8');
}

function generateProperties() {
  const { colors, spacing, boxShadow, fontSize, fontFamily, letterSpacing, lineHeight, borderRadius, screens } = defaultTheme;

  const colorProperties = convertColor(colors);
  const spacingProperties = convertSpacing(spacing);
  const shadowProperties = convertBoxShadow(boxShadow);
  const fontSizeProperties = convertFontSize(fontSize);
  const fontFamilyProperties = convertFontFamily(fontFamily);
  const letterSpacingProperties = convertLetterSpacing(letterSpacing);
  const lineHeightProperties = convertLineHeight(lineHeight);
  const borderRadiusProperties = convertBorderRadius(borderRadius);
  const screenProperties = convertScreen(screens);

  writeColors(colorProperties);
  writeSpacing(spacingProperties);
  writeShadows(shadowProperties);
  writeFontSize(fontSizeProperties);
  writeFontFamily(fontFamilyProperties);
  writeLetterSpacing(letterSpacingProperties);
  writeLineHeight(lineHeightProperties);
  writeBorderRadius(borderRadiusProperties);
  writeScreen(screenProperties);
}

module.exports = generateProperties;
