export default function auth({ next }) {
  if (localStorage.getItem("token")) {
    next();
  } else {
    next("login");
  }
}
