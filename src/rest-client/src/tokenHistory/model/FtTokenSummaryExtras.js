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
        root.TokenHistoryApi.FtTokenSummaryExtras = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The FtTokenSummaryExtras model module.
     * @class FtTokenSummaryExtras
     * @version 1.0
     */

    /**
     * Constructs a new <code>FtTokenSummaryExtras</code>.
     * @alias FtTokenSummaryExtras
     * @class
     */
    const FtTokenSummaryExtras = function() {}

    /**
     * Constructs a <code>FtTokenSummaryExtras</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FtTokenSummaryExtras} obj Optional instance to populate.
     * @return {FtTokenSummaryExtras} The populated <code>FtTokenSummaryExtras</code> instance.
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new FtTokenSummaryExtras()
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
            if (data.hasOwnProperty('decimals')) obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('totalSupply')) obj.totalSupply = ApiClient.convertToType(data.totalSupply, 'String')
            if (data.hasOwnProperty('formattedValue')) obj.formattedValue = ApiClient.convertToType(data.formattedValue, 'String')
        }
        return obj
    }

    /**
     * Token name
     * @type {String}
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.prototype.name = undefined

    /**
     * Token digits
     * @type {Number}
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.prototype.decimals = undefined

    /**
     * Token symbol
     * @type {String}
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.prototype.symbol = undefined

    /**
     * Total issued amount (in hexadecimal)
     * @type {String}
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.prototype.totalSupply = undefined

    /**
     * Formatted value with contracts `decimals`
     * @type {String}
     * @memberof FtTokenSummaryExtras
     */
    FtTokenSummaryExtras.prototype.formattedValue = undefined

    return FtTokenSummaryExtras
})
