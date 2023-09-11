import colorSelector from "../Functions/colorSelector";
const arrTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];
export default () => {
  const tiposPkmn = arrTypes.map((t) => {
    const style = {
      backgroundColor: colorSelector(t),
      margin: "3px",
      padding: "3px",
      borderRadius: "10px",
    };
    return (
      <a href="#" style={style} value="fire">
        {t.toUpperCase()}
      </a>
    );
  });

  return tiposPkmn;
};
