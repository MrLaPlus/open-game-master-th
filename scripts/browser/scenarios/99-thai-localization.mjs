// Thai remains a reader preference; translated labels never become IDs.
import { check, eventually, settle, axeViolations } from "../lib.mjs";

const scenario = {
  name: "thai-localization",
  viewports: ["desktop", "phone"],
  async run(t) {
    const { page, root, ids } = t;
    await t.open("/");
    await eventually(() => page.getByRole("button", { name: "Account", exact: true }).count(), { label: "account menu" });
    await page.getByRole("button", { name: "Account", exact: true }).click();
    await t.shot("language-default");
    const thai = page.getByRole("menuitemradio", { name: "ไทย", exact: true });
    await thai.focus();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Escape");
    await eventually(() => page.getByRole("button", { name: /เปิดตำนานบทใหม่/ }).count(), { label: "Thai main menu" });
    check(await page.evaluate(() => document.documentElement.lang === "th"), "document language is Thai");
    await t.shot("thai-home");
    await t.reload();
    await eventually(() => page.getByRole("button", { name: /เปิดตำนานบทใหม่/ }).count(), { label: "reader language survives reload" });
    await page.getByRole("button", { name: /เปิดตำนานบทใหม่/ }).click();
    await eventually(() => page.locator(`${root}#cc-title`).count(), { label: "campaign wizard" });
    await page.locator(`${root}#cc-title`).fill("เสียงระฆังแห่งป่าหมอก");
    check(await page.locator(`${root}#cc-title`).inputValue() === "เสียงระฆังแห่งป่าหมอก", "Thai campaign title can be typed");
    await t.shot("thai-creator");
    await page.keyboard.press("Escape");
    await settle(page);
    // The catalog's translation changes only its matching and display names.
    const query = await t.api.get(`${t.base}/api/content/spells?q=${encodeURIComponent("ลูกไฟ")}&mechanics=1`);
    check(query.ok(), "Thai content query answered");
    const rows = (await query.json()).results;
    check(rows.some((entry) => entry.name === "Fireball"), "Thai search returns canonical Fireball");
    check(!rows.some((entry) => entry.name === "ลูกไฟ"), "translated name never replaces the canonical record");
    const violations = await axeViolations(page, t.app ? ".game-root" : "body");
    check(!violations.length, `Thai home accessibility: ${JSON.stringify(violations)}`);
    // Read a real spell tile and its Thai summary without changing a sheet.
    await t.open(`/characters/${ids.lifeCleric}/edit`);
    const active = `${root}section[data-active]`;
    const spells = page.locator(`${active} [data-summary-edit="spells-gear"]`).locator("visible=true");
    await eventually(() => spells.count(), { timeoutMs: 30_000, label: "spell editor summary" });
    await t.tap(spells.first());
    const find = page.getByRole("textbox", { name: "ค้นหาเวท", exact: true }).locator("visible=true").first();
    await eventually(() => find.count(), { timeoutMs: 30_000, label: "Thai spell search" });
    await find.fill("สัมผัสมนตรา");
    const tile = page.locator(`${active} li[data-spell="Detect Magic"]`).first();
    await eventually(() => tile.isVisible(), { label: "Thai search finds canonical Detect Magic tile" });
    check((await tile.textContent()).includes("สัมผัสมนตรา (Detect Magic)"), "spell tile has bilingual display name");
    await tile.locator('button[aria-label^="What is"]').click();
    const details = page.getByRole("dialog");
    await eventually(() => details.getByText("คำอธิบายย่อสำหรับผู้เล่น", { exact: true }).count(), { label: "Thai spell explanation" });
    check((await details.textContent()).includes("รับรู้เวทมนตร์"), "Thai explanation is visible above original English rules");
    await t.shot("thai-spell-details");
    await page.keyboard.press("Escape");
    await t.open("/");
    await page.getByRole("button", { name: "บัญชีผู้ใช้", exact: true }).click();
    await page.getByRole("menuitemradio", { name: "English", exact: true }).click();
    await page.keyboard.press("Escape");
    await eventually(() => page.getByRole("button", { name: /New campaign/ }).count(), { label: "switch back to English" });
    check(await page.evaluate(() => document.documentElement.lang === "en"), "document language restored to English");
    check(!t.fails.length, t.fails.join("\n"));
  },
};

export default scenario;
