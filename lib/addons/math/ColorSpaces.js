// Shim for the r160 vendored three: only the two colour-space constants KTX2Loader imports.
// (In r186 these are plain colour-space id strings; our KTX2 textures are sRGB/linear, so the
// P3 path is never taken at runtime.)
export const DisplayP3ColorSpace = "display-p3";
export const LinearDisplayP3ColorSpace = "display-p3-linear";
