import { vbWebPage } from './app.po';

describe('vb-web App', function() {
  let page: vbWebPage;

  beforeEach(() => {
    page = new vbWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
