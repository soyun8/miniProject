const postSortings = [
  { name: "최신순", value: "date-asc" },
  { name: "오래된순", value: "date-des" },
  { name: "조회순", value: "view-des" },
];

const ASC_SORT = (a, b) => {
  const returnValue = a > b ? 1 : a < b ? -1 : 0;
  return returnValue;
};

const DES_SORT = (a, b) => {
  const returnValue = a > b ? -1 : a < b ? 1 : 0;
  return returnValue;
};

const sortPosts = (fetchedPosts, order) => {
  let method;

  if (order === postSortings[0].value) {
    method = (a, b) => {
      const aDate = a.create_date;
      const bDate = b.create_date;
      return ASC_SORT(aDate, bDate);
    };
  } else if (order === postSortings[1].value) {
    method = (a, b) => {
      const aDate = a.create_date;
      const bDate = b.create_date;
      return DES_SORT(aDate, bDate);
    };
  } else if (order === postSortings[2].value) {
    method = (a, b) => {
      const aViews = a.hit_cnt;
      const bViews = b.hit_cnt;
      return DES_SORT(aViews, bViews);
    };
  } else {
    return;
  }

  fetchedPosts.sort(method);
  console.log(fetchedPosts);
};

export { postSortings };
export default sortPosts;
