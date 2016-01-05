// LICENSE : MIT
"use strict";
import codecovFormatter from "textlint-formatter-codecov";
import toLcov from "codecov-json-to-lcov";
/**
 * @param {TextLintResult[]} results
 */
function formatLcov(results) {
    const codecovJSON = codecovFormatter.toJSON(results);
    return toLcov(codecovJSON);
}
export default formatLcov;