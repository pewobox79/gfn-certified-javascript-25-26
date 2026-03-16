import express from 'express'
import { addNewStudent, deleteStudentByName, getStudentList } from '../controller/students.js'
const router = express.Router()

router
    .get('/', getStudentList)
    .post('/', addNewStudent)
    .delete('/', deleteStudentByName)
    .delete('/:name', deleteStudentByName)

export default router