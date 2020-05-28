import markDownToHtml from './markDownToHtml';

describe('markDownToHtml()', () => {
  it('Returns string of HTML tags', async () => {
    expect(await markDownToHtml('## Test Assertion')).toMatchSnapshot();
  });
});
