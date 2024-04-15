import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)


export class Database {
    #database = {}
    
    constructor(){
        fs.readFile(databasePath, 'utf8')
        .then(data => {  
            this.#database = JSON.parse(data) //quando ele terminar de ler o arquivo ele vai transformar o arquivo em um objeto
        })
        .catch(() => { //No caso desse arquivo não existir ele vai criar um arquivo vazio
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database))
    }

    select(table){
        const data = this.#database[table] ?? []

        return data
    }

    insert (table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#persist()
        return data
    }

    delete (table, id) {
        const rowIndex = this.#database[table].findIndex(row => row.id == id)

        if (rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }
}