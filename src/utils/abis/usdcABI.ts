export const usdcABI = [
    {
        type: "function",
        name: "transfer",
        inputs: [
            {name: "_to", type: "address"},
            {name: "_value", type: "uint256"},
        ],
        outputs: [{name: "", type: "bool"}],
        stateMutability: "nonpayable",
    },
];
