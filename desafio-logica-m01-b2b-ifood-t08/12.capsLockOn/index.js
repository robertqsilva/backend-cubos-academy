function processData(input) {
  const verificacao1 =
    input === input.toUpperCase()
      ? input.toLowerCase()
      : input === input.toLowerCase()
      ? input
      : input[0] === input[0].toLowerCase() &&
        input.slice(1) === input.slice(1).toUpperCase()
      ? input[0].toUpperCase() + input.slice(1).toLowerCase()
      : input;

  console.log(verificacao1);
}
