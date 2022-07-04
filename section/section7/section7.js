const character = { id: 1, name: "スライム", hp: 50 };

const addMP = (x) => {
  character.mp = x;
  return character;
};

const updateHP = () => {
  delete character.mp;
  character.hp = character.hp - 15;
  return character;
};

const LookUpName = () => {
  return character.name;
};

module.exports = { character, addMP, updateHP, LookUpName };
