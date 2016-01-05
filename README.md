# textlint-formatter-lcov

[textlint](https://github.com/textlint/textlint "textlint") formatter for lcov format.

## Installation

    npm install textlint-formatter-lcov

## Usage

    npm install -D textlint textlint-formatter-lcov
    textlint -f lcov README.md

### Example Usage

textlint with [Codecov](https://codecov.io/ "Codecov - Code Coverage").

    npm install -D textlint textlint-formatter-lcov codecov.io
    $(npm bin)/textlint -f lcov example/README.md | $(npm bin)/codecov
    

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT