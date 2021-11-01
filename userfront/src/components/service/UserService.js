const url = "http://localhost:8080";
const UserService = {
  registerUser: async (user) => {
    try {
      const res = await fetch(url + "/user/register", {
        method: "PUT",
        responseType: "text",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      });
      console.log(user.username + " is registered");
      const data = await res.text();
      console.log(data + " is registered");
      return data;
    } catch (error) {
      return error;
    }
  },
  loginUser: async (credentials) => {
    try {
      const res = await fetch(url + "/user/login", {
        method: "POST",
        responseType: "text",
        headers: {
          "Content-Type": "application/json",
          username: credentials.username,
          password: credentials.password,
        },
      });
      const data = await res.text();
      console.log(data + " is logged in");
      return data === "" ? "error" : data;
    } catch (error) {
      return "error";
    }
  },
};

export default UserService;
