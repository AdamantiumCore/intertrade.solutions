let app;

beforeAll(async () => {
    const module = await import('../app');
    app = module.default;
});

beforeEach(async () => {
    await global.__CLIENT__.users.deleteMany();
});

global.__APP__ = () => app;