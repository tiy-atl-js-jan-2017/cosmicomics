// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { isAnagram, hasJoiner, isFunnyWord } from "../src/js/main";

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('cosmicomics', () => {
  it("we can detect when two words are anagrams", () => {
    let cosmicomics = isAnagram("cosmic", "comics");
    assert.isTrue(cosmicomics);
    let cookiesdough = isAnagram("cookies", "dough");
    assert.isFalse(cookiesdough);
  });

  it("we can detect when two words can be joined together", () => {
    let antan = hasJoiner("ant", "tan");
    assert.isTrue(antan);
    let fredbill = hasJoiner("fred", "bill");
    assert.isFalse(fredbill);
  });

  it("can detect funny words", () => {
    let creatoreactor = isFunnyWord("creator", "reactor");
    assert.isTrue(creatoreactor);
    let dogcat = isFunnyWord("dog", "cat");
    assert.isFalse(dogcat);
  });
});
