



# A dump of markdown

This repo houses 1.5mb of markdown and a script to test [micromark] against it,
for performance reasons.

## Use

```sh
# get micromark, and link it
git clone git@github.com:micromark/micromark.git
cd micromark
npm install
npm test
npm link
cd ..
# get this repo, link micromark into it
git clone git@github.com:wooorm/a-dump-of-markdown.git
cd a-dump-of-markdown
npm install
npm link micromark
```

Now you can profile Node:

```sh
# process the markdown in node (e.g., see: <https://v8.dev/docs/profile>)
node --prof example
```

Or to profile in a browser:

```sh
# build a version for a browser.
npm run build
# open `index.html` in default browser.
open index.html
```

## License

This project is not considered open source. Do not take anything from it.
The dump includes:
* [The Open Guide to Equity Compensation](https://github.com/jlevy/og-equity-compensation), which is CC-BY-SA,
* [The Open Guide to Amazon Web Services](https://github.com/open-guides/og-aws), which is CC-BY-SA,
* The fixtures from [remark](https://github.com/remarkjs/remark), which are MIT,
* [Eloquent-JavaScript](https://github.com/marijnh/Eloquent-JavaScript), which is CC-BY-NC.

[micromark]: https://github.com/micromark/micromark
