
export const problemDetailsJson = () => (res) => {
    if (res.headers['content-type'] !== 'application/problem+json; charset=utf-8') {
        throw new Error(`Expected content-type application/problem+json; charset=utf-8 but got ${res.headers['content-type']}`);
    }
};