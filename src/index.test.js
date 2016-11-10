import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our First Test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Index.html', () => {
  it('should read Javascript Starter Kit', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Javascript Starter Kit');
      done();
      window.close();
    });
  });
});

