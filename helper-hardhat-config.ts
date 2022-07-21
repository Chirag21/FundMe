export interface networkConfigItem {
    ethUsdPriceFeed?: string;
    blockConfirmations?: number;
}

export interface networkConfigInfo {
    [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
    localhost: {},
    hardhat: {},
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    rinkeby: {
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        blockConfirmations: 6,
    },
    polygonMumbai: {
        ethUsdPriceFeed: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
        blockConfirmations: 6,
    },
};

export const developmentChains = ["hardhat", "localhost"];
