if (typeof window === "undefined") {
  // for server mocks
  // const { server } = require('./server');
  // server?.listen();
} else {
  // for client mocks
  const { worker } = require("./browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

export {};
