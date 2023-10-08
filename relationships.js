class Relationships {
    constructor() {
      this.family = [];
    }
  
    addPerson(person) {
      this.family.push(person);
    }
  
    addRelationship(relationship, person1Name, person2Name) {
      const person1 = this.findPerson(person1Name);
      const person2 = this.findPerson(person2Name);
  
      if (!person1 || !person2) {
        console.log('Person not found.');
        return;
      }
  
      if (relationship === 'father') {
        if (person1.gender === 'male') {
          person2.father = person1;
        } else {
          person1.father = person2;
        }
      } else if (relationship === 'son') {
        if (person1.gender === 'male') {
          person2.father = person1;
        } else {
          person1.father = person2;
        }
      } else if (relationship === 'daughter') {
        if (person1.gender === 'male') {
          person2.father = person1;
        } else {
          person1.father = person2;
        }
      } else if (relationship === 'wife') {
        if (person1.gender === 'male') {
          person2.husband = person1;
        } else {
          person1.husband = person2;
        }
      }
    }
  
    countSons(name) {
      const person = this.findPerson(name);
  
      if (!person) {
        console.log('Person not found.');
        return 0;
      }
  
      return this.family.filter((p) => p.father === person && p.gender === 'male').length;
    }
  
    countDaughters(name) {
      const person = this.findPerson(name);
  
      if (!person) {
        console.log('Person not found.');
        return 0;
      }
  
      return this.family.filter((p) => p.father === person && p.gender === 'female').length;
    }
  
    countWives(name) {
      const person = this.findPerson(name);
  
      if (!person) {
        console.log('Person not found.');
        return 0;
      }
  
      return person.husband ? 1 : 0;
    }
  
    fatherOf(name) {
      const person = this.findPerson(name);
  
      if (!person || !person.father) {
        console.log('Person or father not found.');
        return null;
      }
  
      return person.father.name;
    }
  
    findPerson(name) {
      return this.family.find((person) => person.name === name);
    }
  }
  
  module.exports = Relationships;
  