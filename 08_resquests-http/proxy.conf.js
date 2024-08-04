(async () => {
  const { Compiler } = await import('@angular/compiler-cli');
  // Use Compiler here
})();

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8000/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
  }
];

module.exports =  PROXY_CONFIG;
