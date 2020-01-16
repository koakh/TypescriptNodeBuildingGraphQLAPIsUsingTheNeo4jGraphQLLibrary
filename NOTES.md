# 

# Extend minimal starter with

  "scripts": {
    "start": "tsc && node dist/index.js",
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts",
    "debug": "env-cmd ts-node-dev --respawn --debug --inspect=9226 -- src/app.ts",
    "kill-port": "fuser -k 9226/tcp"
  },


npm i -D env-cmd ts-node-dev nodemon \
  @types/node


