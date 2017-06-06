import { SolrdemoPage } from './app.po';

describe('solrdemo App', () => {
  let page: SolrdemoPage;

  beforeEach(() => {
    page = new SolrdemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
