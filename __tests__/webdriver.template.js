describe('test {{num}}', () => {
  it('works', async () => {
    await browser.get(`${__APP_URL__}/examples/vanillajs/`);
    await browser.wait(until.titleIs('VanillaJS • TodoMVC'), 5000);
    expect(await browser.getTitle()).toBe('VanillaJS • TodoMVC');
  });
});
