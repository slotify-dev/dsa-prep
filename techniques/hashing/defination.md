## What is Hasing?

- Hashing is a technique used in data structures that efficiently stores and retrieves data in a way that allows for quick access.
- Hashing involves mapping data to a specific index in a hash table (an array of items) using a hash function.
- The great thing about hashing is, we can achieve all three operations (search, insert and delete) in O(1) time on average.

## Components of Hashing

There are majorly three components of hashing:

- Key: A Key can be anything string or integer which is fed as input in the hash function.
- Hash Function: Receives the input key and returns the index of an element in an array called a hash table. The index is known as the hash index.
- Hash Table: Hash table is typically an array of lists. It stores values corresponding to the keys. Hash stores the data in an associative manner in an array where each data value has its own unique index.

## What is a Hash function?

- A hash function creates a mapping from an input key to an index in hash table, this is done through the use of mathematical formulas known as hash functions.
- When two or more keys have the same hash value, a collision happens.

## Hash Table Data Structure

- It is one of the most widely used data structure after arrays.
- It mainly supports search, insert and delete in O(1) time on average which is more efficient than other popular data structures like:
  - Arrays
  - Linked List
- There are mainly two forms of hash typically implemented in programming languages.
  - Hash Set : Collection of unique keys
  - Hash Map : Collection of key value pairs with keys being unique
