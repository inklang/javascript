import { parse } from "../src";

// var base: string = "https://api.github.com/";
let base = "https://api.github.com/";

// var url: @url::url = @url::parse(base);
let url = parse(base);

// @debug::print(url);
console.log(url);
