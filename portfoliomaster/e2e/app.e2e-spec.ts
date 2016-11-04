import { PortfoliomasterPage } from './app.po';

describe('portfoliomaster App', function() {
  let page: PortfoliomasterPage;

  beforeEach(() => {
    page = new PortfoliomasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
