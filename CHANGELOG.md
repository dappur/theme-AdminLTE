# Changelog

## [Unreleased]
### No Changes

## [4.0.0] - 2019-09-24
### Fixed
- Removed provider button from admin

## [4.0.0-RC1] - 2019-07-14
### Added
- Google Analytics Embed API and javascript to `dashboard.twig`
- Delete option to settings
- Connection error SWAL2 popup for the CSRF js.

### Changed
- Disabled editing home page name or route pattern
- Email Details Layout with Status

### Fixed
- Issue when adding color config option while feild was disabled.
- Fixed ability to edit the color config option

### Removed
- Plain text option from all email pages.  This is now handled automatically.
- Unecessary Files

## [1.0.1] - 2018-10-11
### Changed
- `inc/admin-sidebar.twig` to support the `config_boolean` menu item option.
- `menus.twig` to support the `config_boolean` menu item option.

### Removed
- `my-account.twig` no longer needed.

## [1.0.0] - 2018-09-16
### Notes
This is the initial release that separates the themes from the main repository.  This creates an additional installation step, which will be mitigated by the [dApp CLI](https://github.com/dappur/dapp) installation process.

[Unreleased]: https://github.com/dappur/theme-dappur/compare/v4.0.0-RC1...HEAD
[4.0.0-RC1]: https://github.com/dappur/theme-dappur/compare/v1.0.1...v4.0.0-RC1
[1.0.1]: https://github.com/dappur/theme-AdminLTE/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/dappur/theme-AdminLTE/tree/v1.0.0
