/*
 * Gallery content. Edit the order, titles, alt text, or category here.
 * Each filename points to an optimized image in ./images and each thumbnail
 * points to the matching 600px preview.
 */
const photoGroups = [
  { id: "all", label: "All pieces" },
  { id: "decor", label: "Wall art & mandalas" },
  { id: "devotional", label: "Devotional folk art" },
  { id: "paper", label: "Paper craft & projects" },
  { id: "keepsakes", label: "Decor & keepsakes" }
];

const photos = [
  {
    filename: "orange-mirrorwork-mandala.jpg", thumbnail: "orange-mirrorwork-mandala-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.07 AM (2).jpeg",
    group: "decor", alt: "A circular orange and red mandala with turquoise rings, bright yellow petals, and square mirror details.", title: "Orange and turquoise mandala", width: 736, height: 920
  },
  {
    filename: "jagannath-trio-plaques.jpg", thumbnail: "jagannath-trio-plaques-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.09 AM (1).jpeg",
    group: "devotional", alt: "Three small circular Jagannath face plaques arranged side by side, each with a colorful flower-shaped border.", title: "Jagannath trio plaques", width: 1600, height: 736
  },
  {
    filename: "krishna-flute-wall-plaque.jpg", thumbnail: "krishna-flute-wall-plaque-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.10 AM (1).jpeg",
    group: "devotional", alt: "A round devotional plaque showing stylized blue hands holding a flute against a turquoise center, framed by red and peach petals.", title: "Flute and floral wall plaque", width: 859, height: 736
  },
  {
    filename: "durga-folk-art-plaque.jpg", thumbnail: "durga-folk-art-plaque-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.10 AM.jpeg",
    group: "devotional", alt: "A circular folk-art plaque with a painted goddess face on a deep blue ground, surrounded by yellow and white petal motifs.", title: "Goddess folk-art plaque", width: 736, height: 1308
  },
  {
    filename: "pink-mirrorwork-mandala.jpg", thumbnail: "pink-mirrorwork-mandala-thumb.jpg", original: "IMG_20230219_180118.jpg",
    group: "decor", alt: "A round pink mirrorwork mandala with concentric petal shapes, photographed on a woven surface.", title: "Pink mirrorwork mandala", width: 1600, height: 1200
  },
  {
    filename: "deity-plate-in-hands.jpg", thumbnail: "deity-plate-in-hands-thumb.jpg", original: "IMG_20241015_202605.jpg",
    group: "devotional", alt: "Hands hold a colorful circular artwork with a devotional scene and layered floral border.", title: "A piece held in hand", width: 1600, height: 1294
  },
  {
    filename: "concentric-color-mandala.jpg", thumbnail: "concentric-color-mandala-thumb.jpg", original: "IMG_20230727_220414.jpg",
    group: "decor", alt: "A circular folk-art design built from vivid rings of red, yellow, green, and blue shapes.", title: "Concentric color mandala", width: 1200, height: 1600
  },
  {
    filename: "turquoise-mirrorwork-hanging.jpg", thumbnail: "turquoise-mirrorwork-hanging-thumb.jpg", original: "IMG_20240813_214528.jpg",
    group: "decor", alt: "A turquoise and magenta circular wall hanging with mirror details and small heart-shaped pendants.", title: "Turquoise mirrorwork hanging", width: 1200, height: 1600
  },
  {
    filename: "jagannath-round-plaque.jpg", thumbnail: "jagannath-round-plaque-thumb.jpg", original: "IMG_20261018_180607.jpg",
    group: "devotional", alt: "A bright circular plaque showing the Jagannath trinity against a turquoise background.", title: "Jagannath round plaque", width: 1280, height: 1600
  },
  {
    filename: "shell-mirror-hanging.jpg", thumbnail: "shell-mirror-hanging-thumb.jpg", original: "IMG_20230120_175839.jpg",
    group: "decor", alt: "A blue and white shell-shaped wall hanging with a small central mirror and dangling ornaments.", title: "Blue shell mirror hanging", width: 1251, height: 1600
  },
  {
    filename: "red-square-floor-art.jpg", thumbnail: "red-square-floor-art-thumb.jpg", original: "IMG_20230816_223515.jpg",
    group: "decor", alt: "A square red decorative floor design with yellow side panels, floral motifs, and a bright center.", title: "Red square decorative design", width: 1600, height: 1200
  },
  {
    filename: "folded-paper-boats.jpg", thumbnail: "folded-paper-boats-thumb.jpg", original: "IMG_20231126_203803.jpg",
    group: "paper", alt: "A row of folded paper boats in pastel colors, each decorated with a smiling sun-like face.", title: "Folded paper boats", width: 1600, height: 1200
  },
  {
    filename: "ganesha-red-plaque.jpg", thumbnail: "ganesha-red-plaque-thumb.jpg", original: "IMG_20240306_080406.jpg",
    group: "devotional", alt: "A red square plaque with a painted Ganesha motif, green border, and hanging bead tassel.", title: "Ganesha on a red plaque", width: 1200, height: 1600
  },
  {
    filename: "jagannath-diamond-plaque.jpg", thumbnail: "jagannath-diamond-plaque-thumb.jpg", original: "IMG_20261018_181831.jpg",
    group: "devotional", alt: "A diamond-shaped wall plaque with a colorful Jagannath face, bright beads, and patterned border.", title: "Jagannath diamond plaque", width: 1281, height: 1600
  },
  {
    filename: "color-grid-board.jpg", thumbnail: "color-grid-board-thumb.jpg", original: "IMG_20230816_200150.jpg",
    group: "decor", alt: "A square handmade board arranged as a checkerboard of green, yellow, red, and blue patterns.", title: "Color-grid board", width: 1200, height: 1600
  },
  {
    filename: "peacock-arch-plaque.jpg", thumbnail: "peacock-arch-plaque-thumb.jpg", original: "IMG_20250606_230248.jpg",
    group: "decor", alt: "A tall pink plaque with a painted peacock beneath an arched yellow and green floral frame.", title: "Peacock arch plaque", width: 1200, height: 1600
  },
  {
    filename: "colorful-diya-cups.jpg", thumbnail: "colorful-diya-cups-thumb.jpg", original: "IMG_20251017_002219.jpg",
    group: "keepsakes", alt: "Rows of small handmade diya cups in vivid pink, orange, green, yellow, and blue.", title: "Colorful diya cups", width: 1600, height: 842
  },
  {
    filename: "satyam-mamta-name-plaque.jpg", thumbnail: "satyam-mamta-name-plaque-thumb.jpg", original: "IMG_20251016_224213.jpg",
    group: "keepsakes", alt: "A decorative blue and magenta name plaque reading Satyam & Mamta, accented with flowers and reflective details.", title: "Satyam & Mamta name plaque", width: 1600, height: 1200
  },
  {
    filename: "golden-figure-plaque.jpg", thumbnail: "golden-figure-plaque-thumb.jpg", original: "IMG_20260321_233301.jpg",
    group: "devotional", alt: "A tall orange and blue devotional panel with a golden figure surrounded by small floral details.", title: "Golden figure plaque", width: 1200, height: 1600
  },
  {
    filename: "painted-folk-art-panels.jpg", thumbnail: "painted-folk-art-panels-thumb.jpg", original: "IMG_20260321_233456.jpg",
    group: "devotional", alt: "Three colorful folk-art panels featuring devotional figures, small houses, and patterned borders.", title: "Painted folk-art panels", width: 1600, height: 609
  },
  {
    filename: "green-decorative-organizer.jpg", thumbnail: "green-decorative-organizer-thumb.jpg", original: "IMG_20260321_233341.jpg",
    group: "keepsakes", alt: "A green handmade decorative organizer with yellow floral panels, a pink border, and small compartments.", title: "Green decorative organizer", width: 1200, height: 1600
  },
  {
    filename: "floral-square-plaque.jpg", thumbnail: "floral-square-plaque-thumb.jpg", original: "IMG_20230914_200224.jpg",
    group: "decor", alt: "A square floral plaque with a blue outer border and a red, green, and yellow mandala center.", title: "Floral square plaque", width: 1200, height: 1600
  },
  {
    filename: "india-flag-model.jpg", thumbnail: "india-flag-model-thumb.jpg", original: "IMG_20250820_223450.jpg",
    group: "paper", alt: "A handmade India-themed display with a tricolor flag above a small road and green landscape.", title: "India flag model", width: 1200, height: 1600
  },
  {
    filename: "leaf-pattern-craft-board.jpg", thumbnail: "leaf-pattern-craft-board-thumb.jpg", original: "IMG-20220909-WA0013.jpg",
    group: "decor", alt: "A dark oval craft board decorated with rows of colorful raised leaf-shaped pieces.", title: "Leaf-pattern craft board", width: 960, height: 1280
  },
  {
    filename: "blue-ribbon-wall-hanging.jpg", thumbnail: "blue-ribbon-wall-hanging-thumb.jpg", original: "IMG-20210208-WA0010.jpg",
    group: "paper", alt: "A blue and orange handmade wall hanging with a central paper form and ribbon-like side pieces.", title: "Blue ribbon wall hanging", width: 594, height: 557
  },
  {
    filename: "home-sweet-home-plaque.jpg", thumbnail: "home-sweet-home-plaque-thumb.jpg", original: "IMG-20220217-WA0002.jpg",
    group: "keepsakes", alt: "A colorful house-shaped wall plaque with the words Home Sweet Home and small decorative details.", title: "Home Sweet Home plaque", width: 1600, height: 1200
  },
  {
    filename: "painted-goddess-face-two.jpg", thumbnail: "painted-goddess-face-two-thumb.jpg", original: "IMG-20231121-WA0045.jpg",
    group: "devotional", alt: "A close view of a painted goddess face framed by layered blue, red, and yellow petals.", title: "Painted goddess face · red", width: 588, height: 1280
  },
  {
    filename: "painted-goddess-face-three.jpg", thumbnail: "painted-goddess-face-three-thumb.jpg", original: "IMG-20231121-WA0046.jpg",
    group: "devotional", alt: "A painted goddess face on a round blue and red plaque with a bright flower-shaped border.", title: "Painted goddess face · teal", width: 588, height: 1280
  },
  {
    filename: "painted-folk-art-round.jpg", thumbnail: "painted-folk-art-round-thumb.jpg", original: "IMG-20231122-WA0024.jpg",
    group: "devotional", alt: "A round blue and red folk-art plaque with a painted face at its center and petal motifs around the edge.", title: "Round painted folk-art plaque", width: 588, height: 882
  },
  {
    filename: "sketches-and-art-collage.jpg", thumbnail: "sketches-and-art-collage-thumb.jpg", original: "PhotoGrid_1_20230201154811.jpg",
    group: "paper", alt: "A square collage of children's drawings, colorful paper shapes, a tree, and small art projects.", title: "Sketches and art collage", width: 1053, height: 1053
  },
  {
    filename: "mirror-center-ornaments.jpg", thumbnail: "mirror-center-ornaments-thumb.jpg", original: "WhatsApp Image 2026-10-27 at 1.03.14 PM.jpeg",
    group: "keepsakes", alt: "A group of small circular handmade ornaments with reflective centers and bright beaded rims.", title: "Mirror-center ornaments", width: 1080, height: 1329
  },
  {
    filename: "couple-photo-frame.jpg", thumbnail: "couple-photo-frame-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.03 AM (1).jpeg",
    group: "keepsakes", alt: "A round turquoise photo frame decorated with layered magenta and yellow petals, mirror accents, and a small photograph of two people at its center.", title: "Turquoise keepsake photo frame", width: 1200, height: 1200
  },
  {
    filename: "blue-petal-mirrorwork-frame.jpg", thumbnail: "blue-petal-mirrorwork-frame-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.03 AM.jpeg",
    group: "decor", alt: "A large round blue decorative frame with concentric red, pink, and orange petal motifs and a pale circular center.", title: "Blue petal mirrorwork frame", width: 1507, height: 1600
  },
  {
    filename: "embracing-couple-art-frame.jpg", thumbnail: "embracing-couple-art-frame-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.04 AM.jpeg",
    group: "keepsakes", alt: "A circular blue and green handmade frame with pink heart shapes around an illustration of an embracing couple.", title: "Embracing couple art frame", width: 720, height: 720
  },
  {
    filename: "geometric-mirrorwork-plaque.jpg", thumbnail: "geometric-mirrorwork-plaque-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.05 AM (1).jpeg",
    group: "decor", alt: "A square dark plaque with a layered geometric design in orange, white, and gold, accented with small reflective pieces.", title: "Geometric mirrorwork plaque", width: 720, height: 900
  },
  {
    filename: "turquoise-mirrorwork-mandala.jpg", thumbnail: "turquoise-mirrorwork-mandala-thumb.jpg", original: "WhatsApp Image 2026-11-04 at 12.00.07 AM (1).jpeg",
    group: "decor", alt: "A close view of a turquoise, yellow, and blue circular mandala with raised petals and mirrored accents.", title: "Turquoise mirrorwork mandala", width: 1200, height: 1281
  }
];

