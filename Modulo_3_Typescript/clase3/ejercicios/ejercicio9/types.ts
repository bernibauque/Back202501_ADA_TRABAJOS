export type Person = {
    name: string;
    age: number;
  };
  
  export function createPerson(name: string, age: number): Person {
    return { name, age };
  }
  