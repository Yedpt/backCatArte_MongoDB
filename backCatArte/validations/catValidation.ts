import { check, param } from 'express-validator';

export const validateCreateMeme = [
  check('name').notEmpty().withMessage('El nombre es obligatorio'),
  check('description').notEmpty().withMessage('La descripción es obligatoria'),
  check('category').notEmpty().withMessage('La categoría es obligatoria'),
  check('image').matches(/^(https?:\/\/|\/)/).withMessage('La imagen debe ser una URL válida o una ruta local'),
  check('date').optional().isISO8601().withMessage('La fecha debe ser una fecha válida'),
  check('likes').isInt({ min: 0 }).withMessage('Los likes deben ser un número entero positivo'),
];

export const validateUpdateMeme = [
  param('id').isInt().withMessage('El ID debe ser un número entero'),
  check('name').optional().notEmpty().withMessage('El nombre es obligatorio'),
  check('description').optional().notEmpty().withMessage('La descripción es obligatoria'),
  check('category').optional().notEmpty().withMessage('La categoría es obligatoria'),
  check('image').optional().matches(/^(https?:\/\/|\/)/).withMessage('La imagen debe ser una URL válida o una ruta local'),
  check('date').optional().isISO8601().withMessage('La fecha debe ser una fecha válida'),
  check('likes').optional().isInt({ min: 0 }).withMessage('Los likes deben ser un número entero positivo'),
];

export const validateDeleteMeme = [
  param('id').isInt().withMessage('El ID debe ser un número entero'),
];

