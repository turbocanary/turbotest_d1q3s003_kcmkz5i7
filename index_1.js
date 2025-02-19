function anotherInsecurePassword() {
  // BAD: the random suffix is not secure
  var suffixArray = new Uint32Array(1);
  window.crypto.getRandomValues(suffixArray);
  var suffix = suffixArray[0];
  var password = "sssAAAA" + suffix;
  return password;
}