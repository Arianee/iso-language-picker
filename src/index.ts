import {intersectionWith} from 'lodash';

export const pickLanguageAccordingToUserLanguages = (userLanguages: string[],
                                                     availableLanguages: string[],
                                                     defaultLanguage?: string
): string | undefined => {

    const macrosLanguage = ['en-US', 'fr-FR', 'zh-CN',"es-ES"];

    const findExactMatch = intersectionWith(userLanguages, availableLanguages);
    if (findExactMatch.length > 0) {
        return findExactMatch[0];
    } else {
        // If no exact match, it compare first two characters of availaible languages and user languages

        const userSplittedLanguage = userLanguages.map(lang => lang.split('-')[0]);

        const findApproximateMatchMatch = intersectionWith(userSplittedLanguage, availableLanguages);

        if (findApproximateMatchMatch.length > 0) {
            const firstApproximate = findApproximateMatchMatch[0];
            const indexOfApproximate = availableLanguages.findIndex(d => d === firstApproximate);
            return availableLanguages[indexOfApproximate];
        } else {
            // fallback to macros
            const macrosAvailable = availableLanguages.filter(d => macrosLanguage.includes(d));

            const simplified = macrosAvailable.map(macro => macro.split('-')[0]);
            const findApproximateSimplifiedMatch = intersectionWith(userSplittedLanguage, simplified);

            if (findApproximateSimplifiedMatch.length > 0) {
                const firstApproximate = findApproximateSimplifiedMatch[0];
                const indexOfApproximate = findApproximateSimplifiedMatch.findIndex(d => d === firstApproximate);
                return macrosAvailable[indexOfApproximate];
            }
        }
    }

    return defaultLanguage;
};
