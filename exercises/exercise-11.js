let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};

// Add "Go" to languages
programming["languages"].push("Go");
console.log(programming.languages);

// Change difficulty to 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

// Using `delete` keyword, write a command to remove the jokes key from programming
delete programming.jokes;
console.log(programming);

// Write command to add a new key called isFun
programming["isFun"] = true;
console.log(programming);