[![Build Status](https://travis-ci.org/stefdelec/iso-language-picker.svg?branch=master)](https://travis-ci.org/stefdelec/iso-language-picker)
[![npm version](https://img.shields.io/npm/v/iso-language-picker.svg?style=flat)](https://www.npmjs.com/package/iso-language-picker)


## purpose
This library aims to remove headache from developer who tries to know what language he/she should diplay to user.
We tried to follow the best pratice from https://tools.ietf.org/html/bcp47.

## Available methods

##### pickLanguageAccordingToUserLanguages
```javascript
import {pickLanguageAccordingToUserLanguages} from '@arianee/iso-language-picker';
    const userLanguages= ['es', 'en-US'];
    const availableLanguages= ['fr', 'en'];
    const defaultLanguage='pt';

pickLanguageAccordingToUserLanguages(userLanguages,availableLanguages,defaultLanguage)
//output 'en';
```

##### pickLanguageAccordingToUserLanguages
```javascript
import {pickLanguageAccordingToUserLanguagesWithMacrosFallback} from '@arianee/iso-language-picker';
   
    const macros=['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE']
    const userLanguages= ['fr-BE'];
    const availableLanguages= ['fr-FR'];
    const defaultLanguage='pt';

pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros,userLanguages,availableLanguages,defaultLanguage)
//output 'fr-FR';
```
