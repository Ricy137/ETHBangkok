
## TOKREATORS

it´s a dapp that consist in onchain between coinbase and sign protocol using referal  base rewards system and payments. 

## Problems to solve: 

Current onchain payments methods are excellent; however only payments are not enough to built a trust the financial system. Then we introduce  sign protocol  trying  to achieve a simple version of the trust financial system with payment methods of Coinbase.

Besides, by bring referral reward systems on chain would make the money flow of the system more transparent. 

## Objetives & Estrategy:

Traceability: Sign protocol creates onchain agreements; so in the future if the on chain payments occurred conflicts, it can be presented as a proof to settle disrupt. 

Referal System:
For each microtransactions, the money would go to merchants and referrer automatically on chain with the payments methods provided by coinbase. 

Influencer Ownership:
Receive payments automatically without intermediaries.


## Benefits:

Rewards (Tokens & Crypto) and property rights.

## Protocols feedback
### Sign Protocol
On one hand, the Sign Protocol has provided a helpful documentation for onboard the developers into their tooling such as the SDK or the contract hooks. Even though it is good as a place to start, the SDK has a few issues regarding to wallet integrations a such as Coinbase Smart Wallet. Basically, ignoring the "account" field during the Client creation does not connect automatically with the wallet provider and it's impossible to use the client's method, such as *createSchema* and *createAttestation*.

### Coinbase Developer Platform (CDP)
Regarding the CDP one of our teammates has been submitting her feedback through [a github issue referrenced here](https://github.com/coinbase/onchainkit/issues/1635)