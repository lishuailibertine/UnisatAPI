import { EventEmitter } from 'events';
import {BridgeMessage} from "bridgemessage";

export class MathWalletProvider extends EventEmitter {
  private messageBridge: BridgeMessage;
  constructor() {
    super();
    this.messageBridge = new BridgeMessage("bitcoin");
    this.setMaxListeners(100);
  }
  /**
   * 
   * @returns {Promise<string>}
   */
  requestAccounts = async () => {
    return this.messageBridge.sendMessage("requestAccounts", null); 
  }
  /**
   * 
   * @returns 
   */
  getAccounts = async () => {
    return this.messageBridge.sendMessage("getAccounts", null);
  }
  /**
   * 
   * @returns 
   */
  getNetwork = async () => {
    return this.messageBridge.sendMessage("getNetwork", null);
  }
  /**
   * 
   * @param network 
   * @returns 
   */
  switchNetwork = async (network: string) => {
    return this.messageBridge.sendMessage("switchNetwork", network);
  }
  /**
   * 
   * @returns 
   */
  getPublicKey = async () => {
    return this.messageBridge.sendMessage("getPublicKey", null);
  }
  /**
   * 
   * @returns 
   */
  getBalance = async () => {
    return this.messageBridge.sendMessage("getBalance", null);
  }
  /**
   * 
   * @param cursor 
   * @param size 
   * @returns 
   */
  getInscriptions = async (cursor: number, size: number) => {
    return this.messageBridge.sendMessage("getInscriptions", {"cursor":cursor,"size":size});
  }

  /**
   * 
   * @param toAddress 
   * @param satoshis 
   * @param options 
   * @returns 
   */
  sendBitcoin = async (toAddress: string, satoshis: number, options?: { feeRate: number }) => {
    return this.messageBridge.sendMessage("sendBitcoin", {"toAddress":toAddress,"satoshis":satoshis,"options":options});
  };
  /**
   * 
   * @param toAddress 
   * @param inscriptionId 
   * @param options 
   * @returns 
   */
  sendInscription = async (toAddress: string, inscriptionId: string, options?: { feeRate: number }) => {
    return this.messageBridge.sendMessage("sendInscription", {"toAddress":toAddress,"inscriptionId":inscriptionId,"options":options});
  };

  /**
   * 
   * @param msg 
   * @param type 
   * @returns 
   */
  signMessage = async (msg: string, type?: string) => {
    return this.messageBridge.sendMessage("signMessage", {"msg":msg,"type":type});
  }
  /**
   * 
   * @param options 
   * @returns 
   */
  pushTx = async (options:{rawtx: string}) => {
    return this.messageBridge.sendMessage("pushTx", options);
  }
  /**
   * 
   * @param psbtHex 
   * @param options 
   * @returns 
   */
  signPsbt = async (psbtHex: string,options:{autoFinalized: boolean} ) => {
    return this.messageBridge.sendMessage("signPsbt", {"psbtHex":psbtHex,"options":options});
  }
  /**
   * 
   * @param psbtHex 
   * @param options 
   * @returns 
   */
  signPsbts = async (psbtHex: string[],options:[{autoFinalized: boolean}]) => {
    return this.messageBridge.sendMessage("signPsbts", {"psbtHex":psbtHex,"options":options});
  }
  /**
   * 
   * @param psbtHex 
   * @returns 
   */
  pushPsbt = async (psbtHex: string) => {
    return this.messageBridge.sendMessage("pushPsbt", psbtHex);
  }
}

declare global {
  interface Window {
    unisat: MathWalletProvider;
  }
}

const provider = new MathWalletProvider();
if (!window.unisat) {
  window.unisat = new Proxy(provider, {
    deleteProperty: () => true
  });
}

Object.defineProperty(window, 'unisat', {
  value: new Proxy(provider, {
    deleteProperty: () => true
  }),
  writable: false
});

window.dispatchEvent(new Event('unisat#initialized'));
