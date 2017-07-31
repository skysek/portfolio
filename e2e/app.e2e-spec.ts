import { PortefolioPage } from './app.po';

describe('portefolio App', () => {
  let page: PortefolioPage;

  beforeEach(() => {
    page = new PortefolioPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
