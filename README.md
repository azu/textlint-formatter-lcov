# textlint-formatter-lcov

[textlint](https://github.com/textlint/textlint "textlint") formatter for [lcov](http://ltp.sourceforge.net/coverage/lcov/geninfo.1.php) format.

## Installation

    npm install textlint-formatter-lcov

## Usage

    npm install -D textlint textlint-formatter-lcov
    textlint -f lcov README.md

### Example Usage

textlint with [Codecov](https://codecov.io/ "Codecov - Code Coverage").

    npm install -D textlint textlint-formatter-lcov codecov.io
    $(npm bin)/textlint -f lcov example/README.md | $(npm bin)/codecov
    
Result: [![codecov.io](https://codecov.io/github/azu/textlint-formatter-lcov/coverage.svg?branch=master)](https://codecov.io/github/azu/textlint-formatter-lcov?branch=master)

![result](https://monosnap.com/file/1Nd1VvZIAySOr8i2SDYD954cid0r30.png)

## Similar formatter

- [textlint-formatter-codecov](https://github.com/azu/textlint-formatter-codecov "textlint-formatter-codecov")
    - for [Codecov](https://codecov.io/ "Codecov - Code Coverage")

## FAQ

### Which formatter is better for Code Coverage(Text Coverage)?

We recommended that use [Codecov](https://codecov.io/ "Codecov - Code Coverage") with [textlint-formatter-codecov](https://github.com/azu/textlint-formatter-codecov "textlint-formatter-codecov").
Because, [Codecov JSON](https://gist.github.com/codecov-io/96e1addb96856a9034c2 "Codecov JSON") support `messages`.

![messsage](https://monosnap.com/file/bthUiT82JwLp7VU8tJcYWNaMCQuXTN.png)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT