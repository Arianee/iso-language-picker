import {intersectionWith} from 'lodash';

export const pickLanguageAccordingToUserLanguages = (userLanguages: string[],
                                                     availableLanguages: string[],
                                                     defaultLanguage?: string
): string | undefined => {


    const findExactMatch = intersectionWith(userLanguages, availableLanguages);
    if (findExactMatch.length > 0) {
        return findExactMatch[0];
    } else {
        // If no exact match, it compare first two characters of availaible languages and user languages

        const userSplittedLanguage = userLanguages.map(lang => lang.split('-')[0]);
        const availaibleSplittedLanguage = availableLanguages.map(lang => lang.split('-')[0]);

        const findApproximateMatchMatch = intersectionWith(userSplittedLanguage, availaibleSplittedLanguage);

        if (findApproximateMatchMatch.length > 0) {
            const firstApproximate = findApproximateMatchMatch[0];
            const indexOfApproximate = availaibleSplittedLanguage.findIndex(d => d === firstApproximate);
            return availableLanguages[indexOfApproximate];
        }
    }

    return defaultLanguage;
};
