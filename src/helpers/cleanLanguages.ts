
export const cleanLanguages=(languages: any[]):string[]=>{
    return languages.filter(language => typeof language==='string' && language.length >=2);
}
