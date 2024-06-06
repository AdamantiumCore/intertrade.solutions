
export const violation = (property, type) => ({ property, type });

export const problemDetailsJson = () => (res) => {
    if (res.headers['content-type'] !== 'application/problem+json; charset=utf-8') {
        throw new Error(`Expected content-type application/problem+json; charset=utf-8 but got ${res.headers['content-type']}`);
    }
};

export const problemJsonMatcher = (expected) => {
    return (res) => {
        const body = res.body;
        const { type, title, detail, status, violations } = expected;

        expect(body).toEqual(expect.objectContaining({
            type,
            title,
            detail,
            status,
            violations: expect.arrayContaining(violations)
        }));
    };
};

export const badRequestProblemJsonMatcher = (additionalExpected) => {
    const common = {
        type: 'api/bad-request',
        title: 'Bad Request',
        detail: 'Request failed validations',
        status: 400
    };

    return problemJsonMatcher({ ...common, ...additionalExpected });
};

