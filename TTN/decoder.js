function bytesToFloat(by) {
  var bits = by[0]<<24 | by[1]<<16 | by[2]<<8 | by[3];
  var sign = (bits>>>31 === 0) ? 1.0 : -1.0;
  var e = bits>>>23 & 0xff;
  var m = (e === 0) ? (bits & 0x7fffff)<<1 : (bits & 0x7fffff) | 0x800000;
  var f = sign * m * Math.pow(2, e - 150);
  return f;
} 

function Decoder(bytes, port) {

var decoded = {};
i = 0;
//decoded.AppDataSize = bytes.length;

if (port === 2) {
  decoded.latitude = bytesToFloat(bytes.slice(i,i+=4)) / 100000000;
  decoded.longitude = bytesToFloat(bytes.slice(i,i+=4)) / 100000000;
  decoded.altitude = bytesToFloat(bytes.slice(i,i+=4))/10;
  decoded.hdop = bytesToFloat(bytes.slice(i,i+=4))/10;
  decoded.sats = bytesToFloat(bytes.slice(i,i+=4));
}

return decoded;
}