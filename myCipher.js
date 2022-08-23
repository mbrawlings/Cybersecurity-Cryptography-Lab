/* PART 2
I have created an encoder that shifts each letter in the text by 13 spaces in the
english alphabet. I have also created a decoder that can revert the cipher back
to it's original form
*/

let text = "I love cryptography!"
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let encodedStr = ''
let decodedStr = ''

function encode(str) {
    let strArr = str.toLowerCase().split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/[a-z]/)) {
            for (let k = 0; k < alphabet.length; k++) {
                if (strArr[i] === alphabet[k]) {
                    if (k+13 >= 26) {
                        encodedStr += alphabet[(k+13)%26]
                    } else {
                        encodedStr += alphabet[k+13]
                    }
                }
            }
        } else {
            encodedStr += strArr[i]
        }
    }
    console.log(encodedStr)
}
encode(text)

function decode(str) {
    let strArr = str.toLowerCase().split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/[a-z]/)) {
            for (let k = 0; k < alphabet.length; k++) {
                if (strArr[i] === alphabet[k]) {
                    if (k-13 < 0) {
                        decodedStr += alphabet[26+(k-13)]
                    } else {
                        decodedStr += alphabet[k-13]
                    }
                }
            }
        } else {
            decodedStr += strArr[i]
        }
    }
    console.log(decodedStr)
}

decode('v ybir pelcgbtencul!')