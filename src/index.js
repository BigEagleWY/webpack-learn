import initPage from "./ts/index.ts";

initPage();
if (module.hot) {
    module
        .hot
        .accept();
}