import TransactionProvider from './transaction_provider'
import AttachmentProvider from './attachment_provider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/person
export const TransactionService = new TransactionProvider('transaction')
export const AttachmentService = new AttachmentProvider('attachment')
