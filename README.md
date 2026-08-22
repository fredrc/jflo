# Jesus For Life Outreach

Simple static website for **Jesus For Life Outreach (JEFLO)** in Busikiri, Wakiso District, Uganda.

Open `index.html` in a browser. No server is required.

Facebook: [Jesus For Life Outreach](https://www.facebook.com/JesusForLifeOutreach)

When the domain is pointed at GitHub Pages, these same files can be hosted as the public site.

## Adding a new page from the home grid

The **More from JEFLO** section on `index.html` is a row of equal tiles. Photos without a page yet are placeholders (same size and caption bar). When a new page exists:

1. Add the new HTML file (copy `college.html` as a starting point).
2. In the `.tiles` grid, change that photo’s `<div class="tile">` to `<a class="tile" href="your-page.html">`.
3. Set the caption to `Read more — Title`.
4. Keep `aspect-ratio: 16 / 9` and `object-fit: cover` so the tile still matches the others.
5. Add a nav link in the header if it should also appear in the menu.
