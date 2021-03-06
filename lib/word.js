const wordOfDay = [
    "Conquer your fears or they will conquer you.",
    "Rivers need spring.",
    "Do not fear what you don`t know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple."
];

// exporta o array wordOfDay 
exports.getWordOfDay = ()=>{
    const idx = Math.floor(Math.random()*wordOfDay.length);
    return wordOfDay[idx];
}