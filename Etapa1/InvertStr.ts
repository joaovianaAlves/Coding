let text: string = "Tsstsss";

function reverseString(text: string) {
    let array = text.split("").reverse().join("");
    console.log(array);
}

function reverseStringManual(str: string) {
    let reversed: string = ""
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    console.log(reversed);
}

reverseStringManual(text);
reverseString(text);