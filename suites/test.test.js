
const sum = () => 2 + 2;

function fetchData(isGood) {
    return new Promise((resolve, reject) => {
        if (!isGood)
            reject("no data fetched");
        resolve("bb the king");
    });
}


// TESTS

test("is fetching data", async () => {
    expect(await fetchData(true)).toBe("bb the king");
});

test("fetching with error", async () => {
    try {
        await fetchData(false);
    }
    catch (e) {
        expect(e).toBe("no data fetched");
    }
});

test("sum 2 + 2 = 4", () => {
    expect(sum()).toBe(4);
})