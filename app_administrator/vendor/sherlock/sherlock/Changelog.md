Changelog
========

Master
------

0.1.14
------
 - Fix: Facets now accepts arrays and inline arguments

0.1.14
------
 - Fix: OrFilter now works appropriately if _cache is specified with multiple filters/queries
 - Fix: AndFilter now behaves like OrFilter

0.1.13
------
 - Fix: Fix _Analyzer mapping
 - Change: RawRequest added, RawQuery "downgraded" to affecting only "query: {}" portion of query, RawFilter + RawFacet added
 - Fix: Bool Filter/Query fixed when a single object is provided
 - Fix: Throw a new DocumentMissingException when attempting to delete a nonexistent document
 - Fix: FilterQuery now correctly converts child filter data to json
 - Feature: Add boost param to Term Query
 - Feature: Add fields param to Search request
 - Feature: Add GeoPoint mappings
 - In-progress: Refactor components to use static methods
 - In-progress: Refactor components to set only arguments that have been sepcified (no more defaults)
 - Fix: General refactoring
 - Fix: CustomFilterScore now supports the boost parameter
 - Addition: custom CodeSniffer code standard now included in repo for contributors to use

0.1.12
------
 - Feature: Performance enhancements to RollingCurl when the pending request buffer is large
 - Feature: Add filter_facets to facets
 - Feature: Add Update capability to indexing operations
 - Feature: Add _Analyzer mapping support

0.1.11
------
 - Fix: Mappings on index creation were not working properly

0.1.10
------
 - Fix: Search requests were using malformed JSON
 - Fix: All requests lacked appropriate Content-Type headers, leading to HTTP requests with url-encoding specified

0.1.9
-----
 - Fix: Relax the version requirement for Event-Dispatcher to ~2.1

0.1.8
-----
 - Internal: Replace Guzzle with RollingCurl (also [Fixes #20](https://github.com/polyfractal/sherlock/issues/20))
 - Feature: Batch document indexing. [Closes #24](https://github.com/polyfractal/sherlock/issues/24)
 - Feature: Some of the more commone ES errors are now returned as Exceptions. [Closes #21](https://github.com/polyfractal/sherlock/issues/21)
 - Fix: Raw query now is 100% "raw", rather than wrapping inside a "query". [Closes #23](https://github.com/polyfractal/sherlock/pull/23)

0.1.7
-----
 - Breaking Change: Sherlock static builder functions refactored with consistent naming scheme [Fixes #5](https://github.com/polyfractal/sherlock/issues/5)
 - Internal: Refactor composeFinalQuery to use assoc arrays instead of strings [Fixes #13](https://github.com/polyfractal/sherlock/issues/13)
 - Feature: Add support for all facets (Terms, Range, Histogram, DateHistogram, Filter, Query, Statistical, TermsStats, Geodistance) [Closes #16](https://github.com/polyfractal/sherlock/issues/16)

0.1.6
-----
 - Fix: Sort ordering fixed, uses "order" instead of "sort_order" [Fixes #14](https://github.com/polyfractal/sherlock/pull/14)
 
0.1.5
-----
 - Fix: Change default logging state to disabled [474fa95](https://github.com/polyfractal/sherlock/commit/474fa957c61b550fa043315757a4e279179dc0d8)
 - Fix: Integrate Symfony EventDispatcher to decouple nodes from Requests. [Fixes #10](https://github.com/polyfractal/sherlock/issues/10)
 - Feature: Enable custom logging handlers [Usage](https://github.com/polyfractal/sherlock/issues/12#issuecomment-14682664) [474fa95](https://github.com/polyfractal/sherlock/commit/474fa957c61b550fa043315757a4e279179dc0d8)

0.1.4
-----
 - Fix: Updated Analog dependency to remove a logging bug [4c3c69e](https://github.com/polyfractal/sherlock/commit/4c3c69e59365784e70c2ec8d0d83bc8d5a060fda)

0.1.3
------
 - Feature: Enable sorting on Search Requests
 - Fix: From/Size fixed
 - Fix: Match query now allows 'type' to be set
 - Fix: Default fuzziness for Match query set to 'null'
 - Fix: Default fuzziness for MultiMatch query set to 'null'



