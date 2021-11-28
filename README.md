# Boba Community Token List

This NPM module and GitHub repo contains the Boba community token list used in the OolongSwap interface.  

__Note__: you can still create pairs, swap, add liquidity (and everything else) with your project token without doing any of the following.  
This section is just to add logo to your token and add your token to the __boba community token list__ so that it will show up in the token selection dropdown. (and other projects can use __boba community token list__ too to include your token for their project)

## How to add a token
### Requirements
Please note that __brand new tokens are not accepted__,
the projects have to be sound, with information available, and __non-minimal circulation__:

1. The project must be at least __10__ days old.
2. The token should have at least __$100,000__ of liquidity on [OolongSwap](https://oolongswap.com/) (check stats on [Analytics](https://info.oolongswap.com/#/tokens))
3. Contracts are verified in explorer.
4. Must have the following project information.
   - [ ] Contract addresses 
   - [ ] Social media links (e.g twitter)
   - [ ] Official website

### Adding an new token logo
Steps to add tokens to community token list:
1. Submit a pull request to add your token logo to the [token-logos](https://github.com/OolongSwap/token-logos) repo. 
2. Fork this repo to add your token information in the [boba.json](https://github.com/OolongSwap/boba-community-token-list/blob/main/src/tokens/boba.json) file (follow the same format, and don't forget the __,__).
3. Run test __yarn test__ to validate the list.
4. Submit a pull request to the original repo.
5. For each pull request, please add the following project information in the comment section of the PR: 
   - [ ] Contract addresses
   - [ ] Social media links
   - [ ] Official website


## Disclaimer

This token repository is open sourced and managed by the Boba community. Anyone can submit new tokens to this repository.  

Listing tokens in this repo does NOT mean partnership with OolongSwap.

OolongSwap team does not guarantee the quality of code of the tokens added here and we do not endorese any projects directly.  
