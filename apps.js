var friendsArray = ['Kevin', 'Michael', 'Luke', 'Chase', 'Taylor']
var locationArray = ['Kitchen', 'Lobby', 'Study', 'Bedroom', 'Bathroom', 'Outside', 'Garage', 'Porch', 'Roof', 'Basement']
var weaponsArray = ['Knife', 'Gun', 'Sword', 'Scissors', 'Bat', 'Stapler', 'Shoe', 'Paper', 'Pickle', 'Mug', 'Keys', 'Credit Card', 'Post it note', 'baby', 'wheel', 'spoon', 'fork', 'glasses', 'phone', 'chair']

for (var i = 0; i < 101; i++) {
    createAlert(i);
};
function createAlert(i) {
    var h3 = $(`<h3> Accusation ${i+1}<div> id = ${i+1}</div></h3`)

    $(h3).appendTo(document.body)

    h3.click (function (){
    var f = friends[i % 5]
    var w = weapons[i % 20]
    var l = locations[i % 10]
    return alert(`Accusation ${i}: I accuse ${f}, in ${l}, with ${w}.`)
    console.log(i)
    console.log(f)
    console.log(l)
    console.log(w)
})
} 


// Example of modulus from Luke
// for(var i = 0; i < 101; i++) {
//     console.log("This is i: " + i);
//     console.log("This is i % 5: " + (i % 5));
// }