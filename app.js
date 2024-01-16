let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let z = 0; z < noun.length; z++) {
            console.log(pronoun[i] + adj[j] + noun[z] + ".com");
        }
    }
}