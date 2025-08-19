export default function handler(req, res) {
  const gitVars = Object.keys(process.env)
    .filter(key => key.startsWith("VERCEL_"))
    .reduce((obj, key) => {
      obj[key] = process.env[key];
      return obj;
    }, {});
  
  res.json({
    git_metadata: gitVars,
    commit_message: process.env.VERCEL_GIT_COMMIT_MESSAGE,
    branch: process.env.VERCEL_GIT_COMMIT_REF,
    author: process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME
  });
}
