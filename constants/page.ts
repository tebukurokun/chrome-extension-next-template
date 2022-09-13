const Pages = () => {
  const preffix = process.env.NODE_ENV === "development" ? "" : "./dist/";
  const suffix = process.env.NODE_ENV === "development" ? "" : ".html";
  const data = {
    index: `${preffix}index${suffix}`,
    about: `${preffix}about${suffix}`,
  };
  return data;
};

export default Pages;
