import {test} from "tape";
import {default as Tree} from "../src/Tree.js";

test("Tree", assert => {

  new Tree()
    .render(() => {

      assert.true(true, "function success");
      assert.end();

    });

});
