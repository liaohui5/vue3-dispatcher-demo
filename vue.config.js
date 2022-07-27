"use strict";

module.exports = {
  devServer: {
    port: 8083,
    proxy: {
      "/api": {
        changeOrigin: true,
        target: "http://localhost:8383",
        pathRewrite: (path) => path.replace(/\/api/, ""),
      },
    },
  },
};
