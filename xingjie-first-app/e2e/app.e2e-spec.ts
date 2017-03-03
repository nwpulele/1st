import { XingjieFirstAppPage } from './app.po';

describe('xingjie-first-app App', () => {
  let page: XingjieFirstAppPage;

  beforeEach(() => {
    page = new XingjieFirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('xj works!');
  });
});
