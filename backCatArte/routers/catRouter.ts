import { Router } from 'express';
import { deleteMeme, getAllMemes, createMeme, putMeme } from '../controllers/catController';
import { validateCreateMeme, validateUpdateMeme, validateDeleteMeme } from '../validations/catValidation';
import { validationHandler } from '../handle/handleValidator';

export const router = Router();

router.get('/', getAllMemes);
router.post('/', validateCreateMeme, validationHandler, createMeme);
router.delete('/:id', validateDeleteMeme, validationHandler, deleteMeme);
router.put('/:id', validateUpdateMeme, validationHandler, putMeme);

