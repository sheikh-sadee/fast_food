/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
   unoptimized: true,
  },
  StyledComponents: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true,
    },
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/Fonts/",
            publicPath: "/_next/static/fonts/",
          },
        },
      },
      // {
      //   test: /\.(png|jpg|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[ext]",
      //       outputPath: "public/images/",
      //       publicPath: "/_next/static/media/",
      //     },
      //   },
      // }
    );

    return config;
  },
};

module.exports = nextConfig;
