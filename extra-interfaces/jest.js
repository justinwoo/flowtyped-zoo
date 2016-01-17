type jest$Suite = () => void;
type jest$Test = (done: () => void) => void;

declare function describe(name: string, suite: jest$Suite): void;
declare function it(name: string, test: jest$Test): void;
