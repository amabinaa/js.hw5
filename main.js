//a
let users = {}

for (let i = 1; i<10; i++) {
    let name = prompt ("Enter your name")
    let age= +prompt(" Enter your age")
    console.log('пользователь ' + i );
    console.log("ваше имя " + name);
    console.log("ваше возраст " + age);
    
    
    users[i] = {
        name,
        age
    }
    

}
console.log(users);

//b
let product = receipt()
console.log(product);

let text= "Вы заказали "
let delivery = 9000
for (let key in product) {
    text = text + key
    for (let newKey in product[key]) {
        if (product[key][newKey] == product[key].info) {
            text = text + " " + product[key][newKey]+ " , "
        } else if (product[key][newKey] == product[key].price){
            delivery = delivery + product[key][newKey] 
        }   
    }
}
text= text + "| Общая стоимость " + delivery + " сум с доставкой (9000)"
console.log(text);


