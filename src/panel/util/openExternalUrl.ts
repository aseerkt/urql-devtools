export const openExternalUrl = (url: string) => {
  if (process.env.BUILD_ENV === "extension") {
    return window.open(url, "_blank");
  }

  const shell = require("electron").shell as import("electron").Shell;
  shell.openExternal(url);
};
