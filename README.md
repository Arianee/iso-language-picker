# @arianee/iso-language-picker

[![npm version](https://img.shields.io/npm/v/@arianee/iso-language-picker.svg?style=flat)](https://www.npmjs.com/package/@arianee/iso-language-picker)
[![CI](https://github.com/Arianee/iso-language-picker/actions/workflows/ci.yml/badge.svg)](https://github.com/Arianee/iso-language-picker/actions/workflows/ci.yml)

Pick the best language to display to a user, given the languages they prefer and the languages you have content for.
Language tags follow [BCP 47](https://www.rfc-editor.org/info/bcp47) (`fr`, `fr-FR`, `en-US`…).

- Zero runtime dependencies
- TypeScript types included
- Works in Node.js and in the browser

## Installation

```bash
npm install @arianee/iso-language-picker
```

## Usage

### `pickLanguageAccordingToUserLanguages(userLanguages, availableLanguages, defaultLanguage)`

Returns the first available language matching the user's preferences, in order of preference.

```ts
import { pickLanguageAccordingToUserLanguages } from '@arianee/iso-language-picker';

pickLanguageAccordingToUserLanguages(['es', 'en-US'], ['fr', 'en'], 'pt');
// => 'en'
```

Matching rules, for each user language in order:

1. an exact match wins (`en-GB` → `en-GB`);
2. otherwise the base language matches (`en-US` → `en`);
3. otherwise the next user language is tried.

If nothing matches, `defaultLanguage` is returned, or the first available language when no default is given.
Matching is case-insensitive, and invalid entries (`null`, `undefined`, strings shorter than 2 characters) are ignored.

### `pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, userLanguages, availableLanguages, defaultLanguage)`

Same as above, but with *macro* languages: a list of regional variants that stand for their whole language.
A user speaking any `fr-*` variant gets `fr-FR` when `fr-FR` is a macro and is available.

```ts
import { pickLanguageAccordingToUserLanguagesWithMacrosFallback } from '@arianee/iso-language-picker';

const macros = ['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'];

pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, ['fr-BE'], ['fr-FR'], 'pt');
// => 'fr-FR'
```

If no default language is given, the first macro is used, then the first available language.

## Development

Requires Node.js 22 or later (see `.nvmrc`).

```bash
npm install
npm test        # run the unit tests (Vitest)
npm run test:w  # watch mode
npm run build   # compile to lib/
```

## License

ISC
