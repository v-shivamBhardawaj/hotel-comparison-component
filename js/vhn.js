/*recommended-data.js Code with switch case and without involvement of calss*/ 


// const data = objData.data;
// const hotel_info = data.content.hotels;
// // Data in rates
// const price_info = data.rates.hotels;
// const obj = hotelProduct(hotel_info,price_info)

// const min_rating = 3.5;
// const min_reviews = 60;
// const max_price = 10000;

// // Step 1: Convert object to an array of entries
// const entries = Object.entries(obj);
// // Step 2: Sort the entries based on price

// let sortingPreference = prompt('Enter your sorting Preference.')
// validEntries = new Array;
// // entries.forEach(hotel => {
// //     if(hotel[1].reviews>=min_reviews){
// //         if(hotel[1].rating>=min_rating){
// //             validEntries.push(hotel)
// //         }
// //     }
// // })

// switch (sortingPreference) {
//     case "price":
//         entries.forEach(hotel => {
//             if(hotel[1].price<=max_price){
//                 validEntries.push(hotel)
//             }
//         })
//         sortedEntries = validEntries.sort((a, b) => a[1].price - b[1].price);
//         break;

//     case "rating":
//         entries.forEach(hotel => {
//             if(hotel[1].reviews>=min_reviews){
//                 if(hotel[1].rating>=min_rating){
//                     validEntries.push(hotel)
//                 }
//             }
//         })
//         sortedEntries = validEntries.sort((a, b) => b[1].rating - a[1].rating);
//         break;

//     case "reviews":
//         entries.forEach(hotel => {
//             if(hotel[1].reviews>=min_reviews){
//                 validEntries.push(hotel)
//             }
//         })
//         sortedEntries = validEntries.sort((a, b) => b[1].reviews - a[1].reviews);
//         break;

//     default:
//         sortedEntries = validEntries.sort((a, b) => a[1].price - b[1].price);
//         break;
// }
// // sort((a, b) => b[1].reviews - a[1].reviews);
// // &&((a, b) => b[1].rating - a[1].rating)&&((a, b) => a[1].price - b[1].price)
  
// // Step 3: Convert the sorted array back into an object
// // const sortedObject = Object.fromEntries(sortedEntries);
  
// const arrayObj = new Array()
// for(let i=0;i<3;i++){
//     arrayObj.push(sortedEntries[i])
// }
// // Output the sorted object
// console.log(arrayObj);
  
  
// // const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="output"></div></body></html>`);
// // const document = dom.window.document;
// function commaSeparatedPrices(value) {
//     return value.toLocaleString('en-IN');
// }
// const outputDiv = document.getElementById('output');
// arrayObj.forEach(item => {
//     const div = document.createElement('div');
//     div.className = 'item';
//     div.innerHTML = `
//         <strong>Item ${item[0]}</strong><br>
//         Reviews: ${item[1].reviews}<br>
//         Rating: ${item[1].rating}<br>
//         Price: ${commaSeparatedPrices(item[1].price)}<br>
//         Discount: ${commaSeparatedPrices(item[1].discount)}<br>
//         Free Cancellation: ${item[1].freeCancellation ? 'Yes' : 'No'}
//     `;
//     outputDiv.appendChild(div);
// });




/*hotel-min-data.js PREVIOUS CODE WITHOUT CLASSES*/


// Creating variables for rate and contents data to traverse over them to access the properties and compare the outputs
// const data1 = objData.data;
// const hotel_data = data1.content.hotels;
// // Data in rates
// const price_data = data1.rates.hotels;

// function hotelProduct(_hotelObj,_priceObj){
//     let reviewNo_obj = new Object()
//     let rating_obj = new Object()
//     let price_obj = new Object()
//     let discount_obj = new Object()
//     let free_cancellation_obj = new Object()
//     let combined_obj = new Object()
//     for (let i = 0; i < price_data.length; i++) {
//             reviewNo_obj[i] = hotel_data[i].gr.reviews
//             rating_obj[i] = hotel_data[i].gr.rating
//             price_obj[i] = price_data[i].price
//             discount_obj[i] = price_data[i]['totalDiscount']
//             free_cancellation_obj[i] = price_data[i]['freeCancel']
//             combined_obj[i] = {
//                 reviews: reviewNo_obj[i],
//                 rating: rating_obj[i],
//                 price: price_obj[i],
//                 discount: discount_obj[i],
//                 freeCancellation: free_cancellation_obj[i]
//             }
//         }
//     return combined_obj
//     }
