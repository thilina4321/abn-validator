# ABN Validator

A lightweight npm package to validate Australian Business Numbers (ABN) based on official guidelines.

## Installation

To install the package, use the following command:

```bash
npm install @abn-validator/abn
```

```
import { validateABN } from '@abn-validator/abn';

const isValid = validateABN('51824753556');
console.log(isValid);
```