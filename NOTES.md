# Two approaches

1. **Have two smart contracts**: One for person, and one for each paper. The person contract keeps track of trust ratings, and which papers a person has authored. The paper contract keeps track of reviewers for a paper, and citations of this paper. Also the paper contract links to IPFS with the real paper as PDF.
2. **Have one contract**: Store just the paper contract on the blockchain. All the other data about trust ratings is stored in our central DB, because it should be possible to verify the validity of this data just using the blockchain.


# Components

## 1. Frontend React App
- Signup/Login
- Upload your paper
- View the status of your paper
- View your profile and other's profiles as researchers.
- Search other papers on the blockchain

## 2. Smart Contracts
(Need to plan see above approaches)

## 3. Backend
 - Signup/Login (Maybe use recaptcha)
 - Route for Uploading papers
 - Route for searching papers
 - Route for searching people
 - Route for checking status of a paper

All contract address linked to users are also stored on our internal DB, so we can search them more easily in the future, instead of searching blockchain.


**Final Submission**: 27th March 2022

# Tasks 1

1. Research other DAPP projects linked to IPFS. (12th March)
2. Decide on approach one or two. (12th March)
3. Finalize Backend Database Schemas and Routes (13th March)
4. Finalize Frontend Pages and Flow (13th March)
5. Finalize Smart contract structure and methods (13th March)
6. Develop Smart Contract (14th March)