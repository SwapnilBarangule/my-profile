class Vehicle{
    constructor(model,prize,display,mileage,color){

   
    this.model = model;
    this.prize=prize;
    this.display=display;
    this.mileage=mileage;
    this.color=color;
}
show(){
    console.log(`vehicle model is:${this.model}, prize is:${this.prize},
                 display:${this.display},mileage;${this.mileage},color is:${this.color}`);
}
}
let vehicle1=new Vehicle("TATA Nexon","900CC","Digital","20km/hr","White");
let vehicle2=new Vehicle("Brezza ","950CC","Digital","22km/hr","Greay");
let vehicle3=new Vehicle("Baleno","1000CC","Digital","23km/hr","Red");
let vehicle4=new Vehicle("Sonet","1150CC","Digital","18km/hr","Black");

let array =[vehicle1,vehicle2,vehicle3,vehicle4]
console.log(`traverse an array`);
for (const Vehicle of array) {
    Vehicle.show();
}
console.log(`************************Step 2************************`);

class College{

    constructor(collegeName,collegeUniversity,collegeLocation,collegeGrade){
        this.collegeName=collegeName;
        this.collegeUniversity=collegeUniversity;
        this.collegeLocation=collegeLocation;
        this.collegeGrade=collegeGrade;
    }
    display(){
        console.log(`college details:collge name:${this.collegeName},
        university:${this.collegeUniversity},place:${this.collegeLocation},grade:${this.collegeGrade}`);
    }
}

    let college1= new College("JSPM NTC","SPPU", "Narhe","A++");
    let college2= new College("MIT","SPPU", "Kothrud","A");

    let college3= new College("PCCOE","SPPU", "Akurdi","A++");

    college1.display();
    college2.display();
    college3.display();


    
