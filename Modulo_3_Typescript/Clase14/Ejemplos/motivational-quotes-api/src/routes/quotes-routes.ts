import {Router} from 'express'

import {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
} from '../controllers/quotes-controllers'

import {validateQuote} from '../middlewares/validate-middleware'

const router: Router = Router()
// creo una instancia del enrutador de express

// RUTAS
router.get('/', getAllQuotes)
router.get('/:id', getQuoteById)
router.post('/', createQuote)
router.patch('/:id', updateQuote)
router.delete('/:id', deleteQuote)

export default router




