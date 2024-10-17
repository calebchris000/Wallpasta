export default {
  expo: {
    scheme: "Wallpasta",
    name: "Wallpasta",
    // ... other expo config options
    extra: {
      UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    },
  },
};
