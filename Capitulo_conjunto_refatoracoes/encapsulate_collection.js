// Encapsular coleção (Encapsulate Coolection)

class Person {
    #name
    #courses 

    constructor(name){
        this.#name = name
        this.#courses = []
    }

    get name() {
        return this.#name
    }

    get courses() {
        return this.#courses
    }

    // Antes
    // Aplicar remover método de escrita
    // set courses(aList){
    //     this.#courses = aList
    // }

    // Depois
    addCourse(aCourse){
        this.#courses.push(aCourse)
    }

    removeCourse(aCourse){
        const index = this.#courses.indexOf(aCourse)
        if(index === -1) throw new RangeError()
        else this.#courses.splice(index, 1)
    }
}

class Course {
    #name
    #isAdvanced

    constructor(name, isAdvanced){
        this.#name = name
        this.#isAdvanced = isAdvanced
    }

    get name(){
        return this.#name
    }

    get isAdvanced(){
        return this.#isAdvanced
    }
}