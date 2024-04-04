import { existsSync, promises } from 'node:fs';
import { Buffer } from 'node:buffer';
import { getQuery } from 'file:///Users/rezajafar/peakofeloquence-site/node_modules/h3/dist/index.mjs';
import { join } from 'file:///Users/rezajafar/peakofeloquence-site/node_modules/pathe/dist/index.mjs';
import sizeOf from 'file:///Users/rezajafar/peakofeloquence-site/node_modules/image-size/dist/index.js';
import { defu } from 'file:///Users/rezajafar/peakofeloquence-site/node_modules/defu/dist/defu.mjs';
import { withoutLeadingSlash } from 'file:///Users/rezajafar/peakofeloquence-site/node_modules/ufo/dist/index.mjs';
import { a as useNitroCache, b as useNitroOrigin, u as useRuntimeConfig } from '../runtime.mjs';

async function fetchOptionsCached(e, path) {
  const key = [
    withoutLeadingSlash(path === "/" || !path ? "index" : path).replaceAll("/", "-"),
    "options"
  ].join(":");
  const { cachedItem, update } = await useNitroCache(e, "nuxt-og-image", {
    key,
    // allow internal requests to be cached for 5 seconds
    cacheTtl: 5 * 1e3,
    cache: !false,
    headers: false
  });
  if (cachedItem)
    return cachedItem;
  const options = await fetchOptions(e, path);
  await update(options);
  return options;
}
async function fetchOptions(e, path) {
  const options = await globalThis.$fetch("/api/og-image-options", {
    query: {
      path
    },
    responseType: "json"
  });
  return defu(
    { requestOrigin: useNitroOrigin(e) },
    options,
    // use query data
    getQuery(e)
  );
}
function base64ToArrayBuffer(base64) {
  const buffer = Buffer.from(base64, "base64");
  return new Uint8Array(buffer).buffer;
}
function r(base, key) {
  return join(base, key.replace(/:/g, "/"));
}
async function readPublicAsset(file, encoding) {
  const { assetDirs } = useRuntimeConfig()["nuxt-og-image"];
  for (const assetDir of assetDirs) {
    const path = r(assetDir, file);
    if (existsSync(path))
      return await promises.readFile(path, { encoding });
  }
}
async function readPublicAssetBase64(file) {
  const base64 = await readPublicAsset(file, "base64");
  if (base64) {
    const dimensions = await sizeOf(Buffer.from(base64, "base64"));
    return {
      src: toBase64Image(file, base64),
      ...dimensions
    };
  }
}
function toBase64Image(fileName, data) {
  const base64 = typeof data === "string" ? data : Buffer.from(data).toString("base64");
  let type = "image/jpeg";
  const ext = fileName.split(".").pop();
  if (ext === "svg")
    type = "image/svg+xml";
  else if (ext === "png")
    type = "image/png";
  return `data:${type};base64,${base64}`;
}

export { readPublicAssetBase64 as a, base64ToArrayBuffer as b, fetchOptionsCached as f, readPublicAsset as r, toBase64Image as t };
//# sourceMappingURL=utils.mjs.map
