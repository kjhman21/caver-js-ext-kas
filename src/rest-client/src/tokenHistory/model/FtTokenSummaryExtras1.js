/*
 * Token History API
 * # Introduction  Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA.   For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial).   For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.FtTokenSummaryExtras1 = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The FtTokenSummaryExtras1 model module.
     * @class FtTokenSummaryExtras1
     * @version 1.0
     */

    /**
     * Constructs a new <code>FtTokenSummaryExtras1</code>.
     * @alias FtTokenSummaryExtras1
     * @class
     */
    const FtTokenSummaryExtras1 = function() {}

    /**
     * Constructs a <code>FtTokenSummaryExtras1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FtTokenSummaryExtras1} obj Optional instance to populate.
     * @return {FtTokenSummaryExtras1} The populated <code>FtTokenSummaryExtras1</code> instance.
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new FtTokenSummaryExtras1()
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
            if (data.hasOwnProperty('decimals')) obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('totalSupply')) obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            if (data.hasOwnProperty('formattedValue')) obj.formattedValue = ApiClient.convertToType(data.formattedValue, 'String')
            if (data.hasOwnProperty('tokenId')) obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
            if (data.hasOwnProperty('tokenUri')) obj.tokenUri = ApiClient.convertToType(data.tokenUri, 'String')
        }
        return obj
    }

    /**
     * Token name
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.name = undefined

    /**
     * Token digits
     * @type {Number}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.decimals = undefined

    /**
     * Token symbol
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.symbol = undefined

    /**
     * Total issued amount (in hexadecimal)
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.totalSupply = undefined

    /**
     * Formatted value with contracts `decimals`
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.formattedValue = undefined

    /**
     * Token ID (in hexadecimal)
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.tokenId = undefined

    /**
     * Token URL
     * @type {String}
     * @memberof FtTokenSummaryExtras1
     */
    FtTokenSummaryExtras1.prototype.tokenUri = undefined

    return FtTokenSummaryExtras1
})
