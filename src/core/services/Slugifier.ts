export default class Slugifier {
  private constructor() {}

  static slugify(input: string): string {
    if (!input) return "";

    let str = input.normalize("NFKD").replace(/\p{Diacritic}/gu, "");

    const replacements: Record<string, string> = {
      æ: "ae",
      Æ: "ae",
      œ: "oe",
      Œ: "oe",
      ß: "ss",
      þ: "th",
      Þ: "th",
      "&": " and ",
      "@": " at ",
      "+": " plus ",
      "€": " euro ",
      $: " dollar ",
      "£": " pound ",
      "°": " degree ",
    };

    str = str.replace(
      new RegExp(
        Object.keys(replacements).map(this.escapeRegExp).join("|"),
        "g"
      ),
      (m) => replacements[m] ?? m
    );

    str = str
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, " ")
      .replace(/[^\P{C}\t\r\n ]/gu, " ");

    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]+/g, "_");
    str = str.replace(/^-+|-+$/g, "").replace(/-+/g, "_");

    return str;
  }

  private static escapeRegExp(s: string): string {
    return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
}
