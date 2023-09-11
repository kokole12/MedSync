const blacklistedTokens = [];

const addToBlacklist = (token) => {
  blacklistedTokens.push(token);
};

const isTokenBlacklisted = (token) => {
  return blacklistedTokens.includes(token);
};

module.exports = { addToBlacklist, isTokenBlacklisted };
