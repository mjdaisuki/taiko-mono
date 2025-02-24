import EcosystemCard from "./EcosystemCard";

export default function EcosystemSection() {
  const ecosystemData = [
    {
      icon: "/images/ecosystem/blockscout.svg",
      name: "Blockscout",
      link: "https://blockscout.com",
      description:
        "Blockchain Explorer for inspecting and analyzing EVM Chains.",
    },
    {
      icon: "/images/ecosystem/taiko.svg",
      name: "Bridge",
      link: "https://bridge.test.taiko.xyz",
      description: "Bridge is a dapp that lets you bridge tokens with Taiko.",
    },
    {
      icon: "/images/ecosystem/orbiter.jpg",
      name: "Orbiter",
      link: "https://orbiter.finance",
      description:
        "A decentralized cross-rollup Layer 2 bridge with a contract only on the destination side.",
    },
    {
      icon: "/images/ecosystem/loopring.svg",
      name: "Loopring Wallet",
      link: "https://wallet.loopring.io",
      description:
        "Loopring is your mobile gateway to Ethereum L2, enabling you to easily trade, swap, collect, stake, and invest without the costly gas fees.",
    },
    {
      icon: "/images/ecosystem/nfts2me.jpg",
      name: "NFTs2Me",
      link: "https://nfts2me.com/app",
      description:
        "NFTs2Me is a multichain user-friendly comprehensive platform to create, deploy and manage your NFT collection and community, 100% free with advanced functionalities.",
    },
    {
      icon: "/images/ecosystem/taiko.svg",
      name: "Swap",
      link: "https://swap.test.taiko.xyz",
      description: "Swap is a dapp that lets you swap tokens on Taiko.",
    },
    {
      icon: "/images/ecosystem/taiko-dashboard.png",
      name: "Taiko Node Dashboard",
      link: "https://github.com/wolfderechter/taiko-node-dashboard-docker/tree/main",
      description:
        "A user friendly, easy to read, and visually pleasing dashboard for those running a Node/Proposer/Prover.",
    },
    {
      icon: "/images/ecosystem/zkpool.png",
      name: "ZKPool",
      link: "https://zkpool.io",
      description:
        "ZKPool aggregates the computing power of accelerators for zero-knowledge proofs and provides services to ZKP applications.",
    },
    {
      icon: "/images/ecosystem/pheasant-network.png",
      name: "Pheasant Network",
      link: "https://pheasant.network/",
      description:
        "Pheasant Network is an optimistic bridge between Layer 1 and Layer 2.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6">
      {ecosystemData.map((_) => (
        <EcosystemCard
          key={_.name}
          icon={_.icon}
          name={_.name}
          link={_.link}
          description={_.description}
        />
      ))}
    </div>
  );
}
