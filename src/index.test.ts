import {pickLanguageAccordingToUserLanguages} from "./index";

describe('test', () => {
    test("test1", () => {
        expect(true).toBeTruthy();
    });
    const testSet = [
        {
            userLanguages: ['es', 'en-US'],
            availableLanguages: ['fr', 'en-US'],
            expectedLanguages: 'en-US',
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
            userLanguages: ['fr-FR', 'fr-BE'],
            availableLanguages: ['fr-KA'],
            expectedLanguages: 'defaultLanguage',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'fr-BE'],
            availableLanguages: ['fr-FR'],
            expectedLanguages: 'fr-FR',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'en-UK'],
            availableLanguages: ['en-US'],
            expectedLanguages: 'en-US',
            defaultLanguage: 'defaultLanguage'
        },
        {
            userLanguages: [ 'zh-mo'],
            availableLanguages: ['zh-CN'],
            expectedLanguages: 'zh-CN',
            defaultLanguage: 'defaultLanguage'
        },
    ];

    testSet.forEach((data,index)=>{
        const {userLanguages,availableLanguages,expectedLanguages,defaultLanguage}=data;

        test(`${index}/ user languages: ${userLanguages}, availables: ${availableLanguages}, default: ${defaultLanguage}, expected: ${expectedLanguages}`,()=>{
            const result = pickLanguageAccordingToUserLanguages(userLanguages, availableLanguages, defaultLanguage);

            expect(result).toBe(expectedLanguages)
        })
    })
});
