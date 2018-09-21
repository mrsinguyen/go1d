/**
 * It is necessary to add the ts-loader for .tsx files
 */
module.exports = {
    resolve: {
        extensions: [".js", "md", "mdx", "jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,     
                use: [
                    require.resolve("ts-loader"),
                    require.resolve("react-docgen-typescript-loader"),
                ], 
            }
        ]
    }
} 