const { createSlice } = require("@reduxjs/toolkit");
const { Cookies } = require("react-cookie");

const cookies = new Cookies();

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isTokenAvailable: !!cookies.get("token"),
        firstname: cookies.get("first_name"),
        image: cookies.get("image"),
    },
    reducers: {
        loginData: (state, action) => {
            const { token, firstname, image } = action.payload;
            cookies.set("token", token, { path: "/" });
            cookies.set("first_name", firstname, { path: "/" });
            cookies.set("image", image, { path: "/" });
            state.isTokenAvailable = true;
            state.firstname = firstname;
            state.image = image;
        },
        logout: (state) => {
            cookies.remove("token", { path: "/" });
            cookies.remove("first_name", { path: "/" });
            cookies.remove("image", { path: "/" });

            state.isTokenAvailable = false;
            state.firstname = "";
            state.image = null;
        },
    },
});

export const { loginData, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
