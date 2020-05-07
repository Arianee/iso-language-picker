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

    if(splittedMacro.map(d=>d.macro).includes(pickLanguage)){
       const macro= splittedMacro?.find(d=>d.macro===pickLanguage);
       return macro?.from;
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
    const sorted = availableLanguages.sort().reverse();
    let choosedLanguage;
    let i=0;

    do{
        const userLanguage=userLanguages[i];

        const indexPerfectMatching = sorted.indexOf(userLanguage);
        const indexPartialMatching = sorted
            .indexOf(userLanguage.split('-')[0]);

            if(indexPerfectMatching>-1){
                choosedLanguage= sorted[indexPerfectMatching];
            } else if(indexPartialMatching>-1){
                choosedLanguage= sorted[indexPartialMatching];
            }
            i++;
    }while(!choosedLanguage && i<userLanguages.length)


    return choosedLanguage || defaultLanguage;
}
