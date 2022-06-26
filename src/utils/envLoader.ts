const DEV: boolean = process.env.ENVIRONMENT === "development";
const PORT = process.env.PORT || 8080;

export { DEV, PORT };
