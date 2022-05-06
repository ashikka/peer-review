import { ethers } from "ethers";
import { PeerReview__factory, PeerReview, Paper__factory, User__factory } from "../../typechain";

export class Blockchain {
    private provider: ethers.providers.JsonRpcProvider;
    private wallet: ethers.Wallet;
    private peerReviewContract: PeerReview;
    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.DEV_URL);
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
        this.peerReviewContract = PeerReview__factory.connect(process.env.PEER_REVIEW_CONTRACT_ADDRESS, this.provider);
    }

    async checkPaperIsOwnedByUser(address: string, user: string) {
        const c = Paper__factory.connect(address, this.provider.getSigner());
        const owner = await c.owner();

        return  owner === user;
    }

    async getPaper(address: string) {
        const c = Paper__factory.connect(address, this.provider.getSigner());
        return c;
    }

    async getUser(address: string) {
        const userContractAddress = await this.peerReviewContract.getUser(address);

        if (userContractAddress === "0x0000000000000000000000000000000000000000") {
            return null;
        }
        const c = User__factory.connect(userContractAddress, this.provider.getSigner());
        return c;
    }

    async setUserTrustRating(address: string, trustRating: number) {
        const c = await this.getUser(address);
        await c.setTrustRating(trustRating);
    }
}

let bc: Blockchain;

export default function getBlockchain() {
    if (!bc) {
        bc = new Blockchain();
    }
    return bc;
}
