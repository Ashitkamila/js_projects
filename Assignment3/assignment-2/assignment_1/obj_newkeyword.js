var plane={
    brand:'Airboss',
    height:'50ft',
    width:'200ft',
    color:'white',
    planeDetails:function(){
     return `brand=${this.brand},height=${this.height},width=${this.width},color${this.color}`
    }
    
}
console.log(plane.planeDetails());

var truck={
    brand:'Ashokleyland',
    height:'20ft',
    width:'100ft',
    milege:'20KM',
    truckDetails:function(){
     
        return`brand=${this.brand},height=${this.height},width=${this.width},milege=${this.milege}`
    }
}
console.log(truck.truckDetails());

var person={
    name:'Ashit',
    age: 25,
    height:'170CM',
    weight:'70KG',

    personDetails:function(){
        return`name=${this.name},age=${this.age},height=${this.height},weight=${this.weight}`
    }
}
console.log(person.personDetails());
var person1={
    name:'Salman',
    age: 25,
    height:'180CM',
    weight:'75KG',

    person1Details:function(){
        return`name=${this.name},age=${this.age},height=${this.height},weight=${this.weight}`
    }
}
console.log(person1.person1Details());
var television={
    brand:'Sony',
    model:'Bravia',
    size:'80CM',
    resolution:'1366Pixel',
    televisionDetails:function(){
        return`brand=${this.brand},model=${this.model},size=${this.size},resolution=${this.resolution}`  
    }
}
console.log(television.televisionDetails());