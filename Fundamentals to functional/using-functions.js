const _ = {}

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {console.log(`my name is ${name}`);}
    };
};

var suspects = ["Mis Scarlet", "Colonel Mustard", "Mr. White"];

var suspectList = [];

suspects.forEach((name) => {
    suspectList.push({
        name,
        color: name.split(' ')[1],
        speak() {console.log(`my name is ${name}`);}
    })
})
