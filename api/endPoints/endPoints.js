export const endPoints = {
    auth: {
        signIn: "/user/signin",
        signUp: "/user/signup",
    },
    profile: {
        details: "/user/profile-details",
    },
    products: {
        productList: "/product/list",
        createProduct: "/product/create",
        removeProduct: "/product/remove",
        productDetails: "/product/detail/",
        updateProduct: "/product/update",
    },
};
export const endPointsPath = [endPoints.auth.signIn, endPoints.auth.signUp];
