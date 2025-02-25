import * as array from "../src/index";

class Feed {}

// checking if the type inferance is working.
let feeds: array.Of<Feed> = array.create();
