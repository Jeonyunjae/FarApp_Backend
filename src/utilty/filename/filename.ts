var varExtractor = new RegExp("return (.*);");
export function getVariableName<TResult>(name: () => TResult) {
  var m = varExtractor.exec(name + "");
  if (m == null){
      return "";
  }
  return m[1];
}
