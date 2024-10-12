export function slugNameconverter(name: string) {
  return name.toLowerCase().replace(/[- ]+/g, "-");
}
