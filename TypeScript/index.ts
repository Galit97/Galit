 ///// TASK 1 /////
 
  import { developers, Developer, Numbers } from './task';
  
  function calculateAverageSalary(developers: Developer[]): number {
    if (developers.length === 0) {
      return 0;
    }
  
    const totalSalary = developers.reduce((sum, dev) => sum + dev.salary, 0);
    return totalSalary / developers.length;
  }
  
  const averageSalary = calculateAverageSalary(developers);
  console.log('Average Salary:', averageSalary);
  
 ///// TASK 2 /////

 import { Numbers, exponent } from './task';

 function power(base: number, exponent: number): number {
   return Math.pow(base, exponent);
 }
 
 const results: number[] = Numbers.map((numObj) => power(numObj.FirstNumber, exponent));
 
 console.log('Results:', results);