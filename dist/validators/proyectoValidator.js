"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// Validación para crear o actualizar un proyecto
exports.projectSchema = joi_1.default.object({
    nombre_proyecto: joi_1.default.string()
        .min(3)
        .required()
        .messages({
        'string.base': 'El nombre del proyecto debe ser un texto.',
        'string.empty': 'El nombre del proyecto no puede estar vacío.',
        'string.min': 'El nombre del proyecto debe tener al menos 3 caracteres.',
        'any.required': 'El nombre del proyecto es obligatorio.',
    }),
    descripcion_proyecto: joi_1.default.string()
        .min(10)
        .optional()
        .messages({
        'string.base': 'La descripción del proyecto debe ser un texto.',
        'string.min': 'La descripción del proyecto debe tener al menos 10 caracteres.',
    }),
});
//# sourceMappingURL=proyectoValidator.js.map