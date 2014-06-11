### System Tests

**Copyright © 2010 - May 2014 Rise Vision Incorporated.**

*Use of this software is governed by the GPLv3 license (available in the LICENSE file).*

This repository contains system tests which can be used to verify end user functionality.

On initial run, google sign-in is required so run:
```bash
casperjs --cookies-file=./cookies test utils/sign-in.js --password=password --url=url
```
The url parameter is always optional.  Defaults to rva-test.appspot.com

The cookie file is saved so that passwords don't need to be kept in scripts.  
Subsequent runs will reference the cookie and won't require log-in.

To run tests:
```bash
casperjs --cookies-file=./cookies test tests/connect-then-run.js --subtasks=click-storage
```

Connect-then-run will connect and then run whichever subtasks are indicated on the 
command line.

To send a *screenshot*:
```bash
casperjs --cookies-file=./cookies test utils/main-page-screenshot.js --url=url && \
node utils/send-screenshot.js email@address.com
```
