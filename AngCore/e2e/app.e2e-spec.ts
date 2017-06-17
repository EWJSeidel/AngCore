import { AngCorePage } from './app.po';

describe('ang-core App', () => {
  let page: AngCorePage;

  beforeEach(() => {
    page = new AngCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
