# Master Frontend Module 2: Languages 👅

## Array operations

#### Head 🤯

Implements an (immutable) head function, such that, given an array as input, it extracts and returns its first element. It uses destructuring.

#### Tail 🐳

Implements an (immutable) tail function, such that, given an array as input, it returns all but the first element. Uses rest operator.

#### Init 🌌

Implements an init (immutable) function, such that, given an array as input, it returns all but the last element. It uses the methods provided by Array.prototype.

#### Last 🚀

Implements a last (immutable) function, such that, given an array as input, it returns the last element.

## Concat 🔗

Implements an (immutable) concat function such that, given 2 arrays as input, it returns the concatenation of both. Uses rest / spread operators.

##### Optional ❓

Implement a version of the above exercise where multiple input arrays (more than 2) are accepted.

## Clone Merge

#### Clone 🌀

Implement a clone function that, from an input object source, returns a new object with the properties of source:

#### Merge 💊

Implements a merge function that, given two input objects source and target, returns a new object with all the properties of target and source, and in case of properties with the same name, source overwrites target.

## Read Books 📕

Create an isBookRead function that receives a list of books and a title and returns whether or not the book has been read. A book is an object with title as a string and isRead as a boolean. If the book does not exist, return false

TIP: There is a method of Array.prototype that will help you to search according to a pattern.

##### Optional ❓

Use Typescript to add the appropriate types.

## Slot Machine 🎰

The objective of this exercise is to create a slot machine using classes where every time we play we insert a coin. Each slot machine (instance) will have a coin counter that will automatically increase as we play.

When the play method is called the number of coins should be incremented automatically and it should generate three random booleans that will represent the state of the 3 roulette wheels. The user will have won if all three booleans are true, and therefore the console should display the message 💬:

"Congratulations!!!. You won <number of coins> coins!!!";

and reset the stored coins, since we have won them and they have left the machine. Otherwise it should display another message 💬:

"Good luck next time!!!".
