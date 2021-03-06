/*
 * Wallet API
 * # Introduction Wallet API is an API for creating and managing Klaytn accounts as well as sending transactions. If you create your Klaytn account using Wallet API, you don't have to manage your private key yourself. Wallet API provides a wallet for safe storage of your Klaytn account private keys that you would need to use BApps. For more details on how to use Wallet API, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial). Wallet API can be divided into the Account part, which creates and manages Klaytn accounts, and the Transaction part, which sends different kinds of transactions. Wallet API creates, deletes and monitors Klaytn accounts and updates the accounts to multisig, and manages all private keys for all accounts registered on KAS. Wallet API can also create transaction to send it to Klaytn. These include transactions sent from multisig accounts. In case of muiltisig accounts, a transaction will automatically be sent to Klaytn once \\(Threshold\\) is met. For more detail, please refer to this [tutorial](https://docs.klaytnapi.com/v/en/tutorial). There are mainly two types of transactions: basic transactions and fee delegation transactions. Fee delegation transactions include Global Fee Delegation transaction and user fee deletation transaction. With the Global Fee Delegation transaction scheme, the transaction fee will initially be paid by GroundX and then be charged to you at a later date. With the User Fee Delegation transaction scheme, you create an account that pays the transaction fees on behalf of the users when a transaction. The functionalities and limits of Wallet API are shown below: | Version | Item | Description | | :--- | :--- | :--- | | 2.0 | Limits | Supports Cypress(Mainnet), Baobab(Testnet) \\ Doesn't support (Service Chain \\) | |  |  | Doesn't support account management for external custodial keys | |  |  | Doesn't support multisig for RLP encoded transactions | |  | Account management | Create, retrieve and delete account | |  |  | Multisig account update | |  | Managing transaction | [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic) creating and sending transaction | |  |  | [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation) creating and sending transaction | |  |  | RLP encoded transaction\\([Legacy](https://ko.docs.klaytn.com/klaytn/design/transactions/basic#txtypelegacytransaction), [Basic](https://ko.docs.klaytn.com/klaytn/design/transactions/basic), [FeeDelegatedWithRatio](https://ko.docs.klaytn.com/klaytn/design/transactions/partial-fee-delegation)\\) creating and sending | |  |  | Managing and sending multisig transactions | |  | Administrator | Manage resource pool\\(create, query pool, delete, retrieve account \\) | # Error Codes ## 400: Bad Request  | Code | Messages |   | --- | --- |   | 1061010 | data don't exist</br>data don't exist; krn:1001:wallet:68ec0e4b-0f61-4e6f-ae35-be865ab23187:account-pool:default:0x9b2f4d85d7f7abb14db229b5a81f1bdca0aa24c8ff0c4c100b3f25098b7a6152 1061510 | account has been already deleted or disabled 1061511 | account has been already deleted or enabled 1061512 | account is invalid to sign the transaction; 0x18925BDD724614bF13Bd5d53a74adFd228903796</br>account is invalid to sign the transaction; 0x6d06e7cA9F26d6D30B3b4Dff6084E74C51908fef 1061515 | the requested account must be a legacy account; if the account is multisig account, use `PUT /v2/tx/{fd|fd-user}/account` API for multisig transaction and /v2/multisig/_**_/_** APIs 1061607 | it has to start with '0x' and allows [0-9a-fA-F]; input</br>it has to start with '0x' and allows [0-9a-fA-F]; transaction-id 1061608 | cannot be empty or zero value; to</br>cannot be empty or zero value; keyId</br>cannot be empty or zero value; address 1061609 | it just allow Klaytn address form; to 1061615 | its value is out of range; size 1061616 | fee ratio must be between 1 and 99; feeRatio 1061903 | failed to decode account keys; runtime error: slice bounds out of range [:64] with length 4 1061905 | failed to get feepayer 1061912 | rlp value and request value are not same; feeRatio</br>rlp value and request value are not same; feePayer 1061914 | already submitted transaction. Confirm transaction hash; 0x6f2e9235a48a86c3a7912b4237f83e760609c7ca609bbccbf648c8617a3a980c</br>already submitted transaction. Confirm transaction hash; 0xfb1fae863da42bcefdde3d572404bf5fcb89c1809e9253d5fff7c07a4bb5210f 1061917 | AccountKeyLegacy type is not supported in AccountKeyRoleBased type 1061918 | it just allow (Partial)FeeDelegation transaction type 1061919 | PartialFeeDelegation transaction must set fee ratio to non-zero value 1061920 | FeeDelegation transaction cannot set fee ratio, use PartialFeeDelegation transaction type 1061921 | it just allow Basic transaction type 1065000 | failed to retrieve a transaction from klaytn node 1065001 | failed to send a raw transaction to klaytn node; -32000::insufficient funds of the sender for value </br>failed to send a raw transaction to klaytn node; -32000::not a program account (e.g., an account having code and storage)</br>failed to send a raw transaction to klaytn node; -32000::nonce too low</br>failed to send a raw transaction to klaytn node; -32000::insufficient funds of the fee payer for gas * price 1065100 | failed to get an account</br>failed to get an account; data don't exist</br>failed to get an account; account key corrupted. can not use this account 1065102 | account key corrupted. can not use this account |
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
        define([
            '../../ApiClient',
            '../model/AccountUpdateTransactionRequest',
            '../model/AnchorTransactionRequest',
            '../model/CancelTransactionRequest',
            '../model/ContractCallRequest',
            '../model/ContractCallResponse',
            '../model/ContractDeployTransactionRequest',
            '../model/ContractExecutionTransactionRequest',
            '../model/ErrorResponse',
            '../model/LegacyTransactionRequest',
            '../model/ProcessRLPRequest',
            '../model/TransactionReceipt',
            '../model/TransactionResult',
            '../model/ValueTransferTransactionRequest',
        ], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(
            require('../../ApiClient'),
            require('../model/AccountUpdateTransactionRequest'),
            require('../model/AnchorTransactionRequest'),
            require('../model/CancelTransactionRequest'),
            require('../model/ContractCallRequest'),
            require('../model/ContractCallResponse'),
            require('../model/ContractDeployTransactionRequest'),
            require('../model/ContractExecutionTransactionRequest'),
            require('../model/ErrorResponse'),
            require('../model/LegacyTransactionRequest'),
            require('../model/ProcessRLPRequest'),
            require('../model/TransactionReceipt'),
            require('../model/TransactionResult'),
            require('../model/ValueTransferTransactionRequest')
        )
    } else {
        // Browser globals (root is window)
        if (!root.WalletApi) {
            root.WalletApi = {}
        }
        root.WalletApi.BasicTransactionApi = factory(
            root.WalletApi.ApiClient,
            root.WalletApi.AccountUpdateTransactionRequest,
            root.WalletApi.AnchorTransactionRequest,
            root.WalletApi.CancelTransactionRequest,
            root.WalletApi.ContractCallRequest,
            root.WalletApi.ContractCallResponse,
            root.WalletApi.ContractDeployTransactionRequest,
            root.WalletApi.ContractExecutionTransactionRequest,
            root.WalletApi.ErrorResponse,
            root.WalletApi.LegacyTransactionRequest,
            root.WalletApi.ProcessRLPRequest,
            root.WalletApi.TransactionReceipt,
            root.WalletApi.TransactionResult,
            root.WalletApi.ValueTransferTransactionRequest
        )
    }
})(this, function(
    ApiClient,
    AccountUpdateTransactionRequest,
    AnchorTransactionRequest,
    CancelTransactionRequest,
    ContractCallRequest,
    ContractCallResponse,
    ContractDeployTransactionRequest,
    ContractExecutionTransactionRequest,
    ErrorResponse,
    LegacyTransactionRequest,
    ProcessRLPRequest,
    TransactionReceipt,
    TransactionResult,
    ValueTransferTransactionRequest
) {
    /**
     * BasicTransaction service.
     * @class BasicTransactionApi
     * @version 1.0
     */

    /**
     * Constructs a new BasicTransactionApi.
     * @alias BasicTransactionApi
     * @class
     * @param {ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link ApiClient#instance} if unspecified.
     */
    const BasicTransactionApi = function(apiClient) {
        this.apiClient = apiClient || ApiClient.instance

        /**
         * Callback function to receive the result of the accountUpdateTransaction operation.
         * @callback BasicTransactionApi~accountUpdateTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * AccountUpdateTransaction
         * Create a transaction that updates Klaytn account keys. You can find Klaytn account key types in [Accounts](https://ko.docs.klaytn.com/klaytn/design/accounts).<p></p> If you update the account to Legacy key type (1), you can start using your account once it is enabled. If you update the account to Public key type (2), the account cannot be used within the wallet. To restore your account, use Global Fee Delegation RLP API, or update to legacy externally and before enabling the account. If you update the key to Fail key type (3), the account will automatically be disabled.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {AccountUpdateTransactionRequest} opts.body
         * @param {BasicTransactionApi~accountUpdateTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.accountUpdateTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling accountUpdateTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/account',
                'PUT',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the anchorTransaction operation.
         * @callback BasicTransactionApi~anchorTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * AnchorTransaction
         * Create a transaction for anchoring service chain data to Klaytn main chain.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {AnchorTransactionRequest} opts.body
         * @param {BasicTransactionApi~anchorTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.anchorTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling anchorTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/anchor',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the cancelTransaction operation.
         * @callback BasicTransactionApi~cancelTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * CancelTransaction
         * Create a transaction for cancelling a pending transaction that had been sent to Klaytn with the KAS global fee payer account. To cancel, you need either the nonce or the transaction hash.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {CancelTransactionRequest} opts.body
         * @param {BasicTransactionApi~cancelTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.cancelTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling cancelTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx',
                'DELETE',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the contractCall operation.
         * @callback BasicTransactionApi~contractCallCallback
         * @param {String} error Error message, if any.
         * @param {ContractCallResponse} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * ContractCall
         * Can parse data within the deloyed contract or decide whether the transaction can be executed.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {ContractCallRequest} opts.body
         * @param {BasicTransactionApi~contractCallCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link ContractCallResponse}
         */
        this.contractCall = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling contractCall")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = ContractCallResponse

            return this.apiClient.callApi(
                '/v2/tx/contract/call',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the contractDeployTransaction operation.
         * @callback BasicTransactionApi~contractDeployTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * ContractDeployTransaction
         * Create a transaction for deploying a contract.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {ContractDeployTransactionRequest} opts.body
         * @param {BasicTransactionApi~contractDeployTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.contractDeployTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling contractDeployTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/contract/deploy',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the contractExecutionTransaction operation.
         * @callback BasicTransactionApi~contractExecutionTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * ContractExecutionTransaction
         * Create a transaction for executing the function of a deployed contract.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {ContractExecutionTransactionRequest} opts.body
         * @param {BasicTransactionApi~contractExecutionTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.contractExecutionTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling contractExecutionTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/contract/execute',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the legacyTransaction operation.
         * @callback BasicTransactionApi~legacyTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * LegacyTransaction
         * Create a transaction that supports the legacy account (for which the public key is derived from the private key) and transaction formats. All newly created Klaytn accounts on KAS are legacy accounts.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {LegacyTransactionRequest} opts.body
         * @param {BasicTransactionApi~legacyTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.legacyTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling legacyTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/legacy',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the processRLP operation.
         * @callback BasicTransactionApi~processRLPCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * ProcessRLP
         * Create transaction using rlp (SigRLP or TxHashRLP). The rlp from the transaction API of Wallet API is in the TxHashRLP format, which includes signature.  You can create a SigRLP without signature easily using caver.<p></p> If you want to create a SigRLP for each transaction method on caver, use `getRLPEncodingForSignature()`, and `getRLPEncoding()` to create TxHashRLP. For SigRLP, you sign with the private key of the `from` account, as long as the accounts have been created in the account pool. For more details on SigRLP and TxHashRLP by each transaction type, please refer to [Klaytn Docs](https://docs.klaytn.com/klaytn/design/transactions).
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {ProcessRLPRequest} opts.body
         * @param {BasicTransactionApi~processRLPCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.processRLP = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling processRLP")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/rlp',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the transactionReceipt operation.
         * @callback BasicTransactionApi~transactionReceiptCallback
         * @param {String} error Error message, if any.
         * @param {TransactionReceipt} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * TransactionReceipt
         * Retrieve transaction result with transaction hash value. You can find out whether the transaction was successful by checking the `status` field in the response.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {String} transactionHash Transaction hash value
         * @param {BasicTransactionApi~transactionReceiptCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionReceipt}
         */
        this.transactionReceipt = function(xChainId, transactionHash, callback) {
            const postBody = null

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling transactionReceipt")
            }

            // verify the required parameter 'transactionHash' is set
            if (transactionHash === undefined || transactionHash === null) {
                throw new Error("Missing the required parameter 'transactionHash' when calling transactionReceipt")
            }

            const pathParams = {
                'transaction-hash': transactionHash,
            }
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionReceipt

            return this.apiClient.callApi(
                '/v2/tx/{transaction-hash}',
                'GET',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }

        /**
         * Callback function to receive the result of the valueTransferTransaction operation.
         * @callback BasicTransactionApi~valueTransferTransactionCallback
         * @param {String} error Error message, if any.
         * @param {TransactionResult} data The data returned by the service call.
         * @param {String} response The complete HTTP response.
         */

        /**
         * ValueTransferTransaction
         * Create a transaction for KLAY transfers with/without memos.
         * @param {String} xChainId Klaytn Chain Network ID (1001 or 8217)
         * @param {Object} opts Optional parameters
         * @param {ValueTransferTransactionRequest} opts.body
         * @param {BasicTransactionApi~valueTransferTransactionCallback} callback The callback function, accepting three arguments: error, data, response
         * data is of type: {@link TransactionResult}
         */
        this.valueTransferTransaction = function(xChainId, opts, callback) {
            opts = opts || {}
            const postBody = opts.body

            // verify the required parameter 'xChainId' is set
            if (xChainId === undefined || xChainId === null) {
                throw new Error("Missing the required parameter 'xChainId' when calling valueTransferTransaction")
            }

            const pathParams = {}
            const queryParams = {}
            const collectionQueryParams = {}
            const headerParams = {
                'x-chain-id': xChainId,
            }
            const formParams = {}

            const authNames = ['auth']
            const contentTypes = ['application/json']
            const accepts = ['application/json']
            const returnType = TransactionResult

            return this.apiClient.callApi(
                '/v2/tx/value',
                'POST',
                pathParams,
                queryParams,
                collectionQueryParams,
                headerParams,
                formParams,
                postBody,
                authNames,
                contentTypes,
                accepts,
                returnType,
                callback
            )
        }
    }

    return BasicTransactionApi
})
