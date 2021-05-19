/**
 * Function defines what language should be displayed with macro fallback
 * @param macros
 * @param userLanguages
 * @param availableLanguages
 * @param defaultLanguage
 */
export const pickLanguageAccordingToUserLanguagesWithMacrosFallback=(
    macros:string[],
    userLanguages: string[],
    availableLanguages: string[],
    defaultLanguage: string)=>{

    const splittedMacro=macros
        .map(macro=>({
            macro:macro.split('-')[0],
            from:macro
        }))
        .filter(d=>!availableLanguages.includes(d.macro))

    const pickLanguage= pickLanguageAccordingToUserLanguages(userLanguages,[...availableLanguages,...splittedMacro.map(d=>d.macro)],defaultLanguage);

    const isMacro=splittedMacro.map(d => d.macro.toLowerCase()).includes(pickLanguage.toLowerCase());

    if (isMacro) {
        const correspondingMacro = splittedMacro?.find(d => d.macro === pickLanguage);
        const correspondingavailableLanguage = availableLanguages.find(d => d.toLowerCase() === correspondingMacro?.from.toLowerCase());
        return correspondingavailableLanguage || defaultLanguage;
    }else{
        return pickLanguage
    }
}

/**
 * Function defines what language should be displayed
 * @param userLanguages
 * @param availableLanguages
 * @param defaultLanguage
 */
export const pickLanguageAccordingToUserLanguages = (userLanguages: string[],
                                                     availableLanguages: string[],
                                                     defaultLanguage: string
): string => {
    const originalSorted = [...availableLanguages].sort().reverse();
    const sortedLowerCase = originalSorted.map(d => d.toLowerCase());
    let choosedLanguage;
    let i=0;

    do{
        const userLanguage = userLanguages[i].toLowerCase();

        const indexPerfectMatching = sortedLowerCase.indexOf(userLanguage);
        const indexPartialMatching = sortedLowerCase
            .indexOf(userLanguage.split('-')[0]);

            if(indexPerfectMatching>-1){
                choosedLanguage = originalSorted[indexPerfectMatching];
            } else if(indexPartialMatching>-1){
                choosedLanguage = originalSorted[indexPartialMatching];
            }
            i++;
    }while(!choosedLanguage && i<userLanguages.length)


    return choosedLanguage || defaultLanguage;
}
