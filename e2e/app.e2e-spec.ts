import { QuestrWebPage } from './app.po';

describe('questr-web App', function() {
  let page: QuestrWebPage;

  beforeEach(() => {
    page = new QuestrWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
