import markdownToHtml from './markDownToHtml';

describe('markdownToHtml()', () => {
  it('Returns string of HTML tags', async () => {
    expect(await markdownToHtml('## Test Assertion')).toMatchSnapshot();
  });
});
