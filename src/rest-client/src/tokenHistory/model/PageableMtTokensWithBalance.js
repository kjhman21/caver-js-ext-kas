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
        define(['../../ApiClient', '../model/MtToken'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./MtToken'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.PageableMtTokensWithBalance = factory(root.TokenHistoryApi.ApiClient, root.TokenHistoryApi.MtToken)
    }
})(this, function(ApiClient, MtToken) {
    /**
     * The PageableMtTokensWithBalance model module.
     * @class PageableMtTokensWithBalance
     * @version 1.0
     */

    /**
     * Constructs a new <code>PageableMtTokensWithBalance</code>.
     * @alias PageableMtTokensWithBalance
     * @class
     * @param items {Array.<MtToken>}
     * @param totalBalance {String} Total balance of tokens by EOA
     * @param cursor {String} Next page cursor
     */
    const PageableMtTokensWithBalance = function(items, totalBalance, cursor) {
        this.items = items
        this.totalBalance = totalBalance
        this.cursor = cursor
    }

    /**
     * Constructs a <code>PageableMtTokensWithBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {PageableMtTokensWithBalance} obj Optional instance to populate.
     * @return {PageableMtTokensWithBalance} The populated <code>PageableMtTokensWithBalance</code> instance.
     * @memberof PageableMtTokensWithBalance
     */
    PageableMtTokensWithBalance.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new PageableMtTokensWithBalance()
            if (data.hasOwnProperty('items')) obj.items = ApiClient.convertToType(data.items, [MtToken])
            if (data.hasOwnProperty('totalBalance')) obj.totalBalance = ApiClient.convertToType(data.totalBalance, 'String')
            if (data.hasOwnProperty('cursor')) obj.cursor = ApiClient.convertToType(data.cursor, 'String')
        }
        return obj
    }

    /**
     * @type {Array.<MtToken>}
     * @memberof PageableMtTokensWithBalance
     */
    PageableMtTokensWithBalance.prototype.items = undefined

    /**
     * Total balance of tokens by EOA
     * @type {String}
     * @memberof PageableMtTokensWithBalance
     */
    PageableMtTokensWithBalance.prototype.totalBalance = undefined

    /**
     * Next page cursor
     * @type {String}
     * @memberof PageableMtTokensWithBalance
     */
    PageableMtTokensWithBalance.prototype.cursor = undefined

    return PageableMtTokensWithBalance
})
