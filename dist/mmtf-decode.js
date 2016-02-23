var decodeMmtf=function(){"use strict";function r(r){function t(r){for(var t={},n=0;r>n;n++){var e=o();t[e]=o()}return t}function n(t){var n=r.subarray(i,i+t);return i+=t,n}function e(t){var n=r.subarray(i,i+t),e=String.fromCharCode.apply(null,n);return i+=t,e}function a(r){for(var t=new Array(r),n=0;r>n;n++)t[n]=o();return t}function o(){var o,s,c,f=r[i];if(0===(128&f))return i++,f;if(128===(240&f))return s=15&f,i++,t(s);if(144===(240&f))return s=15&f,i++,a(s);if(160===(224&f))return s=31&f,i++,e(s);if(224===(224&f))return o=u.getInt8(i),i++,o;switch(f){case 192:return i++,null;case 194:return i++,!1;case 195:return i++,!0;case 196:return s=u.getUint8(i+1),i+=2,n(s);case 197:return s=u.getUint16(i+1),i+=3,n(s);case 198:return s=u.getUint32(i+1),i+=5,n(s);case 199:return s=u.getUint8(i+1),c=u.getUint8(i+2),i+=3,[c,n(s)];case 200:return s=u.getUint16(i+1),c=u.getUint8(i+3),i+=4,[c,n(s)];case 201:return s=u.getUint32(i+1),c=u.getUint8(i+5),i+=6,[c,n(s)];case 202:return o=u.getFloat32(i+1),i+=5,o;case 203:return o=u.getFloat64(i+1),i+=9,o;case 204:return o=r[i+1],i+=2,o;case 205:return o=u.getUint16(i+1),i+=3,o;case 206:return o=u.getUint32(i+1),i+=5,o;case 207:return i+=9,0;case 208:return o=u.getInt8(i+1),i+=2,o;case 209:return o=u.getInt16(i+1),i+=3,o;case 210:return o=u.getInt32(i+1),i+=5,o;case 211:return i+=9,0;case 212:return c=u.getUint8(i+1),i+=2,[c,n(1)];case 213:return c=u.getUint8(i+1),i+=2,[c,n(2)];case 214:return c=u.getUint8(i+1),i+=2,[c,n(4)];case 215:return c=u.getUint8(i+1),i+=2,[c,n(8)];case 216:return c=u.getUint8(i+1),i+=2,[c,n(16)];case 217:return s=u.getUint8(i+1),i+=2,e(s);case 218:return s=u.getUint16(i+1),i+=3,e(s);case 219:return s=u.getUint32(i+1),i+=5,e(s);case 220:return s=u.getUint16(i+1),i+=3,a(s);case 221:return s=u.getUint32(i+1),i+=5,a(s);case 222:return s=u.getUint16(i+1),i+=3,t(s);case 223:return s=u.getUint32(i+1),i+=5,t(s)}throw new Error("Unknown type 0x"+f.toString(16))}var i=0,u=new DataView(r.buffer);return o()}function t(r,t){var n=new DataView(r.buffer),e=r.byteOffset,a=r.byteLength;t||(t=new Int8Array(a));for(var o=0;a>o;++o)t[o]=n.getInt8(e+o);return t}function n(r,t,n){var e=new DataView(r.buffer),a=r.byteOffset,o=r.byteLength;t||(t=new Int16Array(o/2));for(var i=0,u=o/2;u>i;++i)t[i]=e.getInt16(a+2*i,n);return t}function e(r,t,n){var e=new DataView(r.buffer),a=r.byteOffset,o=r.byteLength;t||(t=new Int32Array(o/4));for(var i=0,u=o/4;u>i;++i)t[i]=e.getInt32(a+4*i,n);return t}function a(r,t,n){var e=r.length,a=1/t;n||(n=new Float32Array(e));for(var o=0;e>o;++o)n[o]=r[o]*a;return n}function o(r,t){var n,e;if(!t){var a=0;for(n=0,e=r.length;e>n;n+=2)a+=r[n+1];t=new r.constructor(a)}var o=0;for(n=0,e=r.length;e>n;n+=2)for(var i=r[n],u=r[n+1],s=0;u>s;++s)t[o]=i,o+=1;return t}function i(r){for(var t=1,n=r.length;n>t;++t)r[t]+=r[t-1];return r}function u(r){return new Int32Array(r.buffer,r.byteOffset,r.byteLength/4)}function s(r,t,n){var e=r.length/2+t.length;n||(n=new Int32Array(e));for(var a=0,o=0,i=0,u=r.length;u>i;i+=2){var s=r[i],c=r[i+1];n[a]=s,0!==i&&(n[a]+=n[a-1]),a+=1;for(var f=0;c>f;++f)n[a]=n[a-1]+t[o],a+=1,o+=1}return n}function c(r,t,o,i,c){var f=i?u(i):void 0,g=s(e(r,void 0,c),n(t,void 0,c),f);return a(g,o,i)}function f(r,t,n,i){var s=n?u(n):void 0,c=o(e(r,void 0,i),s);return a(c,t,n)}function g(n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var a;a=n instanceof Uint8Array?r(n):n;var u,s,g,l,d=a.numBonds||0,y=a.numAtoms||0,w=a.groupTypeList.length/4,v=a.chainList.length/4,U=a.chainsPerModel.length,A=a.groupMap,b=new Uint32Array(d+w),h=new Uint32Array(d+w),m=new Uint8Array(d+w),p=new Uint32Array(y),I=new Float32Array(y),L=new Float32Array(y),C=new Float32Array(y),S=new Float32Array(y),F=new Int32Array(y),O=new Uint8Array(y),x=new Uint8Array(y),B=new Float32Array(y),M=new Uint32Array(w),D=new Uint32Array(w),V=new Uint16Array(w),z=new Uint16Array(w),G=new Int32Array(w),N=new Uint8Array(w),P=new Uint16Array(v),T=new Uint32Array(v),k=new Uint32Array(v),E=new Uint8Array(4*v),j=new Uint32Array(U),q=new Uint32Array(U);if(c(a.xCoordBig,a.xCoordSmall,1e3,I),c(a.yCoordBig,a.yCoordSmall,1e3,L),c(a.zCoordBig,a.zCoordSmall,1e3,C),a.bFactorBig&&a.bFactorSmall&&c(a.bFactorBig,a.bFactorSmall,100,S),a.atomIdList&&i(o(e(a.atomIdList),F)),a.altLabelList){var H=a.altLabelList;for(u=0,s=H.length;s>u;u+=2){var J=H[u];"?"===J?H[u]=0:H[u]=H[u].charCodeAt(0),H[u+1]=parseInt(H[u+1])}o(H,O)}if(a.insCodeList){var K=a.insCodeList;for(u=0,s=K.length;s>u;u+=2){var J=K[u];null===J?K[u]=0:K[u]=K[u].charCodeAt(0),K[u+1]=parseInt(K[u+1])}o(K,x)}a.occList&&f(a.occList,100,B),t(a.chainList,E);var Q,R=a.chainsPerModel,W=0;for(u=0;U>u;++u){for(Q=R[u],j[u]=W,q[u]=Q,g=0;Q>g;++g)P[g+W]=u;W+=Q}var X,Y=a.groupsPerChain,Z=0;for(u=0;v>u;++u){for(X=Y[u],T[u]=Z,k[u]=X,g=0;X>g;++g)M[g+Z]=u;Z+=X}i(o(e(a.groupNumList),G)),e(a.groupTypeList,z),t(a.secStructList,N);var $=0,_=0;for(u=0;w>u;++u){var rr=A[z[u]],tr=rr.atomInfo,nr=tr.length/2,er=rr.bondIndices,ar=rr.bondOrders;for(g=0,l=ar.length;l>g;++g)b[_]=$+er[2*g],h[_]=$+er[2*g+1],m[_]=ar[g],_+=1;for(D[u]=$,V[u]=nr,g=0;nr>g;++g)p[$]=u,$+=1}if(a.bondAtomList){if(a.bondOrderList){var or=a.bondOrderList;m.set(or,_)}var ir=e(a.bondAtomList);for(u=0,s=ir.length;s>u;u+=2)b[_]=ir[u],h[_]=ir[u+1],_+=1}return{bondStore:{atomIndex1:b,atomIndex2:h,bondOrder:m},atomStore:{groupIndex:p,xCoord:I,yCoord:L,zCoord:C,bFactor:S,atomId:F,altLabel:O,insCode:x,occupancy:B},groupStore:{chainIndex:M,atomOffset:D,atomCount:V,groupTypeId:z,groupNum:G,secStruct:N},chainStore:{modelIndex:P,groupOffset:T,groupCount:k,chainName:E},modelStore:{chainOffset:j,chainCount:q},groupMap:A,unitCell:a.unitCell,spaceGroup:a.spaceGroup,bioAssembly:a.bioAssembly,pdbId:a.pdbId,title:a.title,numBonds:d,numAtoms:y,numGroups:w,numChains:v,numModels:U}}return g}();