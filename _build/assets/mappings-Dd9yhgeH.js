import{b as e,q as t,k as a,t as l}from"./web-DqPol8Cv.js";import{M as c}from"./index-yHsRVhWw.js";var i=l("<kbd>Ctrl"),h=l("<kbd>Space"),d=l("<kbd>alt"),m=l("<kbd>shift"),p=l("<br>");const u={title:"NvChad Mappings",desc:"Manage mappings in nvchad"};function r(s){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...c(),...s.components};return[e(n.h2,{children:"Overview"}),`
`,e(n.p,{children:"The mapping configuration uses the nvim name shortcuts as:"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return[e(n.code,{children:"<C>"})," -> ",a(i)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<leader>"})," -> ",a(h)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<A>"})," -> ",a(d)]}}),`
`,e(n.li,{get children(){return[e(n.code,{children:"<S>"})," -> ",a(m)]}}),`
`,e(n.li,{get children(){return["The default mappings are defined ",e(n.a,{href:"https://github.com/NvChad/NvChad/blob/v2.5/lua/nvchad/mappings.lua",children:"here"}),"."]}}),`
`]}}),`
`,e(n.h2,{children:"Mapping format"}),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{get children(){return["NvChad uses ",e(n.code,{children:"vim.keymap.set"})," by default, check ",e(n.code,{children:":h vim.keymap.set"})," for detailed docs."]}}),`
`,e(n.li,{children:"The desc opt is optional. It's only needed for NvCheatsheet to document"}),`
`]}}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-lua",get children(){return[e(n.span,{className:"hljs-keyword",children:"local"}),` map = vim.keymap.set

map(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<leader>ff"'}),", ",e(n.span,{className:"hljs-string",children:'"<cmd> Telescope <cr>"'}),`)

`,e(n.span,{className:"hljs-comment",children:"-- multiple modes "}),`
map({ `,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"n"'})," }, ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),", ",e(n.span,{className:"hljs-string",children:'"<Up>"'}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Move up"'}),` })
map({ `,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"n"'})," }, ",e(n.span,{className:"hljs-string",children:'"<C-j>"'}),", ",e(n.span,{className:"hljs-string",children:'"<Down>"'}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Move down"'}),` })

`,e(n.span,{className:"hljs-comment",children:"-- mapping with a lua function"}),`
map(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<A-i>"'}),", ",e(n.span,{className:"hljs-function",get children(){return[e(n.span,{className:"hljs-keyword",children:"function"}),e(n.span,{className:"hljs-params",children:"()"})]}}),`
   `,e(n.span,{className:"hljs-comment",children:"-- do something"}),`
`,e(n.span,{className:"hljs-keyword",children:"end"}),", { desc = ",e(n.span,{className:"hljs-string",children:'"Terminal toggle floating"'}),` })

`,e(n.span,{className:"hljs-comment",children:"-- Disable mappings"}),`
`,e(n.span,{className:"hljs-keyword",children:"local"}),` nomap = vim.keymap.del

nomap(`,e(n.span,{className:"hljs-string",children:'"i"'}),", ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),`)
nomap(`,e(n.span,{className:"hljs-string",children:'"n"'}),", ",e(n.span,{className:"hljs-string",children:'"<C-k>"'}),`)
`]}})}}),`
`,a(p),`
`,e(n.ul,{get children(){return[`
`,e(n.li,{children:"Do know that lsp mappings wont be overrided by the above methods, because they dont load on startup & are lazy loaded."}),`
`,e(n.li,{get children(){return["So put the lsp ones in ",e(n.code,{children:"LspAttach"})," autocmd or right after your on_attach"]}}),`
`]}})]}function N(s={}){const{wrapper:n}={...c(),...s.components};return n?e(n,t(s,{get children(){return e(r,s)}})):r(s)}export{N as default,u as meta};
