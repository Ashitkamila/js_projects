var employee = new Object;
employee.idNo =2510;
employee.salary =50000;
employee.designation ='Senior Engineer';

employee.employeeDetails=function(){
    return`idNo=${this.idNo},salary=${this.salary},designation${this.designation}`
}
console.log(employee);
console.log(employee.employeeDetails());

var laptop=new Object;
    laptop.brand='HP';
    laptop.model='Pavilion';
    laptop.size='15Inch',
    laptop.resolution='fullHD';

    laptop.laptopDetails=function(){
        return`brand=${this.brand},model=${this.model},size=${this.size},resolution=${this.resolution}`  
    }
console.log(laptop);
console.log(laptop.laptopDetails());

var footballPlayer=new Object;
    footballPlayer.name='Ronaldo';
    footballPlayer.jerseyNo='7';
    footballPlayer.isAdefender=false;
    footballPlayer.goals=500;

    footballPlayer.footballPlayerdetails=function(){
        return`name=${this.name},jerseyNo=${this.jerseyNo},isAdefender${this.isAdefender},goals=${this.goals}`
    }
    console.log(footballPlayer);
    console.log(footballPlayer.footballPlayerdetails());

    var person1=new Object;
        person1.name='Salman';
        person1.age=25;
        person1.height='180CM';
        person1.weight='75KG';
    
        person1.person1details=function(){
            return`name=${this.name},age=${this.age},height=${this.height},weight=${this.weight}`
        }
    console.log(person1);
    console.log(person1.person1details());

     var car =new Object;
     car.brand='Audi';
     car.model='Audi-A4';
     car.price='50Lac';
     car.color='red';

     car.cardetails=function(){
         return`brand=${this.brand},model=${this.model},price=${this.price},color${this,color}`
     }
     console.log(car);
     console.log(car.cardetails());