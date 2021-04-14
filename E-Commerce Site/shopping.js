var cards = [
  {
    image: "varna-bulgaria-june-17-2017-260nw-1393849583.jpg",
    brandName: "Puma",
    prodName: "Shoe1",
    price: "5000",
  },
  {
    image: "pexels-photo.jpg",
    brandName: "Puma",
    prodName: "Shoe2",
    price: "6000",
  },
  {
    image: "gettyimages-1023642306-612x612.jpg",
    brandName: "Adidas",
    prodName: "Shoe1",
    price: "5000",
  },
  {
    image: "istockphoto-956501428-612x612.jpg",
    brandName: "Adidas",
    prodName: "Shoe2",
    price: "6000",
  },
  {
    image: "nike-quest-3-pinknbsp.jpg",
    brandName: "Nike",
    prodName: "Shoe1",
    price: "5000",
  },
  {
    image: "nike.jpg",
    brandName: "Nike",
    prodName: "Shoe2",
    price: "6000",
  },
];
const mySet = new Set();
function display() {
  for (i = 0; i <= cards.length - 1; i++) {
    console.log(cards[i]);
    // console.log(cards[i].brandName);
    // console.log(cards[i].prodName);
    // console.log(cards[i].price);
    var ima = document.createElement("img");
    ima.src = cards[i].image;
    var x = document.getElementById("shop");
    x.appendChild(ima);
    console.log(x.innerHTML);
    var txtNode = document.createElement("p");
    txtNode.innerHTML =
      cards[i].brandName + "\n" + cards[i].prodName + "\n" + cards[i].price;
    x.appendChild(txtNode);
    mySet.add("All");
    mySet.add(cards[i].brandName);
  }
  var b = document.getElementById("filterButtons");
  //console.log(mySet);
  for (let i of mySet.keys()) {
    console.log("i-->", i);
    let ele = document.createElement("button");
    ele.textContent = i;
    ele.onclick = BrandName;
    b.appendChild(ele);
  }
  console.log(mySet.values());
}

var brand = "All";
function BrandName() {
  brand = event.target.textContent;
  filterBrand();
}

let filterProd = [];
function filterBrand() {
  var search = document.forms["myForm"]["search"].value;
  console.log("Brand:---->", brand, "Serach--->", search);

  filterProd.splice(0, filterProd.length);
  for (var i = 0; i <= cards.length - 1; i++) {
    if (
      (!brand.localeCompare("All") ||
        !brand.localeCompare(cards[i].brandName)) &&
      (cards[i].brandName.includes(search) ||
        cards[i].prodName.includes(search))
    ) {
      filterProd.push(cards[i]);
    }
  }
  console.log("arr-->", filterProd);
  document.getElementById("shop").innerHTML = " ";
  for (var i = 0; i <= filterProd.length - 1; i++) {
    var pElement = document.createElement("p");
    var imageElement = document.createElement("img");
    imageElement.src = filterProd[i].image;
    pElement.innerHTML =
      filterProd[i].brandName +
      " " +
      filterProd[i].prodName +
      " " +
      filterProd[i].price;
    console.log(pElement.innerHTML);
    console.log(document.getElementById("shop").appendChild(imageElement));
    console.log(document.getElementById("shop").appendChild(pElement));
  }
}
// let filterProd = [];
// function filterBrand(event) {
//   filterProd.splice(0, filterProd.length);
//   let brand = event.target.textContent;
//   for (let i = 0; i < cards.length; i++) {
//     if (!brand.localeCompare("All")) {
//       filterProd.push(cards[i]);
//     }
//     if (!brand.localeCompare(cards[i].brandName)) {
//       filterProd.push(cards[i]);
//     }
//   }
//   console.log("arr-->", filterProd);
//   document.getElementById("shop").innerHTML = " ";
//  // var e = document.createElement("p");
//  // var ima = document.createElement("img");
//   for (var i = 0; i <= filterProd.length - 1; i++) {
//     var e = document.createElement("p");
//     var ima = document.createElement("img");
//     ima.src = filterProd[i].image;
//     e.innerHTML =
//       filterProd[i].brandName +
//       " " +
//       filterProd[i].prodName +
//       " " +
//       filterProd[i].price;
//     console.log(e.innerHTML);
//     console.log(document.getElementById("shop").appendChild(ima));
//     console.log(document.getElementById("shop").appendChild(e));

//     console.log("length of the array: -----> ", filterProd.length);
//   }
// }
display();

// let filteringFilterProd = [];
// function Search() {
//   //filteringFilterProd.splice(0, filteringFilterProd.length);
//   var search = document.forms["myForm"]["search"].value;
//   console.log(search);
//   for (var i = 0; i <= cards.length - 1; i++) {
//     if (
//       cards[i].brandName.includes(search) ||
//       cards[i].prodName.includes(search)
//     )
//       filteringFilterProd.push(cards[i]);
//   }
//   if (filterProd.length == 0) {
//     document.getElementById("shop").innerHTML = " ";
//     //var pElement = document.createElement("p");
//     //var imageElement = document.createElement("img");
//     for (var i = 0; i <= filteringFilterProd.length - 1; i++) {
//       var pElement = document.createElement("p");
//       var imageElement = document.createElement("img");
//       imageElement.src = filteringFilterProd[i].image;
//       pElement.innerHTML =
//         filteringFilterProd[i].brandName +
//         " " +
//         filteringFilterProd[i].prodName +
//         " " +
//         filteringFilterProd[i].price;
//       console.log(pElement.innerHTML);
//       console.log(document.getElementById("shop").appendChild(imageElement));
//       console.log(document.getElementById("shop").appendChild(pElement));
//     }
//   } else {
//     document.getElementById("shop").innerHTML = " ";
//     //var pElement = document.createElement("p");
//     //var imageElement = document.createElement("img");
//     for (var i = 0; i <= filteringFilterProd.length - 1; i++) {
//       var pElement = document.createElement("p");
//       var imageElement = document.createElement("img");
//       console.log("filteringFilterProd----->  ",filteringFilterProd[i]);
//       imageElement.src = filteringFilterProd[i].image;
//       pElement.innerHTML =
//         filteringFilterProd[i].brandName +
//         " " +
//         filteringFilterProd[i].prodName +
//         " " +
//         filteringFilterProd[i].price;
//       console.log(pElement.innerHTML);
//       console.log(document.getElementById("shop").appendChild(imageElement));
//       console.log(document.getElementById("shop").appendChild(pElement));
//     }
//   }
// }
