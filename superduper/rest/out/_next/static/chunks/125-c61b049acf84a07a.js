"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{273:function(e,s,t){t.d(s,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return n},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var a=t(7437),r=t(2265),l=t(7700);let n=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...r})});n.displayName="Card";let i=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...r})});i.displayName="CardHeader";let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("h3",{ref:s,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...r})});o.displayName="CardTitle";let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("p",{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",t),...r})});d.displayName="CardDescription";let c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("p-6 pt-0",t),...r})});c.displayName="CardContent";let u=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:(0,l.cn)("flex items-center p-6 pt-0",t),...r})});u.displayName="CardFooter"},1125:function(e,s,t){t.d(s,{Z:function(){return C}});var a=t(7437),r=t(2265),l=t(8429),n=t(2126),i=t(8726),o=t(1444),d=t(841),c=t(7327),u=t(6360),p=t(9129),h=t(9155),x=e=>{let{fileId:s}=e;(0,o.v9)(e=>e.environment.environmentLoadedValues);let t=(0,o.v9)(e=>{var s;return null==e?void 0:null===(s=e.userInfo)||void 0===s?void 0:s.userInfoLoadedValues}),[l,i]=(0,r.useState)(null),[d,c]=(0,r.useState)(null),[x,j]=(0,r.useState)("");return((0,r.useEffect)(()=>{(async()=>{try{let e=await n.Z.get("".concat("".concat("http://localhost:8000","/db/artifact_store/get?file_id=").concat(s)),{responseType:"blob",headers:{Accept:"application/json",Authorization:(0,h.Z)(t),superduper_reverse_proxy:"http://localhost:8000"}}),a=new Blob([e.data],{type:e.headers["content-type"]}),r=window.URL.createObjectURL(a);if(i(r),c(e.headers["content-type"]),e.headers["content-type"].startsWith("text/")){let s=await new Response(e.data).text();j(s)}}catch(e){console.error("Error fetching file:",e)}})()},[s]),l)?d.startsWith("image/")?(0,a.jsx)("img",{src:l,alt:"File Preview",className:"max-w-sm"}):d.startsWith("text/")?(0,a.jsx)("pre",{className:"bg-gray-100 p-4 rounded-lg dark:bg-gray-800 whitespace-pre-wrap",children:(0,a.jsx)("code",{children:x})}):d.startsWith("audio/")?(0,a.jsxs)("audio",{controls:!0,children:[(0,a.jsx)("source",{src:l,type:d}),"Your browser does not support the audio element."]}):d.startsWith("video/")?(0,a.jsxs)("video",{controls:!0,children:[(0,a.jsx)("source",{src:l,type:d}),"Your browser does not support the video element."]}):(0,a.jsxs)("section",{className:"p-6 border-dashed border-2 border-gray-200 rounded-lg flex flex-col items-center gap-4",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)(f,{className:"h-10 w-10"}),(0,a.jsx)("div",{className:"text-sm text-gray-500",children:(0,a.jsx)("div",{className:"font-medium",children:"Uploaded Byte file"})})]}),(0,a.jsx)("a",{href:l,download:!0,className:"pl-2 pr-2",children:(0,a.jsxs)(u.z,{size:"sm",variant:"outline",children:[(0,a.jsx)(m,{className:"mr-2 h-4 w-4"}),"Download"]})})]}):(0,a.jsxs)("span",{children:["Loading Artifact...",(0,a.jsx)("br",{}),(0,a.jsx)(p.Z,{})]})};function m(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,a.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,a.jsx)("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]})}function f(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"}),(0,a.jsx)("polyline",{points:"14 2 14 8 20 8"})]})}var j=t(4867),g=t(8639),v=t(273),w=t(2404),y=t(464);function N(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,a.jsx)("polyline",{points:"7 10 12 15 17 10"}),(0,a.jsx)("line",{x1:"12",x2:"12",y1:"15",y2:"3"})]})}function b(e){return(0,a.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M3 6h18"}),(0,a.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,a.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]})}function k(e){return(0,a.jsx)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"m9 18 6-6-6-6"})})}var C=function(){(0,o.v9)(e=>e.environment.environmentLoadedValues);let e=(0,o.v9)(e=>{var s;return null==e?void 0:null===(s=e.userInfo)||void 0===s?void 0:s.userInfoLoadedValues}),[s,t]=(0,r.useState)("bytes"),[p,m]=(0,r.useState)([]),[f,C]=(0,r.useState)(""),[_,L]=(0,r.useState)(!1),z=()=>{navigator.clipboard.writeText(f),L(!0),setTimeout(()=>L(!1),2e3)},Z=(0,o.I0)(),F=(0,o.v9)(e=>e.uploadFiles.uploadFilesLoadedValues||[]),D=(0,o.v9)(e=>e.uploadFiles.uploadFilesLoadedValuesSchema||[]),R=(0,o.v9)(e=>e.uploadFiles.uploadFilesLoadedValuesComponent||[]),[A,S]=(0,r.useState)(null),[U,V]=(0,r.useState)({success:!1,message:""}),W=(0,r.useRef)(null),B=async s=>{try{let t=await n.Z.get("".concat("".concat("http://localhost:8000","/db/artifact_store/get_artifact?file_id=").concat(s)),{responseType:"blob",headers:{accept:"application/json",Authorization:(0,h.Z)(e),superduper_reverse_proxy:"http://localhost:8000"}}),a=new Blob([t.data],{type:t.headers["content-type"]}),r=window.URL.createObjectURL(a),l=document.createElement("a");l.href=r,l.setAttribute("download",s),document.body.appendChild(l),l.click(),document.body.removeChild(l)}catch(e){console.error("Error downloading file:",e)}},I=async t=>{if(!t){V({success:!1,message:"Please select a file to upload."});return}V({success:!0,message:"Uploading. Please wait patiently."});let a=new FormData;a.append("raw",t,t.name);try{let t=await n.Z.put("".concat("".concat("http://localhost:8000","/db/artifact_store/put")),a,{headers:{"Content-Type":"multipart/form-data",accept:"application/json",Authorization:(0,h.Z)(e),superduper_reverse_proxy:"http://localhost:8000"}});t.data?(console.log("FILE UPLOADED",t.data),V({success:!0,message:"Successfully uploaded files"}),Z((0,d.Xs)([...F,t.data.file_id])),Z((0,d.nh)([...D,{_content:{file_id:t.data.file_id,datatype:s}}])),console.log("file uploading log",t.data.file_id),Z((0,d.QL)([...R,{leaf_type:"blob",type_id:"blob",cls:"Artifact",module:"superduperdb/components/datatype",dict:{file_id:t.data.file_id}}])),i.ZP.success("Artifact uploaded successfully")):V({success:!1,message:"Upload failed. Try again with proper datatype."})}catch(e){V({success:!1,message:"Error uploading file."}),console.error("Error uploading file:",e)}},E=e=>()=>{B(e)},T=e=>()=>{console.log("Deleting:",e),Z((0,d.Xs)(F.filter(s=>s!==e))),Z((0,d.nh)(D.filter(s=>s._content.file_id!==e)))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(v.Zb,{className:"w-full",children:[(0,a.jsx)(v.Ol,{className:"space-y-1",children:(0,a.jsx)(v.ll,{children:(0,a.jsx)(c.Z,{label:(0,a.jsx)("span",{className:"text-base font-semibold leading-7 text-gray-900",children:"Upload Artifacts"}),popoverheader:"",popovercontent:(0,a.jsx)("p",{children:"You can upload various artifacts, such as bytes, images, and videos, and reference them by artifact ID."})})})}),(0,a.jsx)(v.aY,{children:(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"col-span-4 mt-4",children:(0,a.jsx)("div",{className:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10",onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault();let s=e.dataTransfer.files[0];S(s),I(s)},ref:W,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(l.Z,{className:"mx-auto h-12 w-12 text-gray-300","aria-hidden":"true"}),(0,a.jsx)("div",{className:"mx-auto mt-2"}),(0,a.jsxs)("div",{className:"mt-4 flex text-sm leading-6 text-gray-600",children:[(0,a.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",children:[(0,a.jsx)("span",{children:"Upload an artifact"}),(0,a.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only",onChange:e=>{S(e.target.files[0]),I(e.target.files[0])}})]}),(0,a.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),(0,a.jsx)("p",{className:"text-xs leading-5 text-gray-600",children:"Max filesize is 1024MB"}),U.message&&(0,a.jsx)("p",{className:"mt-2 text-sm ".concat(U.success?"text-green-500":"text-red-500"),children:U.message})]})})})})}),(0,a.jsx)(v.eW,{className:""})]}),F&&0!==F.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"pt-2 mt-4 pb-4",children:(0,a.jsx)("label",{htmlFor:"component-type",className:"text-sm font-medium leading-6 text-gray-900",children:"Uploaded Artifacts"})}),(0,a.jsx)("div",{children:F.map((e,s)=>(0,a.jsx)(v.Zb,{className:"mb-4",children:(0,a.jsxs)(v.Ol,{className:"flex gap-2 items-start",children:[(0,a.jsxs)("div",{className:"grid gap-0.5",children:[(0,a.jsx)(v.ll,{className:"text-sm",children:(0,a.jsx)("span",{className:"flex justify-end w-full",children:(0,a.jsx)("span",{children:e})})}),(0,a.jsx)(v.SZ,{className:"text-[#666] text-xs leading-none",children:"Refer this artifact with the reference above"})]}),(0,a.jsxs)("div",{className:"flex ml-auto gap-1.5",children:[(0,a.jsxs)(g.Vq,{children:[(0,a.jsx)(g.hg,{asChild:!0,children:(0,a.jsxs)(u.z,{size:"sm",variant:"outline",onClick:()=>{C(e)},children:["View Uploaded File"," ",(0,a.jsx)(k,{className:"ml-1 h-4 w-4"})]})}),(0,a.jsxs)(g.cZ,{className:"sm:max-w-md",children:[(0,a.jsxs)(g.fK,{children:[(0,a.jsx)(g.$N,{children:"Artifact"}),(0,a.jsx)(g.Be,{children:"Refer this artifact with the reference"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)("div",{className:"grid flex-1 gap-2",children:[(0,a.jsx)(y._,{htmlFor:"link",className:"sr-only",children:"Artifact Reference Id"}),(0,a.jsx)(w.I,{id:"link",value:"@artifact/".concat(e),readOnly:!0})]}),(0,a.jsxs)(u.z,{type:"button",size:"sm",className:"px-3",onClick:z,"aria-label":_?"Copied":"Copy",children:[(0,a.jsx)("span",{className:"sr-only",children:_?"Copied":"Copy"}),(0,a.jsx)(j.TIy,{className:"h-4 w-4"})]})]}),(0,a.jsx)(g.Be,{children:(0,a.jsx)(x,{fileId:e,className:"pb-2"})}),(0,a.jsx)(g.cN,{className:"sm:justify-start",children:(0,a.jsxs)(u.z,{size:"sm",variant:"outline",onClick:E(e),children:["Download",(0,a.jsx)(N,{className:"ml-2 w-4 h-4"})," ",(0,a.jsx)("span",{className:"sr-only",children:"Download"})]})})]})]}),(0,a.jsxs)(u.z,{size:"sm",variant:"outline",onClick:E(e),children:[(0,a.jsx)(N,{className:"w-4 h-4"})," ",(0,a.jsx)("span",{className:"sr-only",children:"Download"})]}),(0,a.jsxs)(u.z,{size:"sm",variant:"outline",onClick:T(e),children:[(0,a.jsx)(b,{className:"h-4 w-4"})," ",(0,a.jsx)("span",{className:"sr-only",children:"Delete"})]})]})]})},s))})]})]})}},841:function(e,s,t){t.d(s,{QL:function(){return n},Xs:function(){return r},nh:function(){return l}});var a=t(9642);let r=e=>s=>s({type:a.Tj,payload:e}),l=e=>s=>s({type:a.tX,payload:e}),n=e=>s=>s({type:a.bk,payload:e})}}]);