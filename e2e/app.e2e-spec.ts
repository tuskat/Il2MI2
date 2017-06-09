import { LalamovePage } from './app.po';

describe('lalamove App', function() {
  let page: LalamovePage;

  beforeEach(() => {
    page = new LalamovePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
