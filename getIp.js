const getIPAddress = () => {
  const interfaces = require("os").networkInterfaces();
  for (let interface in interfaces) {
    let item = interfaces[interface];

    for (var i = 0; i < item.length; i++) {
      if (
        item[i].family === "IPv4" &&
        item[i].address !== "127.0.0.1" &&
        !item[i].internal
      )
        return item[i].address;
    }
  }
  return "0.0.0.0";
};

module.exports = { getIPAddress };
