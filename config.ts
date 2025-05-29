export interface RouteConfig {
  /**
   * Route mapping configuration object.
   */
  routes: Record<string, string>;
  /**
   * Cron schedule configuration object.
   */
  schedule: string | Deno.CronSchedule;
}

/**
 * The convention is to use brownie ingredients as paths.
 */
export const config: RouteConfig = {
  routes: {
    cocoa:
      "https://github-stats-gules-delta.vercel.app/api?username=ItziarDiazHerranz&include_all_commits=true&count_private=true&show_icons=true&theme=chartreuse-dark",
    vanilla:
      "https://github-readme-streak-stats.herokuapp.com/?user=ItziarDiazHerranz&theme=chartreuse-dark&hide_border=false",
  },
  schedule: "*/20 * * * *",
};
