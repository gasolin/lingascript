# 0.-.- In Porgress

- Wrap keyword detector as functions #18
- Show localized diagnostic message in command line tool by default #21
- Document `tsc --locale` usage in readme

Keywords change:
- Traditional Chinese
  - while 每當 -> 直到 #20
- Simplified Chinese
  - while 每当 -> 直到 #20

# 0.2.0 (2019/2/14)

- Based on TypeScript v3.3.1
- Support languages:
  - Simplified Chinese (`lingascript-cn`)
  - Traditional Chinese (`lingascript-tw`)

- Update issue templates
- Add npm badges for support language packages
- Add Simplified Chinese Readme #11, thanks @nobodxbodon

Keywords change:
- Traditional Chinese
  - let 變量 -> 變數 #13
  - const 常量 -> 常數
  - var 全域變量 -> 全域變數
  - async 異步 -> 非同步 #14

# 0.1.1 (2019/2/13) Initial Release

- Based on TypeScript v3.3.1
- Support languages:
  - Simplified Chinese (no npm package yet, see #11)
  - Traditional Chinese (`lingascript-tw`)

- patch TypeScript through npm scripts and file-patch
- Basic tests passed
- (Native) Language specific readme
