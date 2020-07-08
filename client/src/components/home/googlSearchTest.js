const googleDatabse = [
  'souperecipes.com',
  'flowers.com',
  'animals.com',
  'myfavouritecats.com',
  'myfavouritecats2.com',
  'catpictures.com',
  'cats.com',
];

const googleSearch = (searchInput) => {
  const matches = googleDatabse.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

export default googleSearch;
