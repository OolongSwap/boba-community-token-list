const { version } = require("../package.json");
const boba = require("./tokens/boba.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Boba Community TL",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/OolongSwap/token-logos/main/288/0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7/logo.png",
    keywords: ["oolongswap", "boba", "community"],
    tokens: [...boba]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
