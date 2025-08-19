export default function handler(req, res) {
  // Simulate vulnerable processing of git metadata
  const commitMessage = process.env.VERCEL_GIT_COMMIT_MESSAGE;
  const author = process.env.VERCEL_GIT_COMMIT_AUTHOR_NAME;
  
  res.json({
    message: "Processing git metadata",
    commit_message: commitMessage,
    author: author,
    note: "This demonstrates git metadata access in serverless functions"
  });
}
