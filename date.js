const hours = new Date('2020-07-10T17:11:06.000Z').getHours();
console.log(hours);

const website = 'https://www.whose.land/en/';

console.log(website.split('/').splice(0, 3).join('/'));
