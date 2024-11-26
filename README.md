# Randomizely #

## Description: ##
This package generates random alphanumeric (generateRandomString(length)), random hexadecimal string(generateRandomHex(length)) and random customized string (generateCustomString(length, characters)) based on the required length
___

1. ### generateRandomString(length) ###
#### Description: ####
Generates a random alphanumeric string.
#### Parameters: ####
##### length (number): #####
The length of the string to generate.
##### Returns: #####
A random alphanumeric string.

2. ### generateRandomHex(length) ###
#### Description: ####
Generates a random hexadecimal string.
#### Parameters: ####
##### length (number): #####
The length of the string to generate.
##### Returns: #####
A random hexadecimal string.

3. ### generateCustomString(length, characters) ###
#### Description: ####
Generates a random string using a custom character set.
#### Parameters: ####
##### length (number): #####
The length of the string to generate.
##### characters (string): #####
The set of characters to use for the string.
##### Returns: #####
A random string composed of the given characters.

___

## Usage Examples: ##
`const { generateRandomString, generateRandomHex, generateCustomString } = require('randomizely');`

Generate a 12-character alphanumeric string
`console.log('Random Alphanumeric:', generateRandomString(12));`

Generate a 20-character hexadecimal string
`console.log('Random Hexadecimal:', generateRandomHex(20));`

Generate a 10-character custom string using the characters "ABCD"
`console.log('Custom String:', generateCustomString(10, 'ABCD'));`

___

## Installation: ##
To install the randomizely package, use npm or yarn:

### Using npm: ###
#### bash: ####
`npm install randomizely`

### Using yarn: ###
#### bash: ####
`yarn add randomizely`

___

## Pre-requisites: ##
Ensure you have Node.js (version 12 or higher) installed on your system before installing the package.
You can check your Node.js version with:
#### bash ####
`node -v`

___

## License: ##
This project is licensed under the MIT License.