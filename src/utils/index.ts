export function getMapDataUtil(list) {
  let mapList = [];
  if (!list || !list.length) return mapList;
  list.forEach((item) => {
    let mapItem = {
      name: item.xArea,
      value: item.confirm,
      ...item,
    };
    mapList.push(mapItem);
  });
  return mapList;
}
