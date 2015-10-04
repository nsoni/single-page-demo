# Single-Page-Demo


## How to setup

You need to have Node.js and Gulp installed.

### Installing on Ubuntu

```bash
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo npm install -g gulp
```

### Installing on Mac OS X

This instruction uses HomeBrew package manager. Refer
[this article](http://thechangelog.com/install-node-js-with-homebrew-on-os-x/)
for details.

```bash
$ brew install node
$ sudo npm install -g gulp
```

### Preparing the repo

```bash
$ git clone https://github.com/nsoni/single-page-demo.git
$ cd single-page-demo
$ npm install
```

Now install and run http-server by using command

```bash
$ npm install http-server
$ http-server .
```


## Usage

After _setup_ is done, run `gulp` command to build assets.

```bash
$ gulp
```