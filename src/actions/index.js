export const FETCH_MAPDATA = "fetch_mapdata";
export const FETCH_ATTR = "fetch_attr";
import axios from "axios";

// export const fetchMapData = () => {
// const request = [
//     {
//       id: 10001,
//       name: "辽宁饭店",
//       lat: 40.75418,
//       lng: -73.8247,
//       coord: "40.75418,-73.8247",
//       addr: "14009 Cherry Ave, Flushing, NY 11355",
//       addr_coord: "14009 Cherry Ave, Flushing, NY 11355,40.75418,-73.8247",
//       ph_no: "718-886-4383",
//       rate: "$",
//       descr:
//         "位于法拉盛地道的东北饭店，最特色的是老式锅包肉等，导游评价较高，出菜速度快,位于法拉盛地道的东北饭店，最特色的是老式锅包肉等，导游评价较高，出菜速度快位于法拉盛地道的东北饭店，最特色的是老式锅包肉等，导游评价较高，出菜速度快",
//       img: "",
//       category: "桌餐",
//       location: "法拉盛",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10011,
//       name: "北方酒楼",
//       lat: 34.07994,
//       lng: -118.08671,
//       coord: "34.07994,-118.08671",
//       addr: "3999 Vachon Dr, Rosemead, CA 91770",
//       addr_coord: "3999 Vachon Dr, Rosemead, CA 91770,34.07994,-118.08671",
//       ph_no: "626-288-9299",
//       rate: "$",
//       descr:
//         "位于圣盖博地道东北饭店，量大，菜色不错。适合团餐及点餐。位于圣盖博地道东北饭店，量大，菜色不错。适合团餐及点餐。位于圣盖博地道东北饭店，量大，菜色不错。适合团餐及点餐。位于圣盖博地道东北饭店，量大，菜色不错。适合团餐及点餐。",
//       img: "",
//       category: "桌餐",
//       location: "圣盖博",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10021,
//       name: "关记-曼哈顿14街东北桌餐",
//       lat: 40.737604,
//       lng: -73.997458,
//       coord: "40.737604,-73.997458",
//       addr: "108 W 14th St, New York, NY 10011",
//       addr_coord: "108 W 14th St, New York, NY 10011,40.737604,-73.997458",
//       ph_no: "212-206-8388",
//       rate: "$",
//       descr:
//         "类型：桌餐 （团餐或点餐） 菜系：东北菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11am - 11pm 电话：212-206-8388 网址：http://www.auntieguan108.com/",
//       img: "",
//       category: "桌餐",
//       location: "曼哈顿中下城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10031,
//       name: "湘水山庄-湖南菜(桌餐)",
//       lat: 40.749686,
//       lng: -73.977295,
//       coord: "40.749686,-73.977295",
//       addr: "339 Lexington Ave, New York, NY 10016",
//       addr_coord: "339 Lexington Ave, New York, NY 10016,40.749686,-73.977295",
//       ph_no: "212-682-2883",
//       rate: "$$",
//       descr:
//         "类型：桌餐 （团餐或点餐） 菜系：湖南菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11:30am - 3pm; 5pm - 10pm 电话：212-682-2883 网址：hunanmanornewyork.com",
//       img: "",
//       category: "桌餐",
//       location: "曼哈顿中城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10041,
//       name: "绿园村-上海菜(桌餐)-曼哈顿近时代广场旁",
//       lat: 40.750558,
//       lng: -73.981845,
//       coord: "40.750558,-73.981845",
//       addr: "10 E 38th St, New York, NY 10016",
//       addr_coord: "10 E 38th St, New York, NY 10016,40.750558,-73.981845",
//       ph_no: "212-448-1199",
//       rate: "$$",
//       descr:
//         "类型：桌餐 （团餐或点餐） 菜系：上海菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11:30am - 10pm 电话：212-448-1199 网址：evergreenshanghainewyork.com",
//       img: "",
//       category: "桌餐",
//       location: "曼哈顿中城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10051,
//       name: "湘水山庄-湖南菜(桌餐)",
//       lat: 40.763391,
//       lng: -73.829622,
//       coord: "40.763391,-73.829622",
//       addr: "137-40 Northern Blvd, Flushing, NY 11354",
//       addr_coord:
//         "137-40 Northern Blvd, Flushing, NY 11354,40.763391,-73.829622",
//       ph_no: "718-353-1808",
//       rate: "$",
//       descr:
//         "类型：桌餐 （团餐或点餐） 菜系：湖南菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11:30am - 3pm; 5pm - 10pm 电话：718-353-1808 网址：hunanhouseflushing.com",
//       img: "",
//       category: "桌餐",
//       location: "法拉盛",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10061,
//       name: "华城-北方菜桌餐-黄石西门门口",
//       lat: 44.660327,
//       lng: -111.100456,
//       coord: "44.660327,-111.100456",
//       addr: "110 Madison Ave, West Yellowstone, MT 59758",
//       addr_coord:
//         "110 Madison Ave, West Yellowstone, MT 59758,44.660327,-111.100456",
//       ph_no: "406-646-7088",
//       rate: "$$",
//       descr:
//         "类型：桌餐 （团餐或点餐） 菜系：北方菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟 营业时间：11am - 10pm 电话：406-646-7088",
//       img: "",
//       category: "桌餐",
//       location: "西黄石小镇",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10071,
//       name: "红莲 - 粤菜桌餐-黄石西门门口",
//       lat: 44.660729,
//       lng: -111.098792,
//       coord: "44.660729,-111.098792",
//       addr: "19 Madison Ave, West Yellowstone, MT 59758",
//       addr_coord:
//         "19 Madison Ave, West Yellowstone, MT 59758,44.660729,-111.098792",
//       ph_no: "406-646-7002",
//       rate: "$$",
//       descr:
//         " 类型：桌餐 （团餐或点餐） 菜系：南北菜系 服务：🌟🌟🌟 菜品：🌟🌟🌟 营业时间：11am - 10pm 电话：406-646-7002",
//       img: "",
//       category: "桌餐",
//       location: "西黄石小镇",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10081,
//       name: "香港自助餐 - 南北菜自助",
//       lat: 43.473709,
//       lng: -110.779893,
//       coord: "43.473709,-110.779893",
//       addr: "826 W Broadway, Jackson, WY 83001",
//       addr_coord: "826 W Broadway, Jackson, WY 83001,43.473709,-110.779893",
//       ph_no: "307-734-8988",
//       rate: "$$",
//       descr:
//         "类型：自助餐 菜系：南北菜系 服务：🌟🌟🌟 菜品：🌟🌟 营业时间：11am - 10pm 电话：307-734-8988",
//       img: "",
//       category: "自助",
//       location: "杰克逊小镇",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10091,
//       name: "海城-广东菜",
//       lat: 43.479332,
//       lng: -110.767159,
//       coord: "43.479332,-110.767159",
//       addr: "340 W Broadway, Jackson, WY 83001",
//       addr_coord: "340 W Broadway, Jackson, WY 83001,43.479332,-110.767159",
//       ph_no: "307-734-9768",
//       rate: "$$$起",
//       descr:
//         "价格：$$$起 （不推荐) 类型：自助餐 菜系：南北菜系 服务：🌟 菜品：🌟🌟 营业时间：11am - 9:30pm 电话：307-734-9768 网址: oceancitychinabistro.com",
//       img: "",
//       category: "桌餐",
//       location: "杰克逊小镇",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10101,
//       name: "Edison Buffet",
//       lat: 40.518326,
//       lng: -74.365882,
//       coord: "40.518326,-74.365882",
//       addr: "1008 US-1, Edison, NJ 08817",
//       addr_coord: "1008 US-1, Edison, NJ 08817,40.518326,-74.365882",
//       ph_no: "732-452-0888",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：自助 菜系：南北菜系 服务：🌟🌟🌟 菜品：🌟🌟🌟 营业时间：11AM–9PM 电话：732-452-0888 ",
//       img: "",
//       category: "自助",
//       location: "新泽西爱迪生",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10111,
//       name: "Grand China Buffet",
//       lat: 40.085267,
//       lng: -74.966424,
//       coord: "40.085267,-74.966424",
//       addr: "27 Franklin Mills Blvd, Philadelphia, PA 19154",
//       addr_coord:
//         "27 Franklin Mills Blvd, Philadelphia, PA 19154,40.085267,-74.966424",
//       ph_no: "215-632-2100",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：自助 菜系：南北菜系（特色：晚餐有蟹腿、石头蟹等各类海鲜） 服务：🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间： 11AM–10:30PM 电话：215-632-2100",
//       img: "",
//       category: "自助",
//       location: "费城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10121,
//       name: "Super China Buffet - 自助餐",
//       lat: 39.99241,
//       lng: -75.100564,
//       coord: "39.99241,-75.100564",
//       addr: "3400 Aramingo Ave, Philadelphia, PA 19134",
//       addr_coord:
//         "3400 Aramingo Ave, Philadelphia, PA 19134,39.99241,-75.100564",
//       ph_no: "215-291-1800",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：自助 菜系：南北菜系（特色：晚餐有蟹腿、石头蟹等各类海鲜） 服务：🌟🌟🌟 菜品：🌟🌟🌟 营业时间： 10AM–10PM 电话：215-291-1800",
//       img: "",
//       category: "自助",
//       location: "费城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10131,
//       name: "巴蜀山庄-川菜(桌餐)-费城中国城",
//       lat: 39.955357,
//       lng: -75.15558,
//       coord: "39.955357,-75.15558",
//       addr: "936 race st, philadelphia",
//       addr_coord: "936 race st, philadelphia,39.955357,-75.15558",
//       ph_no: "215-629-8385",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：桌餐 （团餐或点餐） 菜系：川菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11：00am-10：00pm 电话：215-629-8385",
//       img: "",
//       category: "桌餐",
//       location: "费城中国城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10141,
//       name: "皇朝饭店-湖南菜(桌餐)",
//       lat: 38.88704,
//       lng: -77.0029,
//       coord: "38.88704,-77.0029",
//       addr: "215 Pennsylvania Ave SE, Washington, DC 20003",
//       addr_coord:
//         "215 Pennsylvania Ave SE, Washington, DC 20003,38.88704,-77.0029",
//       ph_no: "202-546-6161",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：桌餐 （团餐或点餐） 菜系：湖南菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟 营业时间： 周一到周五: 11AM-10pm 周六,日 11AM–10:30pm 电话：202-546-6161 评论：摘取一些人的评论 如果不是很急 建议非点餐还是选别家吧. 今天加了5美金每人, what ?做的普通餐标没区别. 点餐不知道怎么样",
//       img: "",
//       category: "桌餐",
//       location: "华盛顿国会旁",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10151,
//       name: "云南过桥园-川香辣菜(桌餐)-拉斯中国城",
//       lat: 36.124902,
//       lng: -115.192488,
//       coord: "36.124902,-115.192488",
//       addr: "3934 Schiff Dr, Las Vegas, NV 89103",
//       addr_coord: "3934 Schiff Dr, Las Vegas, NV 89103,36.124902,-115.192488",
//       ph_no: "702-869-8885",
//       rate: "$",
//       descr:
//         "价格：$起 类型：桌餐 （团餐或点餐） 菜系：川香辣菜（过桥米线特色） 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11:00am - 10pm 电话：702-869-8885",
//       img: "",
//       category: "桌餐",
//       location: "拉斯中国城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10161,
//       name: "福恩园-川菜(桌餐)",
//       lat: 37.563773,
//       lng: -122.322415,
//       coord: "37.563773,-122.322415",
//       addr: "168 E 4th Ave, San Mateo, CA 94401",
//       addr_coord: "168 E 4th Ave, San Mateo, CA 94401,37.563773,-122.322415",
//       ph_no: "650-345-9168",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：桌餐 （团餐或点餐） 菜系：川菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11:30AM–9:30PM 电话：650-345-9168",
//       img: "",
//       category: "桌餐",
//       location: "SFO旧金山机场",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10171,
//       name: "乡巴佬-东北菜(桌餐)",
//       lat: 37.780663,
//       lng: -122.47038,
//       coord: "37.780663,-122.47038",
//       addr: "4737 Geary Blvd, San Francisco, CA 94118",
//       addr_coord:
//         "4737 Geary Blvd, San Francisco, CA 94118,37.780663,-122.47038",
//       ph_no: "415-221-4278",
//       rate: "$",
//       descr:
//         "价格：$ 起 （良心餐厅) 类型：桌餐 （团餐或点餐） 菜系：东北菜 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11am - 10pm 电话：415-221-4278 网址：http://www.auntieguan108.com/",
//       img: "",
//       category: "桌餐",
//       location: "旧金山",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10181,
//       name: "海城-粤菜桌餐-洛杉矶downtown",
//       lat: 34.059917,
//       lng: -118.237577,
//       coord: "34.059917,-118.237577",
//       addr: "700 N Spring St, Los Angeles, CA 90012",
//       addr_coord:
//         "700 N Spring St, Los Angeles, CA 90012,34.059917,-118.237577",
//       ph_no: "213-617-2323",
//       rate: "$",
//       descr:
//         "价格：$ 起 （良心餐厅) 类型：桌餐 （团餐或点餐） 菜系：广式餐厅（特色：有早茶） 服务：🌟🌟🌟🌟 菜品：🌟🌟🌟🌟 营业时间：11AM–2PM, 5–9PM 电话：213-687-3088",
//       img: "",
//       category: "桌餐",
//       location: "LA中国城",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10191,
//       name: "凤凰自助-巴斯托(拉斯-洛杉矶中间)",
//       lat: 34.849233,
//       lng: -117.079561,
//       coord: "34.849233,-117.079561",
//       addr: "2809 Lenwood Rd # A, Barstow, CA 92311",
//       addr_coord:
//         "2809 Lenwood Rd # A, Barstow, CA 92311,34.849233,-117.079561",
//       ph_no: "760-253-7181",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：自助 菜系：南北菜系 服务：🌟🌟 菜品：🌟🌟🌟 营业时间：11AM–3PM（只提供午餐) 电话：760-253-7181",
//       img: "",
//       category: "自助",
//       location: "洛杉矶-拉斯中间 巴斯托奥莱旁",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     },
//     {
//       id: 10201,
//       name: "中国城自助-巴斯托(拉斯-洛杉矶中间)",
//       lat: 34.894076,
//       lng: -117.00216,
//       coord: "34.894076,-117.00216",
//       addr: "1505 E Main St, Barstow, CA 92311",
//       addr_coord: "1505 E Main St, Barstow, CA 92311,34.894076,-117.00216",
//       ph_no: "760-256-9000",
//       rate: "$",
//       descr:
//         "价格：$ 起 类型：自助 菜系：南北菜系 服务：🌟🌟 菜品：🌟🌟 营业时间：11AM–9PM 电话：760-256-9000",
//       img: "",
//       category: "自助",
//       location: "洛杉矶-拉斯中间 巴斯托奥莱旁",
//       class: 0,
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//       e: "",
//       f: ""
//     }
//   ];
//   return {
//     type: FETCH_MAPDATA,
//     payload: request
//   };
// };

export const fetchMapData = () => async dispatch => {
  const request = await axios.get("http://localhost:5000/api/delis");
  dispatch({
    type: FETCH_MAPDATA,
    payload: request
  });
};

export const fetchAttr = () => async dispatch => {
  const request = await axios.get("http://localhost:5000/api/attrs");
  dispatch({
    type: FETCH_ATTR,
    payload: request
  });
};
