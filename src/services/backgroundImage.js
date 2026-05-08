const weatherCodes = [
  {
    name: "sunny",
    codes: [1000],
    imagePath: "/weatherapp/images/sunny-sky.jpg",
  },
  {
    name: "cloudy",
    codes: [1003, 1006, 1009, 1030, 1135, 1147],
    imagePath: "/weatherapp/images/cloudy-sky.jpg",
  },
  {
    name: "rain",
    codes: [1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1198, 1201, 1240],
    imagePath: "/weatherapp/images/rain.jpg",
  },
  {
    name: "storm",
    codes: [1087, 1192, 1195, 1243, 1246, 1273, 1276],
    imagePath: "/weatherapp/images/storm.jpg",
  },
  {
    name: "snow",
    codes: [1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
    imagePath: "/weatherapp/images/snow.jpg",
  }
];

// Searches through the weather Codes and return the imagePath
export function getBackgroundImage(code) {
  const weatherObject = weatherCodes.find(x => x.codes.some(i => i === code));

  return weatherObject.imagePath;
}