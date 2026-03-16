import { myStudentsArray } from "../db/studentsdb.js"

export const getStudentList = (req, res) => {
    res.send({ msg: "hier die liste aller studenten", data: myStudentsArray })
}

export const addNewStudent = (req, res) => {
    const { data } = req.body
    if (!data) {
        return res.send({ msg: "Data fehlt" })
    }
    myStudentsArray.push(data)
    res.send({ msg: "Neuer Student wurde registriert", data })
}

export const deleteStudentByName = (req, res) => {

    const param = req?.params;
    const body = req?.body;

    if (!body?.data && !param.name) {
        return res.send({
            msg: "Studenten Datei nicht vollständig. Löschen nicht möglich",
            expected: "name"
        })
    }

    
    const useValue = param.name ? param.name : body?.data?.name
    //nach namen suchen und löschen aus dem array.
    const indexStudent = myStudentsArray.findIndex((student) => student.name === useValue)
    if (indexStudent === -1) {
        return res.send({ msg: "Student konnte nicht gefunden werden! " })
    }
    myStudentsArray.splice(indexStudent, 1)
    res.send({ msg: "Student wurde exmatrikuliert", data: useValue })
}