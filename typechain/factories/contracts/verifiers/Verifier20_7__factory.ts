/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Verifier20_7,
  Verifier20_7Interface,
} from "../../../contracts/verifiers/Verifier20_7";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[12]",
        name: "input",
        type: "uint256[12]",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fae806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638cbac0fa14610030575b600080fd5b61004a6004803603810190610045919061191d565b610060565b6040516100579190611a67565b60405180910390f35b600061006a611610565b60405180604001604052808760006002811061008957610088611ded565b5b60200201518152602001876001600281106100a7576100a6611ded565b5b6020020151815250816000018190525060405180604001604052806040518060400160405280886000600281106100e1576100e0611ded565b5b60200201516000600281106100f9576100f8611ded565b5b602002015181526020018860006002811061011757610116611ded565b5b602002015160016002811061012f5761012e611ded565b5b6020020151815250815260200160405180604001604052808860016002811061015b5761015a611ded565b5b602002015160006002811061017357610172611ded565b5b602002015181526020018860016002811061019157610190611ded565b5b60200201516001600281106101a9576101a8611ded565b5b602002015181525081525081602001819052506040518060400160405280856000600281106101db576101da611ded565b5b60200201518152602001856001600281106101f9576101f8611ded565b5b602002015181525081604001819052506000600c67ffffffffffffffff81111561022657610225611e1c565b5b6040519080825280602002602001820160405280156102545781602001602082028036833780820191505090505b50905060005b600c8110156102ad578481600c811061027657610275611ded565b5b602002015182828151811061028e5761028d611ded565b5b60200260200101818152505080806102a590611d15565b91505061025a565b5060006102ba82846102da565b14156102cb576001925050506102d2565b6000925050505b949350505050565b6000807f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000019050600061030a6104cd565b9050806080015151600186516103209190611bea565b14610360576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035790611a82565b60405180910390fd5b60006040518060400160405280600081526020016000815250905060005b865181101561044f578387828151811061039b5761039a611ded565b5b6020026020010151106103e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103da90611ac2565b60405180910390fd5b61043a8261043585608001516001856103fc9190611bea565b8151811061040d5761040c611ded565b5b60200260200101518a858151811061042857610427611ded565b5b6020026020010151610df7565b610ed4565b9150808061044790611d15565b91505061037e565b5061047981836080015160008151811061046c5761046b611ded565b5b6020026020010151610ed4565b90506104af61048b8660000151610fd7565b8660200151846000015185602001518587604001518b60400151896060015161107c565b6104bf57600193505050506104c7565b600093505050505b92915050565b6104d5611643565b60405180604001604052807f2d4d9aa7e302d9df41749d5507949d05dbea33fbb16c643b22f599a2be6df2e281526020017f14bedd503c37ceb061d8ec60209fe345ce89830a19230301f076caff004d19268152508160000181905250604051806040016040528060405180604001604052807f0967032fcbf776d1afc985f88877f182d38480a653f2decaa9794cbc3bf3060c81526020017f0e187847ad4c798374d0d6732bf501847dd68bc0e071241e0213bc7fc13db7ab815250815260200160405180604001604052807f304cfbd1e08a704a99f5e847d93f8c3caafddec46b7a0d379da69a4d112346a781526020017f1739c1b1a457a8c7313123d24d2f9192f896b7c63eea05a9d57f06547ad0cec88152508152508160200181905250604051806040016040528060405180604001604052807f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed815250815260200160405180604001604052807f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa8152508152508160400181905250604051806040016040528060405180604001604052807f2844802dd907a1d882a25f3b735df725a32a299d3548dd1cdf1bee0f0b7336ef81526020017f13eec170340214691060425ec67ff3af2c5c0604e83d085046c8c6c71c4aa52c815250815260200160405180604001604052807f1f0dc61eec125fb1bde66254e518e9a79d1a0ba7867a30b828d2563112c8d39281526020017f18ed60098b3d04acaf5cb28ba24d6896b8ccde69119e4fcfae2a62e07826f2088152508152508160600181905250600d67ffffffffffffffff81111561079c5761079b611e1c565b5b6040519080825280602002602001820160405280156107d557816020015b6107c261168a565b8152602001906001900390816107ba5790505b50816080018190525060405180604001604052807f1fe36bd4ac1c05a2022af5d2ae5a77006aed5b05189fbe2cd7b20b159066a49881526020017f18bb72814346c7f9b2bd43231790aa70775021f4baa21453e53d20be716a9e64815250816080015160008151811061084b5761084a611ded565b5b602002602001018190525060405180604001604052807f249eb23abcdab936e775cab760333a001e5b4326e2318c6fa3c5c6d9837acb4281526020017eddc5ba685c051ceb56c3bb0219997847ef7f4651ebaff7ff9372c874aedf4181525081608001516001815181106108c2576108c1611ded565b5b602002602001018190525060405180604001604052807f2bf7eea579422814da4838cc1f8a7fd977a2d467e180b09920502bc5b182909c81526020017f07a292ce50aba35258e00bbb6d55943dd9e43261d95325d2e636bf9d05d0bad9815250816080015160028151811061093a57610939611ded565b5b602002602001018190525060405180604001604052807f18fbf5d7c45cb157ef1b9d005587d66d61200713e1ddfef93171faaf4ed7a03381526020017f06afd00caaed9cf81b98f1bed0d5ba2f0e7b85321833240e885dd7c6f9802e0681525081608001516003815181106109b2576109b1611ded565b5b602002602001018190525060405180604001604052807f29dcf56295e385768e520919fae0f92e569043787a0eb120c609453ef317e43481526020017f17bde5448869bdb60c9c7a987c7412c066e1a0efffdcb48e2dc49e72e26ea4f68152508160800151600481518110610a2a57610a29611ded565b5b602002602001018190525060405180604001604052807f141edc0b5fe583c1657d981ed30ac92927e38902b7619411f736176065ad072481526020017f0a67081a357e36e8dc752412aed7841a311aed7b0c4fa3106952871604eea9238152508160800151600581518110610aa257610aa1611ded565b5b602002602001018190525060405180604001604052807f27224ba3f87fcabdcfb98b4dfa774d18802850c41f13b06c8f1dc0e2321e971981526020017f0d4865869fc7e068d1f4937fdb1209bd1c036a8c9810384a3affc57c9d79fcad8152508160800151600681518110610b1a57610b19611ded565b5b602002602001018190525060405180604001604052807f272ec38a4b238a92633f2885208c8902fe7e2436d4c9437522f9a5845c9c3b0381526020017f24e47d11de758a5b720f7516568854032cf481bcd6ce5b6e42bb08b36dc9b2108152508160800151600781518110610b9257610b91611ded565b5b602002602001018190525060405180604001604052807f11205e9870d54d137b6cd8b8edf090ef56f7c876827999421dadb0b2f62c9bae81526020017f12e490ca029acffd5fb9313c136e74783916a183fa5878bccdff78cfd76c567c8152508160800151600881518110610c0a57610c09611ded565b5b602002602001018190525060405180604001604052807f260bfc75e250166a626916638e6c8b4b74ef3ad0e7a9929e0a6235220cd641c081526020017f148599be049842174d1e696b29a4621dc5a972765449ee9e613966ac0bfcd62d8152508160800151600981518110610c8257610c81611ded565b5b602002602001018190525060405180604001604052807ec72118b647ba35d4610a91de81ecf86378631cc3a06c40bb346794a1ddcb3f81526020017f22370b561cd37bc2e7288ca3f089cd0845f8efc951184b42400f659271ecadda8152508160800151600a81518110610cf957610cf8611ded565b5b602002602001018190525060405180604001604052807f030dcbac42afe82b503c49394a83b0c6e588f5753c9a1315974188bec05c3f5781526020017f108ae9de1f1d0fc44eeeb26153f043e59353d75440e2952a5e54d2dcb19433d28152508160800151600b81518110610d7157610d70611ded565b5b602002602001018190525060405180604001604052807f169644702a0f3bcfc2ec57e26c8b2b93a4e74c4dd5fc9260f2d1dfd076d731ad81526020017f2d5bfff541f0160a259da8e3718d8ebb6ea05d98550157d008f2f04460b2525b8152508160800151600c81518110610de957610de8611ded565b5b602002602001018190525090565b610dff61168a565b610e076116a4565b836000015181600060038110610e2057610e1f611ded565b5b602002018181525050836020015181600160038110610e4257610e41611ded565b5b6020020181815250508281600260038110610e6057610e5f611ded565b5b602002018181525050600060608360808460076107d05a03fa90508060008114610e8957610e8b565bfe5b5080610ecc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec390611aa2565b60405180910390fd5b505092915050565b610edc61168a565b610ee46116c6565b836000015181600060048110610efd57610efc611ded565b5b602002018181525050836020015181600160048110610f1f57610f1e611ded565b5b602002018181525050826000015181600260048110610f4157610f40611ded565b5b602002018181525050826020015181600360048110610f6357610f62611ded565b5b602002018181525050600060608360c08460066107d05a03fa90508060008114610f8c57610f8e565bfe5b5080610fcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc690611b02565b60405180910390fd5b505092915050565b610fdf61168a565b60007f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790506000836000015114801561101c575060008360200151145b15611040576040518060400160405280600081526020016000815250915050611077565b6040518060400160405280846000015181526020018285602001516110659190611d5e565b836110709190611c9a565b8152509150505b919050565b600080600467ffffffffffffffff81111561109a57611099611e1c565b5b6040519080825280602002602001820160405280156110d357816020015b6110c061168a565b8152602001906001900390816110b85790505b5090506000600467ffffffffffffffff8111156110f3576110f2611e1c565b5b60405190808252806020026020018201604052801561112c57816020015b6111196116e8565b8152602001906001900390816111115790505b5090508a8260008151811061114457611143611ded565b5b6020026020010181905250888260018151811061116457611163611ded565b5b6020026020010181905250868260028151811061118457611183611ded565b5b602002602001018190525084826003815181106111a4576111a3611ded565b5b602002602001018190525089816000815181106111c4576111c3611ded565b5b602002602001018190525087816001815181106111e4576111e3611ded565b5b6020026020010181905250858160028151811061120457611203611ded565b5b6020026020010181905250838160038151811061122457611223611ded565b5b60200260200101819052506112398282611249565b9250505098975050505050505050565b6000815183511461128f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161128690611ae2565b60405180910390fd5b60008351905060006006826112a49190611c40565b905060008167ffffffffffffffff8111156112c2576112c1611e1c565b5b6040519080825280602002602001820160405280156112f05781602001602082028036833780820191505090505b50905060005b838110156115755786818151811061131157611310611ded565b5b60200260200101516000015182600060068461132d9190611c40565b6113379190611bea565b8151811061134857611347611ded565b5b60200260200101818152505086818151811061136757611366611ded565b5b6020026020010151602001518260016006846113839190611c40565b61138d9190611bea565b8151811061139e5761139d611ded565b5b6020026020010181815250508581815181106113bd576113bc611ded565b5b6020026020010151600001516000600281106113dc576113db611ded565b5b60200201518260026006846113f19190611c40565b6113fb9190611bea565b8151811061140c5761140b611ded565b5b60200260200101818152505085818151811061142b5761142a611ded565b5b60200260200101516000015160016002811061144a57611449611ded565b5b602002015182600360068461145f9190611c40565b6114699190611bea565b8151811061147a57611479611ded565b5b60200260200101818152505085818151811061149957611498611ded565b5b6020026020010151602001516000600281106114b8576114b7611ded565b5b60200201518260046006846114cd9190611c40565b6114d79190611bea565b815181106114e8576114e7611ded565b5b60200260200101818152505085818151811061150757611506611ded565b5b60200260200101516020015160016002811061152657611525611ded565b5b602002015182600560068461153b9190611c40565b6115459190611bea565b8151811061155657611555611ded565b5b602002602001018181525050808061156d90611d15565b9150506112f6565b5061157e61170e565b6000602082602086026020860160086107d05a03fa905080600081146115a3576115a5565bfe5b50806115e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115dd90611b22565b60405180910390fd5b6000826000600181106115fc576115fb611ded565b5b602002015114159550505050505092915050565b604051806060016040528061162361168a565b81526020016116306116e8565b815260200161163d61168a565b81525090565b6040518060a0016040528061165661168a565b81526020016116636116e8565b81526020016116706116e8565b815260200161167d6116e8565b8152602001606081525090565b604051806040016040528060008152602001600081525090565b6040518060600160405280600390602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b60405180604001604052806116fb611730565b8152602001611708611730565b81525090565b6040518060200160405280600190602082028036833780820191505090505090565b6040518060400160405280600290602082028036833780820191505090505090565b600061176561176084611b67565b611b42565b9050808285604086028201111561177f5761177e611e50565b5b60005b858110156117af578161179588826118dd565b845260208401935060408301925050600181019050611782565b5050509392505050565b60006117cc6117c784611b8d565b611b42565b905080828560208602820111156117e6576117e5611e50565b5b60005b8581101561181657816117fc8882611908565b8452602084019350602083019250506001810190506117e9565b5050509392505050565b600061183361182e84611bb3565b611b42565b9050808285602086028201111561184d5761184c611e50565b5b60005b8581101561187d57816118638882611908565b845260208401935060208301925050600181019050611850565b5050509392505050565b600082601f83011261189c5761189b611e4b565b5b60026118a9848285611752565b91505092915050565b600082601f8301126118c7576118c6611e4b565b5b600c6118d48482856117b9565b91505092915050565b600082601f8301126118f2576118f1611e4b565b5b60026118ff848285611820565b91505092915050565b60008135905061191781611f61565b92915050565b600080600080610280858703121561193857611937611e55565b5b6000611946878288016118dd565b945050604061195787828801611887565b93505060c0611968878288016118dd565b92505061010061197a878288016118b2565b91505092959194509250565b61198f81611cce565b82525050565b60006119a2601283611bd9565b91506119ad82611e6b565b602082019050919050565b60006119c5601283611bd9565b91506119d082611e94565b602082019050919050565b60006119e8601f83611bd9565b91506119f382611ebd565b602082019050919050565b6000611a0b601683611bd9565b9150611a1682611ee6565b602082019050919050565b6000611a2e601283611bd9565b9150611a3982611f0f565b602082019050919050565b6000611a51601583611bd9565b9150611a5c82611f38565b602082019050919050565b6000602082019050611a7c6000830184611986565b92915050565b60006020820190508181036000830152611a9b81611995565b9050919050565b60006020820190508181036000830152611abb816119b8565b9050919050565b60006020820190508181036000830152611adb816119db565b9050919050565b60006020820190508181036000830152611afb816119fe565b9050919050565b60006020820190508181036000830152611b1b81611a21565b9050919050565b60006020820190508181036000830152611b3b81611a44565b9050919050565b6000611b4c611b5d565b9050611b588282611ce4565b919050565b6000604051905090565b600067ffffffffffffffff821115611b8257611b81611e1c565b5b602082029050919050565b600067ffffffffffffffff821115611ba857611ba7611e1c565b5b602082029050919050565b600067ffffffffffffffff821115611bce57611bcd611e1c565b5b602082029050919050565b600082825260208201905092915050565b6000611bf582611cda565b9150611c0083611cda565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c3557611c34611d8f565b5b828201905092915050565b6000611c4b82611cda565b9150611c5683611cda565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c8f57611c8e611d8f565b5b828202905092915050565b6000611ca582611cda565b9150611cb083611cda565b925082821015611cc357611cc2611d8f565b5b828203905092915050565b60008115159050919050565b6000819050919050565b611ced82611e5a565b810181811067ffffffffffffffff82111715611d0c57611d0b611e1c565b5b80604052505050565b6000611d2082611cda565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611d5357611d52611d8f565b5b600182019050919050565b6000611d6982611cda565b9150611d7483611cda565b925082611d8457611d83611dbe565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f76657269666965722d6261642d696e7075740000000000000000000000000000600082015250565b7f70616972696e672d6d756c2d6661696c65640000000000000000000000000000600082015250565b7f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400600082015250565b7f70616972696e672d6c656e677468732d6661696c656400000000000000000000600082015250565b7f70616972696e672d6164642d6661696c65640000000000000000000000000000600082015250565b7f70616972696e672d6f70636f64652d6661696c65640000000000000000000000600082015250565b611f6a81611cda565b8114611f7557600080fd5b5056fea26469706673582212204be58b6256f748a4031db5667d0ae88d4fd6960f6f382ecd8b344444ffd53dd664736f6c63430008050033";

type Verifier20_7ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Verifier20_7ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier20_7__factory extends ContractFactory {
  constructor(...args: Verifier20_7ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Verifier20_7> {
    return super.deploy(overrides || {}) as Promise<Verifier20_7>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Verifier20_7 {
    return super.attach(address) as Verifier20_7;
  }
  override connect(signer: Signer): Verifier20_7__factory {
    return super.connect(signer) as Verifier20_7__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Verifier20_7Interface {
    return new utils.Interface(_abi) as Verifier20_7Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Verifier20_7 {
    return new Contract(address, _abi, signerOrProvider) as Verifier20_7;
  }
}