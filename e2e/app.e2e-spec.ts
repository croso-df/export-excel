import { ExcelTestPage } from './app.po';

describe('excel-test App', () => {
  let page: ExcelTestPage;

  beforeEach(() => {
    page = new ExcelTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
