var display = new Date()
console.log(display);

var fullDate =display.toLocaleDateString("ori-IN",{
    weekday:'short',
    month:'short',
    day: 'numeric',
    year: 'numeric',
})
console.log(fullDate);