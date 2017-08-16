"use strict";

let fs = require('fs');
let searchJson = require('./public/data/search.json');

let trimmedJson = {
  search_address: searchJson.search_address,
  total_matching_properties_count: searchJson.properties.length,
  properties: searchJson.properties.map((property) => {
    return {
      property_id: property.property_id,
      full_address_display: property.full_address_display,
      address: property.address ? property.address.toLowerCase() : '',
      price_display: property.price_display,
      price: property.price,
      sqft_display: property.sqft_display,
      sqft: property.sqft,
      beds: property.beds,
      baths: property.baths,
      lat: property.lat,
      long: property.long
    }
  })
};

fs.writeFileSync('./src/store/trimmed-search.json', JSON.stringify(trimmedJson, null, 2));

console.log('Done');