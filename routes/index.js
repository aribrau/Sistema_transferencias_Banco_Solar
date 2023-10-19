import express from 'express';
//importamos los controllers del usuario desde usuariosController.js
import { crearUsuario, obtenerUsuarios, actualizarUsuario, borrarUsuario } from '../controller/usuariosController.js';
//importamos los controllers de transferencia desde transferenciasController.js
import { crearTransferencia, obtenerTransferencias } from '../controller/transferenciasController.js';


const router = express.Router();

//ruta para crear usuario
router.post('/usuario', crearUsuario );
//ruta para obtener todos los usuarios
router.get('/usuarios', obtenerUsuarios);
//ruta para actualizar usuario usando el id como argumento en la url
router.put('/usuario/:id', actualizarUsuario);
//ruta para eliminar un usuario usando el id como argumento en la url
router.delete('/usuario/:id', borrarUsuario);
//ruta para hacer una nueva trasnferencia
router.post('/transferencia', crearTransferencia);
//ruta para obtener el historial de transferencias
router.get('/transferencias', obtenerTransferencias);

export default router;