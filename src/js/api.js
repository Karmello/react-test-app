const delay = 300;


export const hardCodedItems = [
  { description: 'Go shopping', status: 0 },
  { description: 'Clean my room', status: 0 },
  { description: 'Call my family', status: 0 }
];

export const getItems = (items, cb) => {
  setTimeout(() => { cb(items); }, delay);
};

export const postItem = (body, cb) => {
  setTimeout(() => { cb(body); }, delay);
};

export const deleteItem = (index, cb) => {
  setTimeout(() => { cb(true); }, delay);
}