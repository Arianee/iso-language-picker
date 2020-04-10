[![Build Status](https://travis-ci.org/stefdelec/iso-language-picker.svg?branch=master)](https://travis-ci.org/stefdelec/iso-language-picker)
[![npm version](https://img.shields.io/npm/v/iso-language-picker.svg?style=flat)](https://www.npmjs.com/package/iso-language-picker)


```javascript
import {pickLanguageAccordingToUserLanguages} from 'iso-language-picker';
    const userLanguages= ['es', 'en-US'];
    const availableLanguages= ['fr', 'en'];
    const expectedLanguages= 'en';
    const defaultLanguage='pt';

pickLanguageAccordingToUserLanguages(userLanguages,availableLanguages,defaultLanguage)
//output 'en';
```

