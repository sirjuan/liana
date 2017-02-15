import { LianaPage } from './app.po';

describe('liana App', function() {
  let page: LianaPage;

  beforeEach(() => {
    page = new LianaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
