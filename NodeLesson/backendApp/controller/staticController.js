import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const writeLogFile=(content)=>{
console.log("content", content)
    const targetPath = join(__dirname, '', 'post_logs.txt')

    fs.writeFile(targetPath, JSON.stringify(content), err => {
        if (err) throw err
        console.log("file written to project")

        //erweitern der bestehenden datei test.txt mit neuem daten kontent
        fs.appendFile(targetPath, `\n\n ${JSON.stringify(content)}`, err => {
            if (err) throw err
            console.log("appended text")
        })
    })
}