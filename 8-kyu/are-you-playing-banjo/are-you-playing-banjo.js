function areYouPlayingBanjo(name) {
  return (name.split('').at(0) === "R")||(name.split('').at(0) === 'r')? `${name} plays banjo`: `${name} does not play banjo`;
}