import {pickLanguageAccordingToUserLanguages,pickLanguageAccordingToUserLanguagesWithMacrosFallback} from "./index";

describe("macro languages",()=>{
    const testSet=[
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['fr-BE'],
            availableLanguages: ['fr-FR'],
            expectedLanguages: 'fr-FR',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['en-UK'],
            availableLanguages: ['en-US'],
            expectedLanguages: 'en-US',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['de-AU'],
            availableLanguages: ['de-DE'],
            expectedLanguages: 'de-DE',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['de'],
            availableLanguages: ['de-DE'],
            expectedLanguages: 'de-DE',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['de-AU','de'],
            availableLanguages: ['de-DE','de-AU'],
            expectedLanguages: 'de-AU',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['de-AU','en-US'],
            availableLanguages: ['de-DE','en-US'],
            expectedLanguages: 'de-DE',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['de','en-US'],
            availableLanguages: ['de-DE','en-US'],
            expectedLanguages: 'de-DE',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['en-UK',"es"],
            availableLanguages: ['en-US','Ka-BE'],
            expectedLanguages: 'en-US',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['en-UK',"es"],
            availableLanguages: ['en-US','Ka-BE','es'],
            expectedLanguages: 'en-US',
            defaultLanguage: 'defaultLanguage'
        },
        {
            macros:['fr-FR', 'ja-JP', 'en-US', 'ko-KR', 'de-DE'],
            userLanguages: ['en', 'zh-CN'],
            availableLanguages: ['en-US',"zh-CN"],
            expectedLanguages: 'en-US',
            defaultLanguage: 'defaultLanguage'
        },
    ];


    testSet.forEach((data,index)=>{
        const {userLanguages,availableLanguages,expectedLanguages,defaultLanguage,macros}=data;

        test(`${index}/ macros: ${macros}, user languages: ${userLanguages}, availables: ${availableLanguages}, default: ${defaultLanguage}, expected: ${expectedLanguages}`,()=>{
            const result = pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, userLanguages, availableLanguages, defaultLanguage);

            expect(result).toBe(expectedLanguages)
        })
    });

    describe('case sensitive', () => {
        const testSet = [
           {
                macros:['fr-Fr', 'Ja-JP', 'En-Us', 'kO-KR', 'de-DE'],
                userLanguages: ['en-UK',"eS"],
                availableLanguages: ['eN-uS','Ka-BE'],
                expectedLanguages: 'eN-uS',
                defaultLanguage: 'defaultLanguage'
            },
            {
                macros:['fr-FR', 'ja-JP', 'eN-US', 'ko-KR', 'de-DE'],
                userLanguages: ['en-UK',"es"],
                availableLanguages: ['EN-US','Ka-BE','es'],
                expectedLanguages: 'EN-US',
                defaultLanguage: 'defaultLanguage'
            },
            {
                macros:['fR', 'ja-JP', 'ko-KR', 'de-DE'],
                userLanguages: ['en-UK',"fR"],
                availableLanguages: ['EN-US','Ka-BE','Fr'],
                expectedLanguages: 'Fr',
                defaultLanguage: 'defaultLanguage'
            }
        ];
        testSet.forEach((data,index)=>{
            const {userLanguages,availableLanguages,expectedLanguages,defaultLanguage,macros}=data;

            test(`${index}/ macros: ${macros}, user languages: ${userLanguages}, availables: ${availableLanguages}, default: ${defaultLanguage}, expected: ${expectedLanguages}`,()=>{
                const result = pickLanguageAccordingToUserLanguagesWithMacrosFallback(macros, userLanguages, availableLanguages, defaultLanguage);

                expect(result).toBe(expectedLanguages)
            })
        });

    });
})

describe('normal behavior', () => {
    const testSet = [
       {
            userLanguages: ['de-AU', 'en-US'],
            availableLanguages: ['de', 'en-US'],
            expectedLanguages: 'de',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: ['es', 'en-US'],
            availableLanguages: ['fr', 'en'],
            expectedLanguages: 'en',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages:  ['es', 'ch-MO'],
            availableLanguages: ['fr', 'en-UK', 'ch-TW'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: ['ja-JP', 'en-US'],
            availableLanguages: ['ja', 'en'],
            expectedLanguages: 'ja',
            defaultLanguage: 'defaultLanguage'
        },
       {
            userLanguages: ['ja', 'en-US'],
            availableLanguages: ['ja-JP', 'en'],
            expectedLanguages: 'en',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: ['fr-FR', 'fr-BE'],
            availableLanguages: ['fr-KA'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'fr-BE'],
            availableLanguages: ['fr-FR'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'en-UK'],
            availableLanguages: ['en-US'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'zh-mo'],
            availableLanguages: ['zh-CN'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        }
    ];
    testSet.forEach((data,index)=>{
        const {userLanguages,availableLanguages,expectedLanguages,defaultLanguage}=data;

        test(`${index}/ user languages: ${userLanguages}, availables: ${availableLanguages}, default: ${defaultLanguage}, expected: ${expectedLanguages}`,()=>{
            const result = pickLanguageAccordingToUserLanguages(userLanguages, availableLanguages, defaultLanguage);

            expect(result).toBe(expectedLanguages)
        })
    });

    describe('case sensitive', () => {
        const testSet = [
            {
                userLanguages: ['ZH-cn', 'en-US'],
                availableLanguages: ['zh-CN','en-US'],
                expectedLanguages: 'zh-CN',
                defaultLanguage: 'defaultLanguage'
            },
            {
                userLanguages: ['zh-cn', 'en-US'],
                availableLanguages: ['zh-CN','en-US'],
                expectedLanguages: 'zh-CN',
                defaultLanguage: 'defaultLanguage'
            }
        ];
        testSet.forEach((data,index)=>{
            const {userLanguages,availableLanguages,expectedLanguages,defaultLanguage}=data;

            test(`${index}/ user languages: ${userLanguages}, availables: ${availableLanguages}, default: ${defaultLanguage}, expected: ${expectedLanguages}`,()=>{
                const result = pickLanguageAccordingToUserLanguages(userLanguages, availableLanguages, defaultLanguage);

                expect(result).toBe(expectedLanguages)
            })
        })

    });
});


