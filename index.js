const readline = require('readline');
const Person = require('./person');
const Relationships = require('./relationships');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const familyTree = new Relationships();

rl.setPrompt('family-tree> ');
rl.prompt();

rl.on('line', (line) => {
  const args = line.trim().split(' ');

  if (args[0] === 'family-tree') {
    const command = args[1];
    const name1 = args[2];
    const relationship = args[4];
    const name2 = args.slice(6).join(' ');

    switch (command) {
      case 'add':
        if (name1 === 'person') {
          const gender = name2 === 'male' ? 'male' : 'female';
          const person = new Person(args[3], gender);
          familyTree.addPerson(person);
          console.log(`Added ${gender} ${args[3]} to the family tree.`);
        } else if (name1 === 'relationship') {
          familyTree.addRelationship(relationship, name2, name1);
          console.log(`Added ${relationship} relationship between ${name1} and ${name2}.`);
        }
        break;
      case 'count':
        if (relationship === 'sons') {
          const count = familyTree.countSons(name1);
          console.log(`Number of sons of ${name1}: ${count}`);
        } else if (relationship === 'daughters') {
          const count = familyTree.countDaughters(name1);
          console.log(`Number of daughters of ${name1}: ${count}`);
        } else if (relationship === 'wives') {
          const count = familyTree.countWives(name1);
          console.log(`Number of wives of ${name1}: ${count}`);
        }
        break;
      case 'father':
        const fatherName = familyTree.fatherOf(name1);
        if (fatherName) {
          console.log(`${name1}'s father is ${fatherName}.`);
        } else {
          console.log(`${name1}'s father is not found.`);
        }
        break;
      default:
        console.log('Invalid command.');
    }
  } else {
    console.log('Invalid command. Use "family-tree" to execute commands.');
  }

  rl.prompt();
}).on('close', () => {
  console.log('Exiting family-tree.');
  process.exit(0);
});
