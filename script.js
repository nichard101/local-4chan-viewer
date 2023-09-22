import Post from './Post.js'
import Thread from './Thread.js'



const fs = require('fs');

const cheerio = require('cheerio');





function extractElements(html) {
  const $ = cheerio.load(html);

  // Extract elements based on class name
  const elements = $('.container-class');

  // Process the extracted elements
  elements.each((index, element) => {
    // Do something with each element
    console.log($(element).text());
  });
}

extractElements(html);


