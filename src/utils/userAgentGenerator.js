import UserAgent from "user-agents";

export const userAgentGenerator = () => {
  const userAgent = new UserAgent();
  return userAgent.toString();
};
