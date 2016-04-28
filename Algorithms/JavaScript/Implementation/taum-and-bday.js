/**
 * Title          Taum and B'day
 * URL            https://www.hackerrank.com/challenges/taum-and-bday
 *
 * Author         Norman Gamage <norman.gamage@gmail.com>
 * Version        1.0
 * Last Update    2016 Apr 28
 */

function main() {
  // Read input
  var T = Number(readLine()),
    i, t, b, w, x, y, z, b1, b2, w1, w2, bmin, wmin;

  // Calculate + Output
  for (i = 0; i < T; i++) {
    t = readLine().split(' ').map(Number);
    b = new BigNumber(t[0]);
    w = new BigNumber(t[1]);
    t = readLine().split(' ').map(Number);
    x = new BigNumber(t[0]);
    y = new BigNumber(t[1]);
    z = new BigNumber(t[2]);

    b1 = b.multiply(x);
    b2 = b.multiply(y.add(z));
    w1 = w.multiply(y);
    w2 = w.multiply(x.add(z));
    bmin = (b1.compare(b2) < 0 ? b1 : b2);
    wmin = (w1.compare(w2) < 0 ? w1 : w2);

    console.log(bmin.add(wmin).toString());
  }
}

/**
 * Big Number
 * Author     Jonas Raoni Soares Silva
 * URL        http://jsfromhell.com/classes/bignumber
 * Version    rev. #4
 * 
 * Minified using Google Closure Compiler https://closure-compiler.appspot.com/ 
 * with optimization level: Simple
 */
