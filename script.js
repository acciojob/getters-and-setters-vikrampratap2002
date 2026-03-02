//complete this code
class Person {
	constructor(name,age){
        this.name = name;
		this.age = age;
	}

	get name(){
                    return this.name;
	}
	get age(){
                    return this.age;
	}

	set age(value){
             this.age = value;
	}
	set name(value){
             this.name = value;
	}
}

class Student extends Person {
	study(){
            console.log(`${name} is studing`);
	}
}

class Teacher extends Person {
	teach(){
            console.log(`${name} is teaching`);
	 }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
