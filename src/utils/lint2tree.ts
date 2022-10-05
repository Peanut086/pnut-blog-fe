/*
* 转换树形数据
* */
export function lint2tree(data: any, id = 'id', pid = 'pid', children = 'children') {
  const result: any[] = [];
  const hash: any = {};
  data.forEach((item: any, index: any) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach((item: any) => {
    const hashVP = hash[item[pid]];
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = []);
      hashVP[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
