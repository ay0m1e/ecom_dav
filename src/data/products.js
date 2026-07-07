// Single source of truth for shop products. Used by the catalog grid,
// the product detail page, and the homepage bestsellers section.

// Prices aren't confirmed for every piece yet, so this is the one place
// that decides how a null price reads across the site.
export function formatPrice(product) {
  if (product.price == null) return "Price on enquiry";
  return `${product.currency} ${product.price.toLocaleString()}`;
}

export const products = [
  {
    id: "gangan-talking-drum",
    name: "Gangan (Talking Drum) — Full Build",
    price: null,
    currency: "NGN",
    category: "drums",
    description:
      "A complete, performance-ready Yoruba talking drum: hand-carved shell, goatskin heads, and hand-woven tension ropes with leather rims, built to project when squeezed under the arm. Supplied with a curved kongo stick and shoulder strap so it's ready to play straight out of the case.",
    images: ["/images/products/gangan-talking-drum.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
  {
    id: "talking-drum-sticks",
    name: "Kongo Drum Sticks (Set)",
    price: null,
    currency: "NGN",
    category: "accessories",
    description:
      "Hand-carved talking-drum sticks in the traditional curved kongo shape, finished with fabric-wrapped grips for a secure hold through long sets. Sold as a matched set to suit the gangan's tonal range.",
    images: ["/images/products/talking-drum-sticks.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
  {
    id: "carved-drum-shell",
    name: "Hand-Carved Drum Shell",
    price: null,
    currency: "NGN",
    category: "components",
    description:
      "A raw, hand-carved gangan shell for drummers building or re-skinning their own instrument. Shaped from a single piece of wood and left unfinished so you can take it straight into your own build.",
    images: ["/images/products/carved-drum-shell.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
  {
    id: "finished-drum-shell-rimmed",
    name: "Finished Shell with Leather Rims",
    price: null,
    currency: "NGN",
    category: "components",
    description:
      "A polished, stained drum shell fitted with hand-wrapped leather rim rings, ready for skinning and roping. A step up from a raw shell for builders who want the rims already seated.",
    images: ["/images/products/finished-drum-shell-rimmed.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
  {
    id: "roped-drum-build",
    name: "Roped Drum (In-Build)",
    price: null,
    currency: "NGN",
    category: "components",
    description:
      "A drum shell with its tension ropes fitted, captured mid-build. Shows the roping pattern that lets a gangan player squeeze the ropes to bend pitch while playing.",
    images: ["/images/products/roped-drum-build.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
  {
    id: "leather-rim-rings",
    name: "Leather Rim Rings (Pair)",
    price: null,
    currency: "NGN",
    category: "accessories",
    description:
      "Hand-stitched leather rim rings used to seat and tension the drum head. Sold as a pair for drummers re-rimming an existing shell.",
    images: ["/images/products/leather-rim-rings.jpeg"],
    available: true,
    purchaseType: "enquire",
    paystackUrl: "",
  },
];
