import { getDate, getDateSuffix, getMonth, getYear } from "./date";

const date = new Date();

describe("getYear()", () => {
  test("given current day - it should return current year", () => {
    const currentYear = getYear(date);

    expect(currentYear).toEqual(date.getFullYear().toString());
  });
});

describe("getMonth()", () => {
  test("go through months in year - it should return expected abbreviation", () => {
    let beginningOfYearDate = new Date(new Date().getFullYear(), 0, 1);
    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // iterate through month and see each months are returned as expected
    for (const MONTH of MONTHS) {
      expect(getMonth(beginningOfYearDate)).toEqual(MONTH);
      // increment month
      beginningOfYearDate.setMonth(beginningOfYearDate.getMonth() + 1);
    }
  });
});

describe("getDate()", () => {
  test("given current day - it should return current year", () => {
    const expectedDay = date.getDate().toString();
    const expectedDayWithSuffix = `${expectedDay}${getDateSuffix(expectedDay)}`;

    expect(getDate(date)).toEqual(expectedDayWithSuffix);
  });
});
