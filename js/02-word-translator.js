// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). 
// If they enter one of the four codes, display the translated version of "Hello World" for the given language 
// within the console window. If the user enters anything but those four language codes, the application should default to English. 
// The result should be (for example):

// Hello World translated in French is: Bonjour le monde

let languageCode = prompt('Please, enter language code. For exampl: "es", "de", "en", and "fr".')
switch (languageCode) {
    case 'es':
        console.log('\'Hello World\' translated in Spanish is: Hola Mundo.')
        break

    case 'de':
        console.log('\'Hello World\' translated in German is: Hallo Welt.')
        break

    case 'en':
        console.log('\'Hello World\' translated in English is: Hello World.')
        break

    case 'fr':
        console.log('\'Hello World\' translated in French is: Bonjour le monde.')
        break

    default:
        console.log('\'Hello World\' translated in English is: Hello World.')
}