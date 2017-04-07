import zora from "zora";
import {default as Tree} from "../src/Tree.js";

export default zora()
  .test("Tree", function *(assert) {

    yield cb => new Tree().render(cb);
    assert.ok(true, "function success");

  });