var BigNumber=function(a,b,c){var d;if(a instanceof BigNumber){for(d in{precision:0,roundType:0,_s:0,_f:0})this[d]=a[d];this._d=a._d.slice()}else{this.precision=isNaN(b=Math.abs(b))?BigNumber.defaultPrecision:b;this.roundType=isNaN(c=Math.abs(c))?BigNumber.defaultRoundType:c;this._s="-"==(a+="").charAt(0);this._f=((a=a.replace(/[^\d.]/g,"").split(".",2))[0]=a[0].replace(/^0+/,"")||"0").length;for(d=(a=this._d=(a.join("")||"0").split("")).length;d;a[--d]=+a[d]);this.round()}};
with({$:BigNumber,o:BigNumber.prototype})$.ROUND_HALF_EVEN=($.ROUND_HALF_DOWN=($.ROUND_HALF_UP=($.ROUND_FLOOR=($.ROUND_CEIL=($.ROUND_DOWN=($.ROUND_UP=0)+1)+1)+1)+1)+1)+1,$.defaultPrecision=40,$.defaultRoundType=$.ROUND_HALF_UP,o.add=function(a){if(this._s!=(a=new BigNumber(a))._s)return a._s^=1,this.subtract(a);var b=new BigNumber(this),c=b._d,d=a._d,e=b._f,f=a._f;a=Math.max(e,f);var g;e!=f&&(0<(f=e-f)?b._zeroes(d,f,1):b._zeroes(c,-f,1));g=(e=c.length)==(f=d.length)?c.length:(0<(f=e-f)?b._zeroes(d,
f):b._zeroes(c,-f)).length;for(e=0;g;e=(c[--g]=c[g]+d[g]+e)/10>>>0,c[g]%=10);return e&&++a&&c.unshift(e),b._f=a,b.round()},o.subtract=function(a){if(this._s!=(a=new BigNumber(a))._s)return a._s^=1,this.add(a);var b=new BigNumber(this),c=b.abs().compare(a.abs())+1,d=c?b:a;a=c?a:b;var e=d._f,f=a._f,g=e,h,d=d._d;a=a._d;e!=f&&(0<(f=e-f)?b._zeroes(a,f,1):b._zeroes(d,-f,1));for(h=(e=d.length)==(f=a.length)?d.length:(0<(f=e-f)?b._zeroes(a,f):b._zeroes(d,-f)).length;h;){if(d[--h]<a[h]){for(e=h;e&&!d[--e];d[e]=
9);--d[e];d[h]+=10}a[h]=d[h]-a[h]}return c||(b._s^=1),b._f=g,b._d=a,b.round()},o.multiply=function(a){var b=new BigNumber(this),c=b._d.length>=(a=new BigNumber(a))._d.length,d=(c?b:a)._d,e=(c?a:b)._d,f=d.length,g=e.length,h=new BigNumber,k,l,m;for(k=g;k;c&&m.unshift(c),h.set(h.add(new BigNumber(m.join("")))))for(m=Array(g- --k).join("0").split(""),c=0,l=f;l;c+=d[--l]*e[k],m.unshift(c%10),c=c/10>>>0);return b._s=b._s!=a._s,b._f=((c=f+g-b._f-a._f)>=(l=(b._d=h._d).length)?this._zeroes(b._d,c-l+1,1).length:
l)-c,b.round()},o.divide=function(a){if("0"==(a=new BigNumber(a)))throw Error("Division by 0");if("0"==this)return new BigNumber;var b=new BigNumber(this),c=b._d,d=a._d,e=c.length-b._f,f=d.length-a._f,g=new BigNumber,h=0,k,l=1,m=k=0;g._s=b._s!=a._s;g.precision=Math.max(b.precision,a.precision);g._f=+g._d.pop();e!=f&&b._zeroes(e>f?d:c,Math.abs(e-f));a._f=d.length;d=a;d._s=!1;d=d.round();for(a=new BigNumber;"0"==c[0];c.shift());a:do{b=k=0;for("0"==a&&(a._d=[],a._f=0);h<c.length&&-1==a.compare(d);++h){(b=
h+1==c.length,!l&&1<++k||(m=b&&"0"==a&&"0"==c[h]))&&(g._f==g._d.length&&++g._f,g._d.push(0));"0"==c[h]&&"0"==a||(a._d.push(c[h]),++a._f);if(m)break a;if(b&&-1==a.compare(d)&&(g._f==g._d.length&&++g._f,1)||(b=0))for(;g._d.push(0),a._d.push(0),++a._f,-1==a.compare(d););}if(l=0,-1==a.compare(d)&&!(b=0))for(;b?g._d.push(0):b=1,a._d.push(0),++a._f,-1==a.compare(d););e=new BigNumber;for(k=0;a.compare(y=e.add(d))+1&&++k;e.set(y));a.set(a.subtract(e));!b&&g._f==g._d.length&&++g._f;g._d.push(k)}while((h<c.length||
"0"!=a)&&g._d.length-g._f<=g.precision);return g.round()},o.mod=function(a){return this.subtract(this.divide(a).intPart().multiply(a))},o.pow=function(a){var b=new BigNumber(this),c;if(0==(a=(new BigNumber(a)).intPart()))return b.set(1);for(c=Math.abs(a);--c;b.set(b.multiply(this)));return 0>a?b.set((new BigNumber(1)).divide(b)):b},o.set=function(a){return this.constructor(a),this},o.compare=function(a){var b=this,c=this._f;a=new BigNumber(a);var d=a._f,e=[-1,1],f,g;if(b._s!=a._s)return b._s?-1:1;
if(c!=d)return e[c>d^b._s];c=(b=b._d).length;d=(a=a._d).length;f=-1;for(g=Math.min(c,d);++f<g;)if(b[f]!=a[f])return e[b[f]>a[f]^b._s];return c!=d?e[c>d^b._s]:0},o.negate=function(){var a=new BigNumber(this);return a._s^=1,a},o.abs=function(){var a=new BigNumber(this);return a._s=0,a},o.intPart=function(){return new BigNumber((this._s?"-":"")+(this._d.slice(0,this._f).join("")||"0"))},o.valueOf=o.toString=function(){return(this._s?"-":"")+(this._d.slice(0,this._f).join("")||"0")+(this._f!=this._d.length?
"."+this._d.slice(this._f).join(""):"")},o._zeroes=function(a,b,c){c=["push","unshift"][c||0];for(++b;--b;a[c](0));return a},o.round=function(){if("_rounding"in this)return this;var a=BigNumber,b=this.roundType,c=this._d,d,e,f;for(this._rounding=!0;1<this._f&&!c[0];--this._f,c.shift());d=this._f;e=this.precision+d;for(f=c[e];c.length>d&&!c[c.length-1];c.pop());d=(this._s?"-":"")+(e-d?"0."+this._zeroes([],e-d-1).join(""):"")+1;c.length>e&&(f&&(b==a.DOWN?0:b==a.UP||(b==a.CEIL?!this._s:b==a.FLOOR?this._s:
b==a.HALF_UP?5<=f:b==a.HALF_DOWN?5<f:b==a.HALF_EVEN&&5<=f&&c[e-1]&1))&&this.add(d),c.splice(e,c.length-e));return delete this._rounding,this};