# Scrape MojeO2 Invoices

[![Greenkeeper badge](https://badges.greenkeeper.io/TomasHubelbauer/scrape-moje-o2-invoices.svg)](https://greenkeeper.io/)

A utility for automatically logging onto MojeO2 and downloading invoice PDFs.

## Running

**Prerequisites:**

- Node 9.3.0+
- Yarn 1.0.0+

```sh
# Fill in the phone number or leave the `phoneNumber` field blank to type it in yourself
echo "export default { phoneNumber: 000123456 };" > secrets.mjs # Git ignored
node --experimental-modules index.mjs
```

## Licensing

This repository is licensed under the terms of the [MIT license](LICENSE.md).

## Contributing

See [development plan](doc/tasks.md).

## Studying

See [development log](doc/notes.md).
