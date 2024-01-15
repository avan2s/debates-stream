
// type AiResult<T> = {
//     [K in keyof T | `${Extract<keyof T, string>}Score`]: K extends keyof T ? T[K] | string : string;
// }

type AiResult<T> = {
    [K in keyof T | `${Extract<keyof T, string>}Score`]: 
      K extends `${infer _}Score` ? number :
      K extends keyof T ? T[K] :
      never;
  };


  

type OriginalType = {
    name: string;
    age: number;
}


const t: AiResult<OriginalType> = {
    name: "asdiasd",
    age: 12,
    ageScore: 20,
    nameScore: 234

}
