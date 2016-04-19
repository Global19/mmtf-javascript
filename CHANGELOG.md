# Change Log
All notable changes to this project will be documented in this file, following the suggestions of [Keep a CHANGELOG](http://keepachangelog.com/). This project adheres to [Semantic Versioning](http://semver.org/).


## [Unreleased]
### Added
- MMTF namespace
- MMTF.decode convenience function that includes msgpack deserialization

### Changed
- decoupled serialization from decoding, no more msgpack deserialization in `decodeMmtf`
- renamed mmtf-decode-helpers to mmtf-utils


## v0.1.0 - 2016-04-13
### Added
- Initial release


[Unreleased]: https://github.com/rcsb/mmtf-javascript/compare/v0.1.0...HEAD