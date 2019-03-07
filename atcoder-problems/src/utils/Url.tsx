const BASE_URL = "https://atcoder.jp";

export const formatContestUrl = (contest: string) =>
  `https://atcoder.jp/contests/${contest}`;

export const formatSubmissionUrl = (id: number, contest: string) =>
  `${formatContestUrl(contest)}/submissions/${id}`;

export const formatProblemUrl = (problem: string, contest: string) =>
  `${formatContestUrl(contest)}/tasks/${problem}`;
