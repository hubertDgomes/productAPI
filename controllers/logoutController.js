const logoutController = (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      return res.json("Unable to logout");
    }
    res.json("Logout Succesfully.");
  });
};

export default logoutController