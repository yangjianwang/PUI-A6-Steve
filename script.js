
// function product(name,price,description,amount){
// 	this.name = name ;
// 	this.price = price ;
// 	this.description = description;
// 	this.amount = amount;

// }

// var vanilla = new product("vanilla", "$1.99", "Best seller, with gluten",0);
// var caramel = new product("caramel", "$1.99", "Super sweet",0);

// product.prototype.add = function() {
// 	this.amount = this.amount+1;
// 	console.log("add "+this.amount+" "+this.name+" to cart");

// }




var update= document.getElementById("addToCart");

// sessionStorage.setItem("Items", cartNum);

var cartNum = 0;


function getData(){
    var data = document.getElementById("form1"); 
    var amount = data.quantity.value;
return amount;   
}


var cartImage = "cart1.png";

update.onclick = function(){
	document.getElementById("lol").textContent = getData()+" items";
	alert("added to cart");
	
}



