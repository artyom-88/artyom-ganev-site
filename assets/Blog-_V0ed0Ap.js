import{j as t,T as c,S as d,a as p,B as u,R as x,P as h,b as i}from"./index-CRIz9WLz.js";import{R as j,C as n,h as f}from"./http-client-upOJwIWm.js";import{k as g,f as m}from"./vendors-DEz6Cz9h.js";const y=16,B=({item:e})=>{const{_id:s,date:a,link:r,linkCaption:o,title:l}=e;return t.jsxs(j,{gutter:y,wrap:!1,children:[t.jsx(n,{span:4,children:t.jsx(c.Text,{strong:!0,children:a.format("MMMM Do, YYYY")})}),t.jsx(n,{flex:"auto",children:t.jsxs(d,{direction:"vertical",wrap:!0,children:[t.jsx("div",{children:l}),r&&t.jsx(p,{title:"Click for details",children:t.jsx("a",{href:r,target:u,rel:x,children:t.jsx("span",{children:o})})})]})})]},s)},L=()=>g({queryFn:async()=>(await f.get("blog").json()).map(s=>({...s,date:m(s.date).utc()})),queryKey:["BLOG_LIST_QUERY_KEY"],refetchOnMount:!1}),Y=()=>{const{data:e=[],isLoading:s}=L();return t.jsx(h,{isLoading:s,title:i.id,icon:i.icon,children:e.map(a=>t.jsx(B,{item:a},a._id))})};export{Y as default};
