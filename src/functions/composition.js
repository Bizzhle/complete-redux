//function composition
import { lowerCase } from "lodash";
import { compose, pipe } from "lodash/fp";

let input = "   javascript   ";
// let output = `<div>${str}</div>`

const trim = (str) => str.trim();
let wrapInDiv = (str) => `<div>${str}</div>`;
// convert to currying
let wrap = (type) => (str) => `<${type}>${str}</${type}`;

const toLowerCase = (str) => str.toLowercase();

const transform = pipe(trim, lowerCase, wrap("div"));
transform(input);

const result = wrapInDiv(toLowerCase(trim(input)));
