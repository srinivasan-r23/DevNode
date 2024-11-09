const adminAuth = (req, res, next) => {
  console.log("/admin auth being checked");

  const token = "sdvdsvss";
  const isAdminAuth = token === "sdvdsvss";
  if (!isAdminAuth) res.status(401).send("Not Authorized");
  else next();
};

module.exports = {
    adminAuth
}