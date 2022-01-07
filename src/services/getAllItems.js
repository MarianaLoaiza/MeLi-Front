export default function getAllItems(name) {
  const apiURL = `http://localhost:3001/api/items?q=${name.keyword}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(async (response) => {
      const { data } = response;
      const items = await data.map((list) => {
        const { ...categories } = list.categories;
        const { ...item } = list.item;
        return { categories, item };
      });
      return items;
    });
}
