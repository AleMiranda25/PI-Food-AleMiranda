export default function (typeName) {
  const colorTypeNames = {
    normal: "NORMAL",
    fire: "FIRE",
    water: "WATER",
    electric: "ELECTRIC",
    grass: "GRASS",
    ice: "ICE",
    fighting: "FIGHTING",
    poison: "POISON",
    ground: "GROUND",
    flying: "FLYING",
    psychic: "PSYCHIC",
    bug: "BUG",
    rock: "ROCK",
    ghost: "GHOST",
    dragon: "DRAGON",
    dark: "DARK",
    steel: "STEEL",
    fairy: "FAIRY",
  };

  return colorTypeNames[typeName];
}
