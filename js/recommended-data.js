class hotelList{
    constructor(min_rating, min_reviews){
        this.min_rating = min_rating;
        this. min_reviews = min_reviews;
    }

    validEntries(){
        const obj = new HotelDataProcessor(objData)
        const resultData = Object.entries(obj.hotelProduct());
        const list = new Array;
        resultData.forEach(hotel => {
            if(hotel[1].reviews>=this.min_reviews){
                if(hotel[1].rating>=this.min_rating){
                    list.push(hotel)
                }
            }
        })
        return list
    }
}

//Comparison Criterions
const hotels = new hotelList(3.0, 1000)
const validList = hotels.validEntries()

sortedEntries = validList.sort((a, b) => a[1].price - b[1].price);
// sort((a, b) => b[1].reviews - a[1].reviews);
// &&((a, b) => b[1].rating - a[1].rating)&&((a, b) => a[1].price - b[1].price)
  
// Step 3: Convert the sorted array back into an object
// const sortedObject = Object.fromEntries(sortedEntries);
  
const arrayObj = new Array()
for(let i=0;i<3;i++){
    arrayObj.push(sortedEntries[i])
}
// Output the sorted object
console.log(arrayObj);
  
  
function commaSeparatedPrices(value) {
    return value.toLocaleString('en-IN');
}
const outputDiv = document.getElementById('output');
arrayObj.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
        <strong>Item ${item[0]}</strong><br>
        Reviews: ${item[1].reviews}<br>
        Rating: ${item[1].rating}<br>
        Price: ${commaSeparatedPrices(item[1].price)}<br>
        Discount: ${commaSeparatedPrices(item[1].discount)}<br>
        Free Cancellation: ${item[1].freeCancellation ? 'Yes' : 'No'}
    `;
    outputDiv.appendChild(div);
});