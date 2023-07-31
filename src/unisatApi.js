import { BridgeMessage } from "messagebridge-libertine/src/BridgeMessage"
import { EventEmitter } from "events";
class MathWallet extends EventEmitter{
    /**
     * 初始化
     */
    constructor(){
        super();
        this.setMaxListeners(100);
        this.messageBridge = new BridgeMessage("bitcoin");
    }
    /**
     * Address of current account.
     * @returns {Promise<[string]>} - addressed
     */
    requestAccounts(){
        return this.messageBridge.sendMessage("requestAccounts",null)
    }
    /**
     * Get address of current account
     * @returns {Promise<string>}
     */
    getAccounts(){
        return this.messageBridge.sendMessage("getAccounts",null)
    }
    /**
     * get current network
     * @returns {Promise<string>} - live or test
     */
    getNetwork(){
        return this.messageBridge.sendMessage("getNetwork",null)
    }
    /**
     * switch network
     * @param {string} network - live or test
     * @returns 
     */
    switchNetwork(network){
        return this.messageBridge.sendMessage("switchNetwork",network)
    }
    /**
     * Get publicKey of current account
     * @returns {Promise<string>}
     */ 
    getPublicKey(){
        return this.messageBridge.sendMessage("getPublicKey",null)
    }
    /**
     * Get BTC balance
     * @returns {{"confirmed": 0, "unconfirmed": 0, "total": 0}}}
     */
    getBalance(){
        return this.messageBridge.sendMessage("getBalance",null)
    }
    /**
     * 
     * @param {number} cursor 
     * @param {number} size 
     * @returns {Object}
     */
    getInscriptions(cursor, size){
        return this.messageBridge.sendMessage("getInscriptions",{"cursor":cursor,"size":size})
    }
    /**
     * 
     * @param {string} toAddress 
     * @param {number} satoshis 
     * @param {object} options 
     * @returns {Promise<string>} - txid
     */
    sendBitcoin(toAddress, satoshis, options){
        return this.messageBridge.sendMessage("sendBitcoin",{"toAddress":toAddress,"satoshis":satoshis,"options":options})
    }
    /**
     * Send Inscription
     * @param {string} address - the receiver address
     * @param {string} inscriptionId - the id of Inscription
     * @param {object} [options] - feeRate
     * @param {number} options.feeRate
     * @returns {Promise<string>} - txid
     */
    sendInscription(address, inscriptionId, options){
        return this.messageBridge.sendMessage("sendInscription",{"address":address,"inscriptionId":inscriptionId,"options":options})
    }
    /**
     * 
     * @param {string} msg - a string to sign
     * @param {string} [type] -  (Optional) "ecdsa" | "bip322-simple". default is "ecdsa"
     * @returns {Promise<string>} - the signature.
     */
    signMessage(msg, type){
        return this.messageBridge.sendMessage("signMessage",{"msg":msg,"type":type})
    }
    /**
     * Push Transaction
     * @param {object} options - Object
     * @param {string} options.rawTx - rawtx to push
     * @returns {Promise<string>} - txid
     */
    pushTx(options){
        return this.messageBridge.sendMessage("pushTx",options)
    }
    /**
     * This method will traverse all inputs that match the current address to sign.
     * @param {string} psbtHex - the hex string of psbt to sign
     * @param {string} options 
     * @param {boolean} options.autoFinalized - whether finalize psbt after signing, default is true
     * @returns {Promise<string>} - the hex string of signed psbt
     */
    signPsbt(psbtHex, options){
        return this.messageBridge.sendMessage("signPsbt",{"psbtHex":psbtHex,"options":options})
    }
    /**
     * Sign Multiple PSBTs at once; This method will traverse all inputs that match the current address to sign.
     * @param {[string]} psbtHexs 
     * @param {[object]} options 
     * @returns {Promise<string[]>} - the hex strings of signed psbt
     */
    signPsbts(psbtHexs, options){
        return this.messageBridge.sendMessage("signPsbts",{"psbtHexs":psbtHexs,"options":options})
    }
    /**
     * Push transaction
     * @param {string} psbtHex - the hex string of psbt to push
     * @returns {Promise<string>} - txid
     */
    pushPsbt(psbtHex){
        return this.messageBridge.sendMessage("pushPsbt",psbtHex)
    }
}
const provider = new MathWallet();
// 防修改，但是没有设么用
if (!window.unisat) {
    window.unisat = new Proxy(provider, {
      deleteProperty: () => true
    });
}  
Object.defineProperty(window, 'unisat', {
    value: new Proxy(provider, {
       //不允许修改
      deleteProperty: () => true
    }),
    //
    writable: false
});  
window.dispatchEvent(new Event('unisat#initialized'));
