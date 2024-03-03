const regex = /\s+(\w)?/gi;

export const formatData = (each) =>
  each?.toLowerCase()?.replace(regex, function (match, letter) {
    return letter.toUpperCase();
  });
