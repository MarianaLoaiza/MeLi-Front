export default function getItems(id) {
  const apiURL = `http://localhost:3001/api/items/${id}`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then(async (response) => {
      const { data } = response;
      const items = await data.map((list) => {
        const { ...item } = list.item;

        return { item };
      });
      return items;
    });
}
