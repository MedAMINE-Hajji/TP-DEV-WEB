// Interface Student
export interface Student {
  id: number;
  name: string;
  classe?: string;
  age?: number;
  email?: string;
}

// Tableau statique des étudiants
export const Students: Student[] = [
  { id: 1, name: 'Asma', classe: 'TI1', age: 20, email: 'asma@fst.com' },
  { id: 2, name: 'Oumaima', classe: 'TI2', age: 21, email: 'oumaima@fst.com' },
  { id: 3, name: 'Raouf', classe: 'TI1', age: 22, email: 'raouf@fst.com' },
  { id: 4, name: 'Ibrahim', classe: 'TI3', age: 20, email: 'ibrahim@fst.com' },
  { id: 5, name: 'Nour', classe: 'TI2', age: 21, email: 'nour@fst.com' },
  { id: 6, name: 'Rihem', classe: 'TI1', age: 22, email: 'rihem@fst.com' },
  { id: 7, name: 'Dyama', classe: 'TI3', age: 20, email: 'dyama@fst.com' },
  { id: 8, name: 'Dr IQ', classe: 'TI2', age: 35, email: 'driq@fst.com' },
  { id: 9, name: 'Howa', classe: 'TI1', age: 21, email: 'howa@fst.com' },
  { id: 10, name: 'Hiya', classe: 'TI3', age: 22, email: 'hiya@fst.com' }
];
