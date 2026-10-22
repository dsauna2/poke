import fs from "node:fs";
import path from "node:path";

// Gallery photos are public/imNNNN.jpg; ids are the four digits, so gaps in
// the numbering (a removed photo) never produce a broken tile.
export function getPhotoIds() {
  return fs
    .readdirSync(path.join(process.cwd(), "public"))
    .map((f) => f.match(/^im(\d{4})\.jpg$/)?.[1])
    .filter(Boolean)
    .sort();
}

// Which room each photo shows, by photo number. A photo missing from every
// range falls under "More" so new uploads still appear in the gallery.
const ROOM_RANGES = [
  ["Coco room", [[1, 10]]],
  ["Game room", [[11, 19]]],
  ["Frozen room", [[20, 24]]],
  ["Pool and patio", [[25, 29], [60, 61]]],
  ["Kitchen and dining", [[32, 36], [62, 63], [65, 65]]],
  ["Living areas", [[31, 31], [37, 39], [43, 43], [46, 46], [48, 49], [64, 64], [67, 67]]],
  ["Bedrooms", [[40, 42], [44, 45], [47, 47], [53, 54], [57, 58], [66, 66]]],
  ["Bathrooms", [[50, 52], [55, 56], [59, 59]]],
  ["Outside", [[30, 30], [68, 68]]],
];

function roomFor(n) {
  const hit = ROOM_RANGES.find(([, ranges]) =>
    ranges.some(([a, b]) => n >= a && n <= b)
  );
  return hit ? hit[0] : "More";
}

export function getPhotos() {
  return getPhotoIds().map((id) => ({ id, room: roomFor(Number(id)) }));
}

// Room names in the order above, with how many photos each holds.
export function getRooms(photos) {
  const names = [...ROOM_RANGES.map(([name]) => name), "More"];
  return names
    .map((name) => [name, photos.filter((p) => p.room === name).length])
    .filter(([, count]) => count > 0);
}
