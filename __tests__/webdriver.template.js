describe('test {{num}}', () => {
  it('works', async () => {
    await browser.get('http://localhost:8000/examples/vanillajs/');
    expect(await browser.getTitle()).toBe('VanillaJS • TodoMVC');
  });
});
