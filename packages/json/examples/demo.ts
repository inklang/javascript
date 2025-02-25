import * as array from "../../array/src";
import * as _json from "../src";

let json: _json.Value = { results: [ { name: 'test1' }, { name: 'test2' } ] };
let feeds: array.Of<string> = array.create();

for (const feed of _json.asArray(_json.get(json, "results"))) {
  let name = _json.asString(_json.get(feed, "name"));
  feeds.push(name);
}

console.log(feeds);
