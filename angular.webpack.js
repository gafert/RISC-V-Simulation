const CopyWebpackPlugin = require('copy-webpack-plugin');

const arch = process.env.ARCH || process.arch;
const platform = process.env.PLATFORM || process.platform;

module.exports = (config, options) => {
  config.target = 'electron-renderer';
  if (options.customWebpackConfig.target) {
    config.target = options.customWebpackConfig.target;
  } else if (options.fileReplacements) {
    for (let fileReplacement of options.fileReplacements) {
      if (fileReplacement.replace !== 'src/environments/environment.ts') {
        continue;
      }

      let fileReplacementParts = fileReplacement['with'].split('.');
      if (['dev', 'prod', 'test', 'electron-renderer'].indexOf(fileReplacementParts[1]) < 0) {
        config.target = fileReplacementParts[1];
      }
      break;
    }
  }

  config.externals = {
    ...config.externals,
    electron: "require('electron')",
    buffer: "require('buffer')",
    child_process: "require('child_process')",
    worker_threads: "require('worker_threads')",
    crypto: "require('crypto')",
    dialog: "require('dialog')",
    events: "require('events')",
    fs: "require('fs')",
    http: "require('http')",
    https: "require('https')",
    assert: "require('assert')",
    dns: "require('dns')",
    net: "require('net')",
    os: "require('os')",
    path: "require('path')",
    querystring: "require('querystring')",
    readline: "require('readline')",
    repl: "require('repl')",
    stream: "require('stream')",
    string_decoder: "require('string_decoder')",
    url: "require('url')",
    util: "require('util')",
    zlib: "require('zlib')",
    'electron-is-dev': "require('electron-is-dev')",
    'ffi-napi': "require('ffi-napi')",
    'ref-napi': "require('ref-napi')"
  };

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.node$/,
      use: 'node-loader'
    }
  ];

  return config;
}