
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspace/portfolio3.0/.cache/dev-404-page.js")),
  "component---src-lekoarts-gatsby-theme-cara-templates-cara-tsx": preferDefault(require("/workspace/portfolio3.0/src/@lekoarts/gatsby-theme-cara/templates/cara.tsx"))
}

